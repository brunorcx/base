import axios from "axios";

const baseUrl = process.env.NEXT_STATIC_BASE_URL || "http://localhost:3030";

function PostProduto(url, data) {
  console.log("ENTROU NO POST");
  console.log(data);
  axios
    .post(baseUrl + url, data)
    .then((resposta) => console.log("Produto Enviado para o Back|" + resposta.statusText))
    .catch((err) => {
      //Apagar duplicado possivelmente
      console.error(err);
    });
}
async function GetProduto(url) {
  try {
    let response = await axios.get(baseUrl + url);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}

export { PostProduto, GetProduto };
