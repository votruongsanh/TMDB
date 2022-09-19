import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";


const Header = () => { 
  return (
    <div className="Header">
      <div className="Header__container">
      <div className="Header__container__left">
        <Link to='/'>
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <div className="text">Movies</div>
        <div className="text">TV Shows</div>
        <div className="text">People</div>
        <div className="text">More</div>
      </div>
      <div className="Header__container__right">
        <div className="text">Login</div>
        <div className="text">Join TMDB</div>
      </div>
      </div>
    
    </div>
  );
};

export default Header;
