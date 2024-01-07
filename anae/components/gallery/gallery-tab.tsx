import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/libs/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-full bg-white">

        </Tab>
    );
}
 
export default GalleryTab;