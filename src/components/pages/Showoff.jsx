"use client";
import { forwardRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { Skills } from '@/libraries/Skills';

const Showoff = forwardRef(function Showoff(_, ref) {

  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(allProjects[0]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects.showoff || []);
        setAllProjects(data.projects.all || []);
      });
  }, []);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-6 relative"
    >
      {/* Titel + Button */}
      <motion.div
        className="max-w-7xl w-full flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={expanded ? "expanded-title" : "highlight-title"}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
          >
            {expanded ? "My Projects" : "My Show-off Projects"}
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.button
            key={expanded ? "expanded-btn" : "highlight-btn"}
            onClick={() => setExpanded((prev) => !prev)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden md:inline-block mb-6 px-6 py-2 rounded-full text-sm font-medium 
                       bg-white/10 text-gray-200 border border-white/20 hover:bg-white/20 
                       transition-colors duration-300"
          >
            {expanded ? "Back to highlights" : "Switch to all projects"}
          </motion.button>
        </AnimatePresence>

        {/* Mobile Navigation */}
        <motion.div
          className="flex justify-center gap-4 mb-4 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button onClick={prev} className="text-white text-3xl px-4 py-2">‹</button>
          <button onClick={next} className="text-white text-3xl px-4 py-2">›</button>
        </motion.div>
      </motion.div>

      {/* Desktop Grid */}
      <div className="hidden md:block w-full mt-8 max-w-7xl">
        <AnimatePresence mode="wait">
          {!expanded ? (
            // Show-off Grid
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-10"
            >
              {projects.map((p, idx) => (
                <ProjectCard key={p.title} project={p} index={idx} />
              ))}
            </motion.div>
          ) : (
            // Expanded All Projects
            <motion.div
              key="expanded"
              className="flex h-[60vh] rounded-3xl overflow-hidden bg-white/5 border border-white/20 backdrop-blur-lg shadow-lg shadow-black/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Sidebar */}
              <motion.div
                className="w-1/4 overflow-y-auto overflow-x-hidden bg-white/10 border-r border-white/20 scrollbar"
                data-scrollable
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {allProjects.map((p) => (
                  <motion.button
                    key={p.title}
                    onClick={() => setSelectedProject(p)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full text-left px-6 py-4 text-gray-200 transition-colors duration-300
                         hover:bg-white/20 ${selectedProject === p ? "bg-white/20 font-semibold" : ""}`}
                  >
                    {p.title}
                  </motion.button>
                ))}
              </motion.div>

              {/* Content */}
              <motion.div
                className="w-3/4 p-8 text-gray-100 overflow-y-auto scrollbar"
                data-scrollable
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">{selectedProject?.title}</h3>
                <div
                  className="leading-relaxed text-gray-300"
                  dangerouslySetInnerHTML={{ __html: selectedProject?.html_description || "" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Mobile Slider */}
      <motion.div
        className="md:hidden relative w-full h-[26rem] mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full"
          >
            <ProjectCard project={projects[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
});

export default Showoff;

// ----------------------------


function ProjectCard({ project, index }) {
  const [showAll, setShowAll] = useState(false);

  if (!project) return null;

  const skills = (project.skills || []).map((skillName) => Skills[skillName] || []);
  const visibleSkills = skills.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
    >

      <motion.div
        layout
        className="relative flex flex-col justify-between rounded-3xl p-10 min-h-[26rem] 
                 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/40 
                 transition duration-300 hover:border-zinc-400 hover:shadow-zinc-400/30"
      >
        <div>
          <h3 className="text-3xl font-semibold text-white mb-6">{project.title}</h3>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Skills */}
        <div className="mt-6 flex gap-3 absolute bottom-10 right-10">
          {visibleSkills.map((skill, idx) => {
            const SkillIcon = skill.icon;
            return <SkillIcon key={idx} className="w-7 h-7 text-gray-400" title={skill.name} />;
          })}

          <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setShowAll(true)}
            onMouseLeave={() => setShowAll(false)}
          >
            <span className="flex items-center justify-center w-7 h-7 text-gray-600">
              <HiDotsHorizontal className="w-4 h-4" />
            </span>

            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 
             bottom-full mb-2 md:top-full md:bottom-auto md:mt-2
             flex flex-col gap-2 bg-black/80 border border-white/10 
             rounded-xl p-3 shadow-lg"
                >
                  {skills.map((skill, idx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <a
                        key={idx}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 transition-all duration-200 transform hover:text-white hover:-translate-y-1"
                      >
                        <SkillIcon className="w-6 h-6 text-gray-400 transition-colors duration-200 group-hover:text-white" />
                        <span className="text-sm max-w-[6rem] truncate">{skill.name}</span>
                      </a>
                    );
                  })}
                </motion.div>

              )}
            </AnimatePresence>
          </div>
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-10 left-10 text-zinc-700 hover:text-zinc-400 transition"
          >
            <FaGithub className="w-7 h-7" />
          </a>
        )}
      </motion.div>

    </motion.div>
  );
}
