import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMysql,
  SiSpringboot,
  SiFramer,
  SiSqlite,
  SiDotenv,
  SiJsonwebtokens,
  SiReactquery,
  SiReactrouter,
  SiSpigotmc
} from "react-icons/si";

import { DiJava } from "react-icons/di";
import { 
  MdQuestionMark,
  MdHttp
 } from "react-icons/md";
import { 
  TbHelmet, 
  TbQrcode, 
  TbBrandThreejs,
  TbBrandMinecraft
} from "react-icons/tb";
import { RiBeerFill } from "react-icons/ri";
import { BsFiletypeJson } from "react-icons/bs";

export const Skills = {
  JavaScript: { name: "JavaScript",     icon: SiJavascript, url: "https://www.javascript.com/" },
  Java: { name: "Java",                 icon: DiJava, url: "https://www.java.com/" },
  HTML: { name: "HTML5",                icon: SiHtml5, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  CSS: { name: "CSS3",                  icon: SiCss3, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  React: { name: "React",               icon: SiReact, url: "https://reactjs.org/" },
  NextJS: { name: "Next.js",            icon: SiNextdotjs, url: "https://nextjs.org/" },
  FramerMotion: { name: "Framer Motion", icon: SiFramer, url: "https://www.framer.com/motion/" },
  Tailwind: { name: "Tailwind CSS",     icon: SiTailwindcss, url: "https://tailwindcss.com/" },
  PostgreSQL: { name: "PostgreSQL",     icon: SiPostgresql, url: "https://www.postgresql.org/" },
  MySQL: { name: "MySQL",               icon: SiMysql, url: "https://www.mysql.com/" },
  SQLite: { name: "SQLite",             icon: SiSqlite, url: "https://www.sqlite.org/" },
  NodeJS: { name: "Node.js",            icon: SiNodedotjs, url: "https://nodejs.org/" },
  Express: { name: "Express.js",        icon: SiExpress, url: "https://expressjs.com/" },
  SpringBoot: { name: "Spring Boot",    icon: SiSpringboot, url: "https://spring.io/projects/spring-boot" },
  Git: { name: "Git",                   icon: SiGit, url: "https://git-scm.com/" },
  Bcrypt: { name: "Bcrypt",             icon: MdQuestionMark, url: "https://www.npmjs.com/package/bcrypt" },
  Dotenv: { name: "Dotenv",             icon: SiDotenv, url: "https://www.npmjs.com/package/dotenv" },
  Cors: { name: "CORS",                 icon: MdQuestionMark, url: "https://www.npmjs.com/package/cors" },
  JJWT: { name: "JJWT",                 icon: SiJsonwebtokens, url: "https://github.com/jwtk/jjwt" },
  Helmet: { name: "Helmet",             icon: TbHelmet, url: "https://www.npmjs.com/package/helmet" },
  Joi: { name: "Joi",                   icon: MdQuestionMark, url: "https://joi.dev/" },
  JWT: { name: "JWT",                   icon: SiJsonwebtokens, url: "https://jwt.io/" },
  QRCode: { name: "QRCode",             icon: TbQrcode, url: "https://www.npmjs.com/package/qrcode" },
  Speakeasy: { name: "Speakeasy",       icon: RiBeerFill, url: "https://www.npmjs.com/package/speakeasy" },
  ReactQuery: { name: "React Query",    icon: SiReactquery, url: "https://tanstack.com/query/latest" },
  ReactRouter: { name: "React Router",  icon: SiReactrouter, url: "https://reactrouter.com/" },
  Recharts: { name: "Recharts",         icon: SiReact, url: "https://recharts.org/" },
  ReactThreeFiber: { name: "React Three Fiber", icon: SiReact, url: "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" },
  ThreeJS: { name: "Three.js",          icon: TbBrandThreejs, url: "https://threejs.org/" },
  IntersectionObserver: { name: "Intersection Observer", icon: MdQuestionMark, url: "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" },
  Spigot: { name: "Spigot",             icon: SiSpigotmc, url: "https://www.spigotmc.org/" },
  Gson: { name: "Gson",                 icon: BsFiletypeJson, url: "https://en.wikipedia.org/wiki/Gson"},
  ASM: { name: "ASM",                   icon: MdQuestionMark, url: "https://asm.ow2.io/" },
  OkHttp: { name: "OkHttp",             icon: MdHttp, url: "https://square.github.io/okhttp/" },
  Minecraft: { name: "Minecraft",       icon: TbBrandMinecraft, url: "https://www.minecraft.net/" }
};
