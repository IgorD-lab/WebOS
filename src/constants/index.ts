// Receptionist folder allows barrel imports: import {x, y} from #constants

// TODO
const NAV_LINKS = [
  {
    id: 1,
    name: 'Projects',
    type: 'finder',
  },
  {
    id: 3,
    name: 'Contact',
    type: 'contact',
  },
  {
    id: 4,
    name: 'Resume',
    type: 'resume',
  },
] as const;

// TODO
const NAV_ICONS = [
  {
    id: 1,
    img: '/icons/wifi.svg',
  },
  {
    id: 2,
    img: '/icons/search.svg',
  },
  {
    id: 3,
    img: '/icons/user.svg',
  },
  {
    id: 4,
    img: '/icons/mode.svg',
  },
];

// TODO
const DOCK_APPS = [
  {
    id: 'finder',
    name: 'Portfolio',
    icon: 'finder.png',
    canOpen: true,
  },
  {
    id: 'safari',
    name: 'Articles',
    icon: 'safari.png',
    canOpen: true,
  },
  {
    id: 'photos',
    name: 'Gallery',
    icon: 'photos.png',
    canOpen: true,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: 'contact.png',
    canOpen: true,
  },
  {
    id: 'terminal',
    name: 'Skills',
    icon: 'terminal.png',
    canOpen: true,
  },
  {
    id: 'trash',
    name: 'Archive',
    icon: 'trash.png',
    canOpen: false,
  },
];

// TODO
const BLOG_POSTS = [
  {
    id: 1,
    date: 'Sep 2, 2025',
    title:
      'Filler Blog Post Title: What It Is, Why It Matters, and How to Master It',
    image: '/images/blog1.png',
    link: 'https://google.com',
  },
  {
    id: 2,
    date: 'Aug 28, 2025',
    title: 'The Ultimate Guide to Mastering Filler Content for Web Development',
    image: '/images/blog2.png',
    link: 'https://google.com',
  },
  {
    id: 3,
    date: 'Aug 15, 2025',
    title: 'The Ultimate Guide to Mastering Generic Animations',
    image: '/images/blog3.png',
    link: 'https://google.com',
  },
];

// TODO
const TECH_STACK = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'Sass', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'Django'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Dev Tools',
    items: ['Git', 'GitHub', 'Docker'],
  },
];

// TODO
const SOCIALS = [
  {
    id: 1,
    text: 'Github',
    icon: '/icons/github.svg',
    bg: '#f4656b',
    link: 'https://google.com',
  },
  {
    id: 2,
    text: 'Platform',
    icon: '/icons/atom.svg',
    bg: '#4bcb63',
    link: 'https://google.com',
  },
  {
    id: 3,
    text: 'Twitter/X',
    icon: '/icons/twitter.svg',
    bg: '#ff866b',
    link: 'https://google.com',
  },
  {
    id: 4,
    text: 'LinkedIn',
    icon: '/icons/linkedin.svg',
    bg: '#05b6f6',
    link: 'https://google.com',
  },
];

// TODO
const PHOTOS_LINKS = [
  {
    id: 1,
    icon: '/icons/gicon1.svg',
    title: 'Library',
  },
  {
    id: 2,
    icon: '/icons/gicon2.svg',
    title: 'Memories',
  },
  {
    id: 3,
    icon: '/icons/file.svg',
    title: 'Places',
  },
  {
    id: 4,
    icon: '/icons/gicon4.svg',
    title: 'People',
  },
  {
    id: 5,
    icon: '/icons/gicon5.svg',
    title: 'Favorites',
  },
];

// TODO
const GALLERY = [
  {
    id: 1,
    img: '/images/gal1.png',
  },
  {
    id: 2,
    img: '/images/gal2.png',
  },
  {
    id: 3,
    img: '/images/gal3.png',
  },
  {
    id: 4,
    img: '/images/gal4.png',
  },
];

export {
  NAV_LINKS,
  NAV_ICONS,
  DOCK_APPS,
  BLOG_POSTS,
  TECH_STACK,
  SOCIALS,
  PHOTOS_LINKS,
  GALLERY,
};

// TODO
const WORK_LOCATION = {
  id: 1,
  type: 'work',
  name: 'Work',
  icon: '/icons/work.svg',
  kind: 'folder',
  children: [
    // TODO
    // ▶ Project 1
    {
      id: 5,
      name: 'Project One Main Title Application',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-5',
      windowPosition: 'top-[5vh] left-5',
      children: [
        {
          id: 1,
          name: 'Project One Details.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          description: [
            'This project is a sleek and modern platform designed for showcasing specific core features.',
            'Instead of a simple generic app, it delivers an immersive experience with bold visuals, interactive displays, and smooth navigation.',
            'Think of it like walking into a flagship store—but right from your phone or laptop.',
            "It's built with modern frameworks, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: 'project-one.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://google.com',
          position: 'top-10 right-20',
        },
        {
          id: 4,
          name: 'project-one-preview.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/project-1.png',
        },
        {
          id: 5,
          name: 'Design.fig',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          href: 'https://google.com',
          position: 'top-60 right-20',
        },
      ],
    },

    // TODO
    // ▶ Project 2
    {
      id: 6,
      name: 'Project Two Main Title Application',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-52 right-80',
      windowPosition: 'top-[20vh] left-7',
      children: [
        {
          id: 1,
          name: 'Project Two Details.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 right-10',
          description: [
            'Work in progress.',
            'Work in progress.',
            'Work in progress.',
            'Work in progress.',
          ],
        },
        {
          id: 2,
          name: 'project-two.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://google.com',
          position: 'top-20 left-20',
        },
        {
          id: 4,
          name: 'project-two-preview.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 left-80',
          imageUrl: '/images/project-2.png',
        },
        {
          id: 5,
          name: 'Design.fig',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          href: 'https://google.com',
          position: 'top-60 left-5',
        },
      ],
    },

    // TODO
    // ▶ Project 3
    {
      id: 7,
      name: 'Project Three Main Title Application',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-80',
      windowPosition: 'top-[33vh] left-7',
      children: [
        {
          id: 1,
          name: 'Project Three Details.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          description: [
            'Our third application is a fast and convenient way to manage your daily tasks efficiently.',
            'Instead of using outdated methods, you can browse options, customize workflows, and track progress in real time.',
            'Think of it like having a personal assistant in your pocket—ready to help anytime, anywhere.',
            'It’s built with modern cross-platform tools, so it works smoothly on all devices with a clean, modern design.',
          ],
        },
        {
          id: 2,
          name: 'project-three.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://google.com',
          position: 'top-10 right-20',
        },
        {
          id: 4,
          name: 'project-three-preview.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/project-3.png',
        },
        {
          id: 5,
          name: 'Design.fig',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'fig',
          href: 'https://google.com',
          position: 'top-60 right-20',
        },
      ],
    },
  ],
};

// TODO
const ABOUT_LOCATION = {
  id: 2,
  type: 'about',
  name: 'About me',
  icon: '/icons/info.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-5',
      imageUrl: '/images/igord.jpg',
    },
    {
      id: 2,
      name: 'casual-me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-28 right-72',
      imageUrl: '/images/igord-2.jpg',
    },
    {
      id: 3,
      name: 'conference-me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-52 left-80',
      imageUrl: '/images/igord-3.jpeg',
    },
    {
      id: 4,
      name: 'about-me.txt',
      icon: '/images/txt.png',
      kind: 'file',
      fileType: 'txt',
      position: 'top-60 left-5',
      subtitle: 'Software Engineer & Creative Developer',
      image: '/images/igord.jpg',
      description: [
        'Hello! I am a passionate developer dedicated to creating high-quality digital experiences that are both functional and visually appealing.',
        'I focus on modern web technologies to build scalable applications, ensuring that every project I touch is optimized for performance and user engagement.',
        'My approach involves writing maintainable, efficient code while maintaining a strong eye for detail and design consistency.',
        'When I am not coding, I enjoy exploring new technologies, contributing to open-source projects, and constantly learning to stay ahead in the ever-evolving tech landscape.',
      ],
    },
  ],
};

// TODO
const RESUME_LOCATION = {
  id: 3,
  type: 'resume',
  name: 'Resume',
  icon: '/icons/file.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'Resume.pdf',
      icon: '/images/pdf.png',
      kind: 'file',
      fileType: 'pdf',
      // href: "https://google.com",
    },
  ],
};

// TODO
const TRASH_LOCATION = {
  id: 4,
  type: 'trash',
  name: 'Trash',
  icon: '/icons/trash.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'trash1.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-10',
      imageUrl: '/images/trash-1.png',
    },
    {
      id: 2,
      name: 'trash2.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-40 left-80',
      imageUrl: '/images/trash-2.png',
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
