import React from "react";

const GradientText = ({
  ourTitle = "",
  para = "",
  ourDescription = [],
  className = "",
}) => {

  const paragraphs = Array.isArray(ourDescription)
    ? ourDescription
    : [ourDescription];

  return (
    <div
      className={`w-full flex flex-col py-14 md:py-[100px] px-[20px] md:px-[60px] 2xl:px-[100px] ${className}`}
    >
      {/* Title */}
      {ourTitle && (
        <h4 className="text-[#CD0054] text-[20px] md:text-[24px] lg:text-[26.6px] font-bold tracking-[-0.02em] mb-6">
          {ourTitle}
        </h4>
      )}

      <p className="text-[18px] md:text-[20px] font-semibold text-[#000000] pr-0 lg:pr-10 2xl:pr-[300px] py-3">
        {para}
      </p>

      {/* Description */}
      {paragraphs.map((para, index) => (
        <p
          key={index}
          className="text-[18px] md:text-[20px] font-medium text-[#000000] pr-0 lg:pr-10 2xl:pr-[300px] mb-6"
        >
          {para}
        </p>
      ))}
    </div>
  );
};

export default GradientText;
