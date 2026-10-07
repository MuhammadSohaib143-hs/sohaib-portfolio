"use client";

import { useEffect, useRef, useState } from "react";

const education = [
  {
    institution: "University of Malakand",
    degree: "Bachelor of Science in Computer Science",
    description:
      "Built a strong foundation in computer science, programming, databases, software development, and analytical problem-solving, with a growing focus on data analytics and data science.",
    result: "CGPA: 3.83",
  },
  
    {
      institution: "Pak National College of Science and Technology, Timergara",
      degree: "Diploma in Information Technology (DIT)",
      description:
        "Developed practical knowledge of information technology, computer applications, programming, databases, and essential IT skills.",
      result: "Completed • 2022",
    },
];

export default function Education() {
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
      id="education"
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
            Education
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Academic foundation.
          </h2>
        </div>

        {/* Education Cards */}
        <div className="mt-12 space-y-6">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className={`rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-[1500ms] ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${200 + index * 200}ms`,
              }}
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>
                  <p className="text-sm text-gray-500">
                    {item.institution}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                  {item.result}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}