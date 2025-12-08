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
    const nav = navRef.current;
    const under = underlineRef.current;
    const tab = tabRefs.current[active];
    if (!nav || !under || !tab) return;

    const left = tab.offsetLeft;
    const width = tab.getBoundingClientRect().width;

    under.style.transform = `translateX(${left}px)`;
    under.style.width = `${width}px`;
  };

  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [active, infoList.length]);

  if (!infoList || infoList.length === 0) return null;

  return (
    <div className="w-full bg-black font-sans text-white">
      
      {/* --- Navigation Section --- */}
      <div className="px-6 md:px-14 pt-8 pb-4">
        <div className="overflow-x-auto no-scrollbar">
          {/* UPDATED: Changed 'flex' to 'inline-flex' 
              This forces the border-b (gray line) to stop at the last item */}
          <nav
            ref={navRef}
            className="relative inline-flex gap-8 md:gap-16 items-end border-b border-gray-700 min-w-max"
          >
            {infoList.map((it, i) => (
              <button
                key={i}
                ref={setTabRef}
                onClick={() => setActive(i)}
                className={`pb-4 text-xl md:text-3xl transition-colors duration-300 focus:outline-none ${
                  active === i ? "text-white font-medium" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {it.title}
              </button>
            ))}
            
            {/* Sliding White Underline */}
            <span
              ref={underlineRef}
              className="absolute bottom-0 h-[2px] bg-white transition-all duration-300 ease-out"
              style={{ width: 0, bottom: '-1px' }}
            />
          </nav>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="relative w-full h-auto md:h-[500px] px-6 md:px-14">
        {infoList.map((item, idx) => (
          <div
            key={idx}
            role="tabpanel"
            hidden={active !== idx}
            className={`${
              active === idx ? "opacity-100 z-10" : "opacity-0 z-0 hidden md:block md:absolute md:top-0 md:left-0"
            } w-full h-full transition-opacity duration-500 ease-in-out`}
          >
            <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-8 md:py-0">
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                {item.imgUrl && (
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full max-w-[400px] md:max-w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-2xl bg-gray-800"
                  />
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ContentCardUl;