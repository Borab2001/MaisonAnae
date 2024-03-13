"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/libs/utils";
import { Category } from "@/types";
import Sidebar from "./sidebar";
import { Button } from "./ui/button";

interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
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
        <nav
            className="h-full flex items-center gap-x-2 md:gap-x-4 group"
        >
            <Sidebar data={data} />
            <Button onClick={() => router.push("/")} size="default" variant="icon" className="w-fit font-medium text-lg uppercase">
                Maison Anaé
            </Button>
            <div className="hidden lg:flex items-center bg-neutral-200/50 backdrop-blur-md rounded-full">
                {routes.map((route, index) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "px-4 py-2 h-10 hidden lg:flex items-center text-sm font-medium uppercase transition-colors text-black hover:opacity-75",
                            route.active ? "" : "",
                            // With borders between links
                            // index !== 0 && "border-l-2 border-neutral-300/75"
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