import React from "react";

const experiences = [
  {
    company: "Kifiya Financial Technology PLC",
    location: "Addis Ababa, Ethiopia",
    title: "Front-End Engineer (Transitioning to Backend Developer – FastAPI)",
    period: "September 2025 – Present",
    description: [
      "Working as a Front-End Engineer while actively transitioning to a Backend Developer role using FastAPI.",
      "Collaborating with cross-functional teams to build and integrate backend services for FinTech applications, focusing on performance, scalability, and security.",
      "Developing new API endpoints and working closely with backend engineers to enhance existing financial systems.",
      "Gaining hands-on experience in Python, FastAPI, and backend architecture within a high-paced financial technology environment.",
    ],
  },
  {
    company: "iCog Labs",
    location: "Addis Ababa, Ethiopia",
    title: "Front-End Developer",
    period: "February 2025 – September 2025",
    description: [
      "Specializing in React.js, Next.js, and Tailwind CSS to build responsive, high-performance web applications.",
      "Collaborating with cross-functional teams to develop scalable solutions with a strong focus on performance optimization and UI/UX.",
      "Implementing best coding practices, staying up-to-date with the latest front-end technologies, and contributing to innovative product features.",
      "Assist front-end interns by guiding through a projects",
    ],
  },
  {
    company: "GoDigital / Bluzon",
    location: "Addis Ababa, Ethiopia",
    title: "Front-End / Back-End Developer",
    period: "August 2024 – January 2025",
    description: [
      "Served as a Front-End Web App Developer, building dynamic, user-centric applications using Next.js with a focus on server-side rendering and SEO optimization.",
      "Integrated APIs and created interactive, responsive interfaces leveraging React.js as part of the Next.js framework.",
      "Gained hands-on experience in full-stack development using the MERN stack (MongoDB, Express, React, Node.js), enhancing understanding of both front-end and back-end processes.",
      "Collaborated with teams to implement innovative features, troubleshoot issues, and apply modern web development best practices.",
    ],
  },
  {
    company: "Purpose Black",
    location: "Addis Ababa, Ethiopia",
    title: "Front-End Developer",
    period: "March 2024 – August 2024",
    description: [
      "Focused on building high-performance web applications using Next.js and React.js.",
      "Transformed design wireframes into functional, visually engaging interfaces while ensuring responsiveness across various devices.",
      "Integrated APIs for seamless data flow and collaborated closely with backend teams to streamline development processes.",
      "Prioritized clean, maintainable code and contributed to improving overall development workflow.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A track record of delivering high-quality software solutions across various industries, from FinTech to AI labs.
          </p>
        </div>

        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[45px] md:-left-[77px] mt-1.5 w-6 h-6 rounded-full bg-purple-600 border-4 border-white dark:border-gray-950 shadow-sm" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">{exp.title}</p>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 font-medium italic">
                {exp.location}
              </p>
              
              <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    <span className="relative -left-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
