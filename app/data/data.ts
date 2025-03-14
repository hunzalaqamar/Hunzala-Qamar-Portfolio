import { Experience, Project } from "@/components/interface/interface";
import { Github, Linkedin, Mail } from "lucide-react";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/hunzalaqamar",
    Icon: Github,
    srLabel: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/hunzalaqamar/",
    Icon: Linkedin,
    srLabel: "LinkedIn",
  },
  {
    href: "mailto:hunzla.qamar@gmail.com",
    Icon: Mail,
    srLabel: "Email",
  },
];

export const TECHNOLOGIES = [
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "ReactJS",
      "NextJS",
      "Material UI",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "Redux.js",
      "Recoil.js",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Java",
      "Python",
      "PHP",
      "Spring Boot",
      "C#",
      "C",
      "C++",
      "Microsoft SQL Server",
      "MySQL",
      "Firebase",
      "Cloud Firestore",
    ],
  },
  {
    category: "Mobile",
    skills: ["React Native", "Android Development", "Kotlin"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    skills: [
      "Jira",
      "Bitbucket",
      "GitHub",
      "Git",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft Office",
      "Airtable",
      "VS Code",
      "Postman",
      "Figma",
      "Vercel",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "HazelsOne",
    description:
      "HazelsOne revolutionizes payment transactions with a seamless, one-tap solution, empowering businesses and consumers with secure, fast, and efficient digital payments. Designed for ease of use, it offers robust features, integration capabilities, and a user-friendly interface to enhance financial operations and customer experiences.",
    image: "/hazelsone.png",
    url: "https://hazelsone-website.vercel.app/",
    technologies: ["Next.js", "TailwindCSS", "Vercel", "React"],
  },
  {
    title: "Eftaapay",
    description:
      "Eftaapay is an innovative digital payment solution designed to streamline online transactions for both businesses and consumers. Featuring a secure interface, real-time processing, and robust integration capabilities, Eftaapay simplifies financial management and enhances the overall payment experience.",
    image: "/eftaapay.png",
    url: "https://eftaapay.com/",
    technologies: ["ReactJs, TailwindCSS.JS, Firebase, AWS"],
  },
  {
    title: "Projexon Engineering Solutions",
    description:
      "Projexon Engineering Solutions is a professional platform focused on delivering innovative engineering and project management solutions. It serves as a hub for clients to explore solutions, view case studies, and connect with experienced professionals dedicated to quality, efficiency, and technical excellence.",
    image: "/projexon-engineering.png",
    url: "https://projexon-engineering-solutions.vercel.app/",
    technologies: ["ReactJs, TailwindCSS.JS, Firebase, AWS"],
  },

  {
    title: "Wave V2",
    description:
      "Wave V2 is a modern human resources management platform designed to optimize workforce productivity and streamline HR operations. With an intuitive interface and robust features, it helps organizations manage employee data, track performance, and facilitate seamless communication.",
    image: "/wave-hr.png",
    url: "https://wave-v2.vercel.app/",
    technologies: [
      "ReactJs, TailwindCSS, NodeJS, Recoil.JS, Firebase, ShadeCDN, AWS",
    ],
  },

  {
    title: "Career Network",
    description:
      "Career Network is a comprehensive online platform dedicated to bridging the gap between job seekers and employers. The site offers a suite of tools including job matching, application management, and career insights, all delivered through a user-friendly interface that streamlines recruitment and career development.",
    image: "/careernetwork.png",
    url: "https://careernetwork.co/",
    technologies: [
      "ReactJs, TailwindCSS, NodeJS, Recoil.JS, Firebase, ShadeCDN, AWS",
    ],
  },
  {
    title: "Sunhill Medical Center",
    description:
      "Sunhill Medical Center’s website serves as a vital resource for patients and healthcare professionals, offering detailed information on services, specialist care, and appointment scheduling. Its clean, modern design ensures easy navigation and a seamless user experience in accessing health information and medical services.",
    image: "/sunhill.png",
    url: "https://sunhillmedicalcenter.com/",
    technologies: ["ReactJs, TailwindCSS, Vercel"],
  },
  {
    title: "A Better You Official",
    description:
      "A Better You Official is a WordPress-based platform dedicated to showcasing the mission, initiatives, and community stories of the organization. The site features blog posts, updates on projects, and inspirational content aimed at promoting personal growth and social impact. It serves as an online hub where visitors can learn about ongoing efforts, success stories, and ways to get involved in making a better tomorrow.",
    image: "/abetteryou.png",
    url: "https://abetteryouofficial.wordpress.com/",
    technologies: ["Figma", "Wordpress"],
  },
];

export const MOBILE_APPS: Project[] = [
  {
    title: "EyeGuard Mobile App",
    description:
      "'EyeGuard' is a mobile app designed to help users detect eye strain, especially after long periods of screen usage. Prolonged screen time can lead to eye fatigue, which can affect vision and productivity. The app allows users to take a selfie, and it analyzes their face for signs of eye strain, such as redness or droopy eyes. Based on the analysis, the app will suggest whether to take a break or continue working. This app promotes better eye health by reminding users to rest their eyes and prevent eye strain.",
    image: "/eyeguard.png", // update with your image path
    url: "", // add a URL if available
    technologies: [
      "Android Studio",
      "Firebase",
      "OpenCV",
      "Firebase API Integration",
      "Responsive UI",
    ],
  },
  {
    title: "EftaaPay Mobile App",
    description:
      "EftaaPay Mobile App transforms your smartphone into a standalone payment terminal, enabling secure and seamless on-the-go transactions. Developed in Android Studio with Firebase integration, it provides robust authentication, real-time transaction processing, and compliance with digital payment standards. The app features an intuitive, responsive design to deliver a smooth user experience while ensuring top-notch security through encryption and dedicated security APIs.",
    image: "/eftaapaymobileapp.png", // update with your image path
    url: "", // add a URL if available
    technologies: [
      "Android Studio",
      "Kotlin",
      "RetroFit",
      "Payment Processing",
      "Responsive UI",
      "Security APIs",
    ],
  },
  {
    title: "Bikegenics",
    description:
      "Bikegenics is a mobile application developed in Android Studio with Firebase integration. It serves as a comprehensive platform for buying and selling bike parts. The app features a responsive design that ensures a smooth user experience across devices. Key functionalities include secure user authentication, real-time database updates, product listings with detailed information, search and filter capabilities, secure transactions, and user reviews. Bikegenics is built with performance and security in mind, making it easy for bike enthusiasts to connect and trade reliably.",
    image: "/bikegenics.png",
    url: "",
    technologies: [
      "Android Studio",
      "Firebase",
      "Java/Kotlin",
      "Responsive UI",
    ],
  },
  {
    title: "Spartan",
    description:
      "Spartan is an advanced Android device protection app designed to safeguard user data and privacy. Developed with Android Studio and integrated with Firebase for backend support, Spartan offers features such as disabling the microphone and camera, capturing intruder selfies upon unauthorized access, and protecting device ports. Its user-friendly and responsive design ensures a seamless experience while providing robust security controls. Spartan focuses on proactive defense, alerting users in real-time and ensuring the device remains secure against potential privacy breaches.",
    image: "/spartan.png",
    url: "",
    technologies: [
      "Android Studio",
      "Firebase",
      "Java/Kotlin",
      "Responsive Design",
      "Security APIs",
    ],
  },
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer",
    company: "EftaaPay",
    period: "Jul 2024 - Present",
    description: [
      "Back-End (Spring Boot): Developed RESTful APIs, integrated databases, ensured secure authentication/authorization, and maintained comprehensive testing and documentation.",
      "Android Development: Built and optimized Android apps with modern UI/UX, local data storage, robust testing, and CI/CD pipelines for streamlined releases.",
      "Front-End (React): Created scalable, reusable components, implemented state management, ensured responsive design, and integrated front-end with back-end services.",
      "Payment Processing & Cloud SoftPOS: Integrated cloud-based SoftPOS solutions for secure, compliant digital payment acceptance, handled complex transaction flows, and continuously refined performance and reliability.",
    ],
    image: "/eplogodown.png",
  },
  {
    role: "Software Engineer",
    company: "Careernetwork.co",
    period: "Sept. 2022 - August 2024",
    description: [
      "Developed job and CVC modules from scratch for end-to-end functionality.",
      "Built an elegant, user-friendly landing page using Next.js to boost engagement.",
      "Performed critical bug fixes and thorough debugging to ensure platform stability.",
      "Enhanced the admin panel for efficient platform management and oversight.",
      "Refactored the codebase to improve performance, speed, and maintainability.",
      "Implemented performance enhancements such as code splitting and lazy loading.",
      "Led redesign efforts focusing on user-centered design and accessibility improvements.",
    ],
    image: "/cnlogo.png",
  },
  {
    role: "Chief Technology Officer",
    company: "A Better You Official",
    period: "Aug. 2022 - Present",
    description: [
      "Designed and developed dynamic, responsive applications using ReactJS and React Native.",
      "Evaluated prototype feasibility and maintained/upgraded codebases to improve performance.",
      "Designed and implemented solutions like a 3D-object renderer to address client pain points.",
      "Optimized application performance with state management using React and Redux.",
      "Utilized REST APIs and Axios for efficient data fetching and integration.",
    ],
    image: "/aby.png",
  },
  {
    role: "Associate Software Engineer",
    company: "Luminogics",
    period: "July 2021 - Dec. 2021",
    description: [
      "Worked on full-stack development projects and contributed to debugging and code maintenance.",
      "Gained valuable experience in application design and collaborative problem-solving.",
    ],
    image: "/luminogicslogo.png",
  },
];

export const EDUCATION: Experience[] = [
  {
    role: "Masters of Science in Information Security",
    company: "University of Management and Technology, Lahore",
    period: "October 2023 - Present",
    description: [
      "Information Security – Focused on security protocols, risk management, and designing secure systems.",
      "Cryptography – Explored encryption methods, cryptographic algorithms, and secure communication techniques.",
      "Data Communication – Studied network protocols, data transfer methodologies, and wireless communication standards.",
      "Additional Topics – Covered network security, security auditing, and emerging cybersecurity technologies through practical projects and research.",
    ],
    image: "/umtlogo.png",
  },
  {
    role: "Bachelors of Science in Software Engineering",
    company: "University of Management and Technology, Lahore",
    period: "Sept. 2018 - March 2023",
    description: [
      "Programming Fundamentals (PF) – Developed core programming skills and problem-solving techniques.",
      "Object-Oriented Programming (OOP) – Designed and implemented applications using object-oriented principles.",
      "Data Structures and Algorithms (DSA) – Mastered efficient algorithm design and complex data structure utilization.",
      "Database Systems (DB) – Gained expertise in relational database design and SQL querying.",
      "Software Construction – Focused on building scalable and maintainable software solutions.",
      "Software Engineering (SE) – Applied engineering methodologies to manage the software development lifecycle.",
      "Site Reliability Engineering (SRE) – Learned best practices for system reliability, performance monitoring, and incident management.",
      "Object-Oriented Software Engineering (OOSE) – Emphasized design patterns and advanced software architecture principles.",
      "Mobile App Development – Built responsive mobile applications with an emphasis on modern UI/UX and user experience design.",
    ],
    image: "/umtlogo.png",
  },
];
