import { useCallback, useState } from "react";
import { ContactUsFaqs } from "../data/FAQs";
import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import { MapPin, Mail } from "lucide-react";
import axios from "axios";
import FAQLayout from "../components/FAQLayout";
import GradientText from "../components/GradientText";
import { IconsObj } from "../utils/Iconify_icons";
import { mailBackendUrl } from "../data/MailBackendUrl";

const initialFormData = {
  Name: "",
  Email: "",
  Subject: "",
  Message: "",
};

const ourDescription = [
  "Whether you’re exploring partnerships, collaborations, or looking to understand how ANVI can support your vision, our team is here to help. We work closely with organisations, innovators, and creators to turn ideas into purposeful, future-ready solutions.",
  "From robotics and space systems to lifestyle innovation and immersive media, we welcome conversations that push boundaries and open new possibilities.",
  "Reach out to us  we’ll connect you with the right team, guide you through our process, and ensure you have everything you need to take the next step with confidence.",
];

export const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormData || {});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  // Validate email format
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // routes/forms.routes.js (Fix 1)
  const sendMail = useCallback(async (data) => {
    const api = mailBackendUrl.contact;
    console.log("Contact API:", api);
    setLoading(true);
    setFeedback({ type: "", message: "" });

    // FIX: Add await here
    try {
      // await axios.post(api, formData);
      const resp = await axios.post(api, data);
      console.log("Response:", resp.data);
      setFeedback({
        type: "success",
        message: "✅ Message sent successfully!",
      });
      // You would typically handle success state here
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message,
      );
      setFeedback({
        type: "error",
        message: "❌ Failed to send message. Please try again later.",
      });
      // You would typically handle error state here
    } finally {
      setLoading(false);
      setFormData(initialFormData);
    }
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { Name, Email, Subject, Message } = formData;

    // Validation logic
    if (!Name.trim() || !Email.trim() || !Subject.trim() || !Message.trim()) {
      setFeedback({ type: "error", message: "⚠️ All fields are required." });
      return;
    }

    if (!isValidEmail(Email)) {
      setFeedback({ type: "error", message: "⚠️ Please enter a valid email." });
      return;
    }

    // All good → send
    // console.log(formData);

    const submitData = new FormData();
    submitData.append("FullName", formData.Name);
    submitData.append("Email", formData.Email);
    submitData.append("Message", formData.Message);
    submitData.append("Subject", formData.Subject);
    submitData.append("Website", "Anvi.Co");
    sendMail(submitData);
  };

  return (
    <>
      <main className="w-full bg-[#FFFFFF]">
        <HeroSection
          backgroundImage="/videos/Heroo5_org.mp4"
          title="Let's Build the Future Together"
          description="Have a question, partnership idea, or project in mind? Get in touch with our team of
                innovation experts and let's create something extraordinary."
          descriptionWidth="650px"
        />

        <GradientText
          ourTitle="Let’s Build What’s Next, Together."
          ourDescription={ourDescription}
        />

        {/* Section3 */}
        <div className="w-full px-[20px] md:px-[40px] lg:px-[60px] py-10 md:py-[20px] lg:py-[30px] bg-gradient-to-b from-[#F9FAFB] to-[#FFFFFF]">
          <h2 className="text-[34px] md:text-[38px] lg:text-[46px] md:text-center text-[#000000] font-medium w-full md:max-w-[890px] mx-auto leading-[57px] pt-5 md:pt-10 mb-10 md:mb-20">
            Contact us for innovative and powerful engineering collaborations.
          </h2>
          <div className="flex flex-col md:flex-row bg-[#FFFFFF] rounded-[20px] p-[20px] lg:p-[30px] gap-[30px] xl:gap-[80px] justify-center">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col gap-4 mx-auto md:mx-0  w-full md:w-3/5 lg:max-w-[800px] flex-shrink-0 justify-center"
            >
              {/* Feedback Message */}
              {feedback.message && (
                <div
                  className={`p-3 rounded-md text-center text-[15px] ${
                    feedback.type === "error"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-[20px] flex-shrink-0 font-medium">
                <label htmlFor="name" className="flex flex-col w-full">
                  <span className="text-[16px] text-[#212121] mb-1.5">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="border-b py-2 w-full text-[16px] text-[#757575]"
                  />
                </label>

                <label htmlFor="email" className="flex flex-col w-full">
                  <span className="text-[16px] text-[#212121] mb-1">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="border-b py-2 w-full text-[16px] text-[#757575]"
                  />
                </label>
              </div>

              {/* Subject */}
              <label
                htmlFor="subject"
                className="flex flex-col w-full font-medium my-4"
              >
                <span className="text-[16px] text-[#212121] mb-1">Subject</span>
                <input
                  type="text"
                  name="Subject"
                  value={formData.Subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="border-b py-2 w-full text-[16px] text-[#757575]"
                />
              </label>

              {/* Message */}
              <label
                htmlFor="message"
                className="flex flex-col w-full font-medium"
              >
                <span className="text-[16px] text-[#212121] mb-1">Message</span>
                <textarea
                  id="message"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="Please provide a detailed description of your request"
                  className="border-b py-2 w-full h-[150px] text-[16px] text-[#757575]"
                />
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`group link-bg-icon1 w-[220px] my-4 text-[14px] font-semibold ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "link-bg-icon1"
                }`}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <span className="flex items-center gap-2 ">
                    Submit your request{" "}
                    <i className="rotate-45 transform rotate-0 transition-transform duration-300 group-hover:rotate-90">
                      {IconsObj.arrow}
                    </i>
                  </span>
                )}
              </button>

              <p className="font-semibold text-[16px] text-[#757575] w-full md:w-[290px]">
                For any support or inquiries, feel free to email us or visit our
                office.
              </p>

              <div className="flex flex-col md:flex-row gap-4 text-[18px] font-medium text-[#000000] mt-4 flex-wrap">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#CD0054] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <a className="w-[418px]">
                    Anvi Rrobotics, 1st Floor, Profound Buliders, whitefields,
                    Kondapur, Telangana 500081
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#CD0054] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <p>info@anvi.co</p>
                </div>
              </div>
            </form>
            <div className="md:w-2/5 lg:max-w-[350px] h-max[250px] h-full aspect[9/16] w-full flex justify-center md:justify-end">
              <img
                src="/images/contactUs.png"
                className="w-full h-full max-md:aspect-[4/3] object-cover "
              />
            </div>
          </div>
        </div>

        {/* Section 4 — Questions */}
        <section className="w-full">
          <FAQLayout faqs={ContactUsFaqs} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};
