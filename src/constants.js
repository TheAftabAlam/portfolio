// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import hb from './assets/company_logo/hb.jpg'
import nursaryLogo from './assets/tech_logo/npm.png'

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import spring from './assets/tech_logo/spring.png'
import hibernate from './assets/tech_logo/hibernate.png'
import intelliJ from './assets/tech_logo/intelliJ.png'
import aws from './assets/tech_logo/aws.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Spring', logo: spring },
      { name: 'Hibernate', logo: hibernate },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'AWS', logo: aws }
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'IntelliJ', logo: intelliJ },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [{
  id: 0,
  img: hb, // make sure you have this logo imported or defined
  role: "Software Developer",
  company: "Hostbooks Limited",
  date: "January 2023 - Present\n Gurugram,Haryana",
  desc: "Worked on the development of enterprise-level financial and accounting software using modern web technologies. Responsible for creating dynamic user interfaces, integrating RESTful APIs, and maintaining backend logic. Collaborated with cross-functional teams to ensure feature scalability, data accuracy, and performance optimization.",
  skills: [
    "Java",
    "SpringBoot",
    "AWS",
    "Sqlite",
    "MySql",
    "FireBase",
    "REST APIs",
    "HTML",
    "CSS",
    "Git",
    "React JS",
  ],
}]


export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Masai School, Banglore",
    date: "Feb 2022 - Nov 2022",
    grade: "7.81 CGPA",
    desc: "I completed an intensive Full-Stack Web Development course at Masai School, Bangalore, where I gained hands-on experience in building scalable web applications. The curriculum focused on industry-relevant skills including Java,Springboot, JavaScript, React and data structures & algorithms. I worked on multiple real-world projects, participated in hackathons, and collaborated in team environments, which strengthened my problem-solving, coding, and communication skills.",
    degree: "Fullstack Webdevlopment Course",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Shri Ramswaroop Memorial Group of Professional College, Lucknow",
    date: "Aug 2017 - Aug 2021",
    grade: "76%",
    desc: "I completed my Bachelor of Technology (B.Tech) from Shri Ramswaroop Memorial Group of Professional Colleges, Lucknow. I developed a strong interest in programming and software development during my academic journey. I gained hands-on experience with languages like Java, Springboot, and explored foundational subjects such as Data Structures, Algorithms, Object-Oriented Programming, and Database Management. Through self-learning, academic projects, and technical workshops, I built a solid base in software development that motivated my transition into the tech field.",
    degree: "Bachelor of Technology - B.Tech "
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Modern Public Inter College",
    date: "Apr 2016 - March 2017",
    grade: "89%",
    desc: "I completed my class 12 education from Modern Public Inter College, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    degree: "UP(XII) - PCM",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Modern Public Inter College",
    date: "Apr 2014 - March 2015",
    grade: "85%",
    desc: "I completed my class 10 education from Modern Public Inter College, under the UP board, where I studied Science with Computer.",
    degree: "UP(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Nursery Plant API",
    description:
      "A robust backend RESTful API developed using Spring Boot, Spring Framework, MySQL, and Hibernate. This API powers a nursery management system, enabling efficient handling of plant inventory, categories, customer orders, and authentication. It provides scalable endpoints for CRUD operations, user roles, and secure data persistence, making it ideal for modern plant nursery applications.",
    image: nursaryLogo,
    tags: ["Java", "Spring Boot", "Spring", "MySQL", "Hibernate", "REST API"],
    github: "https://github.com/TheAftabAlam/Nursary-Plant-Api"
  },
  {
    id: 1,
    title: "Employee Management System",
    description:
      "A full-stack web application built with Angular and Spring Boot to manage employee records efficiently. Features include CRUD operations, form validation, routing, and integration with a RESTful backend. This project demonstrates solid implementation of MVC architecture, secure API handling, and seamless front-to-back communication.",
    image: nursaryLogo, // Replace with the actual imported logo or placeholder
    tags: ["Spring Boot", "Java", "MySQL", "REST API", "Angular", "TypeScript",],
    github: "https://github.com/TheAftabAlam/EmployeeManagement-Springboot-Angular-"
  },
  {
  id: 2,
  title: "CricBuzz Clone",
  description:
    "A front-end clone of the popular cricket platform CricBuzz, built using HTML, CSS, and JavaScript. This project replicates core features such as live scores, match schedules, and news layouts. Designed with a responsive UI and attention to detail to mimic the real-world application experience.",
  image: nursaryLogo, // Replace with the actual imported logo or a placeholder
  tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Responsive Design"],
  github: "https://github.com/TheAftabAlam/CricBuzz/tree/main/cricbuzz-main"
}


  // {
  //   id: 1,
  //   title: "CS Prep",
  //   description:
  //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
  //   image: csprepLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/CSPrep",
  //   webapp: "https://csprep.netlify.app/",
  // },
  // {
  //   id: 2,
  //   title: "Movie Recommendation App",
  //   description:
  //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
  //   image: movierecLogo,
  //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
  //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
  // },
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];  