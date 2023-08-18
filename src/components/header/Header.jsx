import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./vite.svg" alt="Vite logo" />
      </div>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <a href="#" target="_blank">
              Inicio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
