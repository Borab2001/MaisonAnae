"use client";

import qs from "query-string";

import { useRouter, useSearchParams } from "next/navigation";

import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { cn } from "@/libs/utils";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());
        
        const query = {
            ...current,
            [valueKey]: id
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });

        router.push(url);
    }

    return (
        <div className="mb-8">
            <h3 className="text-md uppercase font-medium">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <Button
                            className={cn(
                                "min-w-[44px] w-auto rounded-md font-medium text-sm text-black px-1 py-2 bg-white border border-gray-300 hover:opacity-100 hover:border-black transition",
                                selectedValue === filter.id && "border-black",
                            )}
                            onClick={() => onClick(filter.id)}
                        >
                            {filter.value}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Filter;