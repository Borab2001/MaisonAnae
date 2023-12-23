import getBillboard from "@/actions/get-billboard";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("d80a47e7-4abe-4cfe-9110-c48b16d470f0");

    return (
        <div>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard} />
                </div>
            </Container>
        </div>
    );
}

export default HomePage;