import React, { useCallback, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { IconsObj } from "../utils/Iconify_icons";
import { mailBackendUrl } from "../data/MailBackendUrl";

const patterns = {
  FullName: "^[A-Za-z ]+$",
  CurrentLocation: "^[A-Za-z0-9 ,.-]+$",
  Email: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",   // ✔ fixed
  PortfolioURL: "^https?:\\/\\/.+$",
};

const JobApplyFormComponent = () => {
  const { jobId } = useParams();
  const fileRef = useRef(null);

  // ------------------- INITIAL FORM DATA (memoized) -------------------
  const initialForm = useMemo(
    () => ({
      FullName: "",
      Phone: "",
      Email: "",
      CurrentLocation: "",
      CurrentCTC: "",
      ExpectedCTC: "",
      PortfolioURL: "",
      Resume: null,
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

    if (!formData.FullName.trim()) newErrors.FullName = "Full Name is required";
    if (!formData.Phone) newErrors.Phone = "Phone number is required";

    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!new RegExp(patterns.Email).test(formData.Email)) {
      newErrors.Email = "Invalid email address";
    }

    if (!formData.CurrentLocation.trim())
      newErrors.CurrentLocation = "Current location is required";

    const current = parseFloat(formData.CurrentCTC);
    const expected = parseFloat(formData.ExpectedCTC);

    if (isNaN(current) || current <= 0)
      newErrors.CurrentCTC = "Enter valid current CTC (in LPA)";
    if (isNaN(expected) || expected <= 0)
      newErrors.ExpectedCTC = "Enter valid expected CTC (in LPA)";

    if (formData.PortfolioURL && !patterns.PortfolioURL.match)
      newErrors.PortfolioURL = "Invalid Portfolio URL";

    if (!formData.Resume) newErrors.Resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // ------------------- HANDLERS -------------------
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;

    // number only for CTC fields
    if (["CurrentCTC", "ExpectedCTC"].includes(name)) {
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handlePhoneChange = useCallback(
    (value) => {
      setFormData((prev) => ({ ...prev, Phone: value }));
    },
    []
  );

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
      setErrors((prev) => ({ ...prev, Resume: "Only PDF or DOC files allowed" }));
    } else {
      setErrors((prev) => ({ ...prev, Resume: "" }));
      setFormData((prev) => ({ ...prev, Resume: file }));
    }
  }, []);

  const removeFile = useCallback(() => {
    setFormData((prev) => ({ ...prev, Resume: null }));
    setErrors((prev) => ({ ...prev, Resume: "" }));
    if (fileRef.current) fileRef.current.value = "";
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validate()) return;

      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          formPayload.append(key, value);
        }
      });

      formPayload.append("JobId", jobId);
      formPayload.append("Website", "Anvi.co");

      try {
        setLoading(true);

        await axios.post(mailBackendUrl.jobApply, formPayload, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        setSuccessMsg("✅ Application submitted successfully!");

        setFormData(initialForm);
        setErrors({});

        if (fileRef.current) fileRef.current.value = "";

        setTimeout(() => setSuccessMsg(""), 5000);
      } catch (error) {
        alert(
          error.response?.data?.message || "Submission failed. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
    [formData, jobId, validate, initialForm]
  );

  // ------------------- INPUT FIELD RENDER -------------------
  const renderInput = useCallback(
    (name, type, placeholder) => {
      const patternValue = patterns[name] || undefined;

      const extraProps = ["CurrentCTC", "ExpectedCTC"].includes(name)
        ? { inputMode: "decimal", min: "0", step: "0.1" }
        : {};

      return (
        <div className="flex flex-col relative">
          <input
            type={type}
            name={name}
            value={formData[name]}
            pattern={patternValue}
            {...extraProps}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={`border-b-[1.77px] px-3 py-2 rounded focus:outline-none focus:border-[#1E9AB0] ${
              errors[name] ? "border-red-400" : "border-b-[#D9D9D9]"
            }`}
          />
          {["CurrentCTC", "ExpectedCTC"].includes(name) && (
            <span className="absolute right-3 text-gray-600">LPA</span>
          )}
          {errors[name] && (
            <span className="text-red-500 text-sm mt-1">*{errors[name]}</span>
          )}
        </div>
      );
    },
    [formData, handleInputChange, errors]
  );

  // ------------------- UI -------------------
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg flex flex-col gap-5 lg:gap-10"
    >
      {renderInput("FullName", "text", "Full Name")}

      <div className="flex flex-col">
        <PhoneInput
          country="in"
          value={formData.Phone}
          onChange={handlePhoneChange}
          inputClass="!w-full border-b-[#D9D9D9] rounded px-3 py-2 focus:border-[#4F46E5]"
        />
        {errors.Phone && (
          <span className="text-red-500 text-sm mt-1">*{errors.Phone}</span>
        )}
      </div>

      {renderInput("Email", "email", "Your Email Address")}
      {renderInput("CurrentLocation", "text", "Current Location")}
      {renderInput("CurrentCTC", "number", "Current CTC (in LPA)")}
      {renderInput("ExpectedCTC", "number", "Expected CTC (in LPA)")}
      {renderInput("PortfolioURL", "url", "Portfolio URL")}

      {/* RESUME UPLOAD */}
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-1">
          Upload your Resume <span className="text-red-600">*</span>
        </label>

        <div className="flex items-center gap-3">
          <input
            ref={fileRef}
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="border border-gray-300 rounded px-3 py-2 cursor-pointer"
          />

          {formData.Resume && (
            <button
              type="button"
              onClick={removeFile}
              className="text-red-600 font-bold text-xl"
            >
              ✕
            </button>
          )}
        </div>

        {errors.Resume && (
          <span className="text-red-500 text-sm mt-1">*{errors.Resume}</span>
        )}
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="group link-bg-icon1 w-[220px] my-4 text-[14px] font-semibold"
      >
        <span>
          {loading ? "Submitting..." : "Submit"}
        </span>
        <i className="rotate-45 transform rotate-0 transition-transform duration-300 group-hover:rotate-90">{IconsObj.arrow}</i>
      </button>

      {successMsg && (
        <p className="text-green-600 text-center font-medium mt-3">
          {successMsg}
        </p>
      )}
    </form>
  );
};

// ------------------- EXPORT WITH React.memo -------------------
export const JobApplyForm = React.memo(JobApplyFormComponent);
