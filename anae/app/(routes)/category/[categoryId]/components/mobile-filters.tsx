"use client";

import { Color, Size } from "@/types";
import { ListFilter } from "lucide-react";

import Filter from "./filter";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    return (
        <div className="relative">
            <Sheet>
                <SheetTrigger>
                    <Button variant="ghost" size="default" className="gap-x-2 uppercase">
                        Filter
                        <ListFilter size={20} />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right">
                    <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>
                            Display the products with the filters you are looking for.
                        </SheetDescription>
                    </SheetHeader>

                    {/* Render the filters */}
                    <div className="py-8">
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
                </SheetContent>
            </Sheet>
        </div>
    );
}
 
export default MobileFilters;