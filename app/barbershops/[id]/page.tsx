import { db } from "@/app/lib/prisma"
import BarbershopInfo from "./components/barbarshop-info"
import ServiceItem from "./components/service-item"

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
        },
        include: {
            services: true
        }
    })
    if (!barbershop) {
        return null
    }
    return <div>
        <BarbershopInfo barbershop={barbershop} />
        <div className="px-5 flex flex-col gap-4 py-6">
            {barbershop.services.map(service => (
                <ServiceItem key={service.id} service={service} />
            ))}
        </div>
    </div>;

}

export default BarbershopDetailsPage;