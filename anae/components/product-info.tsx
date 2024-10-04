"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/button";
import Quantity from "@/components/ui/quantity";

import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

interface ProductInfoProps {
    data: Product;
    showDescription?: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
    data,
    showDescription = false,
}) => {
    const cart = useCart();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    }

    if (showDescription) {
        // Return view with description and composition
        return (
            <div className="w-full h-auto p-4 bg-gray-100/50 backdrop-blur-md rounded-md">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col items-start gap-x-4">
                        <h3 className="font-semibold text-black">Description:</h3>
                        <div>
                            {data.description}
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-x-4">
                        <h3 className="font-semibold text-black">Composition:</h3>
                        <div>
                            {data.composition}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-auto p-4 bg-gray-100/50 backdrop-blur-md rounded-md">
            <div className="flex items-center gap-x-4">
                <h3 className="font-medium text-neutral-500 mb-2">
                    {data?.category?.name}
                </h3>
            </div>
            <h1 className="text-3xl font-medium text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4 mb-10">
                    <h3 className="font-semibold text-black">Size:</h3>
                    {/* <div>
                        {data?.size?.value}
                    </div> */}
                    {data?.sizes?.map((size, index) => (
                        <Button 
                            key={index}
                            variant="outline"
                            size="icon"
                        >
                            {size.value}
                        </Button>
                    ))}
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div>
                        {data?.color?.name}
                    </div>
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
                </div>
                <div className="flex items-center gap-x-4">
                    {/* <Quantity /> */}
                </div>
            </div>
            <div className="flex flex-col items-center gap-x-3 sticky lg:block bottom-0 z-10">
                <Button 
                    variant="default" 
                    size="lg"
                    className="w-full"
                    onClick={onAddToCart}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    );
}
 
export default ProductInfo;