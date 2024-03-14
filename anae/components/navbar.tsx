import Container from "@/components/ui/container";

import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";

import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";;

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();
    const products = await getProducts({});

    return (
        <div className="bg-transparent w-full fixed top-0 z-40">
            <Container>
                <div className="relative flex h-16 items-center gap-x-2 md:gap-x-4">
                    <MainNav data={categories}/>
                    <NavbarActions items={products} />
                </div>
            </Container>
        </div>
    );
}
 
export default Navbar;