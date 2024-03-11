"use client";

import React, { useEffect, useState } from "react";

import { Menu } from "lucide-react";
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
                    {/* <div className="relative left-0 top-0 flex items-center gap-x-2">
                        <SheetTrigger asChild>
                            <Button variant="icon" size="icon">
                                <Menu size={20} />
                            </Button>
                        </SheetTrigger>
                        <SheetClose asChild>
                            <Button onClick={() => router.push("/")} size="default" variant="icon" className="w-fit font-medium text-lg uppercase">
                                Maison Anaé
                            </Button>
                        </SheetClose>
                    </div> */}

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