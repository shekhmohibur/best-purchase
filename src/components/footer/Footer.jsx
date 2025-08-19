const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-stone-100 text-base-content p-4 md:fixed bottom-0 left-0">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Best Purchase</p>
            </aside>
        </footer>
    );
};
export default Footer;