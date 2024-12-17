import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import "./Header.css";

function Header() {

  const [isChanged, setIsChanged] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const handleClick = () => {
    setIsChanged(!isChanged);
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se o clique for fora do ícone de menu e do menu
      if (menuRef.current && !menuRef.current.contains(event.target) && !iconRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsChanged(false); // Reverte o ícone de volta para a posição original
      }
    };

    // Adiciona o evento de clique
    document.addEventListener('mousedown', handleClickOutside);

    // Limpeza do event listener ao desmontar o componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    
  return (
    <div>
    <header className="container">
      <div className="container-logo">LOGO</div>

      <div className={`burger-btn ${isChanged ? 'change' : ''}`} onClick={handleClick}  ref={iconRef}>
        <div className={`bar1 ${isChanged ? 'change' : ''}`}></div>
        <div className={`bar2 ${isChanged ? 'change' : ''}`}></div>
        <div className={`bar3 ${isChanged ? 'change' : ''}`}></div>
      </div>




      <div className={`menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </div>
















      <nav className="nav-web">
        <ul className="container-nav">
          <li>
            <NavLink
              to={"/home"}
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Home
            </NavLink>
          </li>      
          <li>
            <NavLink
              to={"/sobre"}
              className={({ isActive }) => isActive ? "selected" : ""}
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;
