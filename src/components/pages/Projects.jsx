"use client";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

const allProjects = Array.from({ length: 18 }, (_, i) => ({
  title: `Projekt ${i + 1}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus.",
}));

const Projects = forwardRef(function Projects(_, ref) {
  const [selectedProject, setSelectedProject] = useState(allProjects[0]);

  return (
    <section
      ref={ref}
      className="min-h-screen px-4 py-10 md:hidden flex flex-col items-center"
    >
      {/* Titel */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl font-bold text-center text-white mb-6"
      >
        All Projects
      </motion.h2>

      {/* Container: erst Content, dann Auswahl */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full flex flex-col rounded-3xl overflow-hidden bg-white/5 border border-white/20 backdrop-blur-lg shadow-lg shadow-black/30"
      >
        {/* Content-Bereich */}
        <div className="w-full p-6 text-gray-100">
          <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
          <p className="leading-relaxed text-gray-300">
            {selectedProject.description}
          </p>
        </div>

        {/* Auswahl-Liste */}
        <div className="w-full max-h-[16rem] overflow-y-auto border-t border-white/20" data-scrollable>
          {allProjects.map((p) => (
            <button
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className={`w-full text-left px-5 py-3 text-gray-200 transition-colors duration-300
                hover:bg-white/20 ${
                  selectedProject.title === p.title
                    ? "bg-white/20 font-semibold"
                    : ""
                }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
});

export default Projects;
