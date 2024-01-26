import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com',
            icon: <Facebook size={20} />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com',
            icon: <Linkedin size={20} />
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com',
            icon: <Instagram size={20} />
        }
    ];

    return (
        <footer className="bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="text-3xl text-black mx-auto py-10 text-center">
                Maison Anaé
            </div>
            <div className="mx-auto py-10">
                <p className="text-black font-medium uppercase mb-4">Footer Section Titles</p>
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
                <div className="flex flex-row justify-between items-center">
                    {socialLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className="text-xl mx-2 hover:text-black transition"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;