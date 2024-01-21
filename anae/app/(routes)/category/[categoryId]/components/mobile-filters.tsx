"use client";

import React, { Fragment, useEffect, useState } from "react";

import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";

import Filter from "./filter";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false);

    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (open) {
            setIsTransitioning(true); // Begin the transition
        }
    }, [open]);

    const onOpen = () => setOpen(true);
    const onClose = () => {
        setIsTransitioning(false); // End the transition
        setTimeout(() => setOpen(false), 300); // Delay the unmounting
    };

    return (
        <React.Fragment>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Plus size={20} />
            </Button>

            <Dialog 
                open={open} 
                as="div" 
                className="relative z-50 lg:hidden" 
                onClose={onClose}
            >
                {/* Background */}
                <div className={`fixed inset-0 bg-black transition-opacity ${isTransitioning ? 'opacity-25' : 'opacity-0'}`} />

                {/* Dialog Position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className={`relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition-transform duration-300 ease-in-out transform ${isTransitioning ? 'translate-x-0' : 'translate-x-full'}`}>

                        {/* Close Button */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={20} />} onClick={onClose} classname="shadow-none border-none hover:scale-100"
                            />
                        </div>

                        {/* Render the filters */}
                        <div className="p-4">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="value"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
 
export default MobileFilters;