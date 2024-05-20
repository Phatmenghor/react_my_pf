import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  next,
  nest,
  reactNative,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native Developer",
    icon: web,
  },
  {
    title: "FLutter Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Nest",
    icon: nest,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Flutter Developer Internship",
    company_name: "Z1 Flexible Solution",
    icon: starbucks,
    iconBg: "#383E56",
    date: "01 Jan 2020 - 01 April 2022",
    points: [
      "Developed mobile applications from scratch using Flutter and related technologies, focusing on clone projects with real-world applications.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design for mobile, tablet, and web platforms.",
      "Participated in code reviews, providing constructive feedback to improve code quality.",
      "Built CIC App and personal projects during the internship, demonstrating strong problem-solving and technical skills.",
      "Successfully completed the internship with excellent results, showcasing proficiency and commitment.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Z1 Flexible Solution",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "01 April 2021 - 01 July 2023",
    points: [
      "Spearheaded the development and maintenance of innovative mobile applications using Flutter, alongside a talented team, to meet client requirements and industry standards effectively.",
      "Orchestrated seamless collaboration with cross-functional teams comprising designers, product managers, and fellow developers, fostering an environment of creativity and excellence in product delivery.",
      "Drove the implementation of responsive design principles, ensuring optimal user experience across mobile, tablet, and web platforms, thereby enhancing user engagement and satisfaction.",
      "Played a pivotal role in conducting code reviews, offering insightful feedback to team members, and championing best practices, resulting in heightened code quality and project success.",
      "Led the execution of high-profile projects including the CIC App, Project Z1 App, and a personal project, demonstrating versatility and proficiency in delivering diverse mobile solutions.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "AMK Microfinance Institution Plc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "06 July 2023 - Present",
    points: [
      "Spearheaded the development and maintenance of innovative mobile applications using ReactNative, alongside a talented team, to meet client requirements and industry standards effectively.",
      "Orchestrated seamless collaboration with cross-functional teams comprising designers, product managers, business team, and fellow developers, fostering an environment of creativity and excellence in product delivery.",
      "Drove the implementation of responsive design principles, ensuring optimal user experience across mobile, tablet, and web platforms, thereby enhancing user engagement and satisfaction.",
      "Played a pivotal role in conducting code reviews, offering insightful feedback to team members, and championing best practices, resulting in heightened code quality and project success.",
      "Led the execution of high-profile projects including the Project Tonlesap App, Project Seller App, Project Movie App, and a personal project, demonstrating versatility and proficiency in delivering diverse mobile solutions.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "AMK Microfinance Institution Plc",
    icon: shopify,
    iconBg: "#383E56",
    date: "06 July 2023 - Present",
    points: [
      "Spearheaded the development and upkeep of dynamic web applications utilizing cutting-edge technologies, prominently React.js, to deliver robust solutions meeting client specifications and industry standards.",
      "Collaborated seamlessly with cross-functional teams, including designers, clients, product managers, and fellow developers, fostering a cohesive environment aimed at producing high-caliber digital products.",
      "Demonstrated proficiency in implementing fluid responsive design principles, ensuring optimal user experiences across various devices, while meticulously ensuring cross-browser compatibility to reach a wider audience base.",
      "Played a pivotal role in fostering a culture of excellence by actively participating in code reviews, offering valuable insights, and delivering constructive feedback to peers, contributing to the continuous improvement of development processes.",
      "Key Project: Led the development efforts for Project Tonlesap Web, a mission-critical initiative aimed at enhancing the digital presence and functionality of the institution, resulting in increased user engagement and operational efficiency.",
    ],
  },
  {
    title: "Freelance Mobile and Web",
    company_name: "Team Work (Best Friend)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Freelance",
    points: [
      "Developed and maintained dynamic web applications utilizing Next.js and related technologies, ensuring optimal performance and scalability.",
      "Collaborated closely with cross-functional teams, including clients such as the Cambodia Microfinance Association, to conceptualize, develop, and deploy high-quality digital solutions.",
      "Implemented fluid UI responsive design principles, guaranteeing exceptional user experiences across various devices, and ensured cross-browser compatibility for enhanced accessibility.",
      "Actively participated in code reviews, offering valuable feedback to peers to promote code quality and maintain best practices.",
      "Demonstrated expertise in crafting well-structured projects through clean and maintainable coding practices.",
      "Led the end-to-end development of projects for the Cambodia Microfinance Association, encompassing both web and mobile applications, contributing to the organization's mission and impact.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CIC App",
    description:
      "Skilled in developing app platforms for seamless transactions. Specialize in user-friendly interfaces for buying, selling, and membership management. Expertise in virtual currency purchase, coin trading, and shared purchases. Dedicated to enhancing user experiences through updates. Committed to driving innovation in e-commerce.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Z1 App",
    description:
      "Experienced in mobile app development, specializing in open salary systems, zpoin-based purchases, and real-location transactions. Proficient in crafting mini apps for versatile functionalities. Skilled in seamless integration of membership systems for enhanced user experience, committed to continual improvement and staying updated on latest trends.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tonlesap App",
    description:
      "As Tonlesap App's Founder & CEO, spearheaded a multifunctional platform integrating ecommerce, banking transactions, weather updates, agricultural guidance, and real-time delivery tracking. Led full-cycle development, prioritizing user feedback for iterative enhancements. Cultivated a collaborative team ethos, driving innovation and customer satisfaction.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Spring boot",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Comsumer Web",
    description:
      "As Founder & CEO of Tonlesap Web, developed a comprehensive platform enabling ecommerce, banking transactions, weather updates, agricultural guidance, real-time delivery tracking, and user-to-user trading. Led full-cycle development, focusing on user feedback for continuous improvement. Fostered a collaborative team environment to drive innovation and customer satisfaction.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Spring boot",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tonlesap Seller App",
    description:
      "As Founder & CEO of Tonlesap Seller App, developed a comprehensive platform for farmers to sell products, manage orders from the Tonlesap App, and update product listings, including prices and stock levels. Led full-cycle development with a focus on user feedback, fostering a collaborative team environment to drive continuous innovation and ensure high levels of user satisfaction. Thanks You",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Spring boot",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

  {
    name: "Resource Center Web",
    description:
      "As Founder & CEO of Resource Center Web, developed a platform for accessing domestic and international financial documents. Enabled users to buy, filter, view, and download documents, with secure bank payments and user-to-user trading. Led development, focusing on user feedback for continuous improvement, fostering a collaborative team environment to drive innovation and satisfaction.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "Next Js Backend",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://orh.cma-academyforbfi.org/",
  },
  {
    name: "Movie App",
    description:
      "Developed Movie App, an advanced platform to elevate the movie-watching experience. Features an intuitive interface for viewing and listing movies from all countries. Built during free time, focusing on user-friendly design and integrated features to enhance usability and enjoyment. Continuously improved the app based on user feedback and personal passion for movies.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Nest JS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://orh.cma-academyforbfi.org/",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const contactData = [
  {
    title: "Telegram",
    icon: mobile,
    href: "https://t.me/PhatMenghor",
  },
  {
    title: "Git Hub",
    icon: web,
    href: "https://github.com/Phatmenghor",
  },
  {
    title: "LinkIn",
    icon: creator,
    href: "https://www.linkedin.com/in/phat-menghor-124223276/",
  },
  {
    title: "Facebook",
    icon: backend,
    href: "https://web.facebook.com/profile.php?id=100089332688406",
  },
];

export { services, technologies, experiences, testimonials, projects };
