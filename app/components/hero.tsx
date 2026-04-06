import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl md:whitespace-nowrap font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="whitespace-nowrap text-blue-600  dark:text-blue-400">Kirubel Menberu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Full-Stack Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Results-driven Full-Stack Software Engineer with strong expertise in front-end development using React.js, Next.js, and Tailwind CSS, and growing backend experience with Python, FastAPI, Flask, and Django. Committed to clean code, performance optimization, and continuous learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/kirubelresumek.docx"
                download
                className="px-6 py-3 bg-blue-600  hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Download Resume
              </a>
              <Link href="#contact">
                <button className="px-6 py-3 border border-blue-600  text-blue-600  dark:text-blue-400 dark:border-blue-400 font-medium rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600  dark:border-blue-400 shadow-xl">
              <Image
                src="/me.jpeg"
                alt="Kirubel Menberu"
                fill
                style={{ objectFit: "cover", objectPosition: "center bottom" }}
                className="scale-125 -translate-y-[6%] -translate-x-[6%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}