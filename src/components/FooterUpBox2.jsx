import React, { useState } from "react";
import axios from "axios";
import { mailBackendUrl } from "../data/MailBackendUrl";

export const FooterUpBox2 = ({ info }) => {
  const data = info || {};
  const { head, para } = data;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  if (!head) return null;

  const handleSubscribe = async () => {
  if (!email) {
    setStatus({
      type: "error",
      message: "Please enter a valid email address.",
    });
    return;
  }

  try {
    setStatus({ type: "loading", message: "Subscribing..." });

      const subcribeapi = mailBackendUrl.subscribe;
      // console.log(subcribeapi)
      const formData = new FormData();
      formData.append("Website", "ANVI.CO") //  || window.location.hostname ||);
      formData.append("Email", email);

      const res = await axios.post(subcribeapi, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

    if (res.data.status === "Success") {
      setStatus({ type: "success", message: "Subscribed successfully!" });
      setEmail("");
    } else {
      setStatus({
        type: "error",
        message: "Subscription failed. Try again.",
      });
    }
  } catch (err) {
    console.error("Subscription error:", err);
    setStatus({
      type: "error",
      message: "Something went wrong. Please try again later.",
    });
  }
};

  return (
    < section  
      className="w-full min-h-[376px] max-h-auto flex flex-col justify-center text-center align-middle gap-[16px] relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImag: "url(/images/footer.jpg)" }}
    >
      <div
        className="bg-cover bg-center h-[101%] bg-no-repeat absolute inset-0 -z-2"
        style={{ backgroundImage: "url(/images/footer.jpg)" }}
      ></div>

      <div className="dark-bg-blue w-full h-[101.3%] absolute inset-0 mix-blend-multiply bg-[#1E1E1EF0] -z-1"></div>
      <h2 className="text-[46px] text-[#FFFFFF] sticky z-3">{head}</h2>
      <p
        className="text-[16px] max-w-[412px] text-[#fff] font-medium leading-[24px] text-center mx-auto sticky z-3"
      >
        {para}
      </p>

      {/* Subscribe Input */}
      <div className="sticky z-3 flex justify-center align-middle gap-[12px] mt-[40px] flex-wrap px-4">
        <input
          type="email"
          id="subscribe-email"
          name="subscribe-email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-[1px] border-[#E8EBEE] bg-[#fff] w-full max-w-[337px] rounded-[10px] text-[12px] text-[#73808C] px-[18px] py-[8px] focus:outline-none focus:border-[#2EACB8]"
        />
        <button
          type="button"
          className="link-bg-icon1 w-[110px] font-semibold text-[14px] px-4"
          onClick={handleSubscribe}
        >
          <span>{status.type === "loading" ? "..." : "Subscribe"}</span>
        </button>
      </div>

      {/* Status Message */}
      {status.message && (
        <p
          className={`text-[14px] self-center absolute bottom-[5%] sm:bottom-[10%] ${
            status.type === "success"
              ? "text-green-400"
              : status.type === "error"
              ? "text-red-400"
              : "text-gray-300"
          }`}
        >
          {status.message}
        </p>
      )}
    </section >
  );
};