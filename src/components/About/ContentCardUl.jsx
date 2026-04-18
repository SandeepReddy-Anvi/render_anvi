import React, { useEffect, useRef, useState } from "react";

export const ContentCardUl = ({ infoList = [] }) => {
  const [active, setActive] = useState(0);
  const navRef = useRef(null);
  const tabRefs = useRef([]);
  const underlineRef = useRef(null);

  tabRefs.current = [];

  const setTabRef = (el) => {
    if (el) tabRefs.current.push(el);
  };

  const updateUnderline = () => {
    const tab = tabRefs.current[active];
    const underline = underlineRef.current;
    if (!tab || !underline) return;

    underline.style.transform = `translateX(${tab.offsetLeft}px)`;
    underline.style.width = `${tab.offsetWidth}px`;
  };

  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [active]);

  if (!infoList.length) return null;

  const activeItem = infoList[active];

  return (
    <div className="w-full bg-[#000000] text-[#FFFFFF] h-max px-[20px] md:px-[60px] py-[80px]">

      {/* ---------- NAVIGATION ---------- */}
      <div className="flex items-center gap-2 pb-4">
        <span className="w-6 h-[2px] bg-[#CD0054]" />
        <p className="text-[14px] text-[#FA293E] font-bold font-wix uppercase">
          Who We Are
        </p>
      </div>
      <h2 className="font-semibold text-[32px] md:text-[46px] pb-8 md:pb-10 lg:pb-14">
        Our Guiding Principles
      </h2>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-[20px] xl:gap-[90px]">
        {/* LEFT COLUMN */}
        <div className="flex-1 w-full md:w-[65%] lg:w-[60%] xl:max-w-[830px]">
          {/* NAVIGATION */}
          <ul
            ref={navRef}
            className="w-auto grid grid-cols-3 relative border-b-[2px] border-solid border-[#FFFFFF50]"
          >
            {infoList.map((item, i) => (
              <button
                key={i}
                ref={setTabRef}
                onClick={() => setActive(i)}
                className={`pb-4 md:pb-8 text-[24px] md:text-[24px] lg:text-[22px] font-medium transition-colors lg:whitespace-nowrap ${active === i ? "text-white" : "text-white/50 hover:text-white"
                  }`}
              >
                {item.title}
              </button>
            ))}

            {/* Underline */}
            <span
              ref={underlineRef}
              className="absolute left-0 -bottom-[2px] h-[2px] bg-gradient-to-r from-[#FE6100] to-[#D10000] transition-all duration-300"
            />
          </ul>

          <div className="mt-16 space-y-6 max-w-[900px]">
            {(Array.isArray(activeItem.desc1)
              ? activeItem.desc1
              : activeItem.desc1.split("\n\n")
            ).map((para, index) => (
              <p
                key={index}
                className="text-[#FFFFFF] text-[14px] md:text-[16px] 2xl:text-[17px] leading-[28px] font-medium"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Desktop DESCRIPTION (UNDER TITLE) */}
          <div className="mt-6 space-y-6 max-w-[900px]">
            {(Array.isArray(activeItem.desc)
              ? activeItem.desc
              : activeItem.desc.split("\n\n")
            ).map((para, index) => (
              <p
                key={index}
                className="text-[#FFFFFFB2] text-[14px] md:text-[14px] 2xl:text-[16px] font-medium leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN — IMAGE */}
        {activeItem.imgUrl && (
          <img
            src={activeItem.imgUrl}
            alt={activeItem.title}
            className="w-full flex md:w-[35%] lg:w-[40%] object-center place-content-center max-w-[400px] h-auto aspect-square object-contain transition-all duration-150 self-center"
          />
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ContentCardUl;
