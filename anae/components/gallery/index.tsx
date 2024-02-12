"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";

import GalleryTab from "@/components/gallery/gallery-tab";

interface GalleryProps {
    images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {
    return (
        <Tab.Group as="div" className="block relative overflow-hidden">
            <div className="absolute bottom-10 left-10 outline-none z-10 mx-auto hidden w-full max-w-2xl sm:block lg:max-w-none">
                {/* <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List> */}
                <Tab.List className="h-full flex flex-col gap-2">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="w-full">
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="aspect-square sm:aspect-auto lg:aspect-square relative sm:h-image-full w-full overflow-hidden">
                            <Image 
                                fill
                                src={image.url}
                                alt="Image"
                                className="object-cover object-center"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
}
 
export default Gallery;