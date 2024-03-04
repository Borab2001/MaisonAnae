import z from "zod";
import { Button } from "./button";
import { Input } from "./input";

const Quantity = () => {
    const quantitySchema = z.object({
        quantity: z.number().int({ message: "Decimals are not allowed" })
        .min(1, { message: "Quantity must be at least 1" })
        .max(1000, { message: "Quantity cannot be more than 1000" }),
    });

    return (
        <div>
            <h2 className="text-sm font-medium text-foreground mb-2">Quantity</h2>
            <div className="flex">
                <Button
                    disabled={quantity <= 1 ? true : false}
                    onClick={decrementQuantity}
                    variant={"outline"}
                    className="rounded-r-none h-10 border-r-0 disabled:cursor-none disabled:pointer-events-none select-none"
                >
                    -
                </Button>
                <Input 
                    className="rounded-none w-24 h-10 text-center focus-visible:ring-0"
                    onChange={handleQuantity}
                    value={quantity || undefined}
                    min={1}
                    max={1000}
                    type="number"
                    placeholder="Quantity"
                />
                <Button
                    disabled={quantity >= data.quantity ? true : false}
                    onClick={incrementQuantity}
                    variant={"outline"}
                    className="rounded-l-none h-10 border-l-0 disabled:cursor-none disabled:pointer-events-none select-none"
                >
                    +
                </Button>
            </div>
        </div>
    );
}
 
export default Quantity;