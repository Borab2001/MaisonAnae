"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Category } from "@/types";
import { cn } from "@/libs/utils";

interface SidebarProps {
    data: Category[];
}

const Sidebar: React.FC<SidebarProps> = ({
    data
}) => {
    const [open, setOpen] = useState(false);

    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (open) {
            setIsTransitioning(true); // Begin the transition
        }
    }, [open]);

    const onOpen = () => setOpen(true);
    const onClose = () => {
        setIsTransitioning(false); // End the transition
        setTimeout(() => setOpen(false), 300); // Delay the unmounting
    };

    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    
    return (
        <>
            <Button onClick={onOpen} className="shadow-none border-none hover:scale-100 bg-transparent text-black flex items-center gap-x-2">
                <Menu size={20} />
            </Button>

            <Dialog 
                open={open} 
                as="div" 
                className="relative z-50" 
                onClose={onClose}
            >
                {/* Background */}
                <div className={`fixed inset-0 bg-black transition-all ${isTransitioning ? 'opacity-25' : 'opacity-0'}`} />

                {/* Dialog Position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className={`relative mr-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition-transform duration-300 ease-in-out transform ${isTransitioning ? 'translate-x-0' : '-translate-x-full'}`}>

                        {/* Close Button */}
                        <div className="flex items-center justify-start px-4">
                            <IconButton 
                                icon={<Menu size={20} />} 
                                onClick={onClose} 
                                classname="shadow-none border-none hover:scale-100"
                            />
                        </div>

                        {/* Render the links */}
                        <div className="p-4">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    onClick={onClose}
                                    className={cn(
                                        "py-2 px-4 block text-sm font-medium uppercase transition-colors text-black",
                                        route.active ? "underline" : "" // Example active class styling
                                    )}
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}
 
export default Sidebar;