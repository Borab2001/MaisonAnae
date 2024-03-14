import ProductList from "@/components/product-list";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import ProductInfo from "@/components/product-info";

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
                    <div className="h-image-full pb-4 lg:pb-0 flex flex-col lg:flex-row items-center">
                        {/* Gallery */}
                        <Gallery images={product.images} />
                        <div className="h-auto lg:h-image-full flex flex-column justify-center items-center sticky w-full max-w-[472px] mx-auto top-16 bottom-0 z-10">
                            {/* Product Info */}
                            <ProductInfo data={product} />
                        </div>
                    </div>
                    <Container>
                        <div className="">
                            <ProductInfo data={product} showDescription />
                        </div>
                        <hr className="mt-24 mb-10" />
                        <ProductList title="Related Items" items={suggestedProducts} />
                    </Container>
                </div>
            
        </div>
    );
}
 
export default ProductPage;