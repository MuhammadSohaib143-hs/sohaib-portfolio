"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-white/10 bg-black px-6 py-10 text-white"
    >
      <div
        className={`mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 transition-all duration-[1500ms] ease-out sm:flex-row ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div>
          <p className="font-semibold">Muhammad Sohaib</p>

          <p className="mt-1 text-sm text-gray-500">
  Data Analyst | Data Science Practitioner
</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">

          <a
            href="https://github.com/MuhammadSohaib143-hs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-sohaib-9b11a9340/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-cyan-400"
          >
            LinkedIn
          </a>

        </div>
      </div>

      <div
        className={`mx-auto mt-8 max-w-5xl border-t border-white/10 pt-6 text-center text-xs text-gray-600 transition-all duration-[1500ms] ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
        style={{
          transitionDelay: "200ms",
        }}
      >
        © 2026 Muhammad Sohaib. All rights reserved.
      </div>
    </footer>
  );
}