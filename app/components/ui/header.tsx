import Image from "next/image";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="Barbershop" height={22} width={120} />
                <Button variant={"outline"} size={"icon"} className="h-8 w-8">
                    <MenuIcon size={18} />
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;