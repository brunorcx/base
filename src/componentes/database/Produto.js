import { stringify } from "querystring";
import { useState } from "react";
// import fetch from "isomorphic-unfetch";
const fetch = require("node-fetch");

//Declarar constantes

const baseUrl = process.env.NEXT_STATIC_BASE_URL || "http://localhost:3030";
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
