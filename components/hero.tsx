"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const titles = [
  "Data Analyst",
  "Data Analyst | Data Science Practitioner",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(
            currentTitle.slice(0, displayText.length + 1)
          );

          if (displayText.length === currentTitle.length) {
            setIsDeleting(true);
          }
        } else {
          setDisplayText(
            currentTitle.slice(0, displayText.length - 1)
          );

          if (displayText.length === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      displayText.length === currentTitle.length ? 1500 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-black px-6 pt-16 text-white"
    >
      <div className="mx-auto max-w-4xl text-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mb-5 min-h-[24px] text-sm font-medium uppercase tracking-[0.3em] text-cyan-400"
        >
          {displayText}
          <span className="ml-1 text-gray-500">|</span>
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Muhammad Sohaib
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl"
        >
          I turn data into meaningful insights using Python, SQL, Excel, Power BI,
          and machine learning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-cyan-400"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}