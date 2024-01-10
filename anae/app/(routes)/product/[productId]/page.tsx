import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {

    const product = await getProduct(params.productId);

    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })

    return (
        <div className="bg-white">
            {/* <Container> */}
                <div className="">
                    <div className="relative lg:grid lg:grid-cols-2 lg:items-start">
                        {/* Gallery */}
                        <Gallery images={product.images} />
                        <div className="sticky min-h-full-screen top-16 mt-10 px-4 sm:mt-16 sm:px-6 lg:px-8 lg:mt-0 flex flex-row flex-wrap items-center w-full max-w-[472px] mx-auto">
                            {/* Product Info */}
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList title="Related Items" items={suggestedProducts} />
                </div>
            {/* </Container> */}
        </div>
    );
}
 
export default ProductPage;