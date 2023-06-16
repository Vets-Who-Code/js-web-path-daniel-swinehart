import Header from '../components/Header';
import FooterFlex from '../components/FooterFlex';

export default function Projects() {
    
  return (
    <>
    <main className="page-content flex-container project-page">
        <div className="grid-container grid-container--8x5 grid-container--12x4 project-pg-hero">
            <Header />
            {/*Projects Summary Section*/}
            <section className="grid-item grid-item-project grid-item-project-1">
                <div className="project-img-container-1">
                </div>
                <h3 className="project-heading">Expense Tracker</h3>
                <p className="project-summary">The Expense Tracker web application is a powerful tool designed to help users track their spending and generate insightful reports. Developed using HTML, CSS, and PHP, this application provides an intuitive interface for users to enter and categorize their expenses, facilitating efficient financial management.</p>
            </section>
            <section className="grid-item grid-item-project grid-item-project-2">
                <div className="project-img-container-2">
                </div>
                <h3 className="project-heading">Business Coaching</h3>
                <p className="project-summary">I offer entrepreneurs a personalized small business coaching service in leadership, management, team building, vision casting, and communication. My goal is to empower them to achieve their goals, navigate challenges, and build thriving enterprises in today's competitive market.</p>
            </section>
        </div>
        <section className="page-bottom-banner">
            <p className="text-summary text-align-center">My mission is to deliver high-quality websites that exceed expectations. I am dedicated to creating visually stunning and user-friendly experiences through innovative design and cutting-edge technologies. In addition, offering entrepreneurs a personalized small business coaching service in leadership, management, team building, vision casting, and communication.</p>
        </section>
        {/*Footer section*/}
        <FooterFlex />
    </main>
    </>
  );
};