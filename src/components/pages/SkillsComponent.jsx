import React, { forwardRef } from "react";
import Marquee from "react-fast-marquee";
import { Skills } from "@/libraries/Skills";
import { motion } from "framer-motion";

const SkillsComponent = forwardRef((props, ref) => {
  const languages = [Skills.JavaScript, Skills.Java, Skills.HTML, Skills.CSS, Skills.PostgreSQL, Skills.MySQL, Skills.SQLite];
  const frameworks = [Skills.React, Skills.NextJS, Skills.Tailwind, Skills.NodeJS, Skills.Express, Skills.SpringBoot, Skills.Spigot, Skills.Minecraft];
  const tools = [
    Skills.FramerMotion, Skills.ReactQuery, Skills.ReactRouter, Skills.ReactThreeFiber, Skills.ThreeJS,
    Skills.Recharts, Skills.Bcrypt, Skills.Dotenv, Skills.Cors, Skills.JJWT, Skills.Helmet, Skills.Joi,
    Skills.JWT, Skills.QRCode, Skills.Speakeasy, Skills.Git, Skills.IntersectionObserver, Skills.Gson, Skills.ASM, Skills.OkHttp
  ];

  const renderSkills = (skills, keyPrefix) => (
    [...skills, ...skills, ...skills].map((skill, idx) => {
      const Icon = skill.icon;
      return (
        <motion.a
          key={`${keyPrefix}-${idx}`}
          href={skill.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 sm:mx-8 flex flex-col items-center transform transition-transform duration-300"
          whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: idx * 0.05, type: "spring", stiffness: 120, damping: 20 }}
        >
          <Icon className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2" />
          <span className="text-xs sm:text-sm">{skill.name}</span>
        </motion.a>
      );
    })
  );

  const renderSlider = (skills, direction, label, labelClass) => (
    <div className="relative w-full h-32 sm:h-40 overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-32 sm:w-60 md:w-96 z-30 pointer-events-none bg-gradient-to-r from-zinc-950/100 via-zinc-950/0"></div>
      <div className="absolute top-0 right-0 h-full w-32 sm:w-60 md:w-96 z-30 pointer-events-none bg-gradient-to-l from-zinc-950/100 via-zinc-950/0"></div>

      <motion.span
        className={labelClass}
        initial={{ x: direction === "left" ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {label}
      </motion.span>

      <Marquee gradient={false} speed={50} pauseOnHover={false} direction={direction} className="h-full">
        {renderSkills(skills, label)}
      </Marquee>
    </div>
  );

  const rightGradientLabel =
    "absolute top-0 right-0 h-full flex items-center justify-end text-lg sm:text-2xl md:text-3xl pr-4 sm:pr-8 md:pr-10 bg-gradient-to-l from-zinc-950/100 via-zinc-950/80 to-black/0 text-gray-400 z-20";
  const leftGradientLabel =
    "absolute top-0 left-0 h-full flex items-center justify-start text-lg sm:text-2xl md:text-3xl pl-4 sm:pl-8 md:pl-10 bg-gradient-to-r from-zinc-950/100 via-zinc-950/80 to-black/0 text-gray-400 z-20";

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-4"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 tracking-wide text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Skills
      </motion.h1>
      <motion.p
        className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-10 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Technologies I work with to build modern applications
      </motion.p>

      {renderSlider(languages, "left", "LANGUAGES //", rightGradientLabel)}
      {renderSlider(frameworks, "right", "// FRAMEWORKS", leftGradientLabel)}
      {renderSlider(tools, "left", "TOOLS //", rightGradientLabel)}
    </div>
  );
});

export default SkillsComponent;
