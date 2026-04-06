import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaDatabase, 
  FaGitAlt, FaGithub, FaDocker, FaTools, FaLinux, FaAws, FaTerminal
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiFastapi, SiFlask, SiDjango, 
  SiMongodb, SiPostgresql, SiRedux, SiPostman, SiTypescript,
  SiPrisma, SiGraphql, SiRedis, SiJest, SiTestinglibrary,
  SiAuthentik, SiJsonwebtokens, SiJira, SiSentry
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "HTML5 & CSS3", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-500" /> },
      { name: "Framer Motion", icon: <span className="font-bold text-xs">FM</span> },
      { name: "React Query", icon: <span className="font-bold text-xs text-red-500">RQ</span> },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-600" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-600" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <span className="font-bold text-xs">EX</span> },
      { name: "Django / Flask", icon: <SiDjango className="text-green-800" /> },
      { name: "RESTful APIs", icon: <FaTools className="text-gray-500" /> },
      { name: "Microservices", icon: <span className="font-bold text-xs">μS</span> },
      { name: "WebSockets", icon: <FaTerminal className="text-gray-400" /> },
    ],
  },
  {
    title: "Architecture & Data",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Redis", icon: <SiRedis className="text-red-600" /> },
      { name: "Prisma / SQLAlchemy", icon: <SiPrisma className="text-blue-500" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
      { name: "Alembic", icon: <span className="font-bold text-xs text-red-700">AL</span> },
      { name: "Mongoose", icon: <span className="font-bold text-xs text-red-800">MG</span> },
      { name: "MySQL", icon: <FaDatabase className="text-blue-500" /> },
    ],
  },
  {
    title: "State & Logic",
    skills: [
      { name: "Redux / RTK", icon: <SiRedux className="text-blue-600" /> },
      { name: "Zustand", icon: <span className="font-bold text-xs">ZD</span> },
      { name: "Context API", icon: <FaReact className="text-blue-400" /> },
      { name: "RTK Query", icon: <SiRedux className="text-blue-700" /> },
      { name: "Formik / Hook Form", icon: <span className="font-bold text-xs">F</span> },
    ],
  },
  {
    title: "Security & DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "JWT / OAuth2", icon: <SiJsonwebtokens className="text-pink-500" /> },
      { name: "Vercel / Netlify", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "AWS (S3/EC2)", icon: <FaAws className="text-orange-400" /> },
      { name: "Git / GitLab CI", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "Linux / Bash", icon: <FaLinux className="text-gray-500" /> },
      { name: "Testing (JEST/Pytest)", icon: <SiJest className="text-red-800" /> },
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "Problem-Solving", icon: <span className="font-bold text-xs">PS</span> },
      { name: "UI/UX Optimization", icon: <span className="font-bold text-xs">UX</span> },
      { name: "Agile / Jira", icon: <SiJira className="text-blue-600" /> },
      { name: "Cross-team Collab", icon: <span className="font-bold text-xs">CT</span> },
      { name: "Technical SEO", icon: <span className="font-bold text-xs">SEO</span> },
      { name: "Mentoring Interns", icon: <span className="font-bold text-xs">MT</span> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Expertise & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            As a Full-Stack Software Engineer, I maintain a broad and deep technical foundation across the entire development lifecycle, from sophisticated front-end interfaces to secure, scalable back-end architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-blue-600 dark:bg-blue-400 rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 bg-gray-50 dark:bg-gray-900/80 px-3.5 py-2 rounded-lg border border-gray-100 dark:border-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105 transition-all cursor-default group"
                  >
                    <span className="text-xl opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight">
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