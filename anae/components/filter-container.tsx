"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Filter from './filter';

interface FilterContainerProps {
    sizes: { id: string; name: string }[];
    colors: { id: string; name: string }[];
    categories: { id: string; name: string }[];
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
    );
};

export default FilterContainer;