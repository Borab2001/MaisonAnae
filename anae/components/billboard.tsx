import { Billboard as BillboardType } from "@/types";
import Container from "@/components/ui/container";

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div className="h-[480px] lg:h-screen overflow-hidden">
            <div
                className="relative bg-cover top-0 left-0 w-full h-full object-cover rounded-none"
                style={{ 
                    backgroundImage: `url(${data?.imageUrl})`,
                    backgroundPosition: 'center'
                }}
            >
                <div className="h-full w-full flex flex-col justify-end items-start p-4 text-center gap-y-8">
                    <span className="font-bold text-frosted uppercase whitespace-pre-line text-billboard sm:max-w-xl max-w-xs">
                        {data?.label}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Billboard;