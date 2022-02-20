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
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D"
          ></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p3">
          <h2> Mais vendidos </h2>
          <img
            alt="lado 3"
            src="https://th.bing.com/th/id/R.cbee4d7f367388b085a8039d590585f7?rik=g0sh1o567WZ5lg&pid=ImgRaw&r=0"
          ></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p4">
          <h2> Economize já </h2>
          <img alt="lado 4" src="https://th.bing.com/th/id/OIP.u5jQohXZTJS8Y_RrA0D7XQHaEZ?pid=ImgDet&rs=1"></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p5">
          <h2> Novos produtos </h2>
          <img alt="lado 5" src="https://th.bing.com/th/id/OIP.cMCxvq-Ng-gJWEjg1Qt3XAHaE6?pid=ImgDet&rs=1"></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p6">
          <h2> Grandes descontos </h2>
          <img
            alt="lado 6"
            src="https://th.bing.com/th/id/R.24b06e3493410569882a7f157a24bef4?rik=LAqWz5hkJZUk3g&pid=ImgRaw&r=0"
          ></img>
          <Link to="/">Veja mais</Link>
        </div>
        <div className="p7">
          <h2> Pronto para rodar! </h2>
          <img alt="lado 7" src="https://media.giphy.com/media/8rFNEqQYRBEOlaONOj/giphy.gif"></img>
          <Link to="/">Veja mais</Link>
        </div>
      </div>
    );
  }
}

export default Propaganda;
