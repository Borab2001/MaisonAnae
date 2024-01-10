"use client";

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD'
});

// export function formatter(locale: string, currency: string) {
//     return new Intl.NumberFormat(locale, {
//       style: 'currency',
//       currency: currency
//     });
// }

interface CurrencyProps {
    value?: string | number;
    locale: string;
    currency: string;
}

const Currency: React.FC<CurrencyProps> = ({
    value,
    locale,
    currency
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    // Create an instance of the formatter with the user's locale and currency
    // const priceFormatter = formatter(locale, currency);
    
    return (
        <div className="font-medium">
            {formatter.format(Number(value))}
        </div>
    );
}
 
export default Currency;