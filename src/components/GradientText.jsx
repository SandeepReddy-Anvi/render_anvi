import React from "react";

const GradientText = ({
  ourTitle = "",
  para = "",
  ourDescription = [],
  mobileDescription = null, // 👈 NEW
  className = "",
}) => {
  const desktopParagraphs = Array.isArray(ourDescription)
    ? ourDescription
    : [ourDescription];

  const mobileParagraphs = mobileDescription
    ? Array.isArray(mobileDescription)
      ? mobileDescription
      : [mobileDescription]
    : desktopParagraphs; // fallback

  return (
    <div
      className={`w-full flex flex-col py-14 md:py-[100px] px-[20px] md:px-[60px] 2xl:px-[100px] ${className}`}
    >
      {/* Title */}
      {ourTitle && (
        <h4 className="text-[#CD0054] text-[20px] md:text-[24px] lg:text-[28.6px] font-[700] leading-[36px] font-wix mb-[24px]">
          {ourTitle}
        </h4>
      )}

      {para && (
        <p className="text-[16px] md:text-[20px] font-[500] text-[#100000] pr-0 lg:pr-10 2xl:pr-[300px] pb-[24px]">
          {para}
        </p>
      )}

      {/* ✅ Mobile Description */}
      <div className="block md:hidden">
        {mobileParagraphs.map((text, index) => (
          <p
            key={index}
            className="text-[16px] font-[400] text-[#100000] mb-4 leading-[33px]"
          >
            {text}
          </p>
        ))}
      </div>

      {/* ✅ Desktop / Tablet Description */}
      <div className="hidden md:block">
        {desktopParagraphs.map((text, index) => (
          <p
            key={index}
            className="text-[16px] md:text-[18px] font-[400] text-[#100000] pr-0 lg:pr-10 2xl:pr-[300px] mb-6 leading-[33px]"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default GradientText;
