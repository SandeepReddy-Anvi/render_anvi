import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const scrollItems = [
  {
    title: "Anvi’s Surveillance Robot",
    description:
      "Delivering intelligent security, autonomous monitoring, and precision performance redefining how cities stay safe. Launching March 2026.",
    img_1: "/images/about/surveillance.webp",
    img_2: "/images/home/surveillance_outdoor.png",
  },
  {
    title: "Anvi’s Galactica",
    description:
      "Building sustainable space systems through debris removal, recycling, and future-ready infrastructure - powering a cleaner, smarter orbital future.",
    img_1: "/images/home/space-galactica.png",
    img_2: "/images/home/galactica-logo.png",
  },
  {
    title: "Project SHUDH",
    description:
      "Revolutionizing urban sanitation through AI-powered, autonomous, and sustainable robotic cleaning systems - ensuring safety, precision, and dignity for all.",
    img_1: "/images/solutions/sewage/sewage3.1.webp",
    img_2: "/images/about/project_shudh.webp",
  },
];

const InitiativeSection = ({
  title = "Next at ANVI Shaping tomorrow with bold innovation.",
  mainImage = "/images/about/surveillance.webp",
  topLogo = "/images/home/space-galactica.png",
  rightSmallImg = "/images/about/project_shudh.webp",
}) => {
  const sectionRef = useRef(null);
  const ulRef = useRef(null);
  const lastItemRef = useRef(null);

  const scrollX = useRef(0);
  const isLocked = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const ul = ulRef.current;

    if (!section || !ul) return;

    let maxScrollX = 0;

    const calculateMax = () => {
      const ul = ulRef.current;
      const container = ul?.parentElement;

      if (!ul || !container) return;

      // maxScrollX = ul.scrollWidth - container.clientWidth;
      maxScrollX = 4000 - container.clientWidth;

      if (maxScrollX < 10) maxScrollX = 0;

      console.log("UL width:", ul.scrollWidth);
      console.log("VIEW width:", container.clientWidth);
      console.log("MAX scroll:", maxScrollX);
    };

    calculateMax();
    window.addEventListener("resize", calculateMax);

    const onScroll = () => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        isLocked.current = true;
      } else {
        isLocked.current = false;
      }
    };

    const onWheel = (e) => {
      if (!isLocked.current) return;

      e.preventDefault();

      const speed = 1.2;

      let delta = e.deltaY * speed;

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        delta = e.deltaX * speed;
      }

      scrollX.current += delta;

      scrollX.current = Math.max(0, Math.min(scrollX.current, maxScrollX));

      ul.style.transform = `translateX(-${scrollX.current}px)`;

      // ✅ Auto unlock at end
      if (scrollX.current >= maxScrollX - 2) {
        isLocked.current = false;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", calculateMax);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-[100vw] overscroll-none relative h-auto md:h-[250vh] px-5 md:px-[60px] py-[50px] xl:px-[100px] md:py-[80px]"
    >
      <div className="w-full max-w-[872px] text-[#100000] mb-[80px]">
        <h3 className="text-[32px] w-full md:text-[46px] font-medium mb-[24px]">
          {title}
        </h3>
        <p className="text-[18px] w-full font-[400] tracking-[0px] leading-[28px]">
          We’re building next-generation intelligent products and systems across
          industries - each crafted to push boundaries and accelerate the future
          we believe in.
        </p>
      </div>

      {/* On Scroll Component */}
      <div className="w-full sticky touch-pan-x top-0 h-screen md:h-[100vh] flex items-center overflow-hidden">
        <motion.ul
          ref={ulRef}
          className="w-max relative flex flex-col md:flex-row flex-nowrap gap-x-[20px] gap-y-[180px] md:gap-[120px] mb-[80px] items-start
            transition-transform duration-75 will-change-transform"
        >
          {scrollItems.map((item, index) => (
            <li
              key={index}
              ref={index === scrollItems.length - 1 ? lastItemRef : null}
              className="w-full max-w-[1400px] flex-shrink-0 flex flex-row gap-[20px] md:gap-[40px]"
            >
              <div className="w-full max-w-[631px]">
                <img
                  src={item.img_1}
                  alt={item.title}
                  className="w-full max-w-[631px] aspect-square h-auto rounded-[12px] object-cover"
                  draggable={false}
                />
              </div>

              <div className="w-full lg:w-[50%] relative">
                <div className="w-full max-w-[631px] mt-[30px] md:mt-[100px]">
                  <h5 className="text-[20px] md:text-[24px] text-[#100000] font-semibold">
                    {item.title}
                  </h5>
                  <p className="mt-2 text-[16px] text-[#100000] font-[400] leading-[24px]">
                    {item.description}
                  </p>
                </div>
                <div className="absolute bottom-[-120px] lg:bottom-[50px] left-[-110px]">
                  <img
                    src={item.img_2}
                    alt={item.title + "_2"}
                    className="w-full max-w-[600px] aspect-[16/9] h-auto rounded-[12px] object-fill static"
                    draggable={false}
                  />
                  <span
                    className="w-[64px] grid place-content-center rounded-full aspect-square bg-[#FA293E] outline-offset-2 absolute right-[-18px] bottom-[-30px]"
                    style={{ outline: "1px solid #FA293E" }}
                  >
                    <FaArrowRight
                      color="white"
                      className="w-[16px] h-auto aspect-square"
                    />
                  </span>
                  <hr
                    className="w-[300vw] absolute bottom-0 left-[104%] h-[1px] bg-black border-none"
                    style={{
                      background:
                        "linear-gradient(to right, #FE7F2C, #FF4A3A, #FA293E, #CD0054)",
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Grid: left large image, right column with two stacked cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
        {/* Left big image */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden shadow h-[300px] md:h-[500px]">
            <img
              src={mainImage}
              alt="Main initiative - large"
              className="w-full h-full rounded-[12px] object-cover"
              draggable={false}
            />
          </div>

          {/* Caption / title under left image */}
          <div className="mt-6 text-[#100000]">
            <h4 className="text-[20px] md:text-[22px] font-semibold">
              Anvi’s Surveillance Robot
            </h4>
            <p className="mt-2 text-[14px] font-medium max-w-2xl">
              Delivering intelligent security, autonomous monitoring, and
              precision performance redefining how cities stay safe. Launching
              March 2026.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:col-span-7">
          {/* Card 1 */}
          <div className="flex flex-col space-y-3">
            <div className="w-full h-[300px] md:h-[218px] lg:h-[220px] xl:h-[260px] flex items-center justify-center">
              <img
                src={topLogo}
                alt="Galactica logo"
                className="w-full rounded-[12px] h-full object-cover"
                draggable={false}
              />
            </div>

            <h5 className="text-[20px] md:text-[24px] text-[#100000] font-semibold">
              Anvi’s Galactica
            </h5>
            <p className="mt-1 text-[14px] text-[#100000] font-medium">
              Building sustainable space systems through debris removal,
              recycling, and future-ready infrastructure — powering a cleaner,
              smarter orbital future.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col space-y-3">
            <div className="w-full h-[300px] md:h-[328px] lg:h-[328px] overflow-hidden">
              <img
                src={rightSmallImg}
                alt="Project SHUDH"
                className="w-full h-full rounded-[12px] object-cover"
                draggable={false}
              />
            </div>

            <h5 className="text-[20px] md:text-[24px] font-semibold text-[#100000]">
              Project SHUDH
            </h5>
            <p className="mt-1 text-[14px] text-[#100000] font-medium">
              Revolutionizing urban sanitation through AI-powered, autonomous,
              and sustainable robotic cleaning systems — ensuring safety,
              precision, and dignity for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativeSection;
