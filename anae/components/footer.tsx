const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black px-4 sm:px-6 lg:px-8">
            <div className="text-3xl text-white mx-auto py-10 text-center">
                Maison Anaé
            </div>
            <div className="mx-auto py-10">
                <p className="text-white uppercase mb-4">Footer Section Titles</p>
                <ul>
                    <li>
                        <a href="#" className="text-sm text-neutral-500 mb-2 hover:text-white transition">
                            Footer Section list
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-row justify-between items-center mx-auto py-10 border-t border-neutral-700 text-neutral-500">
                &copy; {currentYear} Maison Anaé
                <div>
                    Socials here
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;