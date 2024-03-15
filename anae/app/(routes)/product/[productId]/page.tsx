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
                    <div className="pb-4 lg:pb-0 flex flex-col lg:flex-row items-center">
                        {/* Gallery */}
                        <Gallery images={product.images} />
                        <div className="h-auto flex flex-col justify-end gap-4 items-center w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Product Info */}
                            <ProductInfo data={product} />
                            <ProductInfo data={product} showDescription />
                        </div>
                    </div>
                    <Container>
                        {/* <div className="mt-12">
                            <ProductInfo data={product} showDescription />
                        </div>
                        <hr className="mt-24 mb-10" /> */}
                        <div className="mt-12">
                            <ProductList title="Related Items" items={suggestedProducts} />
                        </div>
                    </Container>
                </div>
            
        </div>
    );
}
 
export default ProductPage;