import {
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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../public/assets";

export const author = {
  name: "Orest",
  details: "Professional Place",
  about: "JS Full-Stack Developer",
};

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

// TODO: generate own images
const services = [
  {
    title: "JS | TS Developer",
    icon: "/assets/web.png",
  },
  {
    title: "React Developer",
    icon: "/assets/mobile.png",
  },
  {
    title: "Full Stack Developer",
    icon: "/assets/backend.png",
  },
  {
    title: "Tech Lead",
    icon: "/assets/creator.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// TODO: generate total years-months
const experiences = [
  {
    title: "Tech Lead | Senior Front-End Developer",
    company_name: "Elopage",
    company_url: "https://elopage.com",
    icon: "/assets/company/elopage.svg",
    iconBg: "#383E56",
    date: "May 2021 - Current",
    points: [
      "Lead Front-End Developer, control and implement user stories, tasks decomposition, validate technical solutions, share key points with stakeholders",
      "Pull requests reviews, estimation of new requirements according to specifications, knowledge sharing with team",
      "Setup and maintain E2E with <span class='font-semibold'>Cypress</span>, improve code quality with unit-tests by <span class='font-semibold'>React Testing Library</span> and <span class='font-semibold'>Jest</span>",
      "Improve and maintain client-side architecture based on <span class='font-semibold'>React</span> ecosystem, integrate <span class='font-semibold'>TypeScript</span>",
      "Setup and maintain components library based on <span class='font-semibold'>Storybook</span>",
      "Increase key accounts apps Web Vitals metrics, performance and accessibility by moving to <span class='font-semibold'>Next.js</span> architecture",
    ],
  },
  {
    title: "Tech Lead | Senior Full-Stack Developer",
    company_name: "Usoftware",
    company_url: "https://usoftware.co/home",
    icon: "/assets/company/usoftware.png",
    iconBg: "#785dff",
    date: "Jan 2021 - May 2021",
    points: [
      "Lead JS Developer of key account, control and implement user stories, tasks decomposition, validate technical solutions, share key points with stakeholders",
      "Implement project from the scratch based on <span class='font-semibold'>React</span> ecosystem, integration with the majority of three-party services",
      "Backend stack was based on <span class='font-semibold'>NestJS</span> with data platform <span class='font-semibold'>Directus</span>",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Eleks",
    company_url: "https://eleks.com/",
    icon: "/assets/company/eleks.png",
    iconBg: "#E6DEDD",
    date: "Jun 2014 - Feb 2021",
    points: [
      "Developing expertise from <span class='font-semibold'>Middle</span> to <span class='font-semibold'>Team Lead</span>. Leading cross-functional teams, mentoring, code reviews, estimation of new requirements according to specifications, knowledge sharing with team",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participate in <span class='font-semibold'>20+</span> projects, majority projects was from scratch, projects with different complexity and technologies",
      "Front End Stack was from <span class='font-semibold'>jQuery</span> and <span class='font-semibold'>Backbone</span> to <span class='font-semibold'>Angular</span> and <span class='font-semibold'>React</span>",
    ],
  },
  {
    title: "Junior Front End Developer",
    company_name: "eMagCreator",
    company_url: "https://www.crunchbase.com/organization/emagcreator",
    icon: "/assets/company/emag-creator.png",
    iconBg: "#fff",
    date: "Jun 2013 - Jun 2014",
    points: [
      "Developing and maintaining hybrid mobile applications using <span class='font-semibold'>Ionic</span> and <span class='font-semibold'>Angular</span>.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Get familiar with software development life cycle, agile methodologies, and project management tools.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
