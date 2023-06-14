import { Inter } from 'next/font/google';
import Header from '../components/Header';
import FooterGrid from '../components/FooterGrid';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className="page-content grid-container grid-container--8x4 grid-container--12x5 home-pg-bg">
      <Header />
      {/*About Me Summary Section*/}
      <section className="grid-item index-about-me">
        <h1 className="main-heading">Hi there! My name is Daniel.</h1>
        <p className="text-summary">Web development is where my passions for problem-solving and creativity intersect. I'm fascinated by the constant evolution of technology and web development, and I'm constantly challenging myself to learn new techniques and tools.</p>
        <div className="twitter-feed">
          <a className="twitter-timeline" data-lang="en" data-theme="light" href="https://twitter.com/ThePracticalDev?ref_src=twsrc%5Etfw">Tweets by ThePracticalDev</a> <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </section>
      <FooterGrid />
    </main> 
    </>
  );
};
