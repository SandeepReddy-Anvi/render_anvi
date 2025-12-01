import React from "react";

const GradientText = (props) => {
  const {
    ourTitle = "",
    gradientTitle = "",
    ourDescription = "",
    className = "",
  } = props;

  return (
    <div
      className={`w-full max-w-[1600px] mx-auto flex flex-col justify-start font-['Wix_Madefor_Display'] gap-[30px] py-8 md:py-14 py:mb-20 px-[20px] md:px-[30px] 2xl:px-[80px] ${className}`}
    >
      {/* Normal Title */}
      {ourTitle && (
        <h4 className="text-[#000000] text-[20px] md:text-[24px] lg:text-[26px] font-[600] leading-normal tracking-[-0.02em]">
          {ourTitle}
        </h4>
      )}

      {/* Gradient Title */}
      {gradientTitle && (
        <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-[52px] font-bold bg-gradient-to-r from-[#8A38F5] to-[#F81442] bg-clip-text text-transparent pb-3">
          {gradientTitle}
        </h2>
      )}

      {/* Description */}
      {ourDescription && (
        <p className="max-w-[1204px] text-[18px] md:text-[20px] leading-[36px] text-[#000000]">
          {ourDescription}
        </p>
      )}
    </div>
  );
};

export default GradientText;