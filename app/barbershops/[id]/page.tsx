import { db } from "@/app/lib/prisma"
import BarbershopInfo from "./components/barbarshop-info"

interface BarbershopDetailsPageProps {
    params: any
    id?: string
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    if (!params.id) {
        return null
    }
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        }
    })
    if (!barbershop) {
        return null
    }
    return (
        <BarbershopInfo barbershop={barbershop} />
    )
}

export default BarbershopDetailsPage;