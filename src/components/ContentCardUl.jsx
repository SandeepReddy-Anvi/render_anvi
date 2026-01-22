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
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          {/* LEFT COLUMN */}
          <div className="flex-1 max-w-3xl">

            {/* NAVIGATION */}
            <div className="overflow-x-auto no-scrollbar">
              <nav
                ref={navRef}
                className="relative inline-flex gap-6 lg:gap-20 items-end border-b-2 border-white/50"
              >
                {infoList.map((item, i) => (
                  <button
                    key={i}
                    ref={setTabRef}
                    onClick={() => setActive(i)}
                    className={`pb-4 md:pb-8 text-[24px] md:text-[28px] lg:text-[34px] font-medium lg:font-semibold transition-colors ${
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
            <div className="mt-16 space-y-6">
              {(Array.isArray(activeItem.desc)
                ? activeItem.desc
                : activeItem.desc.split("\n\n")
              ).map((para, index) => (
                <p
                  key={index}
                  className="text-[#FFFFFF] text-[14px] md:text-[16px] font-medium leading-relaxed"
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
              className="w-full max-w-[350px] h-[280px] md:h-[390px] object-cover rounded-2xl shadow-2xl"
            />
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
