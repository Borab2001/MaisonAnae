"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { Color, Size } from "@/types";
import { ListFilter } from 'lucide-react';

import Filter from './filter';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";


interface FilterContainerProps {
    sizes: { id: string; value: string }[];
    colors: { id: string; name: string }[];
    categories: { id: string; name: string }[];
    // sizes: Size[];
    // colors: Color[];
    // categories: Category[];
}

const FilterContainer: React.FC<FilterContainerProps> = ({ sizes, colors, categories }) => {
    const [selectedSize, setSelectedSize] = useState<string | undefined>();
    const [selectedColor, setSelectedColor] = useState<string | undefined>();
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
    
    const router = useRouter();

    const handleFilterChange = (filters: { sizeId?: string; colorId?: string; categoryId?: string }) => {
        const query = new URLSearchParams({
            sizeId: filters.sizeId || '',
            colorId: filters.colorId || '',
            categoryId: filters.categoryId || '',
        }).toString();

        router.replace(`${window.location.pathname}?${query}`);
    };

    const handleSizeChange = (index: number) => {
        const value = sizes[index].id;
        setSelectedSize(selectedSize === value ? undefined : value);
        handleFilterChange({ sizeId: selectedSize === value ? undefined : value, colorId: selectedColor, categoryId: selectedCategory });
    };

    const handleColorChange = (index: number) => {
        const value = colors[index].id;
        setSelectedColor(selectedColor === value ? undefined : value);
        handleFilterChange({ sizeId: selectedSize, colorId: selectedColor === value ? undefined : value, categoryId: selectedCategory });
    };

    const handleCategoryChange = (index: number) => {
        const value = categories[index].id;
        setSelectedCategory(selectedCategory === value ? undefined : value);
        handleFilterChange({ sizeId: selectedSize, colorId: selectedColor, categoryId: selectedCategory === value ? undefined : value });
    };

    const handleReset = () => {
        setSelectedSize(undefined);
        setSelectedColor(undefined);
        setSelectedCategory(undefined);
        handleFilterChange({ sizeId: undefined, colorId: undefined, categoryId: undefined });
    };

    return (
        <div className="relative">
            <Sheet>
                <SheetTrigger>
                    <Button variant="ghost" size="default" className="gap-x-2 uppercase">
                        Filter
                        <ListFilter size={20} />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right">
                    <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>
                            Display the products with the filters you are looking for.
                        </SheetDescription>
                    </SheetHeader>

                    {/* Render the filters */}
                    <div className="py-8">
                        <Filter
                            sizes={sizes}
                            colors={colors}
                            categories={categories}
                            selectedSize={selectedSize}
                            selectedColor={selectedColor}
                            selectedCategory={selectedCategory}
                            handleSizeChange={handleSizeChange}
                            handleColorChange={handleColorChange}
                            handleCategoryChange={handleCategoryChange}
                            handleReset={handleReset}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default FilterContainer;