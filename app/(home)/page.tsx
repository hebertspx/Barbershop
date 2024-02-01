import { format } from "date-fns";
import Header from "../components/header";
import { ptBR } from "date-fns/locale";
import Search from "./components/search";
import BookingItem from "./components/booking-item";
import { db } from "../lib/prisma";
import BarbershopItem from "./components/barbershop-itens";

export default async function Home() {

  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Hebert</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="p-5">
        <h2 className="text-xs uppercase, text-gray-400 mb-3 font-bold">Agendamentos</h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs uppercase, text-gray-400 mb-3 font-bold ">Recomendados</h2>
        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs uppercase, text-gray-400 mb-3 font-bold ">Populares</h2>
        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>


    </div>
  );
}
