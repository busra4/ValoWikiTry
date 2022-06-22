import React from "react";
import "./SideBar.css";
import { slide as Menu } from "react-burger-menu";

const SideBar = () => {


  return (
    <Menu>
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/agents">Agents</a>
    <a id="contact" className="menu-item" href="/weapons">Weapons</a>
    <a id="contact" className="menu-item" href="/maps">Maps</a>
    <a id="contact" className="menu-item" href="/spreys">Spreys</a>
  </Menu>
    
  );

  
};



export default SideBar;
