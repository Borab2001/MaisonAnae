import ProductList from "@/components/product-list";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

export const revalidate = 0;

interface ProductPageProps {
    params: {
        productId: string;
    },
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {

    const product = await getProduct(params.productId);

    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })

    if (!product) {
        return null;
    }

    return (
        <div className="bg-white">
                <div className="">
                    <div className="relative lg:grid lg:grid-cols-2 lg:items-start">
                        {/* Gallery */}
                        <Gallery images={product.images} />
                        <div className="sticky w-full h-image-full top-16 mt-10 px-4 sm:mt-16 sm:px-6 lg:px-8 lg:mt-0 flex flex-row flex-wrap items-center max-w-[472px] mx-auto">
                            {/* Product Info */}
                            <Info data={product} />
                        </div>
                    </div>
                    <Container>
                        <hr className="mt-24 mb-10" />
                        <ProductList title="Related Items" items={suggestedProducts} />
                    </Container>
                </div>
            
        </div>
    );
}
 
export default ProductPage;