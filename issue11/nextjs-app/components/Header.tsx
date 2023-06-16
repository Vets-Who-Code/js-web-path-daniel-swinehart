import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

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
          <Link className="home-logo-link" href="/">
            <Image src="danielLogoRnd.svg" alt="Site Logo" fill={true} />
          </Link>
        </div>
        <div className="mobile-menu-container">
          <div className="mobile-menu">
            <Image src="menuMobile.svg" alt="Menu" fill={true} onClick={toggleMenu} />
          </div>
          {dropDown === "display" && (
            <div className="nav-btn-container">
            <Link href="/about" className="nav-btn-container__link about-page">About</Link>
            <Link href="projects.html" className="nav-btn-container__link project-page">Projects</Link>
            <Link href="contact.html" className="nav-btn-container__link contact-page">Contact</Link>
          </div>
          )}
        </div>
      </nav>
      <nav className="nav-bar-lg">
        <div className="logo-container">
          <Link href="/">
            <Image src="danielLogoRnd.svg" alt="Site Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="nav-btn-container">
          <Link href="/about" className="nav-btn-container__link about-page">About</Link>
          <Link href="/projects" className="nav-btn-container__link project-page">Projects</Link>
          <Link href="/contact" className="nav-btn-container__link contact-page">Contact</Link>
        </div>
      </nav>
    </header>
  );
};