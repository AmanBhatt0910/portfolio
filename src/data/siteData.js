import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, SiExpress, SiGit, SiGithub } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const skillsData = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-200" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-400" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-200" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: <SiGit className="text-orange-400" /> },
      { name: 'GitHub', icon: <SiGithub className="text-gray-200" /> },
      { name: 'VS Code', icon: <VscCode className="text-blue-400" /> },
    ],
  },
];

export const contactData = {
  email: "aman.bhatt@example.com",
  phone: "+91 90454 11893",
  linkedin: "https://www.linkedin.com/in/aman-bhatt-146a9a257/",
  github: "https://github.com/AmanBhatt0910",
};


export const projectsData = [
  {
    title: 'FlexiLang - Multi-Language Cross Compiler',
    description:
      'A full-stack code translation platform built with Next.js and Express.js, enabling JavaScript-to-Python conversion with over 95% accuracy. Includes JWT authentication and RESTful APIs with MongoDB for user and translation tracking.',
    tech: ['Next.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/AmanBhatt0910/FlexiLang',
    demo: 'https://flexi-lang.vercel.app/',
    date: 'April 2025',
    image: '/projects/flexilang.png',
  },
  {
    title: 'SpendSense - Expenditure Management',
    description:
      'Expense tracking web app built using React.js and Spring Boot, featuring secure REST APIs, MySQL data persistence, and real-time financial analytics. Achieved 20% faster query response for financial operations.',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'Hibernate'],
    github: 'https://github.com/AmanBhatt0910/SpendSense',
    demo: 'https://spend-sense-rho.vercel.app/',
    date: 'November 2024',
    image: '/projects/spendsense.png',
  },
  {
    title: 'ConnectNow - Real-Time Chat Application',
    description:
      'A scalable chat app powered by Next.js and MongoDB, supporting 500+ concurrent users with NextAuth.js authentication, Pusher WebSocket integration, and optimized Cloudinary media uploads (40% faster).',
    tech: ['Next.js', 'NextAuth.js', 'MongoDB', 'Pusher', 'Cloudinary'],
    github: 'https://github.com/AmanBhatt0910/ConnectNow',
    demo: '#',
    date: 'May 2024',
    image: '/projects/connectnow.png',
  },
];