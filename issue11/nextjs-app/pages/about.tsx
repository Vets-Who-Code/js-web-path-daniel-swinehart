import { Inter } from 'next/font/google';
import Header from '../components/Header';
import FooterGrid from '../components/FooterGrid';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    //About.html slideshow function
    function showSlides() {
    let slides = document.querySelectorAll(".slideshow-slide") as NodeListOf<HTMLElement>;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
    };

    //About.html slideshow call
    let slideIndex = 0;
    showSlides();

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
            <div className="slideshow-container">
                <div className="slideshow-slide fade">
                    <img className="slide-img" src="images/slideshow/imgOne.jpg" />
                    <div className="slide-description">Fez, Morocco</div>
                </div>
                <div className="slideshow-slide fade">
                    <img className="slide-img" src="images/slideshow/imgTwo.jpg" />
                    <div className="slide-description">Meknes, Morocco</div>
                </div>
                <div className="slideshow-slide fade">
                    <img className="slide-img" src="images/slideshow/imgThree.jpg" />
                    <div className="slide-description">London, England</div>
                </div>
                <div className="slideshow-slide fade">
                    <img className="slide-img" src="images/slideshow/imgFour.jpg" />
                    <div className="slide-description">Costa Adeje, Tenerife</div>
                </div>
                <div className="slideshow-slide fade">
                    <img className="slide-img" src="images/slideshow/imgFive.jpg" />
                    <div className="slide-description">Malaga, Spain</div>
                </div>
                <div className="slideshow-slide fade">
                    <img className="slide-img" src="images/slideshow/imgSix.jpeg" />
                    <div className="slide-description">San Diego, USA</div>
                </div>
            </div>
        </section>
        <FooterGrid />
    </main>
    </>
  );
};