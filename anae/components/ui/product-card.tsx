"use client";

import Image from "next/image";
// import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
// import { MouseEventHandler } from "react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
// import { Button } from "./button";
// import useCart from "@/hooks/use-cart";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    
    // const cart = useCart();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    // const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    //     event.stopPropagation();

    //     cart.addItem({ ...data, orderQuantity: 1, quantity: 1 });
    // }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl space-y-4 mb-6">
            {/* Images & Actions */}
            <div className="aspect-[187/251] lg:aspect-[3/4] rounded-xl bg-gray-100 relative">
                <Image
                    alt="Product Image"
                    src={data?.images?.[0]?.url}
                    fill
                    className="aspect-[187/251] lg:aspect-[3/4] object-cover rounded-md"
                />

                {/* Buttons  appearing on hover for quick actions */}
                {/* <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <Button 
                            onClick={onAddToCart}
                            size="icon"
                            variant="icon"
                        >
                            <ShoppingBag size={20} />
                        </Button>
                    </div>
                </div> */}
            </div>
            {/* Product Description */}
            <div className="px-4 flex flex-1 justify-between items-start">
                <div>
                    <p className="text-md font-medium truncate">
                        {data.name}
                    </p>
                    <p className="text-sm text-gray-500 capitalize">
                        {data.color?.name}
                    </p>
                </div>
                {/* Product Price */}
                <div className="text-sm font-normal flex items-center justify-between">
                    <Currency value={data?.price} />
                </div>
            </div>
        </div>
    );
}
 
export default ProductCard;