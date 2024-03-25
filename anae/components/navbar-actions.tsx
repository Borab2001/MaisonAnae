"use client";

import { Heart, LogOut, Settings, ShoppingBag, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import SearchBar from "@/components/ui/search-bar";
import { Product } from "@/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RegisterModal from "@/components/modals/register-modal";

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
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="icon" size="icon">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>AÉ</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-4 sm:mr-6 lg:mr-8 mt-2 bg-gray-100/50 backdrop-blur-md shadow-none border-neutral-100">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="border-neutral-200" />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                        </DropdownMenuItem>
                        
                        <RegisterModal />
                        
                        <DropdownMenuItem>
                            <Heart className="mr-2 h-4 w-4" />
                            <span>Favorites</span>
                            {/* <DropdownMenuShortcut>⌘F</DropdownMenuShortcut> */}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator className="border-neutral-200" />
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                        {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default NavbarActions;