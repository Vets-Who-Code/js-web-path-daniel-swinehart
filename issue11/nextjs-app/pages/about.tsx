import { Inter } from 'next/font/google';
import Header from '../components/Header';
import FooterGrid from '../components/FooterGrid';
import Slideshow from '../components/Slideshow';


const inter = Inter({ subsets: ['latin'] })

export default function About() {
    
  return (
    <>
    <main className="page-content grid-container grid-container--8x4 grid-container--12x5 about-pg-bg">
        <Header />
        {/*About Me Section*/}
        <section className="grid-item grid-item-profile">
            <div className="profile-img-container div--bg-shape-round">
            </div>
        </section>
        <section className="grid-item grid-item-about">
            <p className="text-summary text-summary--sm">When I'm not coding, I enjoy indulging my passion for travel, experiencing new cultures, and exploring the great outdoors. There's nothing quite like the thrill of visiting a new place, immersing oneself in its culture, and discovering the hidden gems that make it unique. Whether it's hiking in the mountains, lounging on a beach, or strolling through a bustling city, I love to get out and explore everything that this world has to offer. Traveling has broadened my perspective and taught me valuable life lessons that I carry with me every day.
            <br />
            <br />    
            I am excited about working with new clients, and I am eager to collaborate with you to create stunning websites that represent your vision. Contact me today, and let's bring your ideas to life!</p>
            <Slideshow />
        </section>
        <FooterGrid />
    </main>
    </>
  );
};