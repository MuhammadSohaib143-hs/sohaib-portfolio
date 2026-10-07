"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Turning data into useful decisions.
          </h2>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">

          {/* About Text */}
          <div
            className={`space-y-5 text-lg leading-8 text-gray-400 transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p>
              I am a Computer Science graduate focused on Data Analytics
              and Data Science. I enjoy working with data to discover
              patterns, trends, and insights that can support better
              decisions.
            </p>

            <p>
              My work involves the complete data workflow — from cleaning
              and exploring data with Python and analyzing it with SQL,
              to building interactive dashboards with Power BI and
              applying machine learning techniques when appropriate.
            </p>

            <p>
              I am continuously improving my skills through practical
              projects and real-world business problems, with the goal
              of becoming a strong Data Scientist.
            </p>
          </div>

          {/* Focus Card */}
          <div
            className={`rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-700 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Current Focus
            </p>

            <div className="space-y-5">

              <div>
                <h3 className="font-semibold text-white">
                  Data Analytics
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  SQL, Python, data cleaning, analysis, and business insights.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Data Visualization
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Interactive dashboards and decision-focused reporting with Power BI.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Machine Learning
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Building practical ML skills as I progress toward Data Science.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}