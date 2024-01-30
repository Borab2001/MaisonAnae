"use client";

import qs from "query-string";

import { useRouter, useSearchParams } from "next/navigation";

import { Color, Size } from "@/types";
// import Button from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

    const onChange = (id: string, isChecked: boolean) => {
        const current = qs.parse(searchParams.toString());
        
        // If the checkbox is checked, add the filter; otherwise, remove it
        const query = {
            ...current,
            [valueKey]: isChecked ? id : null
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });

        router.push(url);
    };

    return (
        <div className="mb-8">
            <h3 className="text-md uppercase font-medium">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <Checkbox
                            checked={selectedValue === filter.id}
                            onCheckChange={(isChecked) => onChange(filter.id, isChecked)}
                        />
                        <span>{filter.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Filter;