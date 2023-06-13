import { useState } from 'react';
import Image from 'next/image'

export default function Header() {
  const [dropDown, setDropDown] = useState("hide");
  
  function toggleMenu() {
    if(dropDown === "hide") {
      setDropDown("display");
    } else {
      setDropDown("hide");
    }
  };

  return (
      <header className="page-header">
      <nav className="nav-bar">
        <div className="logo-container">
          <div className="nav-logo">
            <a href="index.html">
              <Image src="danielLogo.svg" alt="Site Logo" fill={true} />
            </a>
          </div>
        </div>
        <div className="mobile-menu-container">
          <div className="mobile-menu">
            <Image src="menuMobile.svg" alt="Menu" fill={true} onClick={toggleMenu} />
          </div>
          {dropDown === "display" && (
            <div className="nav-btn-container">
            <a href="about.html" className="nav-btn-container__link about-page">About</a>
            <a href="projects.html" className="nav-btn-container__link project-page">Projects</a>
            <a href="contact.html" className="nav-btn-container__link contact-page">Contact</a>
          </div>
          )}
        </div>
      </nav>
      <nav className="nav-bar-lg">
        <div className="logo-container">
          <a href="index.html">
            <Image src="danielLogo.svg" alt="Site Logo" width={100} height={100} />
          </a>
        </div>
        <div className="nav-btn-container">
          <a href="about.html" className="nav-btn-container__link about-page">About</a>
          <a href="projects.html" className="nav-btn-container__link project-page">Projects</a>
          <a href="contact.html" className="nav-btn-container__link contact-page">Contact</a>
        </div>
      </nav>
    </header>
  );
};