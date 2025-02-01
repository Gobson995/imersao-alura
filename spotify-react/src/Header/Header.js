import React from "react";
import './Header.css';
import smallRight from './spotify-react/src/assets/icons/small-right.png';
import smallLeft from './spotify-react/src/assets/icons/small-left.png';
import search  from './spotify-react/src/assets/icons/search.png';

const Header = () => {
  return(
    <nav className="header-navigation">
    <div className="navigation">
      <div className="arrows">
        <button className="arrow-left">
          <img
            src={smallLeft}
            alt="Seta esquerda"/>
        </button>
        <button className="arrow-right">
          <img
            src={smallRight}
            alt="Seta direita"/>
        </button>
      </div>
      <div className="header-search">
        <img src={search} alt=""/>
        <input
          id="search-input"
          type="text"
          maxlength="800"
          placeholder="O que você quer ouvir?"/>
      </div>
      <div className="header-login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </div>
  </nav>
  )
};

export default Header;