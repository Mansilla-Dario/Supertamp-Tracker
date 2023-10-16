
'use client'
import ReceptionistDahboard from '../../components/views/ReceptionistDahboard';  
import AdminDashboard from '../../components/views/AdminDashboard';
import ContadorDashboard from '../../components/views/ContadorDashboard';
import GerenteDashboard from '../../components/views/GerenteDashboard';
import GerenteGeneralDashboard from '../../components/views/GerenteGeneralDashboard';
import { useState } from 'react';

const rolList = ['jefe-recepcion', 'administrador', 'contador', 'gerente', 'gerente-general'];

export default function Dashboard() {
  const [userState, setUserState] = useState({
    isAuthenticated: true,
    rol: rolList[0],
    ubicacion: '',
  });
  const { rol, ubicacion } = userState;
  const renderDashboard = () => {
    switch (rol) {
      case 'jefe-recepcion':
        return <ReceptionistDahboard ubicacion={ubicacion} />;
      case 'administrador':
        return <AdminDashboard ubicacion={ubicacion}/>;
      case 'contador':
        return <ContadorDashboard ubicacion={ubicacion}/>;
      case 'gerente':
        return <GerenteDashboard ubicacion={ubicacion}/>;
      case 'gerente-general':
        return <GerenteGeneralDashboard ubicacion={ubicacion}/>;
      default:
        return <span className='text-red-600 ml-6 mt-6'><strong>Error:</strong> Rol de usuario no reconocido</span>;
    }
  };
  
  return (
    <>
      {renderDashboard()} {/* Call the function to display the specific view based on the role */}
    </>
  );
}
