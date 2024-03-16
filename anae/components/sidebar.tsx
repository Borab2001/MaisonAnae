"use client";

import React, { useEffect, useState } from "react";

import { Menu, ChevronRight } from "lucide-react";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { Category } from "@/types";
import { cn } from "@/libs/utils";
import { Sheet, SheetClose, SheetContent, SheetPortal, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface SidebarProps {
    data: Category[];
}

const Sidebar: React.FC<SidebarProps> = ({
    data
}) => {
    const router = useRouter();
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
                    <Button variant="icon" size="icon">
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
                    <div className="relative left-0 -top-3 flex items-center gap-x-2 md:gap-x-4 mb-2">
                        <SheetTrigger asChild>
                            <Button 
                                className="bg-transparent backdrop-blur-none"
                                variant="icon" 
                                size="icon"
                            >
                                <Menu size={20} />
                            </Button>
                        </SheetTrigger>
                        <SheetClose asChild>
                            <Button 
                                onClick={() => router.push("/")} 
                                className="w-fit font-medium text-lg uppercase bg-transparent backdrop-blur-none"
                                size="default" 
                                variant="icon"
                            >
                                Maison Anaé
                            </Button>
                        </SheetClose>
                    </div>

                    {/* Render the links */}
                    {routes.map((route) => (
                        <SheetClose key={route.href} asChild>
                            <Link
                                href={route.href}
                                onClick={() => {}}
                                className={cn(
                                    "flex justify-between items-center py-2.5 px-2 text-lg font-medium uppercase transition-colors text-black",
                                    route.active ? "underline" : "" // Example active class styling
                                )}
                            >
                                {route.label}
                                <ChevronRight />
                            </Link>
                        </SheetClose>
                    ))}
                </SheetContent>
            </Sheet>
        </div>
    );
}
 
export default Sidebar;