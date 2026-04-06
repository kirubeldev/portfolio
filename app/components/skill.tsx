import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaDatabase, 
  FaGitAlt, FaGithub, FaDocker, FaTools 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiFastapi, SiFlask, SiDjango, 
  SiMongodb, SiPostgresql, SiRedux, SiPostman, SiTypescript 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-600" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-600" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-600" /> },
      { name: "Django", icon: <SiDjango className="text-green-800" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "RESTful APIs", icon: <FaTools className="text-gray-500" /> },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux / RTK", icon: <SiRedux className="text-purple-600" /> },
      { name: "Context API", icon: <FaReact className="text-blue-400" /> },
      { name: "Zustand", icon: <span className="font-bold text-xs">Z</span> },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Git / GitHub", icon: <FaGitAlt className="text-orange-600" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my tech stack and the tools I use to build scalable, high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-400 transition-all cursor-default"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}