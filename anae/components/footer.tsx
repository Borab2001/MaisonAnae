const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black">
            <div className="mx-auto py-10 text-center">
                Maison Anaé
            </div>
            <div className="mx-auto py-10">
                Footer Sections
            </div>
            <div className="flex flex-row justify-between items-center mx-auto py-10 border-t border-neutral-700">
                &copy; {currentYear} Maison Anaé
                <div>
                    Socials here
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;