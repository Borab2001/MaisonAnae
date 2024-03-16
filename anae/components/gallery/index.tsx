"use client";

import { Image as ImageType } from "@/types";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi,  } from "@/components/ui/carousel";
import React from "react";

interface GalleryProps {
    images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {

    const [api, setApi] = React.useState<CarouselApi>()

    return (
        <Carousel setApi={setApi} orientation="horizontal" className="lg:hidden h-image-full w-full max-w-full lg:h-screen lg:max-w-[50%] mb-16">
            <CarouselContent className="w-full h-full">
                {images.map((image) => (
                    <CarouselItem 
                        className="w-full h-full bg-cover bg-center"
                        key={image.id}
                        style={{ backgroundImage: `url(${image.url})` }}
                    />
                ))}
            </CarouselContent>
        </Carousel>
    );
}
 
export default Gallery;