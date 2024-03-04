import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast";

export interface CartOrder extends Product {
    orderQuantity: number;
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
            const existingItem: CartOrder[] | undefined = currentItems.find((item) => item.id === data.id);
            const availableStock: number = data.quantity - (existingItem ? existingItem.orderQuantity: 0);

            if (existingItem) {
                if (availableStock >= data.orderQuantity) {
                    existingItem.orderQuantity += data.orderQuantity;
                    set({ items: [...currentItems] });
                    toast.success(`Added ${data.orderQuantity} to the existing product`);
                } else if (availableStock > 0) {
                    existingItem.orderQuantity += availableStock;
                    set({ items: [...currentItems] });
                    toast.success(`Added ${availableStock} to the existing product. Maximum available stock reached`);
                } else {
                    toast.error ("All available quantity already in cart")
                }
            } else {
                set({ items: [...currentItems, data] });
                toast.success("Item added to cart");
            }
        },

        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Item removed from cart")
        },

        removeAll: () => set({ items: [] }),
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)
 
export default useCart;