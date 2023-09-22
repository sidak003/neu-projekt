"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Collage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 0.3", "0 0.15"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const scale1 = useTransform(scrollYProgress, [0, 0.4], [1.05, 1]);
  const scale2 = useTransform(scrollYProgress, [0.4, 0.7], [1.05, 1]);
  const scale3 = useTransform(scrollYProgress, [0.6, 0.85], [1.05, 1]);
  const scale4 = useTransform(scrollYProgress, [0.8, 1], [1.05, 1]);

  return (
    <div
      ref={targetRef}
      className="relative flex h-[72vh] items-center justify-center pb-7 md:h-[85vh] md:pb-16"
    >
      <div className="relative">
        <motion.div
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute bottom-11 left-16 w-44 rounded border-2 border-text-100 bg-red-pastel px-4 py-3 font-serif text-h5 leading-heading shadow-drop-mini md:bottom-8 md:left-16 md:w-80 md:px-8 md:py-6 md:text-h3 lg:bottom-10 lg:left-32"
        >
          How can I validate my startup idea?
        </motion.div>
        <motion.div
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute left-2 top-[3.25rem] w-40 rounded border-2 border-text-100 bg-green-pastel px-3 py-2 text-left font-serif leading-heading shadow-drop-mini md:left-6 md:top-12 md:w-72 md:px-6 md:py-4 md:text-h4 lg:top-14"
        >
          How to acquire first 100 customers?
        </motion.div>
        <motion.div
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute bottom-[10.75rem] left-[8.5rem] w-24 rounded border-2 border-text-100 bg-blue-pastel px-3 py-2 text-left font-serif text-caption leading-heading shadow-drop-mini md:bottom-11 md:left-[25.5rem] md:w-72 md:px-6 md:py-4 md:text-h4 lg:bottom-12 lg:left-[37.5rem]"
        >
          What marketing strategies work?
        </motion.div>
        <motion.div
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute left-2 top-40 w-40 rounded border-2 border-text-100 bg-yellow-pastel px-3 py-2 text-left font-serif text-caption leading-heading shadow-drop-mini md:left-8 md:top-60 md:w-64 md:px-4 md:py-3 md:text-h5"
        >
          How to scale my startup?
        </motion.div>
      </div>
      <div className="relative">
        <motion.div
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute left-32 top-24 w-44 rounded border-2 border-text-100 bg-cyan-pastel px-3 py-2 text-left font-serif leading-heading shadow-drop-mini md:left-60 md:top-32 md:w-[17rem] md:px-6 md:py-4 md:text-h4"
        >
          How can I secure funding for my startup?
        </motion.div>
        <motion.div
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute left-56 top-40 w-32 rounded border-2 border-text-100 bg-green-pastel px-3 py-2 text-left font-serif text-caption leading-heading shadow-drop-mini md:left-[30.5rem] md:top-56 md:w-fit md:px-4 md:py-3 md:text-h5 lg:left-[30.5rem] lg:top-56 lg:w-80"
        >
          Where can I find developers, designers, or technical co-founders?
        </motion.div>
      </div>
      <div className="relative">
        <motion.div
          style={{ opacity: opacity3, scale: scale3 }}
          className="absolute left-0 top-60 w-max rounded border-2 border-text-100 bg-red-pastel px-3 py-2 font-serif leading-heading shadow-drop-mini md:left-[28rem] md:top-24 md:px-4 md:py-3 md:text-h5 lg:px-6 lg:py-4 lg:text-h4"
        >
          How can I develop a MVP?
        </motion.div>
        <motion.div
          style={{ opacity: opacity3, scale: scale3 }}
          className="absolute bottom-32 left-52 mt-56 w-32 rounded border-2 border-text-100 bg-yellow-pastel px-3 py-2 text-left font-serif text-caption leading-heading shadow-drop-mini md:bottom-44 md:left-80 md:w-64 md:px-4 md:py-3 md:text-h5 lg:bottom-48 lg:left-96"
        >
          How do I create a solid business plan?
        </motion.div>
      </div>
      <motion.div
        style={{ opacity: opacity4, scale: scale4 }}
        className="z-10 w-[22rem] rounded border-2 border-text-100 bg-purple-pastel px-6 py-4 font-serif text-h4 leading-heading shadow-drop-mini sm:w-max md:px-8 md:py-6 md:text-h3 lg:text-h2"
      >
        How can I start my own business?
      </motion.div>
    </div>
  );
}
