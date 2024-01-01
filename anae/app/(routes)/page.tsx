import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products  = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("d80a47e7-4abe-4cfe-9110-c48b16d470f0");

    return (
        <div>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard} />
                </div>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </Container>
        </div>
    );
}

export default HomePage;