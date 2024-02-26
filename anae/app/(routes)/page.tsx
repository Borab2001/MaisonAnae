import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products  = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("73a6335d-0b1b-42c5-925c-9d548205e506"); // billboard ID as a test

    return (
        <div>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <Container>
                    <div className="flex flex-col gap-y-8">
                        <ProductList title="Featured Products" items={products} />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default HomePage;