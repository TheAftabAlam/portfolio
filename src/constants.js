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
import spring from './assets/tech_logo/spring.png';
import hibernate from './assets/tech_logo/hibernate.png';
import intelliJ from './assets/tech_logo/intelliJ.png';
import aws from './assets/tech_logo/aws.png';
import fbApi from './assets/tech_logo/fbApi.jpg';
import cricbuzz from './assets/tech_logo/cricbuzz.png';
import hms from './assets/tech_logo/hms.png';
import ems from './assets/tech_logo/ems.png';
import se from './assets/tech_logo/se.png'

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
  date: "January 2023 - Present\n Gurugram, Haryana",
  desc: "Contributed to the development of scalable enterprise-level financial software. Played a key role in building robust backend services, designing responsive UI components, and integrating secure APIs. Actively participated in sprint planning, code reviews, and performance tuning to deliver reliable and efficient solutions.",
  skills: [
    // Backend
    "Java",
    "SpringBoot",
    "MicroServices",
    "Kafka",
    "REST APIs",

    // Frontend
    "React JS",
    "HTML",
    "CSS",

    // Database
    "MySql",
    "Sqlite",
    "FireBase",

    // Deployment / DevOps
    "AWS",
    "Git",
  ],
}];




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
    degree: "UP Board(XII) - PCM",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Modern Public Inter College",
    date: "Apr 2014 - March 2015",
    grade: "85%",
    desc: "I completed my class 10 education from Modern Public Inter College, under the UP board, where I studied Science with Computer.",
    degree: "UP Board(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "ShopEase - E-commerce Platform",
    description:
      "ShopEase is a full-stack e-commerce web application built using React, Redux, Java, Spring Boot, and MySQL. It offers a seamless shopping experience with features like user authentication, product browsing, shopping cart, order management, and role-based access for admins and customers. The backend exposes secure RESTful APIs with robust data handling using Spring and Hibernate, while the frontend delivers dynamic and responsive UI powered by Redux for state management.",
    image: se, // Replace with actual ShopEase logo or placeholder
    tags: ["React", "Redux", "Java", "Spring Boot", "MySQL", "Hibernate", "REST API"],
    github: "https://github.com/TheAftabAlam/e-commerce"
  },
  {
    id: 1,
    title: "Nursery Plant API",
    description:
      "A robust backend RESTful API developed using Spring Boot, Spring Framework, MySQL, and Hibernate. This API powers a nursery management system, enabling efficient handling of plant inventory, categories, customer orders, and authentication. It provides scalable endpoints for CRUD operations, user roles, and secure data persistence, making it ideal for modern plant nursery applications.",
    image: nursaryLogo,
    tags: ["Java", "Spring Boot", "Spring", "MySQL", "Hibernate", "REST API"],
    github: "https://github.com/TheAftabAlam/Nursary-Plant-Api"
  },
  {
    id: 2,
    title: "CricBuzz Clone",
    description:
      "A front-end clone of the popular cricket platform CricBuzz, built using HTML, CSS, and JavaScript. This project replicates core features such as live scores, match schedules, and news layouts. Designed with a responsive UI and attention to detail to mimic the real-world application experience.",
    image: cricbuzz, // Replace with the actual imported logo or a placeholder
    tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Responsive Design"],
    github: "https://github.com/VijaySingh8650/cricbuzz"

  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "A full-stack web application built with Angular and Spring Boot to manage employee records efficiently. Features include CRUD operations, form validation, routing, and integration with a RESTful backend. This project demonstrates solid implementation of MVC architecture, secure API handling, and seamless front-to-back communication.",
    image: ems, // Replace with the actual imported logo or placeholder
    tags: ["Spring Boot", "Java", "MySQL", "REST API", "Angular", "TypeScript",],
    github: "https://github.com/TheAftabAlam/EmployeeManagement-Springboot-Angular-"

  },
  {
    id: 4,
    title: "Hospital Management System",
    description:
      "A full-stack Hospital Management System developed using Angular and Spring Boot. This application enables efficient handling of hospital operations including staff management, patient records, and appointment scheduling. Key features include secure CRUD operations, client-side form validation, dynamic routing, and robust RESTful API integration. The project follows the MVC architecture, ensures strong backend security, and delivers seamless communication between frontend and backend.",
    image: hms, // Replace with the actual imported logo or placeholder
    tags: ["Spring Boot", "Java", "MySQL", "REST API", "Angular", "TypeScript",],
    github: "https://github.com/TheAftabAlam/healthcare-management-system"

  },
  {
    id: 5,
    title: "Social media api",
    description:
      "A microservices-based messaging system built using Apache Kafka and Spring Boot. This project demonstrates the implementation of Kafka producers and consumers for real-time data streaming and asynchronous communication between services. It features efficient message publishing, consumption, and processing with robust error handling and logging. Ideal for building scalable, event-driven architectures in distributed systems.",
    image: fbApi, // Replace with the actual imported logo or placeholder
    tags: ["Spring Boot", "Java", "Kafka", "Microservices", "Event-Driven", "Messaging"],
    github: "https://github.com/TheAftabAlam/FaceBook-API"
  }
];  

export const certificates = [
  {
    title: "Certificate of Appreciation",
    issuer: "Hostbooks Limited",
    date: "2024",
    description: "Awarded for outstanding contribution in handling backend of POS application.",
    link: "https://drive.google.com/file/d/15qerB256LoaG5DBwB9KqQZPAaYpCAfMm/view?usp=drive_link",
  },
  {
    title: "Java Backend Development",
    issuer: "Udemy",
    date: "2022",
    description: "Completed specialization in backend development using Spring Boot & MySQL.",
    link: "https://www.udemy.com/certificate/UC-338ca492-ddea-418c-b06d-6d06f0650e8b/",
  },
  {
    title: "Java",
    issuer: "HackerRank",
    date: "2022",
    description: "Demonstrated foundational skills in Java programming.",
    link: "https://www.hackerrank.com/certificates/ebcaaeb3aba0",
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    date: "2022",
    description: "Certified for strong logical reasoning and problem-solving skills.",
    link: "https://www.hackerrank.com/certificates/0e54e9bd678e",
  },
  {
    title: "SQL",
    issuer: "HackerRank",
    date: "2022",
    description: "Certified in SQL fundamentals including queries, joins, and data handling.",
    link: "https://www.hackerrank.com/certificates/1d861790a3fa",
  },
];

export const menuItems = [
  { id: "about", label: "About" },          // Who you are, quick intro
  { id: "skills", label: "Skills" },        // What you know (tech stack)
  { id: "experience", label: "Experience" },// Your work history
  { id: "work", label: "Projects" },        // Showcase of real work
  { id: "certificates", label: "Certificates" }, // Extra proof of skills
  { id: "education", label: "Education" },  // Academic background
  { id: "contact", label: "Contact" },      // Call to action at end
];