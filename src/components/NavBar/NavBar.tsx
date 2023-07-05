import React, {useContext} from 'react';
import Button from "../UI/Button/Button";
import './NavBar.css';
import {Link} from "react-router-dom";
import {privateRoutePath} from "../../router/privateRouteConfig";
import authContext from "../../context/AuthContext";

const NavBar = () => {
   const {logout} = useContext(authContext);

   return (
      <div className="navbar">
         <div className="container navbar__container">
            <Button onClick={logout} className="navbar__btn">
               Выйти
            </Button>
            <nav className="navbar__menu menu">
               <ul className="menu__list">
                  <li className="menu_item">
                     <Link className="menu__link" to={privateRoutePath.posts}>Посты</Link>
                  </li>
                  <li className="menu_item">
                     <Link className="menu__link" to={privateRoutePath.about}>О сайте</Link>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   );
};

export default NavBar;
