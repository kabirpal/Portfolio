import { BiLogoNetlify, BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt } from "react-icons/di";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiExpress,
  SiJest,
  SiTailwindcss,
  SiMysql,
  SiAdobe,
} from "react-icons/si";

const info_en = {
  // ============ MAIN DETAILS ============
  main: {
    name: "Kabir Pal",
    description:
      "I am a software engineer with expertise in front-end web development. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.",
    photo: "images/photo.jpg",
    email: "kabirpal53@gmail.com",
    phone: 9680976609,
    github: "https://github.com/kabirpal",
  },

  // ============ SOCIAL LINKS ============
  socials: {
    twitter: "https://twitter.com/kabirpal",
    github: "https://github.com/kabirpal",
    linkedin: "https://www.linkedin.com/in/kabirpal/",
    instagram: "https://www.instagram.com/kabir_pal/",
    facebook: "https://facebook.com/kabirpal",
  },

  // ============ PROJECTS ============
  projects: [
    {
      title: "Kabir Netflix Clone",
      description:
        "A Netflix clone that fetches data from the TMDB API, featuring a trailer view, deeply nested recommended movies, reviews, cast profiles, and more, all within a beautifully responsive UI that showcases high-quality images.",
      technologies: "React, Tailwind, Redux, HTML , CSS ,  Javascript",
      github: "https://github.com/kaushik73/Netflix-Clone",
      link: "https://66b8b557a3dcf159d5b48646--movie-drag-8d0296.netlify.app/",
    },
    {
      title: "Meal Recommendation Engine",
      description:
        "Developed a console-based, algorithm-driven Recommendation Engine for a cafeteria, designed to enhance food choices for customers based on their preferences. Supports multiple users and adheres to all SOLID principles.",
      technologies: "SQL, TypeScript",
      github: "https://github.com/kaushik73/cafeteria-management-system",
      link: "",
    },
    {
      title: "Youtube Clone",
      description:
        "A YouTube clone that fetches live data from the YouTube API, featuring an advanced search engine, a simulated live chat with an add message feature, and support for nested comments up to the nth level.",
      technologies: "React, Tailwind, Redux , HTML , CSS ,  Javascript",
      github: "https://github.com/kaushik73/Youtube-Clone",
      link: "https://youtube-clone-kaushik.vercel.app/",
    },

    {
      title: "Password Manager",
      description:
        "A Password manager which securely store  passwords in app. Encrypt passwords using a unique key, ensuring they are safe and protected under lock and key. Key is the encryption of the password used to login to Password Manager.",
      technologies: "React, HTML, CSS, Tailwind , Javascript",
      github: "https://github.com/kaushik73/Password-Manager/tree/master",
      link: "https://passwordmanager73.netlify.app/",
    },
  ],

};

export default info_en;