import {Skills} from "./Skills";

export const allProjects = [
    {
        "title": "PiDash",
        "html_description": `
      <p class="text-lg mb-4">
        PiDash is a dashboard web application designed to monitor and visualize data from a Raspberry Pi device.
      </p>

        <h2 class="mt-6 mb-2 text-lg font-bold">Purpose & Approach</h2>
        <p>
        PiDash was built as a personal tool for the developer to monitor the performance and sensor data of his Raspberry Pi device in real time. 
        It provides a clear and centralized dashboard for system resource usage, uptime, and connected peripherals. 
        Although designed for private use, its modular architecture allows it to be easily adapted for broader applications, such as monitoring multiple devices or small IoT projects.
        </p>

      <h2 class="mt-6 mb-2 text-lg font-bold">Key Features</h2>
      <ul class="list-disc list-inside text-gray-300 mb-10">
        <li>Real-time data visualization using Recharts.</li>
        <li>Responsive design with React and Tailwind CSS.</li>
        <li>Backend API with Express.js and SQLite for data storage.</li>
        <li>Secure configuration management with Dotenv.</li>
        <li>Efficient data fetching using React Query.</li>
        <li>Client-side routing with React Router.</li>
      </ul>

      <h2 class="mt-6 mb-2 text-lg font-bold">Frontend</h2>
      <p>
      The frontend of PiDash is built using React, using standard CSS for styling. 
      It features a clean and intuitive interface that allows users to easily navigate through different sections of the dashboard. 
      The use of React Router enables seamless client-side routing, while React Query manages data fetching and caching efficiently.
      </p>

      <h2 class="mt-6 mb-2 text-lg font-bold">Backend</h2>
      <p>The backend is developed with Node.js and Express.js, providing a robust API for data retrieval and management. 
      SQLite is used as the database to store the collected data, ensuring lightweight and efficient storage. 
      The backend also incorporates Dotenv for secure handling of environment variables.
      </p>

      <h2 class="mt-6 mb-2 text-lg font-bold">Portfolio Value</h2>
      <p>PiDash demonstrates full-stack development proficiency, integrating frontend, backend, and database layers. 
      It highlights the ability to handle asynchronous data, create interactive dashboards, and maintain clean, modular code. 
      This project is an excellent showcase for real-world application development skills and problem-solving in web projects.
      </p>
`,
        "skills": [
            Skills.React,
            Skills.JavaScript,
            Skills.CSS,
            Skills.Express,
            Skills.ReactQuery,
            Skills.ReactRouter,
            Skills.SQLite,
            Skills.Dotenv,
            Skills.Recharts
        ],
        "github": "https://github.com/DeveloperMxrlin/PiDash"
    },
    {
        "title": "Portfolio",
        "html_description": `
    <p class="text-lg mb-4">
      This personal portfolio website serves as my digital showcase — built to highlight my skills, projects and interactive web experiences in a clean and modern interface.
    </p>
    <h2 class="mt-6 mb-2 text-lg font-bold">Purpose & Approach</h2>
    <p class="mb-4">
      I designed this portfolio to reflect my core philosophy: intuitive user experience, polished animations, and a seamless journey through my professional story. 
      Using Next.js and React for the frontend, I structured the site for performance, responsiveness and modularity. With Framer Motion for elegant transitions and 
      Tailwind CSS for utility‑first styling, each section transitions smoothly while maintaining consistency across devices.
    </p>
    <h2 class="mt-6 mb-2 text-lg font-bold">Key Features</h2>
    <ul class="list-disc list-inside text-gray-300 mb-10">
      <li>Framework‑driven architecture using Next.js and React for fast client‑rendering.</li>
      <li>Wellthought animations and micro‑interactions with Framer Motion for a refined user experience.</li>
      <li>Utility‑first responsive styling with Tailwind CSS, ensuring consistency and adaptability across viewports.</li>
      <li>3D and canvas integration via React Three Fiber and Three.js to enhance visual engagement and interactive elements.</li>
      <li>Efficient scroll‑ and view‑based triggers using Intersection Observer API to drive animations only when they enter the viewport and optimize performance.</li>
      <li>Clean JavaScript architecture demonstrating strong ES6+ fundamentals and reusable component design.</li>
    </ul>
    <h2 class="mt-6 mb-2 text-lg font-bold">Portfolio Value</h2>
    <p>
      This site serves as more than just a resume — it’s a demonstration of my ability to design, build and optimize web experiences end‑to‑end. From performance‑oriented rendering (via Next.js/React), seamless motion (via Framer Motion), to immersive interactive visuals (via React Three Fiber/Three.js) and viewport‑aware triggers (via Intersection Observer) — it exemplifies my capacity to deliver modern, expressive and high‑quality projects.
    </p>
  `,
        "skills": [
            Skills.JavaScript,
            Skills.NextJS,
            Skills.React,
            Skills.FramerMotion,
            Skills.Tailwind,
            Skills.ReactThreeFiber,
            Skills.ThreeJS,
            Skills.IntersectionObserver
        ],
        "github": "https://github.com/DeveloperMxrlin/Portfolio"
    },
    {
        "title": "FileManager",
        "html_description": `
    <p class="text-lg mb-4">
      FileManager is a powerful Spigot plugin designed for Minecraft server administrators who want to edit server files in‑game, without the hassle of manual edits or server restarts.
    </p>

    <h2 class="mt-6 mb-2 text-lg font-bold">Purpose & Approach</h2>
    <p class="mb-4">
      The plugin was developed to simplify file management on a live Minecraft server by allowing admins to open, edit and save configuration files directly from in‑game. 
      Instead of navigating to file directories, stopping the server, editing YAML or JSON files, and restarting, FileManager enables immediate changes via a GUI command
       interface. This approach not only streamlines workflows but also reduces downtime and mistakes. While built primarily for server owners using versions from 
       1.13.x to 1.18.x, its modular architecture and API make it extensible for custom plugin integrations and automated file‑manipulation workflows.
    </p>

    <h2 class="mt‑6 mb‑2 text-lg font-bold">Key Features</h2>
    <ul class="list-disc list-inside text-gray-300 mb-10">
      <li>In‑game GUI interface to browse and edit files directly on the server.</li>
      <li>Support for YAML, JSON and direct file‑editing without server restarts.</li>
      <li>Automatic entry‑search and replacement in working plugins, reducing manual overhead.</li>
      <li>Lightweight backend using Java and integration with libraries like OkHttp (for update checker) and Gson (for JSON editing).</li>
      <li>Spigot version support from 1.13.x through 1.18.x, making it suitable for a wide range of server versions.</li>
      <li>Developer API for plugin authors who want to embed file‑editing capabilities into their own plugins.</li>
    </ul>

    <h2 class="mt‑6 mb‑2 text-lg font-bold">Technical Stack & Skills</h2>
    <p>
      This project leverages Java as the core language within the Spigot framework, employing Bukkit/Spigot APIs to manipulate plugin data, directories and files. 
      ASM support allows runtime adjustments, while OkHttp handles networking (for updates) and Gson addresses structured data parsing. 
      The skill set demonstrated here spans plugin development, GUI design, data serialization, runtime instrumentation and server‑side optimization.
    </p>

    <h2 class="mt‑16 text-lg font-bold">Portfolio Value</h2>
    <p>
      FileManager is an excellent addition to a portfolio showcasing real‑world plugin development and server administration tooling. 
      It demonstrates my ability to design highly usable GUIs for server admins, manage asynchronous file operations safely, and support multiple Minecraft versions. 
      It underscores my competence in both backend logic and user‑facing interface design in the gaming domain.
    </p>
  `,
        "skills": [
            Skills.Minecraft,
            Skills.Java,
            Skills.Spigot,
            Skills.Gson,
            Skills.ASM,
            Skills.OkHttp
        ],
        "github": "https://github.com/DeveloperMxrlin/FileManager"
    },
    {
        "title": "OPCRM",
        "html_description": "<p>Work in Progress.</p>",
        "skills": [Skills.Java, Skills.SpringBoot, Skills.MySQL, Skills.PostgreSQL, Skills.Bcrypt, Skills.JJWT],
        "github": "https://github.com/DeveloperMxrlin"
    },
    {
        "title": "StreamInteraction",
        "html_description": `
    <p class="text-lg mb-4">
      StreamInteraction is a Spigot plugin that enables seamless interaction between livestreams (YouTube, TikTok) and a Minecraft server — allowing live events on stream to trigger actions in-game.
    </p>

    <h2 class="mt-6 mb-2 text-lg font-bold">Purpose & Approach</h2>
    <p class="mb-4">
      The plugin was built to bridge the gap between stream content and Minecraft gameplay, giving content creators and server owners the ability to turn passive viewers into active participants. Actions on stream — like chat messages, tips, or commands — can be mapped to in-game events or responses. Its modular architecture allows easy customization and expansion, so server owners can adapt triggers, commands or integrations to their own audience and streaming setup.
    </p>

    <h2 class="mt-6 mb-2 text-lg font-bold">Key Features</h2>
    <ul class="list-disc list-inside text-gray-300 mb-10">
      <li>Live sync between livestream events (YouTube, TikTok) and Minecraft server commands.</li>
      <li>Custom mapping of stream actions to in-game effects or commands.</li>
      <li>Support for multiple streaming platforms through dedicated integrations.</li>
      <li>Uses Gson for JSON data processing and configuration management.</li>
      <li>Spigot plugin architecture, compatible with popular Minecraft server versions.</li>
      <li>Lightweight, event-driven, and designed for minimal performance overhead.</li>
    </ul>

    <h2 class="mt-6 mb-2 text-lg font-bold">Technical Stack & Skills</h2>
    <p class="mb-4">
      Developed in Java using the Spigot API to integrate with Minecraft servers, StreamInteraction leverages libraries like Gson for JSON handling. It also supports external livestream APIs (e.g. YouTube, TikTok) to listen for events and translate those into in-game triggers. The plugin architecture focuses on extensibility, allowing further protocol support or custom mapping logic.
    </p>

    <h2 class="mt-6 mb-2 text-lg font-bold">Portfolio Value</h2>
    <p>
      StreamInteraction demonstrates how real-time event-driven systems can interact across domains — merging streaming platforms with game worlds. It emphasizes proficiency in plugin development, API integration, asynchronous event handling, and modular design. As a portfolio project, it showcases readiness to build cross-platform interactive tools and enrich user engagement in live settings.
    </p>
  `,
        "skills": [
            Skills.Minecraft,
            Skills.Java,
            Skills.Spigot,
            Skills.Gson
        ],
        "github": "https://github.com/DeveloperMxrlin/StreamInteraction"
    }
];

export const showoffProjects = [
    {
        "title": "OPCRM",
        "description": "A lightweight, on-premise CRM system designed for small businesses, offering maximum security and full control by running directly on the company's own server.",
        "github": "https://github.com",
        "skills": [
            "Java",
            "SpringBoot",
            "MySQL",
            "PostgreSQL",
            "Bcrypt",
            "JJWT"
        ]
    },
    {
        "title": "PiDash",
        "description": "A dashboard for my custom Raspberry Pi NAS server, providing a clear overview of system status, storage usage, and running services.",
        "github": "https://github.com/DeveloperMxrlin/PiDash",
        "skills": [
            "React",
            "JavaScript",
            "CSS",
            "Express",
            "ReactQuery",
            "ReactRouter",
            "SQLite",
            "Dotenv",
            "Recharts"
        ]
    },
    {
        "title": "Portfolio",
        "description": "This portfolio, which focuses on frontend development, with a particular emphasis on animations, design, and 3D elements.",
        "github": "https://github.com/DeveloperMxrlin/Portfolio",
        "skills": [
            "JavaScript",
            "NextJS",
            "React",
            "FramerMotion",
            "Tailwind",
            "ReactThreeFiber",
            "ThreeJS",
            "IntersectionObserver"
        ]
    }
];