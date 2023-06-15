import { Inter } from 'next/font/google';
import Header from '../components/Header';
import FooterFlex from '../components/FooterFlex';


const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
    
  return (
    <>
    <main className="page-content flex-container">
        <div className="grid-container grid-container--8x3 grid-container--12x4 contact-pg-hero">
            <Header />
            {/*Contact Hero/Social Media Section*/}
            <div className="grid-item contact-heading-container">
                <h1 className="contact-heading">CONTACT ME</h1>
            </div>
            <div className="grid-item social-links-container">
                <a href="#">
                    <img className="social-link-img" src="../public/github-icon.svg"/>
                </a>
                <a href="#">
                    <img className="social-link-img" src="../public/linkedIn-icon.png"/>
                </a>
                <a href="#">
                    <img className="social-link-img" src="../public/twitter-icon.svg"/>
                </a>
                <a href="#">
                    <img className="social-link-img" src="../public/instagram-icon.svg"/>
                </a>
                <a href="#">
                    <img className="social-link-img" src="../public/facebook-icon.png"/>
                </a>
            </div>
        </div>
        {/*Bottom Contact/Email form/Map*/}
        <section className="grid-container grid-container--8x4 grid-container--12x4">
            <div className="grid-item email-form-container">
                <h3 className="email-font">Connect via Email</h3>
                <form className="email-form">
                    <label className="email-font" htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="John Doe" required/>
                    <label className="email-font" htmlFor="email-address">Email</label>
                    <input type="email" name="email-address" id="email-address" placeholder="name@domain.com" required/>
                    <label className="email-font" htmlFor="subject">Subject</label>
                    <select name="subject" id="subject" required>
                        <option value="work" selected>Work Inquiry</option>
                        <option value="social">Social Networking</option>
                        <option value="other">Other</option>
                    </select>
                    <label className="email-font" htmlFor="message">Message</label>
                    <input type="textarea" name="message" id="message" placeholder="Your message here" required/>
                    <button name="submit">Submit</button>
                </form>
            </div>
            <div className="grid-item location-map div--bg-grey">
            </div>
            <address className="grid-item contact-info">
                <div className="contact-detail">
                    <img className="contact-icons" src="../public/location-dot-solid.svg"/>
                    <p>146 Blvd Moulay Abdellah Cherif<br/>Casablanca, Morocco 20250</p>
                </div>
                <div className="contact-detail">
                    <img className="contact-icons" src="../public/envelope-solid.svg"/>
                    <p>d4570s@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img className="contact-icons" src="../public/phone-solid.svg"/>
                    <p>+212 06 93 62 68 12</p>
                </div>
            </address>
        </section>
        {/*Footer section*/}
        <FooterFlex />
    </main>
    </>
  );
};