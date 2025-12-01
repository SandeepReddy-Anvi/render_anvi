import React from "react";

const GradientText = (props) => {
    const{
    ourTitle="",
    gradientTitle="",
    ourDescription="",
    className = "",
  } = props;

    return (
        <div className={`flex flex-col font-['Wix_Madefor_Display'] gap-[17px] py-8 md:py-14 py:mb-20 px-4 md:px-[80px] ${className}`}>
      
            {/* Normal Title */}
            {ourTitle && (
                <h2 className="text-[#000000] text-[20px] md:text-[24px] lg:text-[26px] font-bold leading-normal tracking-[-0.02em]">
                {ourTitle}
                </h2>
            )}

            {/* Gradient Title */}
            {gradientTitle && (
                <h2 className="my-2 md:my-4 lg:my-6 text-4xl sm:text-4xl md:text-4xl lg:text-[52px] font-bold bg-gradient-to-r from-[#8A38F5] to-[#F81442] bg-clip-text text-transparent pb-3">
                {gradientTitle}
                </h2>
            )}

            {/* Description */}
            {ourDescription && (
                <p className="max-w-[1204px] text-[18px] md:text-[20px] lg:text-[24.8px] text-[#000000]">
                {ourDescription}
                </p>
            )}
        </div>
    );
};

export default GradientText;