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
        <Carousel setApi={setApi} orientation="horizontal" className="block h-full w-full max-w-[800px] lg:max-w-[50%]">
            <CarouselContent className="w-full h-full">
                {images.map((image) => (
                    <CarouselItem 
                        className="w-full h-full min-h-[600px] lg:h-image-full bg-cover bg-center"
                        key={image.id}
                        style={{ backgroundImage: `url(${image.url})` }}
                    >
                        {/* <Image 
                            fill
                            src={image.url}
                            alt="Image"
                            className="object-cover object-center"
                        /> */}
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
 
export default Gallery;