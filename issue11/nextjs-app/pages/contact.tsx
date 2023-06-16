import Header from '../components/Header';
import FooterFlex from '../components/FooterFlex';
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
    
  return (
    <>
    <main className="page-content flex-container contact-page">
        <div className="grid-container grid-container--8x3 grid-container--12x4 contact-pg-hero contact-page">
            <Header />
            {/*Contact Hero/Social Media Section*/}
            <div className="grid-item contact-heading-container">
                <h1 className="contact-heading">CONTACT ME</h1>
            </div>
            <div className="grid-item social-links-container">
                <Link className="social-icon-container" href="#">
                    <Image src="/github-icon.svg" alt="GitHub" fill={true} />
                </Link>
                <Link className="social-icon-container" href="#">
                    <Image src="/linkedIn-icon.png" alt="LinkedIn" fill={true} />
                </Link>
                <Link className="social-icon-container" href="#">
                    <Image src="/twitter-icon.svg" alt="Twitter" fill={true} />
                </Link>
                <Link className="social-icon-container" href="#">
                    <Image src="/instagram-icon.svg" alt="Instagram" fill={true} />
                </Link>
                <Link className="social-icon-container" href="#">
                    <Image src="/facebook-icon.png" alt="Facebook" fill={true} />
                </Link>
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
            <div className="grid-item location-map">
            </div>
        </section>
        {/*Footer section*/}
        <FooterFlex />
    </main>
    </>
  );
};