import { useState } from "react";
import { useParams } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { IconsObj } from "../utils/Iconify_icons";

//   const formDetailsFormat = {
//     jobId: "...",
//     fullName: "...",
//     phone: "...",
//     email: "...",
//     currentLocation: "...",
//     currentCTC: "...",
//     expectedCTC: "...",
//     portfolioURL: "...",
//     resume: "file",
//   };

export const JobApplyForm = () => {
  const { jobId } = useParams(); // Get jobId from URL
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    currentLocation: "",
    currentCTC: "",
    expectedCTC: "",
    portfolioURL: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.currentLocation)
      newErrors.currentLocation = "Current location is required";
    if (!formData.currentCTC) newErrors.currentCTC = "Current CTC is required";
    if (!formData.expectedCTC)
      newErrors.expectedCTC = "Expected CTC is required";
    if (
      formData.portfolioURL &&
      !/^https?:\/\/\S+$/.test(formData.portfolioURL)
    ) {
      newErrors.portfolioURL = "Portfolio URL is invalid";
    }
    if (!formData.resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    data.append("jobId", jobId); // Include jobId in submission

    try {
      setLoading(true);
      await axios.post("/api/job-apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccessMsg("Application submitted successfully!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        currentLocation: "",
        currentCTC: "",
        expectedCTC: "",
        portfolioURL: "",
        resume: null,
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg flex flex-col gap-5"
    >
      {/* Full Name */}
      <div className="flex flex-col">
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className="border-b-[1.77px] border-b-[#D9D9D9] rounded px-3 py-2"
          placeholder="Full Name"
        />
        {errors.fullName && (
          <span className="text-red-500 text-sm">*{errors.fullName}</span>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <PhoneInput
          country={"in"}
          value={formData.phone}
          onChange={(phone) => setFormData({ ...formData, phone })}
          inputClass="border-b-[1.77px] border-b-[#D9D9D9] rounded px-3 py-2"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">*{errors.phone}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border-b-[1.77px] border-b-[#D9D9D9] rounded px-3 py-2"
          placeholder="Your Email Address"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">*{errors.email}</span>
        )}
      </div>

      {/* Current Location */}
      <div className="flex flex-col">
        <input
          type="text"
          value={formData.currentLocation}
          onChange={(e) =>
            setFormData({ ...formData, currentLocation: e.target.value })
          }
          className="border-b-[1.77px] border-b-[#D9D9D9] rounded px-3 py-2"
          placeholder="Current Location"
        />
        {errors.currentLocation && (
          <span className="text-red-500 text-sm">
            *{errors.currentLocation}
          </span>
        )}
      </div>

      {/* Current CTC */}
      <div className="flex flex-col">
        <input
          type="text"
          value={formData.currentCTC}
          onChange={(e) =>
            setFormData({ ...formData, currentCTC: e.target.value })
          }
          className="border-b-[1.77px] border-b-[#D9D9D9] rounded px-3 py-2"
          placeholder="Current CTC"
        />
        {errors.currentCTC && (
          <span className="text-red-500 text-sm">*{errors.currentCTC}</span>
        )}
      </div>

      {/* Expected CTC */}
      <div className="flex flex-col">
        <input
          type="text"
          value={formData.expectedCTC}
          onChange={(e) =>
            setFormData({ ...formData, expectedCTC: e.target.value })
          }
          className="border-b-[1.77px] border-b-[#D9D9D9] rounded px-3 py-2"
          placeholder="Expected CTC"
        />
        {errors.expectedCTC && (
          <span className="text-red-500 text-sm">*{errors.expectedCTC}</span>
        )}
      </div>

      {/* Portfolio URL */}
      <div className="flex flex-col">
        <input
          type="url"
          value={formData.portfolioURL}
          onChange={(e) =>
            setFormData({ ...formData, portfolioURL: e.target.value })
          }
          className="border-b-[1.77px] border-b-[#D9D9D9] rounded px-3 py-2"
          placeholder="Add Portfolio URL (Behance, Dribble, Drive, etc.)"
        />
        {errors.portfolioURL && (
          <span className="text-red-500 text-sm">*{errors.portfolioURL}</span>
        )}
      </div>

      {/* Resume Upload */}
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">
          Upload your Resume here <i className="text-red-600">*</i> (PDF/DOC)
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className="border border-gray-300 rounded px-3 py-2"
        />
        {errors.resume && (
          <span className="text-red-500 text-sm">*{errors.resume}</span>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={loading} className="link-bg-icon w-max">
        {loading ? "Submitting..." : "Submit"}
        <i className="rotate-45">{IconsObj.arrow}</i>
      </button>

      {successMsg && (
        <p className="text-green-600 text-center mt-3">{successMsg}</p>
      )}
    </form>
  );
};
