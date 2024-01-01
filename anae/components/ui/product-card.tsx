"use client";

import Image from "next/image";

import { Product } from "@/types";

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
                />
            </div>
        </div>
    );
}
 
export default ProductCard;