import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div className="h-[480px] lg:h-[680px] overflow-hidden">
            <div
                className="relative overflow-hidden bg-cover top-0 left-0 w-full h-full object-cover"
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard;