import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="page-content grid-container grid-container--8x4 grid-container--12x5 home-pg-bg">
      <header className="page-header">
        <nav className="nav-bar">
          <div className="logo-container">
            <a href="index.html">
              <Image src="danielLogo.svg" alt="Site Logo" width={30} height={30} />
            </a>
          </div>
          <div className="mobile-menu-container">
            <Image src="menu-mobile.svg" alt="Menu" width={40} height={30} />
            <div className="nav-btn-container">
              <a href="about.html" className="nav-btn-container__link about-page">About</a>
              <a href="projects.html" className="nav-btn-container__link project-page">Projects</a>
              <a href="contact.html" className="nav-btn-container__link contact-page">Contact</a>
            </div>
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
      {/*About Me Summary Section*/}
      <section className="grid-item index-about-me">
        <h1 className="main-heading">Hi there! My name is Daniel.</h1>
        <p className="text-summary">Web development is where my passions for problem-solving and creativity intersect. I'm fascinated by the constant evolution of technology and web development, and I'm constantly challenging myself to learn new techniques and tools.</p>
        <div className="twitter-feed">
          <a className="twitter-timeline" data-lang="en" data-theme="light" href="https://twitter.com/ThePracticalDev?ref_src=twsrc%5Etfw">Tweets by ThePracticalDev</a> <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </section>
      {/*Footer section*/}
      <footer className="grid-item grid-footer">
        <div className="footer-content">
          <img className="footer-logo"src="/images/danielLogo.svg"/>
          <p><small>Copyright &copy 2023 Daniel Swinehart</small></p>
        </div>
      </footer>
    </main> 
  );
};
