import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Kifiya Identification Service (KID)",
    description: "Contributed from scratch to unify user identities by processing hundreds of thousands of records from multiple banks to create 'Golden Customer' profiles.",
    tags: ["Backend", "Python", "FastAPI", "Data Processing"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "KID Dedup Service",
    description: "A specialized microservice that analyzes bank data to identify and deduplicate user records across different financial institutions.",
    tags: ["Backend", "Microservices", "Data Analysis"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "OVP Customer Management",
    description: "A role-based KYC management system developed for banks and Kifiya to streamline lending and credit assessment workflows.",
    tags: ["Backend", "KYC", "FinTech", "FastAPI"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "OVP Customer Acquisition",
    description: "A microservice focused on customer-centric lending, managing business accounts and credit accessibility for small business owners.",
    tags: ["Backend", "Microservices", "FinTech"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Single Sign On (SSO)",
    description: "Developed APIs for a unified authentication system leveraging National IDs and the Golden Customer profiles from the KID project.",
    tags: ["Backend", "Authentication", "SSO", "Security"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Tracking System (ICOG)",
    description: "A robust task management system designed to enhance internal project tracking and boost team productivity within ICOG Labs.",
    tags: ["Full-Stack", "React", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "ERP System (Bluezon)",
    description: "Contributed to building a comprehensive Enterprise Resource Planning system with complex API integrations to automate business processes.",
    tags: ["React", "Express", "API Integration"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "ICOG Landing Page",
    description: "Designed and implemented a high-performance landing page that significantly improved user engagement and brand presentation.",
    tags: ["Next.js", "Tailwind CSS", "UI/UX"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Leyu AI Dataset Platform",
    description: "Developed the frontend for Leyu, a platform enabling intuitive interaction with Ethiopian AI datasets for researchers and developers.",
    tags: ["React", "AI Data", "Frontend"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "China to Africa E-commerce",
    description: "A dynamic e-commerce platform with complex API integrations for cross-border product management and order fulfillment.",
    tags: ["Next.js", "E-commerce", "API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Kegeberew Bider",
    description: "A real-time bidding platform using Next.js and Express, featuring live API synchronization for dynamic auction management.",
    tags: ["Real-time", "Next.js", "Express"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Ermias Amelga Blog",
    description: "A full-stack personal blog system built with the MERN stack, offering dynamic content management and sleek design.",
    tags: ["MERN", "Blog", "Full-Stack"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Genesis Investment Bank",
    description: "A high-performance banking platform built with Next.js, utilizing server-side rendering for optimal security and speed.",
    tags: ["Next.js", "Banking", "SSR"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Kegeberew Import Export",
    description: "An international trade platform streamlining product listings and transaction management with robust API support.",
    tags: ["Web Dev", "API Integration"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Ethio Robo Robotics",
    description: "A responsive website showcasing advanced robotics solutions in Ethiopia, focusing on interactive brand presentation.",
    tags: ["Next.js", "Robotics", "Responsive"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Habesha Net",
    description: "A specialized job posting platform connecting employers and seekers with real-time API-driven job listings.",
    tags: ["React", "Job Board", "API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "True Mark",
    description: "An Ethiopian document authentication system with secure API verification to prevent fraud and ensure document integrity.",
    tags: ["Security", "Web App", "API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Vision Insurance",
    description: "A clean, user-friendly web application for modern insurance services, focusing on ease of use and data management.",
    tags: ["React", "Insurance", "Web App"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Black Economy Excellence (BEE)",
    description: "A platform promoting economic empowerment initiatives, designed to foster community growth and awareness.",
    tags: ["UI/UX", "Next.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Invest in Poverty Initiatives",
    description: "A focused web app supporting poverty alleviation and awareness campaigns with impactful visual storytelling.",
    tags: ["Web App", "Impact"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Kegeberew Real Estate",
    description: "A responsive real estate platform with online property listings, registration, and management features.",
    tags: ["Next.js", "Real Estate"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E.Visa",
    description: "A web application for a visa consulting firm featuring booking systems and detailed informational resources.",
    tags: ["Booking", "Next.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Training Solution Platform",
    description: "Contributed to a scalable e-learning system for managing educational content and trainee progress tracking.",
    tags: ["E-learning", "React", "Scalability"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Loan Collection Management System",
    description: "A comprehensive frontend management system built with Next.js to track and manage loan collections, payments, and debtor communication.",
    tags: ["Frontend", "Next.js", "FinTech", "Management"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Loan Referral Management System",
    description: "A specialized platform designed to manage and track loan referrals, agent commissions, and application progress in real-time.",
    tags: ["Full-Stack", "Workflow", "FinTech"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Rent & Rente Management System",
    description: "A strategic proposal and prototype for a government-level system to manage public property rentals, tax collections, and registration.",
    tags: ["Government", "System Design", "Next.js"],
    liveLink: "#",
    githubLink: "#",
  },
];

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A diverse portfolio showcasing my work in FinTech, AI, E-commerce, and beyond. Total of {projects.length} professional projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => {
            // Sequential image selection based on project overall index (using 4 images to break grid patterns)
            const overallIndex = indexOfFirstProject + index;
            const projectImages = ["/project-fintech.png", "/project-ai.png", "/project-saas.png", "/project-robotics.png"];
            const projectImage = projectImages[overallIndex % 4];
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-gray-100 dark:border-gray-700 group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image 
                    src={projectImage} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-tighter">
                      Project {overallIndex + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-sm border border-blue-100 dark:border-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:translate-x-1 transition-transform"
                    >
                      <FaExternalLinkAlt size={14} /> View Details
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-bold text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors ml-auto"
                    >
                      <FaGithub size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all h-12 w-12 flex items-center justify-center"
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-400" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-12 h-12 rounded-xl text-sm font-bold transition-all ${
                  currentPage === number
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-110"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-400"
                }`}
              >
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all h-12 w-12 flex items-center justify-center"
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}