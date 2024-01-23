"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/libs/utils";
import { Category } from "@/types";

interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    return (
        <nav
            className="h-full hidden lg:flex flex-1 items-center group"
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "py-2 px-4 h-full flex items-center text-sm font-medium uppercase transition-colors text-black",
                        route.active ? "" : ""
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
}
 
export default MainNav;