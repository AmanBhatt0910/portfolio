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


export const projectsData = [
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built with Next.js, React, and Tailwind CSS. Features smooth animations, responsive design, and dark mode.',
    tech: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.vercel.app/',
    image: '/projects/portfolio.png',
  },
  {
    title: 'Chat App',
    description:
      'A real-time chat application with Socket.io and Node.js. Includes authentication, chat rooms, and online user tracking.',
    tech: ['React', 'Node.js', 'Socket.io', 'Express'],
    github: 'https://github.com/yourusername/chat-app',
    demo: 'https://chatapp-demo.vercel.app/',
    image: '/projects/chatapp.png',
  },
  {
    title: 'E-Commerce Store',
    description:
      'Full-stack e-commerce website with product filtering, Stripe payments, and dashboard analytics.',
    tech: ['Next.js', 'MongoDB', 'Stripe API', 'TailwindCSS'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app/',
    image: '/projects/ecommerce.png',
  },
];

export const contactData = {
  email: "aman.bhatt@example.com",
  phone: "+91 90454 11893",
  linkedin: "https://www.linkedin.com/in/aman-bhatt-146a9a257/",
  github: "https://github.com/AmanBhatt0910",
};