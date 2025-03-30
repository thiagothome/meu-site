import React from 'react'
import { NavLink } from "react-router-dom";
import githubIcon from "../Img/github.svg";
import instagramIcon from "../Img/instagram.svg";
import linkedinIcon from "../Img/linkedin.svg";
import styles from "../Css/Header.module.css";

const Header = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li><NavLink to="" end >Início</NavLink></li>
          <li><NavLink to="/aboutme">Sobre</NavLink></li>
          <li><NavLink to="/works">Trabalhos</NavLink></li>
          <li><NavLink to="/contact">Contato</NavLink></li>
        </ul>
        <ul className={styles.socialIcons}>
          <a href="https://github.com/thiagothome" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className={styles.icon} />
          </a>
          <a href="https://instagram.com/thiagogomesrs" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/thiagothomers" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default Header