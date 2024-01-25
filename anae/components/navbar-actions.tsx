"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {

    //local storage
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
        <div className="ml-auto flex flex-1 items-center justify-end gap-x-4">
            <Button onClick={() => router.push("/cart")} className="relative flex items-center rounded-full bg-transparent px-4 py-2">
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