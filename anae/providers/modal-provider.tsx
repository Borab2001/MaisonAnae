"use client";

import RegisterModal from "@/components/modals/register-modal";
import PreviewModal from "@/components/modals/preview-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <PreviewModal />
            {/* <RegisterModal /> */}
        </>
    );
}
 
export default ModalProvider;