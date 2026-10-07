"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Programming & Data",
    skills: ["Python", "Pandas", "NumPy", "SQL", "Excel"],
  },
  {
    title: "Analytics & Visualization",
    skills: ["Power BI", "Matplotlib", "Seaborn", "Data Cleaning", "EDA"],
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-learn",
      "Regression",
      "Classification",
      "Forecasting",
      "Statistics",
    ],
  },
  {
    title: "Tools & Databases",
    skills: ["MySQL", "Git", "GitHub", "Jupyter", "VS Code"],
  },
];

export default function Skills() {
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
      id="skills"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div
          className={`transition-all duration-1500 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Tools I use to work with data.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A practical toolkit for analyzing data, building dashboards,
            and developing machine learning solutions.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">

          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}