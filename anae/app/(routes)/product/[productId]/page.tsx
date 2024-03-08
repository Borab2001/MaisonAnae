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
                    {/* <div className="relative lg:grid lg:grid-cols-2 lg:items-start"> */}
                    <div className="flex flex-row items-start">
                        {/* Gallery */}
                        <Gallery images={product.images} /> {/* RepresentClo : block h-full w-full max-w-[50%] */}
                        {/* <div className="fixed w-full lg:h-image-full overflow-hidden top-16 mt-10 px-4 sm:mt-16 sm:px-6 lg:px-8 lg:my-auto flex flex-row flex-wrap items-center lg:max-w-[472px] mx-auto">  */}
                        <div className="h-image-full flex flex-column justify-center items-center sticky w-full max-w-[472px] mx-auto top-16 bottom-0 z-10">
                            {/* Product Info */}
                            <ProductInfo data={product} />
                        </div>
                    </div>
                    <Container>
                        <div className="mt-16">
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