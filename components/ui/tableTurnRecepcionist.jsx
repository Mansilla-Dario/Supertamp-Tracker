import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableTurnRecepcionist({ data }) {
  return (
    <Table>
      <TableCaption>Lista de Transacciones</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Tipo</TableHead>
          <TableHead>Room</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead>Producto</TableHead>
          <TableHead>Monto</TableHead>
          <TableHead>Moneda</TableHead>
          <TableHead>Método de Pago</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((transaction, index) => (
          <TableRow key={index}>
            <TableCell>{transaction.Tipo}</TableCell>
            <TableCell>{transaction.Room}</TableCell>
            <TableCell>{transaction.Nombre}</TableCell>
            <TableCell>{transaction.Categoría}</TableCell>
            <TableCell>{transaction.Producto}</TableCell>
            <TableCell>{transaction.Monto}</TableCell>
            <TableCell>{transaction.Moneda}</TableCell>
            <TableCell>{transaction.MetodoPago}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
