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
    <div className="w-full bg-[#000000] text-[#FFFFFF]">
 
      {/* ---------- NAVIGATION ---------- */}
      <div className="px-6 md:px-14 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 xl:gap-12 2xl:gap-16 max-w-[1600px] mx-auto">
 
          {/* LEFT COLUMN */}
          <div className="flex-1 w-full">
 
            {/* NAVIGATION */}
            <div className="overflow-x-auto no-scrollbar">
              <nav
                ref={navRef}
                className="relative inline-flex gap-6 lg:gap-20 xl:gap-24 2xl:gap-28 items-end border-b-2 border-white/50"
              >
                {infoList.map((item, i) => (
                  <button
                    key={i}
                    ref={setTabRef}
                    onClick={() => setActive(i)}
                    className={`pb-4 md:pb-8 text-[24px] md:text-[28px] lg:text-[34px] 2xl:text-[38px] font-medium lg:font-semibold transition-colors whitespace-nowrap ${
                      active === i
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
 
                {/* Underline */}
                <span
                  ref={underlineRef}
                  className="absolute left-0 -bottom-[1px] h-[2px] bg-gradient-to-r from-[#FE6100] to-[#D10000] transition-all duration-300"
                />
              </nav>
            </div>
 
            {/* DESCRIPTION (UNDER TITLE) */}
            <div className="mt-16 space-y-6 max-w-[900px]">
              {(Array.isArray(activeItem.desc)
                ? activeItem.desc
                : activeItem.desc.split("\n\n")
              ).map((para, index) => (
                <p
                  key={index}
                  className="text-[#FFFFFF] text-[14px] md:text-[16px] 2xl:text-[17px] font-medium leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
 
          {/* RIGHT COLUMN — IMAGE */}
          {activeItem.imgUrl && (
            <div className="flex-shrink-0">
              <img
                src={activeItem.imgUrl}
                alt={activeItem.title}
                className="w-full md:w-[350px] xl:w-[380px] 2xl:w-[420px] h-[280px] md:h-[390px] xl:h-[420px] 2xl:h-[460px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
 
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>
    </div>
  );
};
 
export default ContentCardUl;