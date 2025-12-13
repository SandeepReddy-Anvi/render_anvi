import { useState } from "react";
import { sendOTP } from "../../services/investorAuth";

export default function InvestorLogin(props) {
  const { emailFun, loginFun } = props;

  const [email, setEmail] = useState("");

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await sendOTP(email);
      console.log(response);
      if (response.status === 200) {
        // localStorage.setItem("investorEmail", response.data.email);
        // localStorage.setItem("investorToken", response.data.sessionToken);
        // navigate("/investors/otp");
        emailFun(response.data.email, true)
        loginFun(response.data.sessionToken, true)
      }
      else {
        emailFun('', false)
        loginFun('', false)
      }
    } catch (err) {
      alert("Failed to send OTP");
      emailFun('', false)
      loginFun('', false)
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 h-screen">
        <img
          loading="lazy"
          src="/images/investors/bg.png"
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen font-['Wix Madefor Display']">
        <div className="bg-[#FFFFFF] p-6 rounded-[24px]">
          <img
            src="/logos/anvi_logo.png"
            className="w-[87px] h-[52px] object-fit"
          />
          <h2 className="text-[22px] font-semibold my-6 text-[#000000D9]">Log in to Investors Desk </h2>

          <label className="text-[13.06px] font-semibold text-[#000000D9]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-sm p-3 mt-1 mb-8 rounded bg-[#FFFFFF] backdrop-blur border border-[#0070D5]"
            style={{
              boxShadow: "0 0 3px 3px #1890FF33"
            }}
          />

          <button
            onClick={handleSendOTP}
            className="w-full max-w-sm p-3 bg-[#2383EB] hover:bg-blue-700 rounded text-white font-semibold"
          >
            Send OTP
          </button>
        </div>
      </div>
    </section>
  );
}
