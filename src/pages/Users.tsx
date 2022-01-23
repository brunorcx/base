import Navbar from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import React, { useState, useEffect } from "react";
import UserTable from "../componentes/UserTable";
import { useAuth0 } from "@auth0/auth0-react";

export interface UserProps {}

const Users: React.FC<UserProps> = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [createUser, setCreateUser] = useState(false); //Valor dentro da função é valor inicial da variável

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
      {user ? console.log(user.sub) : false}
      <Footer />
    </div>
  );
};

export default Users;
