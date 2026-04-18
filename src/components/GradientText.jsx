import React from "react";

const GradientText = ({
  header = "",
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
      {header && (
        <span className="flex items-center gap-2 text-[14px] text-[#CD0054] font-bold font-wix uppercase mb-[24px]">
          <span className="h-[2px] w-6 bg-[#CD0054]"></span>
          {header}
        </span>
      )}

      {/* Title */}
      {ourTitle && (
        <h4 className="text-[#100000] text-[18px] md:text-[20x] font-bold leading-[33px] mb-[24px]">
          {ourTitle}
        </h4>
      )}

      {para && (
        <p className="text-[16px] md:text-[18px] font-[500] text-[#100000] pr-0 lg:pr-10 2xl:pr-[300px] pb-[24px] leading-[33px]">
          {para}
        </p>
      )}

      {/* ✅ Mobile Description */}
      <div className="block md:hidden">
        {mobileParagraphs.map((text, index) => (
          <p
            key={index}
            className="text-[16px] font-[500] text-[#100000] mb-4 leading-[33px]"
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
            className="text-[16px] md:text-[18px] font-[500] text-[#100000] pr-0 lg:pr-10 2xl:pr-[300px] mb-6 leading-medium"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default GradientText;
