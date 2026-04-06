import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight, FaTimes, FaLayerGroup, FaUserTag, FaMicrochip } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Kifiya Identification Service (KID)",
    role: "Backend Architect & Data Engineer",
    description: "Contributed from scratch to unify user identities by processing hundreds of thousands of records from multiple banks to create 'Golden Customer' profiles.",
    detailedDescription: "Designed and implemented a high-performance identity reconciliation engine. Orchestrated complex data pipelines to ingest, clean, and match disparate banking records, ensuring data integrity across the national financial identification system.",
    tags: ["Backend", "Python", "FastAPI", "PostgreSQL", "Data Transformation"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "KID Dedup Service",
    role: "Lead Backend Developer",
    description: "A specialized microservice that analyzes bank data to identify and deduplicate user records across different financial institutions.",
    detailedDescription: "Developed sophisticated fuzzy-matching algorithms to resolve identity overlaps. This service significantly reduced redundant customer entries, improving the accuracy of credit scoring and risk assessment for partner banks.",
    tags: ["Python", "FastAPI", "Algorithm Design", "Microservices"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "OVP Customer Management",
    role: "Full-Stack Engineer",
    description: "A role-based KYC management system developed for banks and Kifiya to streamline lending and credit assessment workflows.",
    detailedDescription: "Built a secure, multi-tenant administrative portal. Implemented granular RBAC (Role-Based Access Control) and integrated real-time identity verification workflows to expedite the Know Your Customer (KYC) process.",
    tags: ["React", "FastAPI", "KYC", "Auth"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "OVP Customer Acquisition",
    role: "Backend Developer",
    description: "A microservice focused on customer-centric lending, managing business accounts and credit accessibility for small business owners.",
    detailedDescription: "Engineered scalable APIs for loan application processing. Focused on building flexible business entity models that accommodate various MSME structures, allowing for automated credit worthiness checks.",
    tags: ["Microservices", "FinTech", "FastAPI", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Single Sign On (SSO)",
    role: "Security Engineer",
    description: "Developed APIs for a unified authentication system leveraging National IDs and the Golden Customer profiles from the KID project.",
    detailedDescription: "Designed an OIDC-compliant SSO provider. Integrated national identification protocols with bank-level security to enable seamless and secure cross-platform authentication for financial services.",
    tags: ["OAuth2", "OIDC", "Security", "FastAPI"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Tracking System (ICOG)",
    role: "Full-Stack Lead",
    description: "A robust task management system designed to enhance internal project tracking and boost team productivity within ICOG Labs.",
    detailedDescription: "Led the development of a collaborative workspace tool. Integrated nested task structures, real-time board updates, and complex permission systems tailored for high-intensity R&D environments.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "ERP System (Bluezon)",
    role: "Frontend Specialist",
    description: "Contributed to building a comprehensive Enterprise Resource Planning system with complex API integrations to automate business processes.",
    detailedDescription: "Spearheaded the UI/UX architecture for the finance and inventory modules. Focused on dashboard performance and interactive reporting features to provide management with actionable real-time insights.",
    tags: ["React", "Redux", "Redux Toolkit", "API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "ICOG Landing Page",
    role: "UI/UX Designer & Frontend Dev",
    description: "Designed and implemented a high-performance landing page that significantly improved user engagement and brand presentation.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    detailedDescription: "Crafted a modern visual identity for the firm. Implemented complex layout animations and SEO optimizations that resulted in a 40% increase in measurable user retention and click-through rates.",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Leyu AI Dataset Platform",
    role: "Frontend Engineer",
    description: "Developed the frontend for Leyu, a platform enabling intuitive interaction with Ethiopian AI datasets for researchers and developers.",
    detailedDescription: "Created a customized data explorer for large-scale multilingual datasets. Focused on accessible UI components for the Amharic and Tigrinya script rendering, facilitating ease of use for researchers.",
    tags: ["React", "AI Data", "Amharic Support"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "China to Africa E-commerce",
    role: "Lead Full-Stack Developer",
    description: "A dynamic e-commerce platform with complex API integrations for cross-border product management and order fulfillment.",
    detailedDescription: "Architected a multi-currency and multi-language shopping experience. Integrated supply-chain APIs and custom shipping calculators to automate the end-to-end purchasing process from Asia to Africa.",
    tags: ["Next.js", "E-commerce", "Globalization"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Kegeberew Bider",
    role: "Full-Stack Engineer",
    description: "A real-time bidding platform using Next.js and Express, featuring live API synchronization for dynamic auction management.",
    detailedDescription: "Implemented a sub-second latency bidding mechanism using WebSockets. Managed concurrent state across thousands of users to ensure fair and accurate real-time auction resolutions.",
    tags: ["Real-time", "Next.js", "WebSockets", "Express"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Ermias Amelga Blog",
    role: "Full-Stack Developer",
    description: "A full-stack personal blog system built with the MERN stack, offering dynamic content management and sleek design.",
    detailedDescription: "Developed a custom headless CMS for content creation and management. Integrated image optimization pipelines and advanced categorization to enhance readable SEO performance.",
    tags: ["MERN Stack", "CMS", "SEO"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Genesis Investment Bank",
    role: "Lead Frontend Developer",
    description: "A high-performance banking platform built with Next.js, utilizing server-side rendering for optimal security and speed.",
    detailedDescription: "Engineered a secure client banking dashboard. Leveraged Next.js Server Components and advanced caching strategies to deliver high-performance, SEO-friendly financial summaries and news portals.",
    tags: ["Next.js", "SSR", "Security", "Banking"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Kegeberew Import Export",
    role: "Full-Stack Engineer",
    description: "An international trade platform streamlining product listings and transaction management with robust API support.",
    detailedDescription: "Developed a centralized inventory and logistics tracking system. Automated the document generation process for custom clearances and implemented real-time product tracking for international shipments.",
    tags: ["Web Dev", "Trade Tech", "Logistics"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Ethio Robo Robotics",
    role: "Lead Developer",
    description: "A responsive website showcasing advanced robotics solutions in Ethiopia, focusing on interactive brand presentation.",
    detailedDescription: "Designed an interactive portfolio showcasing hardware prototypes. Used smooth transitions and a tech-centric aesthetic to attract high-profile engineering partners and investment.",
    tags: ["Next.js", "Robotics", "Branding"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Habesha Net",
    role: "Full-Stack Developer",
    description: "A specialized job posting platform connecting employers and seekers with real-time API-driven job listings.",
    detailedDescription: "Built a job-matching algorithm based on keyword parsing and candidate profiles. Implemented an automated notification system for applicants to keep engagement high in the Ethiopian job market.",
    tags: ["Node.js", "React", "Job Matching"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "True Mark",
    role: "Lead Security / Backend Engineer",
    description: "An Ethiopian document authentication system with secure API verification to prevent fraud and ensure document integrity.",
    detailedDescription: "Designed a secure digital notary service. Utilized cryptographic hashing and robust back-end verification gates to allow government and private agencies to confirm document authenticity instantly.",
    tags: ["Authentication", "Security", "GovTech"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Vision Insurance",
    role: "Frontend Engineer",
    description: "A clean, user-friendly web application for modern insurance services, focusing on ease of use and data management.",
    detailedDescription: "Optimized complex insurance form-filling processes. Focused on multi-step interactive workflows to reduce user drop-off and improve overall conversion for premium insurance services.",
    tags: ["React", "FinTech", "UX Optimization"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Black Economy Excellence (BEE)",
    role: "Full-Stack Lead",
    description: "A platform promoting economic empowerment initiatives, designed to foster community growth and awareness.",
    detailedDescription: "Built a community resources directory and donation dashboard. Designed a scalable system to showcase economic initiatives and provide impactful data visualizations for social growth metrics.",
    tags: ["Next.js", "Social Impact", "Web Portal"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Invest in Poverty Initiatives",
    role: "Full-Stack Developer",
    description: "A focused web app supporting poverty alleviation and awareness campaigns with impactful visual storytelling.",
    detailedDescription: "Created a visual-first donation platform. Integrated complex data-driven modules to show the real-time impact of philanthropic investments on targeted poverty alleviation projects.",
    tags: ["Web App", "Non-Profit Tech", "Visuals"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Kegeberew Real Estate",
    role: "Lead Developer",
    description: "A responsive real estate platform with online property listings, registration, and management features.",
    detailedDescription: "Developed a comprehensive property listing portal with real estate agent dashboards. Implemented advanced search filters and interactive map integration to modernize the local real estate experience.",
    tags: ["Next.js", "Maps API", "Real Estate"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E.Visa",
    role: "Full-Stack Engineer",
    description: "A web application for a visa consulting firm featuring booking systems and detailed informational resources.",
    detailedDescription: "Designed a streamlined visa consultancy workflow. Built custom booking management and document tracking for high-volume visa applications, improving firm efficiency by 30%.",
    tags: ["Next.js", "Booking Logic", "B2B"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Training Solution Platform",
    role: "Full-Stack Developer",
    description: "Contributed to a scalable e-learning system for managing educational content and trainee progress tracking.",
    detailedDescription: "Spearheaded the development of the progress tracking modules. Focused on data visualization of trainee performance and efficient API logic for video-on-demand educational services.",
    tags: ["React", "LMS", "Education Tech"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Loan Collection Management System",
    role: "Frontend Architecture Lead",
    description: "A comprehensive frontend management system built with Next.js to track and manage loan collections, payments, and debtor communication.",
    detailedDescription: "Architected the entire frontend for a debt management platform. Focused on clear data visualization of payment schedules, collector performance dashboards, and automated debtor notification interfaces.",
    tags: ["Next.js", "FinTech", "SaaS Dashboard"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Loan Referral Management System",
    role: "Full-Stack Engineer",
    description: "A specialized platform designed to manage and track loan referrals, agent commissions, and application progress in real-time.",
    detailedDescription: "Built a robust referral engine with complex commission logic. Implemented a real-time dashboard for agents to track lead conversions and payment milestones, boosting transparency in lending operations.",
    tags: ["Full-Stack", "Referral Logic", "Real-time"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Rent & Rente Management System",
    role: "Lead System Designer",
    description: "A strategic proposal and prototype for a government-level system to manage public property rentals, tax collections, and registration.",
    detailedDescription: "Proposed and diseñed a centralized platform for municipal property management. Focused on building a secure architectural prototype for automating rent collection and registry updates for government agencies.",
    tags: ["System Design", "Government Tech", "Next.js"],
    liveLink: "#",
    githubLink: "#",
  },
];

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (project: any, image: string) => {
    setSelectedProject({ ...project, image });
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore a curated selection of {projects.length} major projects across FinTech, AI, E-commerce, and specialized Government systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => {
            const overallIndex = indexOfFirstProject + index;
            const projectImages = ["/project-fintech.png", "/project-ai.png", "/project-saas.png", "/project-robotics.png"];
            const projectImage = projectImages[overallIndex % 4];
            
            return (
              <motion.div
                key={overallIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100 dark:border-gray-700/50 group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image 
                    src={projectImage} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-all duration-500" />
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
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm border border-blue-100 dark:border-blue-800/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-5 mt-auto">
                    <button
                      onClick={() => openModal(project, projectImage)}
                      className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:translate-x-1 transition-transform"
                    >
                      <FaExternalLinkAlt size={12} /> View Details
                    </button>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-bold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors ml-auto"
                    >
                      <FaGithub size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all h-12 w-12 flex items-center justify-center group"
          >
            <FaChevronLeft className="text-gray-400 group-hover:text-blue-600 dark:text-gray-500" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-12 h-12 rounded-xl text-sm font-bold transition-all ${
                  currentPage === number
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-110"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all h-12 w-12 flex items-center justify-center group"
          >
            <FaChevronRight className="text-gray-400 group-hover:text-blue-600 dark:text-gray-500" />
          </button>
        </div>
      </div>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-gray-900/60 dark:bg-black/80 backdrop-blur-sm shadow-2xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100 dark:border-gray-800"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white transition-all hover:rotate-90"
              >
                <FaTimes size={20} />
              </button>

              {/* Modal Banner Image */}
              <div className="md:w-5/12 h-64 md:h-auto relative bg-blue-600">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900/40 via-transparent to-transparent" />
              </div>

              {/* Modal Content */}
              <div className="md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                    <FaLayerGroup size={22} />
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                </div>

                <div className="space-y-8">
                  {/* Role Section */}
                  <div className="bg-blue-50/50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-50 dark:border-blue-900/30">
                    <div className="flex items-center gap-3 mb-3 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-[11px]">
                      <FaUserTag size={16} />
                      My Contribution & Role
                    </div>
                    <div className="text-gray-900 dark:text-white text-lg font-bold leading-snug">
                      {selectedProject.role}
                    </div>
                  </div>

                  {/* Description Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-3 text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest text-[11px]">
                      <FaMicrochip size={16} />
                      System Overview & Tech Stack
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {selectedProject.detailedDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}