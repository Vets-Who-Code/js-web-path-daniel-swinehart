export function TopNav() {
    return (
        <>
            <nav class="nav-bar">
                <div class="logo-container">
                    <a href="index.html">
                        <img class="nav-logo" src="images/danielLogo.svg"/>
                    </a>
                </div>
                <div class="mobile-menu-container">
                    <img class="mobile-menu" src="images/menu_mobile.svg"/>
                    <div class="nav-btn-container">
                        <a href="about.html" class="nav-btn-container__link about-page">About</a>
                        <a href="projects.html" class="nav-btn-container__link project-page">Projects</a>
                        <a href="contact.html" class="nav-btn-container__link contact-page">Contact</a>
                    </div>
                </div>
            </nav>
            <nav class="nav-bar-lg">
                <div class="logo-container">
                    <a href="index.html">
                        <img class="nav-logo-lg" src="images/danielLogoName.svg"/>
                    </a>
                </div>
                <div class="nav-btn-container">
                    <a href="about.html" class="nav-btn-container__link about-page">About</a>
                    <a href="projects.html" class="nav-btn-container__link project-page">Projects</a>
                    <a href="contact.html" class="nav-btn-container__link contact-page">Contact</a>
                </div>
            </nav>
        </>
    )
};