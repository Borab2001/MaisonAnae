import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface CustomButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            ref={ref}
            className={cn(
                `
                    w-auto
                    rounded-full
                    bg-black
                    border-transparent
                    px-5
                    py-3
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    text-white
                    font-semibold
                    hover:opacity-75
                    transition
                `,
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
});

CustomButton.displayName = "CustomButton";

export default CustomButton;