import { Component } from "react";
import "../styles/propaganda.css";
import { Link } from "react-router-dom";

export class Propaganda extends Component {
  render() {
    return (
      <div className="all">
        <div className="p1"></div>
        <div className="p2">
          <h2> Ofertas do Dia </h2>
          <img
            alt="lado 2"
            src="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/0ad00ac0-9bf1-4f4c-b164-63b66a3f258f___6dc7fcef0b6b8d93ffd880ef125088b7.jpg"
          ></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p3">
          <h2> Mais vendidos </h2>
          <img
            alt="lado 3"
            src="https://www.fastshop.com.br/wcsstore/FastShop/img/home/2021/09/23/intpro-_-260921-_-01-_-48hSmartTvs-_-ND-_-ND-_-Grupo-_-homedesk.jpg"
          ></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p4">
          <h2> Economize no almoço </h2>
          <img
            alt="lado 4"
            src="https://images-na.ssl-images-amazon.com/images/G/32/kindle/email/Julho_2021/New_Wave-PR/379x304._SY304_CB665344963_.jpg"
          ></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p5">
          <h2> Novos produtos </h2>
          <img
            alt="lado 5"
            src="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/8af058b6-1306-4b5b-afbf-099511559d5e___65152e05cb21ce1f64ba2674a29cc36c.jpg"
          ></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p6">
          <h2> Grandes descontos </h2>
          <img
            alt="lado 6"
            src="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/dc67f16c-5ee5-449b-a30b-38a6c32ccd28___3681655ea8adb442689e462b4e958909.gif"
          ></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p7">
          <h2> Bebidas por até R$50 </h2>
          <img
            alt="lado 7"
            src="https://d1kvbg99uxpcu.cloudfront.net/Custom/Content/Banners/24/24_banner637680782726862157.png"
          ></img>
          <Link to="/">Veja mais</Link>
        </div>
      </div>
    );
  }
}

export default Propaganda;
