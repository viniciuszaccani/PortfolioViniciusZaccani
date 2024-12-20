import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import "./Header.css";
import Logo from '../assets/Logo.jpg';

var img = Logo
function Header() {

  const [isChanged, setIsChanged] = useState(false);


  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const handleClick = () => {

    setIsChanged(!isChanged);
    
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se o clique for fora do ícone de menu e do menu
      if (menuRef.current && !menuRef.current.contains(event.target) && !iconRef.current.contains(event.target)) {

        setIsChanged(false); // Reverte o ícone de volta para a posição original
      }
    };

    // Adiciona o evento de clique
    document.addEventListener('mousedown', handleClickOutside);


    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    
  return (
    <div>
    <header className="container">
      <div className="container-logo">
        <img src={Logo} alt=" Capivara com chapéu de mago, imagem gerada por IA"/>
        
        <span>Vinicius Zaccani</span>
        
        </div>

      <div className={`burger-btn ${isChanged ? 'change' : ''}`} onClick={handleClick}  ref={iconRef}>
        <div className={`bar1 ${isChanged ? 'change' : ''}`}></div>
        <div className={`bar2 ${isChanged ? 'change' : ''}`}></div>
        <div className={`bar3 ${isChanged ? 'change' : ''}`}></div>
      </div>




      <div className={`menu ${isChanged ? 'open' : ''}`} ref={menuRef}>
        <ul>
          <li>
            <NavLink to={"/home"} className={({ isActive }) => (isActive ? "selected" : "")} onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleClick}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleClick}>
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleClick}>
              Contato
            </NavLink>
          </li>
          
        </ul>
      </div>




      <nav className="nav-web">
        <ul className="container-nav">
          <li>
            <NavLink to={"/home"} className={({ isActive }) => (isActive ? "selected" : "")}>
              Home
            </NavLink>
          </li>      
          <li>
            <NavLink to={"/about"} className={({ isActive }) => isActive ? "selected" : ""}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleClick}>
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleClick}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;
