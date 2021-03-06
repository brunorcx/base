import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Produtos" component={Produtos} />
        <Route path="/Produto" component={Produto} />
        {/* <Route path="/pagina2" component={Pagina2}> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
