import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="rodriguesdev.us.auth0.com"
      clientId="E392V2S2c0cJCfjKDLnDOYgwLcXqbAGF"
      redirectUri={window.location.origin}
      audience="https://authBack/api"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
