"use client";

import React from "react";
import { Image as ImageType } from "@/types";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface TabbedGalleryProps {
  images: ImageType[];
}

const TabbedGallery: React.FC<TabbedGalleryProps> = ({ 
    images
}) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const updateSlide = () => {
        setCurrentSlide(api?.selectedScrollSnap() || 0);
        };

        if (api) {
            api.on("select", updateSlide);
        }

        return () => {
            if (api) {
                api.off("select", updateSlide);
            }
        };
    }, [api]);

    const handleDotClick = (index: number) => {
        api?.scrollTo(index);
    };

    return (
        <div className="relative hidden w-full lg:block h-screen lg:max-w-[50%] mb-16">
            <Carousel setApi={setApi} orientation="vertical" className="w-full h-full">
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
            <div className="fixed z-10 bottom-8 left-8 flex flex-col items-center justify-center gap-2 py-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-neutral-500' : 'bg-neutral-300'}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TabbedGallery;
