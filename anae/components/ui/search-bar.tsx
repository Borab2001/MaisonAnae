"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import { Check, Search } from "lucide-react";
import { Product } from "@/types"
import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>

interface ProductSearchProps extends PopoverTriggerProps {
    items: Product[];
}

export default function SearchBar({
    className,
    items = []
}: ProductSearchProps) {
    const params = useParams();
    const router = useRouter();
    
    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id,
        images: item.images
    }));

    const displayedItems = formattedItems.slice(0, 2);

    const currentProduct = formattedItems.find((item) => item.value === params.productId);

    const [open, setOpen] = useState(false);

    const onProductSelect = (product: { value: string, label: string}) => {
        setOpen(false);
        router.push(`/product/${product.value}`);
    }

    return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="icon"
          size="icon"
          role="combobox"
          aria-expanded={open}
          aria-label="Search product"
        >
          <Search size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-neutral-200/75 backdrop-blur-md w-screen h-screen -translate-y-[56px] -z-1 border-none rounded-none text-black shadow-none flex items-center justify-center m-0 p-4 sm:p-6 lg:p-8">
        <Command className="w-full max-w-[448px] bg-transparent pt-12">
          <CommandList>
            <CommandInput placeholder="Search product" />
            <CommandEmpty>Oops, product not found...</CommandEmpty>
            <CommandGroup>
              {displayedItems.map((product) => (
                <CommandItem
                  key={product.value}
                  onSelect={() => onProductSelect(product)}
                  className="text-sm"
                >
                   <Image src={product?.images?.[0]?.url} alt="Product image" width={50} height={50} className="mr-2" />
                  {product.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentProduct?.value === product.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    );
};