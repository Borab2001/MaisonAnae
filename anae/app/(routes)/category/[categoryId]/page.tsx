import React, { useEffect, useState } from 'react';

import getProducts from "@/actions/get-products";
import { Product } from '@/types';

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = ({
    params,
    searchParams
}) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts: Product[] = await getProducts({
                categoryId: params.categoryId,
                colorId: searchParams.colorId,
                sizeId: searchParams.sizeId
            });
            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, [params, searchParams]);

    // const products = await getProducts({
    //     categoryId: params.categoryId,
    //     colorId: searchParams.colorId,
    //     sizeId: searchParams.sizeId
    // })

    return (
        <div>
            Category
        </div>
    );
}
 
export default CategoryPage;