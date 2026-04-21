"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const scrollItems = [
    {
        image: "/images/capabilities/robotics.jpg",
        buttonText: "Robotics",
        title: "Autonomous & Robotic Systems",
        subText: "Designing intelligent robotic ecosystems for surveillance, infrastructure monitoring, sanitation, and real-world automation.",
    },
    {
        image: "/images/capabilities/space.jpg",
        buttonText: "Space",
        title: "Advanced Space & Orbital Technologies",
        subText: "Building advanced space systems, including satellite intelligence, robotic servicing, and sustainable orbital solutions.",
    },
    {
        image: "/images/capabilities/evox.jpg",
        buttonText: "Studios / EVOX",
        title: "Intelligent Immersive Digital Experiences",
        subText: "Creating interactive worlds, simulations, and next-gen experiences that blend storytelling, design, and technology.",
    },
    {
        image: "/images/capabilities/caaryo.jpg",
        buttonText: "Lifestyle /CAARYO",
        title: "Nature-Inspired Lifestyle Design",
        subText: "Crafting nature-inspired lifestyle products that blend identity, design, and bold self-expression.",
    },
    {
        image: "/images/capabilities/core1.jpg",
        buttonText: "Core Layer",
        title: "Scalable AI & Data Intelligence Layer",
        subText: "Integrating predictive analytics, automation, and real-time intelligence across all ANVI systems and platforms.",
    },
    {
        image: "/images/capabilities/core2.jpg",
        buttonText: "Core Layer",
        title: "High-Performance Scalable Engineering Platforms",
        subText: "Building modular, scalable architectures that adapt across industries, environments, and future technological demands.",
    },
];

const CoreCapabilities = () => {

    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [maxScroll, setMaxScroll] = useState(0);

    useEffect(() => {
        if (scrollRef.current && containerRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth;
            const containerWidth = containerRef.current.offsetWidth;

            setMaxScroll(scrollWidth - containerWidth);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const xScroll = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -maxScroll || 0]
    );

    return (
        <section className="w-full max-w-[1800px] mx-auto px-5 lg:px-[60px] py-14 md:py-[30px] lg:py-[60px]">
            <div className="sm:flex-row md:flex-row items-center justify-center text-clip">
                <div className="flex items-center gap-2 pb-4 justify-center">
                    <span className="w-6 h-[2px] bg-[#CD0054]" />
                    <p className="text-[14px] text-[#CD0054] font-bold font-wix uppercase">
                        core Capabilities
                    </p>
                </div>
                <div className="mt-0 2xl:mt-[20px] max-w-[1000px] text-center text-[#100000] mx-auto ">
                    <p className="w-full max-md:text-center leading-[50.569px] text-[32px] md:text-[46px] font-medium">
                        Our Engineering Capabilities
                    </p>
                    <p className="w-full text-center justify-center mt-6 px-0 lg:px-[130px] text-[16px] md:text-[18]">
                        From ground-level robotics to orbital systems and immersive platforms, ANVI builds integrated technologies that scale across industries and redefine possibilities.
                    </p>
                </div>
            </div>

            {/* Cards */}
            {/* On Scroll Component */}
            <div className="hidden md:block mt-10">
                <div
                    ref={containerRef}
                    style={{ height: maxScroll ? `${maxScroll}px` : "300vh", }}
                    className="relative w-full"
                >
                    {/* Sticky Wrapper */}
                    <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                        {/* Desktop Scroll Ul Box */}
                        <motion.ul
                            ref={scrollRef}
                            style={{ x: xScroll }}
                            className="flex flex-row gap-6"
                        >
                            {scrollItems.map((item, index) => (
                                <li className="w-[400px] flex-shrink-0 bg-[#F5F5F7] rounded-[16px] p-4 group">
                                    <div className="overflow-hidden rounded-[16px]">
                                    <img
                                        src={item.image}
                                        className="w-full h-[220px] object-cover rounded-[16px] content-center transition-transform duration-500 ease-out group-hover:scale-110"
                                    />
                                    </div>

                                    {/* Tag */}
                                    <div className="mt-4">
                                        <span className="bg-[#CD0054] text-white text-[12px] px-4 py-2 rounded-[8px]">
                                            {item.buttonText}
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-[1px] bg-[#0000009E] my-4" />

                                    {/* Content */}
                                    <h3 className="text-[22px] font-medium leading-[38px] text-[#100000]">
                                        {item.title}
                                    </h3>

                                    <p className="text-[14px] text-[#100000] mt-2 leading-[24px]">
                                        {item.subText}
                                    </p>
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
                
            {/* Mobile UI */}
            <ul className="flex md:hidden overflow-x-auto gap-4 px-5 py-6 snap-x snap-mandatory scroll-smooth">
                {scrollItems.map((item, index) => (
                    <li
                        key={index}
                        className="w-full flex-shrink-0 bg-[#F5F5F7] rounded-[12px] p-4 snap-start"
                    >
                        <img
                            src={item.image}
                            className="w-full h-[200px] object-cover rounded-[12px]"
                        />

                        {/* Tag */}
                        <div className="mt-3">
                            <span className="bg-[#CD0054] text-white text-[12px] px-3 py-1 rounded-[6px]">
                                {item.buttonText}
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#00000040] my-3" />

                        {/* Content */}
                        <h3 className="text-[18px] font-medium leading-[28px] text-[#100000]">
                            {item.title}
                        </h3>

                        <p className="text-[13px] text-[#100000] mt-2 leading-[20px]">
                            {item.subText}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CoreCapabilities;