import React from "react";
import styles from "../../styles/Header.module.css";
import logo from "../../assest/img/logo.png"
import { Link,useLocation} from "react-router-dom";
import {useState,useEffect,useRef} from "react"
import SearchBar from "./SearchBar";
import SideBar from "../Header/SideBar";
import "../../App.css";
const Header = () => {


  const location = useLocation()
  const currentPage = useRef(location.pathname.slice(1))
  const [page, setPage] = useState(currentPage.current)

  useEffect(() => {
    if (location.pathname !== '/') {
      currentPage.current = location.pathname.slice(1)
    } else {
      currentPage.current = 'home'
    }
    setPage(currentPage.current)
  }, [location])
    
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark);
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header> 
      
      <div className={styles.brand}>
            <Link to="/">
            <img src={logo} alt="logo" />
            <h1>Valorant wiki</h1>
            </Link>
            </div>

      <button onClick={() => switchTheme()}>change theme</button>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

<div id="page-wrap">
  <h1></h1>
</div>
     
    </header>
    
  );

  
};



export default Header;


/* 

            <nav>
              <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to='/weapons' className={page === "weapons" ? styles.activeNav : styles.navLink}>
              weapons
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/agents" className={page === "agents" ? styles.activeNav : styles.navLink}>
              agents
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/maps" className={page === "maps" ? styles.activeNav : styles.navLink}>
              maps
            </Link>
          </li> 
       
        </ul>
      </nav>*/
