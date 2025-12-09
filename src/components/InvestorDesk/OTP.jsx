import { useState, useRef, useEffect } from "react";
import { verifyOTP } from "../../services/investorService";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function OTP() {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;

  // AUTO-MOVE
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOTP(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // BACKSPACE
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // VERIFY OTP
  const handleVerifyOTP = async () => {
    try {
      const otpString = otp.join("");

      const res = await verifyOTP(email, otpString);

      localStorage.setItem("investorToken", res.data.token);
      localStorage.setItem("investorSector", res.data.sector);

      navigate("/investors/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-screen">
        <img
          loading="lazy"
          src="/images/careers/career.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Center Card */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen font-['Wix Madefor Display']">
        <div className="bg-[#FFFFFF] p-6 rounded-[24px]">

          {/* Logo */}
          <img
            src="/logos/anvi logo.png"
            className="w-[87px] h-[52px] object-contain"
          />
          <Icon icon="iconamoon:shield-yes" strokeWidth="1px" color="#344054" width="33" height="33"
            className="my-3"
          />
          {/* <ShieldCheck className="my-3 text-[#344054]w-[29px] h-[33px]"/> */}

          <h2 className="text-[22px] font-semibold text-[#000000D9]">
            OTP Verification
          </h2>

          <p className="text-[14px] font-semibold my-4 text-[#000000D9]">
            We’ve sent a 6-digit verification code to your <br />
            registered email.
          </p>

          {/* OTP BOXES */}
          <div className="flex justify-center gap-2 my-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputsRef.current[index] = el)}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-lg font-semibold rounded bg-white border border-[#D7D7D7]"
              />
            ))}
          </div>

          {/* TIMER PLACEHOLDER */}
          <p className="text-sm text-gray-700 font-semibold">01:59</p>

          {/* VERIFY BUTTON */}
          <button
            onClick={handleVerifyOTP}
            className="w-full mt-4 p-3 bg-[#2383EB] rounded text-white font-semibold hover:bg-blue-700"
          >
            Verify
          </button>

          {/* RESEND */}
          <p className="text-[15px] font-semibold mt-4 text-[#0000009C] text-center">
            Didn't receive a code? {" "}
            <span className="text-[#000000CC] cursor-pointer font-semibold">
              Resend Code
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
