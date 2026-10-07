"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Healthcare Analytics",
    subtitle: "Patient Flow & Disease Trends Forecasting",
    description:
      "Analyzed hospital patient data to identify disease patterns, patient-flow trends, and future disease trends to support data-driven healthcare decisions.",
    technologies: ["Python", "Pandas", "Prophet", "Power BI"],
    github:
      "https://github.com/MuhammadSohaib143-hs/healthcare-analytics-patient-flow-disease-trends",
  },
  {
    title: "Customer Shopping Behavior",
    subtitle: "Customer Analysis & Business Dashboard",
    description:
      "Analyzed customer purchasing behavior to identify spending patterns, subscription trends, discounts, product performance, and other business insights.",
    technologies: ["Python", "SQL", "MySQL", "Power BI"],
    github:
      "https://github.com/MuhammadSohaib143-hs/customer-shopping-behaviour",
  },
];

export default function Projects() {
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
      id="projects"
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
            Projects
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Projects that turn data into insights.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Practical projects where I worked with real-world data,
            analyzed meaningful patterns, and communicated results
            through dashboards and visualizations.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-[1500ms] ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <p className="text-sm text-gray-500">
                {project.title}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {project.subtitle}
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300 transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block text-sm font-medium text-white underline underline-offset-4 transition-colors duration-200 hover:text-cyan-400"
              >
                View on GitHub →
              </a>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}