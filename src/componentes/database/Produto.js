import axios from "axios";
import { useState } from "react";
// import fetch from "isomorphic-unfetch";
const fetch = require("node-fetch");

//Declarar constantes

const baseUrl = process.env.NEXT_STATIC_BASE_URL || "http://localhost:3030";

const produtoEnviado = {
  prodNome: String,
  prodValor: String,
  prodCategoria: String,
};

const styles = {
  idle: {
    backgroundColor: "white",
    color: "black",
  },
  ok: {
    backgroundColor: "green",
    color: "white",
  },
  error: {
    backgroundColor: "red",
    color: "white",
  },
};

function checkStatus(res) {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return res;
  } else {
    throw res.statusText;
  }
}

const Produto = (props) => {
  const [state, setState] = useState("idle");
  const [response, setResponse] = useState();
  const callUrlWithMethod = async (ev) => {
    try {
      ev.preventDefault();
      if (props.method === "POST") {
        console.log(props.body);
        console.log("BOOOODY ACIMA");
        /////////POST
        axios
          .post(baseUrl + props.url, props.body)
          .then(() => console.log("Produto Enviado para o Back"))
          .catch((err) => {
            //Apagar duplicado possivelmente
            console.error(err);
          });
      } else if (props.method === "GET") {
        ///////////////GET
        await fetch(baseUrl + props.url, { method: props.method })
          .then((res) => {
            if (res.ok) {
              setResponse(res.status === 204 ? "STATUS CODE: 204" : "Funcionou");
              setState("ok");
              return res.json();
            } else {
              throw res.statusText;
            }
          })
          .then((json) => setResponse(json[0].email));
      }

      // if (res.ok) {
      //   setState("ok");
      //   setResponse(res.status === 204 ? "STATUS CODE: 204" : (await res.json()).text);
      //   console.log(res);
      // } else {
      //   throw await res.text();
      // }
    } catch (err) {
      setState("error");
      setResponse(err.toString());
    }
  };

  //RETIRAR RETURN DEPOIS QUE O CRUD ESTIVER FUNCIONANDO
  //A idea é que chame a função, get, post, put e etc e não precise retornar um html
  return (
    <article>
      <h2>{props.heading}</h2>
      <pre>
        {props.method} {baseUrl}
        {props.url}
      </pre>
      <div>
        <textarea style={styles[state]} value={(state === "ok" && response) || ""} readOnly />
        {state === "error" && <p style={{ color: "red" }}>{response}</p>}
      </div>
      <div>
        <button onClick={callUrlWithMethod}>Fetch</button>
      </div>
    </article>
  );
};

export default Produto;
