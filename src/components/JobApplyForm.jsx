import React, { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { IconsObj } from "../utils/Iconify_icons";

export const JobApplyForm = () => {
  const { jobId } = useParams();

  const initialForm = useMemo(
    () => ({
      fullName: "",
      phone: "",
      email: "",
      currentLocation: "",
      currentCTC: "",
      expectedCTC: "",
      portfolioURL: "",
      resume: null,
    }),
    []
  );

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // ------------------- VALIDATION -------------------
  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.currentLocation.trim())
      newErrors.currentLocation = "Current location is required";

    // Parse CTCs as float
    const currentCTCValue = parseFloat(formData.currentCTC);
    const expectedCTCValue = parseFloat(formData.expectedCTC);

    if (isNaN(currentCTCValue) || currentCTCValue <= 0)
      newErrors.currentCTC = "Enter valid current CTC (in LPA)";
    if (isNaN(expectedCTCValue) || expectedCTCValue <= 0)
      newErrors.expectedCTC = "Enter valid expected CTC (in LPA)";

    if (
      formData.portfolioURL &&
      !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(formData.portfolioURL)
    ) {
      newErrors.portfolioURL = "Invalid Portfolio URL";
    }

    if (!formData.resume) newErrors.resume = "Resume is required";

    // console.log("🧾 Validating:", formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // ------------------- HANDLERS -------------------
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handlePhoneChange = useCallback((phone) => {
    setFormData((prev) => ({ ...prev, phone }));
  }, []);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    if (
      file &&
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) {
      setErrors((prev) => ({
        ...prev,
        resume: "Only PDF or DOC files allowed",
      }));
    } else {
      setErrors((prev) => ({ ...prev, resume: "" }));
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validate()) return;

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "currentCTC" || key === "expectedCTC") {
          data.append(key, parseFloat(value)); // ensure numeric format
        } else {
          data.append(key, value);
        }
      });
      data.append("jobId", jobId);
      data.append("website", "anvi.co");

      try {
        setLoading(true);
        console.log("🧾 Validating:", data);
        const jobApplyApi = "https://anvi-mail-backend-fast.onrender.com/apply";
        const response = await axios.post(jobApplyApi, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("✅ Response:", response.data);

        setSuccessMsg("✅ Application submitted successfully!");
        // setTimeout(() => setSuccessMsg(""), 5000);
        setFormData(initialForm);
        setErrors({});
      } catch (err) {
        console.error("❌ Axios Error:", err);

        if (err.response) {
          console.error("🔴 Server responded:", err.response.data);
          alert(
            `Server Error: ${
              err.response.data.message || "Something went wrong."
            }`
          );
        } else if (err.request) {
          console.error("⚠️ No response received:", err.request);
          alert("No response from server. Please check your connection.");
        } else {
          console.error("⚡ Error setting up request:", err.message);
          alert("Unexpected error occurred. Try again later.");
        }
      } finally {
        setLoading(false);
      }
    },
    [formData, jobId, validate, initialForm]
  );

  // ------------------- FORM FIELD RENDER -------------------
  const renderInput = useCallback(
    (name, type, placeholder) => (
      <div className="flex flex-col">
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`border-b-[1.77px] border-b-[#D9D9D9] rounded px-3 py-2 focus:outline-none focus:border-[#1E9AB0] ${
            errors[name] ? "border-red-400" : ""
          }`}
        />
        {errors[name] && (
          <span className="text-red-500 text-sm mt-1">*{errors[name]}</span>
        )}
      </div>
    ),
    [formData, handleInputChange, errors]
  );

  // ------------------- RENDER -------------------
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg flex flex-col gap-5"
    >
      {renderInput("fullName", "text", "Full Name")}

      {/* Phone Input */}
      <div className="flex flex-col">
        <PhoneInput
          country={"in"}
          value={formData.phone}
          onChange={handlePhoneChange}
          inputClass="!w-full border-b-[1.77px] border-b-[#D9D9D9] rounded px-3 py-2 focus:border-[#4F46E5]"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm mt-1">*{errors.phone}</span>
        )}
      </div>

      {renderInput("email", "email", "Your Email Address")}
      {renderInput("currentLocation", "text", "Current Location")}
      {renderInput("currentCTC", "number", "Current CTC (in LPA)")}
      {renderInput("expectedCTC", "number", "Expected CTC (in LPA)")}
      {renderInput(
        "portfolioURL",
        "url",
        "Portfolio URL (Behance, Dribble, etc.)"
      )}

      {/* Resume Upload */}
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-1">
          Upload your Resume <i className="text-red-600">*</i> (PDF/DOC)
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className="border border-gray-300 rounded px-3 py-2 cursor-pointer"
        />
        {errors.resume && (
          <span className="text-red-500 text-sm mt-1">*{errors.resume}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="link-bg-icon w-max flex items-center gap-2 px-6 py-2 rounded-md text-white hover:bg-[#1E9AB0] transition"
      >
        {loading ? "Submitting..." : "Submit"}
        <i className="rotate-45">{IconsObj.arrow}</i>
      </button>

      {successMsg && (
        <p className="text-green-600 text-center font-medium mt-3 animate-fade-in">
          {successMsg}
        </p>
      )}
    </form>
  );
};
