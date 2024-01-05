"use client";

import Image from "next/image";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingBag } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${data?.id}`);
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl p-3 space-y-4">
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
                <Currency value={data?.price} locale="fr-FR" currency="EUR" />
            </div>
        </div>
    );
}
 
export default ProductCard;