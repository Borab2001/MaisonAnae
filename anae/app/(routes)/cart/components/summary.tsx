"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
// import toast from "react-hot-toast";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

import { LoaderCircle } from "lucide-react";


const Summary = () => {
    
    const [loading , setLoading] = useState<boolean>(false);
    const searchParams = useSearchParams(); 
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get("successful")) {
            // toast.success("Payment successful");
            toast({
                title: "Payment successful",
                description: "You will be redirected to your order confirmation.",
            });
            removeAll();
        }

        if (searchParams.get("cancelled")) {
            // toast.error("Payment unsuccessful");
            toast({
                title: "Payment unsucessful",
                description: "There has been an issue with your payment. Please try again.",
                variant: "destructive",
            });
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0);

    const onCheckout = async () => {
        setLoading(true)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id),
        });

        window.location = response.data.url;
    }

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
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button
                variant="default"
                size="lg"
                disabled={items.length === 0}
                onClick={onCheckout}
                className="w-full mt-6 rounded-md uppercase font-medium"
            >
                {loading ? (
                    <div className='flex justify-center items-center cursor-wait space-x-2'>
                        <LoaderCircle className='w-6 h-6 animate-spin' />
                        <p>Loading</p>
                    </div>
                ) : "Checkout"}
            </Button>
        </div>
    );
}

export default Summary;