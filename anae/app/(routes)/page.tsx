import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products  = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("d3069b34-b4c6-4060-8d04-575d3d5c386b"); // billboard ID as a test

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