"use client";

import { Button } from "./ui/button";
import { SheetClose } from "./ui/sheet";

interface FilterProps {
    sizes: { id: string; value: string }[];
    colors: { id: string; name: string }[];
    categories: { id: string; name: string }[];
    selectedSize: string | undefined;
    selectedColor: string | undefined;
    selectedCategory: string | undefined;
    handleSizeChange: (index: number) => void;
    handleColorChange: (index: number) => void;
    handleCategoryChange: (index: number) => void;
    handleReset: () => void;
}

const Filter: React.FC<FilterProps> = ({
    sizes,
    colors,
    categories,
    selectedSize,
    selectedColor,
    selectedCategory,
    handleSizeChange,
    handleColorChange,
    handleCategoryChange,
    handleReset
}) => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="text-sm font-medium text-gray-700">Sizes</h3>
                <div className="flex gap-2">
                    {sizes.map((size, index) => (
                        <Button
                            key={size.id}
                            variant="size"
                            size="icon"
                            onClick={() => handleSizeChange(index)}
                            className={selectedSize === size.id ? "bg-primary text-primary-foreground" : "bg-transparent text-primary"}
                        >
                            {size.value}
                        </Button>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-sm font-medium text-gray-700">Colors</h3>
                <div className="flex gap-2">
                    {colors.map((color, index) => (
                        <Button
                            key={color.id}
                            variant="size"
                            size="default"
                            onClick={() => handleColorChange(index)}
                            className={selectedColor === color.id ? "bg-primary text-primary-foreground" : "bg-transparent text-primary"}
                        >
                            <span
                                className="border border-white mr-2 inline-block w-4 h-4 rounded-full"
                                style={{ backgroundColor: color.name }}
                            ></span>
                            {color.name}
                        </Button>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-sm font-medium text-gray-700">Categories</h3>
                <div className="flex gap-2">
                    {categories.map((category, index) => (
                        <Button
                            key={category.id}
                            variant="size"
                            size="icon"
                            onClick={() => handleCategoryChange(index)}
                            className={selectedCategory === category.id ? "bg-primary text-primary-foreground" : "bg-transparent text-primary"}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="mt-4 flex flex-1 flex-row gap-x-2 items-center">
                <Button 
                    onClick={handleReset} 
                    className="flex-1"
                    variant="secondary"
                    size="lg"
                >
                    Reset
                </Button>
                <SheetClose asChild>
                    <Button 
                        type="submit"
                        variant="default"
                        size="lg"
                        className="flex-1"
                    >
                        Apply
                    </Button>
                </SheetClose>
            </div>
        </div>
    );
};

export default Filter;