import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export const CountAnimOnScroll = ({ value, duration = 1.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, latest => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const SmartCountUp = ({ text, duration = 1.5, smallText=false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Extract first number from string
  const number = parseInt(text.match(/\d+/)?.[0] || "0", 10);

  // Remove number part → suffix
  const suffix = text.replace(/\d+/, "");

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, v => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, number, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, number]);

  return (
    <span ref={ref} className={`${smallText && "whitespace-normal"}`} >
      <motion.span>{rounded}</motion.span>
      <span className={`${smallText && "text-[40px]"}`} >{suffix}</span>
    </span>
  );
};