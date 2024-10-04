import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com',
            icon: <Facebook size={24} />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com',
            icon: <Linkedin size={24} />
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com',
            icon: <Instagram size={24} />
        }
    ];

    const footerSections = [
        {
            title: "Anaé's World",
            links: [
                { name: 'Be Circular', url: '/be-circular' },
                { name: 'Raw Materials', url: '/raw-materials' },
                { name: 'Certifications', url: '/certifications' },
            ]
        },
        {
            title: "Company",
            links: [
                { name: 'About Us', url: '/about-us' },
                { name: 'Main Objectives', url: '/main-objectives' },
                { name: 'Partners', url: '/partners' },
            ]
        },
        {
            title: "Support",
            links: [
                { name: 'Privacy Policy', url: '/privacy-policy' },
                { name: 'Terms of Use', url: '/terms-of-use' },
                { name: 'Contact Us', url: '/contact-us' },
            ]
        },
    ]

    return (
        <footer className="bg-primary px-4 sm:px-6 lg:px-8">
            <div className="mx-auto py-32 grid grid-rows-3 grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-5 gap-8 w-full justify-between">
                <div className="col-span-2 sm:col-span-3 md:col-span-2 text-3xl text-white flex flex-col items-start">
                    Maison Anaé
                    <p className="text-sm text-neutral-300 mt-2">Sustainable Parisian Fashion</p>
                    <div className="flex flex-row justify-between items-center gap-x-4 my-6">
                        {socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className="text-neutral-300 hover:bg-neutral-800 p-1 rounded-md transition"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                {footerSections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="w-fit flex flex-col gap-y-2">
                        <p className="w-max text-white font-medium uppercase mb-4">{section.title}</p>
                        {section.links.map((link, linkIndex) => (
                            <Link key={linkIndex} href={link.url} className="w-fit text-sm text-neutral-400 mb-2 hover:text-neutral-200 transition">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex flex-row text-sm justify-center items-center mx-auto py-10 border-t border-neutral-700 text-neutral-300">
                &copy; Groupe BNSB {currentYear}. All rights reserved.
            </div>
        </footer>
    );
}
 
export default Footer;