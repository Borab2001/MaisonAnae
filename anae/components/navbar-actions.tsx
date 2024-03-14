"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import SearchBar from "@/components/ui/search-bar";
import { Product } from "@/types";

interface NavbarActionsProps {
    items: Product[];
}

const NavbarActions: React.FC<NavbarActionsProps> =  ({
    items
}) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex flex-1 items-center justify-end gap-x-2 md:gap-x-4">
            <SearchBar items={items} />
            <Button variant="icon" size="icon" onClick={() => router.push("/cart")} className="relative">
                <ShoppingBag 
                    size={20}
                    color="black"
                />
                <span className="absolute left-1/2 top-0 w-auto h-4 px-1 py-[2px] flex items-center justify-center text-sm font-medium text-white bg-red-500 rounded-full">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions;