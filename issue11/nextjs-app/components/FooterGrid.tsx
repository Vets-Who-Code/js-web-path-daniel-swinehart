import Image from 'next/image'

export default function FooterGrid() {

  return (
    <>
    <footer className="grid-item grid-footer">
        <div className="footer-content">
            <div className="footer-logo">
                <Image src="danielLogo.svg" alt="Site Logo" fill={true} />
            </div>
            <p><small>Copyright &copy; 2023 Daniel Swinehart</small></p>
        </div>
    </footer>
    </>
  );
};