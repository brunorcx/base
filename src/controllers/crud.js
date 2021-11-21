import axios from "axios";

const baseUrl = process.env.NEXT_STATIC_BASE_URL || "http://localhost:3030";
const baseUrlOnline = process.env.NEXT_STATIC_BASE_URL || "http://107.20.30.175:3030";
async function PostProduto(url, data) {
  try {
    console.log("ENTROU NO POST");
    console.log(data);

    let response = await axios.post(baseUrl + url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
    let response = await axios.post(baseUrlOnline + url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
async function GetResposta(url) {
  try {
    let response = await axios.get(baseUrl + url);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
    let response = await axios.get(baseUrlOnline + url);
  }
}

export { PostProduto, GetResposta };
