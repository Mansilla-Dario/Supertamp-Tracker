"use client";

import DashboardGeneralView from "@/components/views/dashboardGeneralView";
import Login from "@/components/views/Login";
import { useState } from "react";

export default function SheetSide() {
  const [loginState, setLoginState] = useState(true)
  return (
    <>
      {loginState? <DashboardGeneralView/> : <Login/> }
    </>
  );
}
