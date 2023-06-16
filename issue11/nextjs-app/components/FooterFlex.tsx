import Image from 'next/image'

export default function FooterFlex() {

  return (
    <>
    <footer className="flex-container flex-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Image src="danielLogoRnd.svg" alt="Site Logo" fill={true} />
                </div>
                <p><small>&copy; 2023 Daniel Swinehart</small></p>
            </div>
        </footer>
    </>
  );
};