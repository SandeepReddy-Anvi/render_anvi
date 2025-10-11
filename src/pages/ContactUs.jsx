import { useState } from "react";
import { faqs } from "../components/Questions";
import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";

export const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <HeroSection
        backgroundImage="/images/contactus/hero.jpg"
        title="Let's Build the Future Together"
        description="Have a question, partnership idea, or project in mind? Get in touch with our team of
                innovation experts and let's create something extraordinary."
        buttonText="About Us"
        buttonLink="#about"
        descriptionWidth="656px"
      />

      {/* Section2 */}
      <div className="px-[80px] py-[80px]">
        <div className="flex flex-col md:flex-row bg-[#F5F4F8] rounded-[20px] p-[30px] gap-[30px] font-dm-sans">
          {/* Contact Info */}
          <div className="p-[60px] bg-[#FFFFFF] rounded-[20px] w-full md:w-[520px] flex-shrink-0">
            <p className="text-[38px] font-normal text-[#333333]">
              Contact Information
            </p>
            <p className="text-[18px] text-[#757575] font-normal mt-2">
              Have a question? Fill out the form below, and we'll get back to
              you as soon as possible.
            </p>
            <div className="flex flex-col text-[16px] text-[#757575] font-normal mt-[40px] gap-[26px]">
              <p>info@anvi.com</p>
              <p>Profound Builders, Whitefields, Kondapur</p>
              <p>Monday - Friday 09:30AM - 6:30PM</p>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-[20px]">
              <label htmlFor="name" className="flex flex-col w-full">
                <span className="text-[16px] text-[#333333] mb-1.5">Name</span>
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
            <button className="mt-4 px-6 py-3 bg-[#1E9AB0] text-white rounded-[12px] font-medium">
              Send a Message
            </button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <section className="px-[67px] py-[30px] flex flex-col items-center justify-center text-center gap-[56px]">
        <div className="font-['Wix_Madefor_Display']">
          <p className="text-[48px] font-medium">Visit Our Office</p>
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

      {/*Section 4 Questions */}

      <section className="px-[67px] pt-[30px] pb-[60px] flex flex-col items-center justify-center gap-[64px]">
        <div className="flex flex-col gap-[16px] w-[481px] font-['Wix_Madefor_Display'] text-center">
          <p className="text-[48px]">We’re Here to Help</p>
          <p className="text-[16px] text-[#465455] font-normal">
            Find quick answers to common questions. Still need help? Our team is
            here to support you anytime.
          </p>
        </div>
        {/* Question & Answers */}
        <div className="flex flex-col gap-5 w-full max-w-[800px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-[12px] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-4 text-left font-inter text-[16px] font-medium text-[#2B303B] hover:bg-gray-100 transition-colors duration-200"
              >
                {faq.question}
                <span
                  className={`text-2xl transform transition-transform duration-100 ${
                    openIndex === index ? "" : "rotate-180"
                  }`}
                >
                  ^
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-[16px] text-[#465455] font-normal font-dm-sans">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
