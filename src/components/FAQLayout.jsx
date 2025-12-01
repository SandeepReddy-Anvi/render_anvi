import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQLayout = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between font-['Wix_Madefor_Display'] gap-16 md:gap-[20px] p-[20px] md:p-[40px] lg:p-[60px]">
    
      {/* LEFT TEXT */}
      <div className="flex flex-col gap-4 md:gap-[16px] w-full md:w-[470px]">
        <span className="flex items-center gap-2 text-[#000000]">
          <span className="h-[1px] w-4 bg-[#000000]"></span>
          FAQ
        </span>
        <p className="text-3xl sm:text-3xl md:text-4xl lg:text-[46px] text-[#1F1F1F] font-medium leading-tight lg:leading-[52px]">
          Answer to your most common questions
        </p>
      </div>

      {/* Right Questions*/}
      <div className="flex flex-col gap-5 w-full max-w-[700px] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-6 text-left font-inter text-[16px] font-medium text-[#2B303B]"
            >
              {faq.question}
              <span
                className={`text-2xl transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown />
              </span>
            </button>

            {openIndex === index && (
              <div className="pl-4 pr-24 pb-4 text-[14px] text-[#282828] font-normal bg-white leading-tight">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQLayout;