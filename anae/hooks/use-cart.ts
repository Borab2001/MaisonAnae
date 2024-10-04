import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
// import toast from "react-hot-toast";
import { toast } from "@/components/ui/use-toast";

export interface CartOrder extends Product {
    orderQuantity: number;
    quantity: number;
}

type CartStore = {
    items: CartOrder[];
    addItem: (data: CartOrder) => void;
    removeItem: (data: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: CartOrder) => {
            const currentItems: CartOrder[] = get().items;
            const existingItem: CartOrder | undefined = currentItems.find((item) => item.id === data.id);
            const availableStock: number = data.quantity - (existingItem ? existingItem.orderQuantity : 0);

            if (existingItem) {
                if (availableStock >= data.orderQuantity) {
                    existingItem.orderQuantity += data.orderQuantity;
                    set({ items: [...currentItems] });
                    // toast.success(`Added ${data.orderQuantity} to the existing product`);
                    toast({
                        title: "Cart updated",
                        description: `Added ${data.orderQuantity} to the existing product.`,
                    });
                } else if (availableStock > 0) {
                    existingItem.orderQuantity += availableStock;
                    set({ items: [...currentItems] });
                    // toast.success(`Added ${availableStock} to the existing product. Maximum available stock reached`);
                    toast({
                        title: "Cart updated",
                        description: `Added ${availableStock} to the existing product. Maximum available stock reached`,                    });
                } else {
                    // toast.error ("All available quantity already in cart")
                    toast({
                        title: "Cart update failed",
                        description: "All available quantity already in cart",
                        variant: "destructive",
                    });
                }
            } else {
                set({ items: [...currentItems, data] });
                // toast.success("Item added to cart");
                toast({
                    title: "Cart updated",
                    description: "Item added to cart successfully.",
                });
            }
        },

        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            // toast.success("Item removed from cart")
            toast({
                title: "Cart updated",
                description: "Item removed from cart succesfully.",
            });
        },

        removeAll: () => set({ items: [] }),
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)
 
export default useCart;