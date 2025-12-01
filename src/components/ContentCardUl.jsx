import React, { useEffect, useRef, useState } from "react";

/**
 * TabsContentFromList
 * Props:
 *  - infoList: [{ title, desc, imgUrl, index? }, ...]
 *
 * Behavior:
 *  - Renders top tab nav with sliding underline
 *  - Shows the selected content below (text + image)
 *  - Responsive: side-by-side on md+, stacked on small screens
 */
export const ContentCardUl = ({ infoList = [] }) => {
  const [active, setActive] = useState(0);
  const navRef = useRef(null);
  const tabRefs = useRef([]);
  const underlineRef = useRef(null);

  // keep refs up-to-date
  tabRefs.current = [];

  const setTabRef = (el) => {
    if (el) tabRefs.current.push(el);
  };

  // position underline to match active tab
  const updateUnderline = () => {
    const nav = navRef.current;
    const under = underlineRef.current;
    const tab = tabRefs.current[active];
    if (!nav || !under || !tab) return;

    const navRect = nav.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();

    const left = tabRect.left - navRect.left;
    const width = tabRect.width;

    under.style.transform = `translateX(${left}px)`;
    under.style.width = `${width}px`;
 
  };

  useEffect(() => {
    updateUnderline();
    const onResize = () => updateUnderline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, infoList.length]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setActive((s) => (s + 1) % infoList.length);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      setActive((s) => (s - 1 + infoList.length) % infoList.length);
      e.preventDefault();
    } else if (e.key === "Home") {
      setActive(0);
      e.preventDefault();
    } else if (e.key === "End") {
      setActive(infoList.length - 1);
      e.preventDefault();
    }
  };

  if (!infoList || infoList.length === 0) return null;

  return (
    <div className="w-screen h-auto">
      {/* Header (dark) with tabs */} 
  <div className="bg-black text-white px-14 py-6">
  <nav
    ref={navRef}
    className="relative flex gap-[75px] items-end select-none"
    role="tablist"
    aria-label="Section tabs" 
    onKeyDown={onKeyDown}
  >
    {infoList.map((it, i) => (
      <button
        key={it.title + i}
        ref={setTabRef}
        role="tab"
        aria-selected={active === i}
        aria-controls={`panel-${i}`}
        id={`tab-${i}`}
        tabIndex={active === i ? 0 : -1}
        onClick={() => setActive(i)}
        className={`pb-3 text-[26px] md:text-[32px] transition-colors ${
          active === i ? "text-white font-semibold" : "text-gray-400"
        }`}
      >
        {it.title}
      </button>
    ))}

    {/* FULL UNDERLINES */}
    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#5f5f5f] md:w-[628px] sm:w-[350px] "></div>

    {/* ACTIVE PART (WHITE PROGRESS LINE) */}
    <span
      ref={underlineRef}
      className="absolute bottom-0 h-[2px] bg-white transition-all duration-300"
      style={{ width: 0, transform: "translateX(0)" }}
    />
  </nav>
</div>

      {/* Content panel */}
      <div className="bg-black p-8    h-full">
        {infoList.map((item, idx) => (
          <div
            key={item.title + idx}
            id={`panel-${idx}`}
            role="tabpanel"
            aria-labelledby={`tab-${idx}`}
            hidden={active !== idx}
            className={active === idx ? "block" : "hidden"}
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20 ">
                {/* Text */}
                <div className="md:w-3/5 ">
                  {item.index && (
                    <div className="text-sm text-gray-100 mb-3">
                      0.{idx + 1}
                    </div>
                  )}
                  
                  <p className="text-[#ffff] text-[18px] font-normal w-full">
                    {item.desc}
                  </p>
                </div>

                {/* Image (right on md+, stacked below text on small) */}
                <div className="w-full md:w-1/4 flex  object-cover h-full " >
                  {item.imgUrl ? (
                    <img
                      loading="lazy"
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-full h-auto max-w-[520px]  rounded-lg"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCardUl;
