import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../styles/home.css";
import {Navbar} from "./Navbar";
import {Sidebar} from "./Sidebar";

export class Home extends Component{
  render(){
    return (
     <div> 
       <Navbar></Navbar>
       <Sidebar></Sidebar>
     </div>
    )
  }
}

export default Home;