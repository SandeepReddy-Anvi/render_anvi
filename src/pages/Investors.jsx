import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import InvestorLogin from "./InvestorsPages/InvestorLogin";
import InvestorOTP from "./InvestorsPages/InvestorOTP";
import InvestorDashboard from "./InvestorsPages/InvestorDashboard";

export function Investors() {

  const [accessTokens, setAccessTokens] = useState({
    email: localStorage.getItem("investorEmail"),
    loginToken: localStorage.getItem("investorToken"),
    sessionToken: sessionStorage.getItem("investorSessionToken"),
  });

  // Update helpers
  const updateEmail = (value) => {
    if (value) localStorage.setItem("investorEmail", value);
    else localStorage.removeItem("investorEmail");

    setAccessTokens(prev => ({ ...prev, email: value }));
  };

  const updateLoginToken = (value) => {
    if (value) localStorage.setItem("investorToken", value);
    else localStorage.removeItem("investorToken");

    setAccessTokens(prev => ({ ...prev, loginToken: value }));
  };

  const updateSessionToken = (value) => {
    if (value) sessionStorage.setItem("investorSessionToken", value);
    else sessionStorage.removeItem("investorSessionToken");

    setAccessTokens(prev => ({ ...prev, sessionToken: value }));
  };

  const { email, loginToken, sessionToken } = accessTokens;

  return (
    <Routes>

      <Route path="/" element={<Navigate to="login" />} />

      {/* LOGIN */}
      <Route
        path="login"
        element={
          sessionToken ? (
            <Navigate to="/investors/dashboard" replace />
          ) : email && loginToken ? (
            <Navigate to="/investors/otp" replace />
          ) : (
            <InvestorLogin
              emailFun={updateEmail}
              loginFun={updateLoginToken}
            />
          )
        }
      />

      {/* OTP */}
      <Route
        path="otp"
        element={
          email && loginToken ? (
            <InvestorOTP
              emailFun={updateEmail}
              loginFun={updateLoginToken}
              sessionFun={updateSessionToken}
            />
          ) : (
            <Navigate to="/investors/login" replace />
          )
        }
      />

      {/* DASHBOARD */}
      <Route
        path="dashboard"
        element={
          sessionToken ? (
            <InvestorDashboard sessionFun={updateSessionToken} />
          ) : (
            <Navigate to="/investors/login" replace />
          )
        }
      />
    </Routes>
  );
}
