import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQLayout = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-[800px] mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-[#E5E7EB] rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center px-4 py-4 text-left font-inter text-[16px] font-medium text-[#2B303B] hover:bg-gray-100 transition-colors duration-200"
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
            <div className="px-6 py-4 text-[16px] text-[#465455] font-normal font-dm-sans border-t border-[#E5E7EB] bg-[#FAFAFA]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQLayout;
