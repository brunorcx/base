import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import React, { useState, useEffect } from "react";
import UserTable from "../componentes/UserTable";

export interface UserProps {}

const Users: React.FC<UserProps> = () => {
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
      <UserTable />
      <Footer />
    </div>
  );
};

export default Users;
