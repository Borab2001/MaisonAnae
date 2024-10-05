"use client";

interface FilterProps {
    sizes: { id: string; name: string }[];
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
                        <button
                            key={size.id}
                            onClick={() => handleSizeChange(index)}
                            className={selectedSize === size.id ? "bg-primary text-primary-foreground" : "bg-transparent text-primary"}
                        >
                            {size.name}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-sm font-medium text-gray-700">Colors</h3>
                <div className="flex gap-2">
                    {colors.map((color, index) => (
                        <button
                            key={color.id}
                            onClick={() => handleColorChange(index)}
                            className={selectedColor === color.id ? "bg-primary text-primary-foreground" : "bg-transparent text-primary"}
                        >
                            {color.name}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-sm font-medium text-gray-700">Categories</h3>
                <div className="flex gap-2">
                    {categories.map((category, index) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryChange(index)}
                            className={selectedCategory === category.id ? "bg-primary text-primary-foreground" : "bg-transparent text-primary"}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
            <button onClick={handleReset} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
                Reset
            </button>
        </div>
    );
};

export default Filter;