"use client";

import Image from "next/image";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingBag } from "lucide-react";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images & Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    alt="Product Image"
                    src={data?.images?.[0]?.url}
                    fill
                    className="aspect-square object-cover rounded-md"
                />

                {/* Buttons  appearing on hover for quick actions */}
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton 
                            onClick={() => {}}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton 
                            onClick={() => {}}
                            icon={<ShoppingBag size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/* Product Description */}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>
            {/* Product Price */}
            <div className="flex items-center justify-between">

            </div>
        </div>
    );
}
 
export default ProductCard;