"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import TimelineCard from "../../../hooks/TimelineCard";

const ImplemRoadmap = [
  {
    Phase: "Phase 1",
    subHead: "Foundation & Setup",
    infos: [
      "Initial robot prototype development",
      "AI model training with preliminary data",
      "GIS mapping of pilot area",
    ],
  },
  {
    Phase: "Phase 2",
    subHead: "Integration",
    infos: [
      "Robot field testing and refinement",
      "Dashboard development and deployment",
      "Integration of all system components",
    ],
  },
  {
    Phase: "Phase 3",
    subHead: "Deployment",
    infos: [
      "Full-scale implementation in pilot city",
      "Training programs for operators",
      "Monitoring and evaluation framework",
    ],
  },
];

const ImpRoadmap = () => {
  const timelineRef = useRef(null);

  /* Track scroll inside timeline */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  /* Smooth progress */
  const smoothProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="w-full max-w-[1600px] mx-auto mb-[120px] max-md:pt-[50px]">
      <ul
        ref={timelineRef}
        className="w-[90%] h-full max-md:ml-auto xl:w-[80%] lg:max-w-[977px]
        relative flex flex-col gap-[100px] md:gap-10 mx-0 lg:mx-auto"
      >
        {/* ================= Vertical Line ================= */}
        <div className="absolute left-[-30px] md:left-[28vw] lg:left-[27.8%] xl:left-[28%] top-[14%] h-[70%] w-[2px] -translate-x-1/2 flex flex-col justify-between">
          {/* Base line */}
          <div className="absolute inset-0 bg-[#E5E7EB]" />

          {/* Animated progress */}
          <motion.div
            style={{
              scaleY: smoothProgress,
              transformOrigin: "top",
              background: `linear-gradient(0deg, rgba(46, 172, 184, 0.2), rgba(46, 172, 184, 0.2)),
                linear-gradient(94.05deg, #FE7F2C -20.85%, #FF4A3A 25.68%, #FA293E 85.26%, #CD0054 133.77%)`,
            }}
            className="absolute inset-0 w-full origin-top"
          />

          {/* Dots */}
          {ImplemRoadmap.map((_, index) => {
            const top = (index / (ImplemRoadmap.length - 1)) * 100;
            const position = index / (ImplemRoadmap.length - 1 || 1);
            // const opacityValue = Math.max(
            //   0.3,
            //   1 - Math.abs(scrollYProgress.get() - position) *2,
            // );
            // console.log("top :", top, opacityValue, smoothProgress);

            return (
              <motion.span
                key={index}
                style={{
                  top: `${top}%`,
                  opacity: 1,
                }}
                className="
                  w-[20px] bg-[#FA293E] aspect-square border-[3.3px] border-[#FAFAFA] rounded-full
                  absolute left-[-8.5px] -translate-x-1/2 shadow-lg"
                animate={{
                  scale: smoothProgress.get() > position ? 1.2 : 1,
                  // opacity: smoothProgress.get() > top ? 1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            );
          })}
        </div>

        {/* Content */}
        {ImplemRoadmap.map((each, index) => (
          <li
            key={"impRoadmap_" + index}
            className="w-[80vw] md:w-[90vw] lg:w-[1/2] lg:max-w-[980px] relative flex flex-row justify-between align-middle gap-[10px]"
          >
            {/* Left */}
            <div className="max-md:absolute max-md:top-[-16%] max-md:left-[15px] md:w-[50%] h-full flex md:align-middle md:justify-between md:self-center">
              <TimelineCard direction="left">
                <span className="w-auto h-[60px] bg-[#CD0054] rounded-[6.83px] text-[24px] font-[500] font-inter text-white px-[60px] py-[10px] whitespace-nowrap">
                  {each.Phase}
                </span>
              </TimelineCard>
            </div>

            {/* Right */}
            <div className="w-full">
              <TimelineCard direction="right">
                <div
                  className="w-full md:max-w-[591px] bg-white rounded-[12px] shadow-lg px-[35px] py-[30px]"
                  style={{ boxShadow: "0px 0px 30px 0px #0000001F" }}
                >
                  <h3 className="text-[20px] font-medium mb-4 text-[#111111]">
                    {each.subHead}
                  </h3>
                  <div className="space-y-[14px] flex flex-col justify-center align-middle gap-[16px]">
                    {each.infos.map((i, ind) => (
                      <div
                        key={"info_" + ind + 1}
                        className="flex justify-start align-middle gap-[8px]"
                      >
                        <CheckCircle2 size={20} color="#22C55E" />
                        <span className="text-[16px] font-medium text-[#555555]">
                          {i}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TimelineCard>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImpRoadmap;
