import { useState } from "react";
import { setPassword, login } from "../../services/investorService";
import { useNavigate, useLocation } from "react-router-dom";

export default function SetPassword() {
  const [password, setPwd] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSetPassword = async () => {
    try {
      await setPassword(email, password);
      // Automatically login after setting password
      const res = await login(email, password);
      localStorage.setItem("investorToken", res.data.token);
      localStorage.setItem("investorSector", res.data.sector);
      navigate("/investors/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Error setting password");
    }
  };

  return (
    <div>
      <h2>Set Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button onClick={handleSetPassword}>Set Password & Login</button>
    </div>
  );
}
