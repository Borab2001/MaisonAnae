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
        // images taking the full height of the page and dividing into 2
        <Tab className="w-2 h-2 aspect-auto flex items-center justify-center rounded-full">
            {({ selected }) => (
                <span className={cn(
                    "w-full h-full rounded-full",
                    selected ? "bg-gray-800" : "bg-gray-500"
                )} />
            )}
        </Tab>

        // images shown under that onclick change the bigger image
        // <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
        //     {({ selected }) => (
        //         <div>
        //             <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
        //                 <Image 
        //                     fill 
        //                     src={image.url} 
        //                     alt="" 
        //                     className="object-cover object-center" 
        //                 />
        //             </span>
        //             <span className={cn(
        //                 'absolute inset-0 rounded-md ring-2 ring-offset-2',
        //                 selected ? 'ring-black' : 'ring-transparent',
        //             )} />
        //         </div>
        //     )}
        // </Tab>
    );
}
 
export default GalleryTab;