"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast, { Toast } from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";


const Summary = () => {

    const searchParams = useSearchParams(); 
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0);

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id),
        });

        window.location = response.data.url;
    }

    useEffect(() => {
        if (searchParams.get("successful")) {
            toast.success("Payment successful");
            removeAll();
        }

        if (searchParams.get("cancelled")) {
            toast.error("Payment unsuccessful");
        }
    }, [searchParams, removeAll]);

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900 uppercase">
                Order Summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order Total
                    </div>
                    <Currency value={totalPrice} locale={""} currency={""} />
                </div>
            </div>
            <Button
                onClick={onCheckout}
                className="w-full mt-6 rounded-md uppercase font-medium">
                Checkout
            </Button>
        </div>
    );
}
 
export default Summary;