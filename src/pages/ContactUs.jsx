import { useCallback } from "react";
import { ContactUsFaqs } from "../data/FAQs";
import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import { mainPagesLinksList } from "../data/PagesLinkList";
import { MapPin, Mail, Clock } from "lucide-react";
import axios from "axios";
import FAQLayout from "../components/FAQLayout";

export const ContactUs = () => {
  // routes/forms.routes.js (Fix 1)
  const sendMail = useCallback(async (formData) => {
    const api = "http://localhost:3000/api/contact";

    // FIX: Add await here
    try {
      // await axios.post(api, formData);
      const resp = await axios.post(api, formData);
      console.log('Response:', resp.data);
      // You would typically handle success state here
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message
      );
      // You would typically handle error state here
    }
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Create an object from form values
    const { name, email, subject, message } = e.target;
    const formData = {
      name: name.value || "",
      email: email.value || "",
      subject: subject.value || "",
      message: message.value || "",
      website: "Anvi.Co",
    };
    console.table("Form Data:", formData);
    if (name.value && email.value && subject.value && message.value) {
      sendMail(formData);
      e.target.reset();
    }
  }, []);

  return (
    <>
      <main className="w-full">
        <HeroSection
          backgroundImage="/videos/Heroo5_compr.mp4"
          title="Let's Build the Future Together"
          description="Have a question, partnership idea, or project in mind? Get in touch with our team of
                innovation experts and let's create something extraordinary."
          descriptionWidth="650px"
        />

        {/* Section2 */}
        <div className="px-[10px] py-[10px] md:px-[30px] md:py-[40px] lg:px-[80px] lg:py-[80px]">
          <div className="flex flex-col md:flex-row bg-[#F5F4F8] rounded-[20px] p-[20px] lg:p-[30px] gap-[30px] font-dm-sans">
            {/* Contact Info */}
            <div className="p-[20px] md:p-[30px] lg:p-[60px] bg-[#FFFFFF] rounded-[20px] md:w-1/2 md:max-w-[520px] flex-shrink-0">
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
              onSubmit={(e) => handleSubmit(e)}
              className="flex-1 flex flex-col gap-4 w-full mx-auto pt-5 py-10 md:py-10 md:w-1/2 max-w-[600px] flex-shrink-0 place-content-center"
            >
              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-[20px] flex-shrink-0">
                <label htmlFor="name" className="flex flex-col w-full">
                  <span className="text-[16px] text-[#333333] mb-1.5">
                    Name
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="border rounded-[12px] px-3 py-2 w-full"
                  />
                </label>

                <label htmlFor="email" className="flex flex-col w-full">
                  <span className="text-[16px] text-[#333333] mb-1">Email</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
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
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  className="border rounded-[12px] px-3 py-2 w-full"
                />
              </label>

              {/* Message */}
              <label htmlFor="message" className="flex flex-col w-full">
                <span className="text-[16px] text-[#333333] mb-1">Message</span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="border rounded-[12px] px-3 py-2 w-full h-[150px]"
                />
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-[#1E9AB0] text-white rounded-[12px] font-medium"
              >
                Send a Message
              </button>
            </form>
          </div>
        </div>

        {/* Section 3 */}
        <section className="w-full max-w-[1000px] px-8 flex flex-col items-center justify-center text-center gap-[56px]">
          <div className="font-['Wix_Madefor_Display']">
            <p className="text-3xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium">Visit Our Office</p>
            <p className="text-[16px] text-[#465455] font-normal">
              Located in the heart of Hyderabad's tech corridor
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.053305362681!2d78.36793007385417!3d17.45716258344194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cf9bc32c83%3A0x1e85e5cc49998439!2sProfound%20Builders!5e0!3m2!1sen!2sin!4v1760070770156!5m2!1sen!2sin"
            className="w-full h-[450px] rounded-[12px] shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        {/* Section 4 — Questions */}
        <section className="w-full px-5 py-[60px] md:px-[30px] lg:px-[80px] lg:py-[80px] flex flex-col items-center justify-center gap-[64px] font-['Wix_Madefor_Display'] text-center">
          {/* Heading */}
          <div className="flex flex-col gap-[16px] w-full max-w-[480px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] px-4">
            <p className="text-3xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight">
              We’re Here to Help
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#465455] font-normal leading-relaxed">
              Find quick answers to common questions. Still need help? Our team is here
              to support you anytime.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="w-full max-w-[1000px] px-2 sm:px-4 md:px-6 text-left">
            <FAQLayout faqs={ContactUsFaqs} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};
