const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-anae-grey px-4 sm:px-6 lg:px-8">
            <div className="text-3xl text-black mx-auto py-10 text-center">
                Maison Anaé
            </div>
            <div className="mx-auto py-10">
                <p className="text-black uppercase mb-4">Footer Section Titles</p>
                <ul>
                    <li>
                        <a href="#" className="text-sm uppercase text-neutral-500 mb-2 hover:text-black transition">
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