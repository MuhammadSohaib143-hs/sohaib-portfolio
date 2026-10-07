"use client";

import { useEffect, useRef, useState } from "react";

const workflow = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "Define the business question, objectives, and what decision the analysis needs to support.",
  },
  {
    number: "02",
    title: "Collect & Clean Data",
    description:
      "Prepare the data by handling missing values, duplicates, incorrect formats, and other quality issues.",
  },
  {
    number: "03",
    title: "Explore the Data",
    description:
      "Use exploratory analysis to understand distributions, relationships, patterns, and important trends.",
  },
  {
    number: "04",
    title: "Analyze & Model",
    description:
      "Apply SQL analysis, statistical techniques, or machine learning models when they are appropriate for the problem.",
  },
  {
    number: "05",
    title: "Visualize Insights",
    description:
      "Build clear dashboards and visualizations that make important findings easy to understand.",
  },
  {
    number: "06",
    title: "Communicate Results",
    description:
      "Turn analytical findings into clear insights and recommendations that can support better decisions.",
  },
];

export default function HowIWork() {
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
      id="how-i-work"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div
          className={`transition-all duration-[1500ms] ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            How I Work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            From raw data to meaningful decisions.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            I follow a structured workflow to turn raw data into
            reliable insights and actionable results.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {workflow.map((step, index) => (
            <div
              key={step.number}
              className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-[1500ms] ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <span className="text-sm font-medium text-gray-500">
                {step.number}
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}