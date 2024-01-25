"use client";

import Image from "next/image";
import { Toast } from "react-hot-toast";
import { Trash } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
    data
}) => {

    const cart = useCart();
    const router = useRouter();
    
    const onRemove = () => {
        cart.removeItem(data.id);
    }

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-40 sm:w-40 cursor-pointer">
                <Image
                    fill
                    src={data.images[0].url}
                    alt=""
                    className="object-cover object-center"
                    onClick={handleClick}
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton 
                        onClick={onRemove} 
                        classname="bg-white text-gray-400 border-gray-400 hover:text-red-500 hover:border-red-500 rounded-md shadow-none" 
                        icon={<Trash size={20} />} 
                    />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-rows-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p onClick={handleClick} className="text-lg font-medium text-black uppercas cursor-pointer">
                            {data.name}
                        </p>
                    </div>

                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">
                            {data.color.name}
                        </p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
                            {data.size.name}
                        </p>
                    </div>
                    <div className="mt-4">
                        <Currency value={data.price} locale={""} currency={""} />
                    </div>
                </div>
            </div>
        </li>
    );
}
 
export default CartItem;