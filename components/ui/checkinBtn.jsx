import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CheckinBtn() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="min-w-[150px]">Check In</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Check In</SheetTitle>
          <SheetDescription>Ingresa los datos del CHECK IN</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center justify-end gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="flex flex-row items-center justify-end  ">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Room" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Dorm 101</SelectItem>
                <SelectItem value="dark">Dorm 102</SelectItem>
                <SelectItem value="system">Dorm 103</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row items-center justify-end  ">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Moneda" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Soles</SelectItem>
                <SelectItem value="dark">Dolares</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center justify-end gap-4">
            <Label htmlFor="name" className="text-right">
              Monto
            </Label>
            <Input id="name" value="..." className="col-span-3" />
          </div>
          <div className="flex flex-row items-center justify-end  ">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Forma de Pago" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">EFECTIVO</SelectItem>
                <SelectItem value="dark">IZIPAY</SelectItem>
                <SelectItem value="dark">TRANSFERENCIA BCP</SelectItem>
                <SelectItem value="dark">PAYPAL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
