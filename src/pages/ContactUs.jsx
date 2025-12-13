import { useCallback, useState } from "react";
import { ContactUsFaqs } from "../data/FAQs";
import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import { mainPagesLinksList } from "../data/PagesLinkList";
import { MapPin, Mail, Clock } from "lucide-react";
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
      console.log('Response:', resp.data);
      setFeedback({
        type: "success",
        message: "✅ Message sent successfully!",
      });
      // You would typically handle success state here
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message
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

    const submitData = new FormData()
    submitData.append("FullName", formData.Name)
    submitData.append("Email", formData.Email)
    submitData.append("Message", formData.Message)
    submitData.append("Subject", formData.Subject)
    submitData.append("Website", "Anvi.Co")
    sendMail(submitData);
  };

  return (
    <>
      <main className="w-full">
        <HeroSection
          backgroundImage="/videos/Heroo5_org.mp4"
          title="Let's Build the Future Together"
          description="Have a question, partnership idea, or project in mind? Get in touch with our team of
                innovation experts and let's create something extraordinary."
          descriptionWidth="650px"
        />

        <GradientText
          ourTitle = "Connect With Anvi"
          gradientTitle = "Let’s Build What’s Next, Together."
          ourDescription ="Whether you’re exploring solutions, seeking partnerships, or want to know how our technology fits your needs  our team is ready to connect. Let’s build the future together, solve meaningful problems, and create lasting impact."
        />

        {/* Section3 */}
        <div className="w-full px-[20px] md:px-[40px] lg:px-[60px] py-10 md:py-[20px] lg:py-[30px] ">
          <div className="flex flex-col md:flex-row bg-[#F5F4F8] rounded-[20px] p-[20px] lg:p-[30px] gap-[30px] lg:gap-[40px] xl:gap-[80px]  font-dm-sans justify-center">
            {/* Contact Info */}
            <div className="p-[20px] md:p-[30px] lg:p-[50px] bg-[#FFFFFF] rounded-[20px] md:w-1/2 md:max-w-[500px] flex-shrink-0">
              <p className="text-3xl sm:text-3xl md:text-4xl lg:text-[38px] font-normal text-[#333333]">
                Contact Information
              </p>
              <p className="text-[18px] text-[#757575] font-normal mt-2">
                Have a question? Fill out the form below, and we'll get back to
                you as soon as possible.
              </p>
              <div className="flex flex-col text-[16px] text-[#757575] font-normal mt-[20px] md:mt-[40px] gap-[15px] md:gap-[26px]">
                <div className="flex items-center gap-[12px]">
                  <Mail
                    className="w-[18px] h-[18px] flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <p>info@anvi.com</p>
                </div>
                <div className="flex items-start gap-[12px]">
                  <MapPin
                    className="w-[18px] h-[18px] flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <p>
                    Anvi Robotics, 1st Floor, Profound Buliders, whitefields,
                    Kondapur, Telangana 500084
                  </p>
                </div>
                <div className="flex items-start gap-[12px]">
                  <Clock
                    className="w-[18px] h-[18px] flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <p>Monday - Friday 09:30AM - 6:30PM</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 w-full mx-auto md:mx-0 md:w-1/2 max-w-[600px] flex-shrink-0 place-content-center"
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
              <div className="flex flex-col md:flex-row gap-[20px] flex-shrink-0">
                <label htmlFor="name" className="flex flex-col w-full">
                  <span className="text-[16px] text-[#333333] mb-1.5">
                    Name
                  </span>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="border rounded-[12px] px-3 py-2 w-full"
                  />
                </label>

                <label htmlFor="email" className="flex flex-col w-full">
                  <span className="text-[16px] text-[#333333] mb-1">Email</span>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="border rounded-[12px] px-3 py-2 w-full"
                  />
                </label>
              </div>

              {/* Subject */}
              <label htmlFor="subject" className="flex flex-col w-full">
                <span className="text-[16px] text-[#333333] mb-1">Subject</span>
                <input
                  type="text"
                  name="Subject"
                  value={formData.Subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="border rounded-[12px] px-3 py-2 w-full"
                />
              </label>

              {/* Message */}
              <label htmlFor="message" className="flex flex-col w-full">
                <span className="text-[16px] text-[#333333] mb-1">Message</span>
                <textarea
                  id="message"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="border rounded-[12px] px-3 py-2 w-full h-[150px]"
                />
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`group link-bg-icon w-[200px] ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "link-bg-icon"
                }`}
              >
                {loading ? ("Sending...") : 
                  (<span className="flex items-center gap-2 ">
                    Send a Message <i className="rotate-45 transform rotate-0 transition-transform duration-300 group-hover:rotate-90">{IconsObj.arrow}</i>
                  </span>)
                }
              </button>
            </form>
          </div>
        </div>

        {/* Section 4 */}
        <section className="w-full px-[20px] md:px-[40px] lg:px-[60px] py-4 md:py-[20px] lg:py-[40px] flex flex-col items-start justify-center gap-[35px]">
          <div className="font-['Wix_Madefor_Display']">
            <p className="text-3xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium">
              Visit Our Office
            </p>
            <p className="text-[16px] text-[#465455] font-normal">
              Located in the heart of Hyderabad's tech corridor
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.053305362681!2d78.36793007385417!3d17.45716258344194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cf9bc32c83%3A0x1e85e5cc49998439!2sProfound%20Builders!5e0!3m2!1sen!2sin!4v1760070770156!5m2!1sen!2sin"
            className="w-full h-[450px] rounded-[12px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        {/* Section 5 — Questions */}
        <section className="w-full">
          <FAQLayout faqs={ContactUsFaqs} />
        </section>
        
      
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};