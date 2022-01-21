import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import React, { useState, useEffect } from "react";
import UserTable from "../componentes/UserTable";
import { useAuth0 } from "@auth0/auth0-react";
var axios = require("axios").default;

export interface UserProps {}

const Users: React.FC<UserProps> = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [createUser, setCreateUser] = useState(false); //Valor dentro da função é valor inicial da variável

  async function GetUserAuth(userID: string, token: string) {
    var options = {
      method: "GET",
      url: "https://rodriguesdev.us.auth0.com/api/v2/users/" + userID + "/roles",
      headers: { authorization: token },
    };

    axios
      .request(options)
      .then(function (response: any) {
        console.log(response.data);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }

  useEffect(() => {
    if (createUser) {
      // window.onscroll = null;
      document.documentElement.style.overflow = "hidden";
      // document.body.scroll = "no"; //Internet Explorer
    } else {
      document.documentElement.style.overflow = "auto";
      // document.body.scroll = "yes"; //Internet Explorer
    }
  }, [createUser]); // Apenas re-execute o efeito quando o count mudar
  return (
    <div>
      <Navbar />
      {isAuthenticated && <UserTable />}
      {console.log(user)}
      <Footer />
    </div>
  );
};

export default Users;
