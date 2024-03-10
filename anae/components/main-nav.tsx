"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/libs/utils";
import { Category } from "@/types";
import Sidebar from "./sidebar";

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
            className="h-full flex flex-1 items-center group"
        >
            <Sidebar data={data} />
            <div className="hidden lg:flex items-center bg-neutral-200/50 backdrop-blur-md rounded-full">
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "py-2 px-4 h-full hidden lg:flex items-center text-sm font-medium uppercase transition-colors text-black",
                            route.active ? "" : ""
                        )}
                    >
                        {route.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
 
export default MainNav;