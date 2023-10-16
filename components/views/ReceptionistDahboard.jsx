import React from "react";
import data from "../../lib/tablaTurnoEjemplo";
import TableTurnRecepcionist from "../ui/tableTurnRecepcionist";

export default function ReceptionistDashboard() {
  const handleCheckIn = () => {
    // Lógica para registrar Check In
    console.log("Check In registrado");
  };

  const handleCheckOut = () => {
    // Lógica para registrar Check Out
    console.log("Check Out registrado");
  };

  const handleNuevoIngreso = () => {
    // Lógica para registrar Nuevo Ingreso
    console.log("Nuevo Ingreso registrado");
  };

  const handleNuevoEgreso = () => {
    // Lógica para registrar Nuevo Egreso
    console.log("Nuevo Egreso registrado");
  };

  return (
    <div>
      {data.length > 0 ? (
        <TableTurnRecepcionist data={data} />
      ) : (
        <div className="text-center">
          <p>No hay registros disponibles.</p>
        </div>
      )}
    </div>
  );
}
