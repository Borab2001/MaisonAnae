"use client";

import qs from "query-string";

import { useRouter, useSearchParams } from "next/navigation";

import { Color, Size } from "@/types";
// import CustomButton from "@/components/ui/CustomButton";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface FilterProps {
    data: (Color | Size)[];
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
    
    // const onChange = (id: string, isChecked: boolean) => {
    //     const current = qs.parse(searchParams.toString());
        
    //     // If the checkbox is checked, add the filter; otherwise, remove it
    //     const query = {
    //         ...current,
    //         [valueKey]: isChecked ? id : null
    //     };

    //     const url = qs.stringifyUrl({
    //         url: window.location.href,
    //         query
    //     }, { skipNull: true });

    //     router.push(url);
    // };

    const selectedValues = searchParams.get(valueKey)?.split(',') || [];

    const onChange = (id: string, isChecked: boolean) => {
        const currentParams = qs.parse(searchParams.toString());
        let updatedValues = [...selectedValues];
    
        if (isChecked) {
            // Add the selected filter if it's not already included.
            updatedValues = [...updatedValues, id];
        } else {
            // Remove the selected filter if it was previously included.
            updatedValues = updatedValues.filter(value => value !== id);
        }
    
        // Update the query with the new set of values for this filter type.
        const query = {
            ...currentParams,
            [valueKey]: updatedValues.join(',') || null,
        };
    
        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true, skipEmptyString: true });
    
        router.push(url);
    };

    return (
        <div className="mb-8">
            <h3 className="text-md uppercase font-medium">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-col flex-wrap gap-2">
                {data.sort((a, b) => a.name.localeCompare(b.name)).map((filter) => (
                    <div key={filter.id} className="flex items-center space-x-2">
                        <Checkbox
                            id="filter"
                            checked={selectedValue === filter.id}
                            onCheckChange={(isChecked) => onChange(filter.id, isChecked)}
                        />
                        <label
                            htmlFor="filter"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {filter.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Filter;