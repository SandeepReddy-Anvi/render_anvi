import { useState } from "react";
import { login } from "../../services/investorService";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginPassword() {
  const [password, setPwd] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      localStorage.setItem("investorToken", res.data.token);
      localStorage.setItem("investorSector", res.data.sector);
      navigate("/investors/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
