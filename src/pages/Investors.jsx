import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "../components/InvestorDesk/Login";
import OTP from "../components/InvestorDesk/OTP";
//import SetPassword from "../components/InvestorDesk/SetPassword";
import Dashboard from "../components/InvestorDesk/Dashboard";
import PrivateRoute from "../components/InvestorDesk/PrivateRoute";
//import LoginPassword from "../components/InvestorDesk/LoginPassword";

export default function Investors() {
  const navigate = useNavigate();

  // redirect /investors → /investors/login
  useEffect(() => {
    navigate("login");
  }, []);

  return (
    <div>
      

<Routes>
  <Route path="login" element={<Login />} />
  <Route path="otp" element={<OTP />} />
  {/* <Route path="login-password" element={<LoginPassword />} />
  <Route path="set-password" element={<SetPassword />} /> */}
  <Route
    path="dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
</Routes>

    </div>
  );
}
