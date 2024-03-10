import Link from "next/link";

import Container from "@/components/ui/container";

import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";

import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className="bg-transparent w-full fixed top-0 z-40">
            <Container>
                <div className="relative flex h-16 items-center">
                    <MainNav data={categories}/>
                    <Link href="/" className="mx-4 lg:mx-6 flex items-center justify-center gap-x-2">
                        <p className="font-medium text-xl uppercase">Maison Anaé</p>
                    </Link>
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
}
 
export default Navbar;