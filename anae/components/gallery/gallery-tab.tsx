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
        <Tab className="relative flex items-center justify-center bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute h-4 w-4 inset-0 overflow-hidden rounded-full">
                        {/* <Image 
                            fill
                            src={image.url}
                            alt=""
                            className="object-cover object-center"
                        /> */}
                    </span>
                    <span className={cn(
                        "w-4 h-4 absolute inset-0 rounded-full",
                        selected ? "bg-gray-500" : "bg-gray-400"
                    )} />
                </div>
            )}
        </Tab>
    );
}
 
export default GalleryTab;