
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Barbershop } from '@prisma/client'
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <Card className="min-w-[157px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="w-full h-[159px] relative">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant={"secondary"} className="opacity-90 flex items-center gap-2 top-3 left-3">
                            <StarIcon size={12} className="fill-primaty text-primary" />
                            <span className="text-xs">5,0</span>
                        </Badge>
                    </div>
                    <Image alt={barbershop.name} src={barbershop.imageUrl}
                        height={0}
                        width={0}
                        fill
                        sizes="100vw"
                        className="h-[159px] rounded-2xl"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>
                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button variant={"secondary"} className="w-full mt-3">Reservar</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default BarbershopItem;