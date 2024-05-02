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
      "Developing clone project from scratch mobile applications with real project using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing flow responsive design mobile tablet and Web.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "When Internship clone build CIC App and Personal project.",
      "Pass Inernship with good results.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Z1 Flexible Solution",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "01 April 2021 - 01 July 2023",
    points: [
      "Developing and maintaining mobile applications using Flutter with team and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing flow responsive design mobile tablet and Web.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Project CIC App, Project Z1 App. and Personal project.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "AMK Microfinance Institution Plc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "06 July 2023 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, client , product managers, and other developers to create high-quality products.",
      "Implementing flow responsive design mobile tablet and complex design.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Project Tonlesap App, Project Seller App , Project Movie App and Personal project.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "AMK Microfinance Institution Plc",
    icon: shopify,
    iconBg: "#383E56",
    date: "06 July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, client, product managers, and other developers to create high-quality products.",
      "Implementing flow responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Project Tonlesap Web.",
    ],
  },
  {
    title: "Freelance Mobile and Web",
    company_name: "Team Work (Best Friend)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Freelance",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Developing and maintaining mobile applications using Flutter and other related technologies. (Still Develop)",
      "Collaborating with teams including client(Cambodia microfinance association) to create high-quality products.",
      "Implementing flow UI responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Build and update structure project with clean coding.",
      "Project Cambodia microfinance association(Web and Mobile applications).",
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
      "App platform that allows users to sell and buy product with membership , Buy coin , Trading with coin, Change Money to coin , Buy Shared and more ...",
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
      "Mobile application that enables open Salary for staff , Pay money buy product in membership that using zpoin, Sell Product and Buy Product with real location and more Mini App.",
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
      "App platform that allows users to Sell, order product like ecommerce, pay money with bank when order, loan ,weather ,guide farmer with video , delivery with real location, trade user ,expert user, and more information ...",
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
    name: "Tonlesap Web",
    description:
      "Web platform that allows users to Sell, order product like ecommerce, pay money with bank when order, loan ,weather ,guide farmer with video , delivery with real location, trade user ,expert user, and more information ...",
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
      "App platform that allows users to Sell product for farmer, Manage order when have order from Tonlepap App, Add more product when have new product, Manage product (price, stock ...) for sell in Tonlesap app",
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
      "Web platform a gathering place for documented sources of both domestic and foreign financial sectors, Buy documents, Filter document, View documents, Download, Pay money with bank, Trade User and more ...",
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
      "An advanced app platform designed to elevate your movie-watching experience. Streamline your movie experience with our intuitive interface and integrated features. View movie and listing movie for all country",
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
