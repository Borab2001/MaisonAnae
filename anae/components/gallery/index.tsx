"use client";

import Image from "next/image";


import { Image as ImageType } from "@/types";

import GalleryTab from "@/components/gallery/gallery-tab";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi,  } from "@/components/ui/carousel";
import React from "react";

interface GalleryProps {
    images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    
    React.useEffect(() => {
        if (!api) {
        return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        // <Carousel className="block relative overflow-hidden">
        <Carousel setApi={setApi} orientation="vertical" className="block h-full w-full max-w-[50%]">
            <CarouselContent>
                <CarouselItem className="bg-black w-full h-full lg:min-h-screen">
                    Example
                </CarouselItem>
                <CarouselItem className="bg-red-500 w-full h-full lg:min-h-screen">
                    Example
                </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-10 left-10 outline-none z-10 mx-auto hidden w-full max-w-2xl sm:block lg:max-w-none">
                {/* <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List> */}
                {/* <Tab.List className="h-full flex flex-col gap-2">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List> */}
            </div>
            {/* <Tab.Panels className="w-full">
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
            </Tab.Panels> */}
        </Carousel>
    );
}
 
export default Gallery;