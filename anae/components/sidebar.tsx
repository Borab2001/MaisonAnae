"use client";

import React, { useEffect, useState } from "react";

import CustomButton from "@/components/ui/custom-button";
import { Menu } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Category } from "@/types";
import { cn } from "@/libs/utils";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

interface SidebarProps {
    data: Category[];
}

const Sidebar: React.FC<SidebarProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    return (
        <div className="block lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <Button variant="default" className="h-9 px-2 py-2 shadow-none rounded-full border-none bg-neutral-200/50 backdrop-blur-md text-black flex items-center gap-x-2">
                        <Menu size={20} />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    {/* <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>
                            Display the products with the filters you're looking for.
                        </SheetDescription>
                    </SheetHeader> */}

                    {/* Render the links */}
                    {routes.map((route) => (
                        <SheetClose key={route.href} asChild>
                            <Link
                                href={route.href}
                                onClick={() => {}}
                                className={cn(
                                    "py-2 px-2 block text-sm font-medium uppercase transition-colors text-black",
                                    route.active ? "underline" : "" // Example active class styling
                                )}
                            >
                                {route.label}
                            </Link>
                        </SheetClose>
                    ))}
                </SheetContent>
            </Sheet>
        </div>
    );
}
 
export default Sidebar;