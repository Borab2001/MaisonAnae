import getProducts from "@/actions/get-products";
import getSizes from '@/actions/get-sizes';
import getColors from '@/actions/get-colors';
import getCategory from '@/actions/get-category';
import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';
import ProductCard from "@/components/ui/product-card";
 import NoResults from '@/components/ui/no-results';

import Filter from './components/filter';
import MobileFilters from "./components/mobile-filters";

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

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });

    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);

    return (
        <div className='bg-white'>
            {/* <Billboard
                data={category.billboard}
            /> */}
            <div className='py-24'>
                <Container>
                    <div className="pb-8 flex flex-1 justify-between items-center">
                        <h1 className="text-3xl">
                            {category.name}
                            <span className="text-lg text-gray-600 align-top">{products.length}</span>
                        </h1>
                        <MobileFilters
                            sizes={sizes}
                            colors={colors}
                        />
                    </div>
                </Container>
                <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
                    <div className='w-full mt-6 lg:col-span-4 lg:mt-0'>
                        {products.length === 0 && <NoResults />}
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {products.map((item) => (
                                <ProductCard 
                                    key={item.id}
                                    data={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CategoryPage;