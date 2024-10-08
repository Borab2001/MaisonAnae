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

    const footerSections = [
        {
            title: "Anaé's World",
            links: [
                { name: 'Be Circular', url: '/be-circular' },
                { name: 'Certifications', url: '/certifications' },
                { name: 'Raw Materials', url: '/raw-materials' },
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
                { name: 'Contact Us', url: '/contact-us' },
                { name: 'Privacy Policy', url: '/privacy-policy' },
                { name: 'Terms of Use', url: '/terms-of-use' },
            ]
        },
    ]

    return (
        <footer className="bg-primary px-4 sm:px-6 lg:px-16">
            <div className="mx-auto pt-24 pb-16 flex flex-col md:flex-row items-start justify-between w-full gap-y-16">
                <div className="text-3xl text-white flex flex-col items-start">
                    Maison Anaé
                    <p className="text-sm text-neutral-300 mt-2">Sustainable Parisian Fashion</p>
                    <div className="flex flex-row justify-between items-center gap-x-4 mt-6">
                        {socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className="text-neutral-300 bg-neutral-800 hover:bg-primary-foreground hover:text-primary p-2 rounded-md transition"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="grid grid-rows-2 sm:grid-rows-1 grid-cols-2 sm:grid-cols-3 gap-x-24 md:gap-x-16 lg:gap-x-24 gap-y-10 md:flex md:flex-row">
                    {footerSections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="w-fit flex-0 flex flex-col gap-y-2">
                            <p className="w-max text-white font-medium uppercase mb-4">{section.title}</p>
                            {section.links.map((link, linkIndex) => (
                                <Link key={linkIndex} href={link.url} className="w-fit text-sm text-neutral-400 mb-2 hover:text-neutral-200 transition">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-neutral-900 via-neutral-400 to-neutral-900" />
            <div className="flex flex-row text-sm justify-center items-center mx-auto py-10 text-neutral-300">
                &copy; Groupe BNSB {currentYear}. All rights reserved.
            </div>
        </footer>
    );
}
 
export default Footer;