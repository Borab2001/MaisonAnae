"use client";

import React from "react";
import { Image as ImageType } from "@/types";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface TabbedGalleryProps {
  images: ImageType[];
}

const useIsLargeScreen = () => {
    const [isLargeScreen, setIsLargeScreen] = React.useState(false);

    React.useEffect(() => {
        const checkSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        // Check on mount and on window resize
        checkSize();
        window.addEventListener('resize', checkSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    return isLargeScreen;
};

const TabbedGallery: React.FC<TabbedGalleryProps> = ({ 
    images
}) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const isLargeScreen = useIsLargeScreen();

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
        <div className="relative w-full max-w-full block h-image-full lg:h-screen lg:max-w-[50%] mb-24 lg:mb-16">
            <Carousel setApi={setApi} orientation={isLargeScreen ? "vertical" : "horizontal"} className="w-full h-full">
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
            <div className="absolute z-10 -bottom-12 lg:bottom-8 inset-x-0 lg:left-8 lg:right-auto flex flex-row lg:flex-col items-center justify-center gap-2 py-2">
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
