import { forwardRef } from "react";
import Object from "@/components/particle/Object";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Hero = forwardRef(({ scrollToIndex }, ref) => {
    return (
        <section ref={ref} className="min-h-screen overflow-hidden relative">
            {/* Hero Container */}
            <section className="min-h-screen flex flex-col items-center px-4">
                {/* NAME FIRST */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0 }}
                    className="flex flex-col items-center md:items-start md:text-left my-10"
                >
                    <span className="text-5xl md:text-7xl font-bold text-white">Mxrlin</span>
                    <span className="text-[16px] md:text-[25px] font-medium text-gray-100 mt-2 md:mt-0">Marlin Eichelmann</span>
                </motion.div>

                <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
                    {/* LEFT COLUMN */}
                    <div className="w-full md:w-1/2 flex flex-col mx-20 md:mt-0">
                        {/* Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-4 text-2xl md:text-3xl text-gray-100 text-center md:text-left"
                        >
                            Fullstack Software Engineer
                        </motion.div>

                        {/* Value Statement */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-2 text-gray-400 text-center md:text-left mb-6 md:mb-10 w-full md:w-3/4"
                        >
                            Fullstack engineer focused on Java backends, fast React apps, and high-performance Minecraft plugins.
                        </motion.p>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start"
                        >
                            {["React", "Next.js", "Tailwind CSS", "Java", "Node.js", "PostgreSQL"].map((tech) => (
                                <span key={tech} className="text-sm text-gray-400 px-2 py-1 border border-gray-600 rounded">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* Button + GitHub */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start"
                        >
                            <motion.button
                                style={{ "--x": "100%", "--primary": "#3b82f6" }}
                                initial={{ "--x": "100%" }}
                                animate={{ "--x": "-100%" }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: 1,
                                    type: "spring",
                                    stiffness: 20,
                                    damping: 15,
                                    mass: 2
                                }}
                                className="relative cursor-pointer px-6 py-3 border border-gray-600 rounded-lg uppercase tracking-wide font-medium text-white
                                      bg-black/30 hover:bg-black/50 backdrop-blur-md transition-all duration-300 overflow-hidden hover:scale-[1.05]"
                                onClick={() => scrollToIndex(1)}
                            >
                                <span
                                    className="relative block z-10"
                                    style={{ maskImage: "linear-gradient(-75deg, var(--primary) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--primary) calc(var(--x) + 100%))" }}
                                >
                                    Explore my work →
                                </span>
                            </motion.button>

                            <motion.a
                                href="https://github.com/DeveloperMxrlin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-white text-3xl transition mt-4 md:mt-0"
                            >
                                <FaGithub />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <motion.div
                        className="hidden md:flex md:w-1/2 justify-center h-[40vh] md:h-[60vh]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <Object />
                    </motion.div>
                </div>
            </section>
        </section>
    );
});

export default Hero;
