import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TimelineDot = ({ scrollProgress, index, total }) => {
  const threshold = index / (total - 1);
  const bgColor = useTransform(
    scrollProgress,
    [threshold - 0.9, threshold],
    ["#E5E7EB", "#FA293E"],
    { clamp: true },
  );

  return (
    <motion.i
      style={{ backgroundColor: bgColor }}
      // left-0 and translateX -50% centers the dot exactly ON the 2px line
      className="w-3 h-3 absolute left-0 -translate-x-1/2 rounded-full border-2 border-white shadow-sm z-10"
    />
  );
};

const TimelineSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 50%"],
  });

  const lineBackground = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(to bottom, #FE7F2C 0%, #CD0054 0%, #E5E7EB 0%, #E5E7EB 100%)",
      "linear-gradient(to bottom, #FE7F2C 0%, #CD0054 100%, #E5E7EB 100%, #E5E7EB 100%)",
    ],
  );

  const timelineData = [
    {
      year: "2020",
      title: "Foundation of Anvi Robotics",
      desc: "Started with a vision to revolutionize industries through deep-tech innovation.",
    },
    {
      year: "2022",
      title: "First Surveillance Robot Launch",
      desc: "Started with a vision to revolutionize industries through deep-tech innovation.",
      img: "/images/about/about5.webp",
    },
    {
      year: "2023",
      title: "Autonomous Runway Operations (AROP )",
      desc: "Published groundbreaking research on autonomous runway operations..",
    },
    {
      year: "2024",
      title: "Multi-Industry Expansion",
      desc: "Extended our solutions across 8+ industries globally, driving innovation and delivering measurable impact through intelligent systems that enhance safety, efficiency, and sustainability.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Container holding the line and content */}
      <div ref={containerRef} className="relative ml-10">
        {/* THE LINE - Perfectly at left-0 */}
        <motion.div
          style={{ background: lineBackground }}
          className="absolute left-[-1px] top-[12px] h-full w-[2px] rounded-full"
        />

        {timelineData.map((item, index) => (
          <div key={index} className="relative pb-12 last:pb-0">
            {/* Dot & Year - Dot is absolute to left-0 */}
            <div className="flex items-center mb-2">
              <TimelineDot
                scrollProgress={scrollYProgress}
                index={index}
                total={timelineData.length}
              />
              <span className="text-[18px] text-[#D10000] font-medium pl-6">
                {item.year}
              </span>
            </div>

            {/* Content Text */}
            <div className="pl-6">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#100000]">
                {item.title}
              </h3>
              <p className="text-[#323232] text-[14px] font-medium mt-1 leading-relaxed">
                {item.desc}
              </p>
              {item.img && (
                <img
                  loading="lazy"
                  src={item.img}
                  alt={item.title}
                  className="mt-4 rounded-lg shadow-lg w-full max-w-sm"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
