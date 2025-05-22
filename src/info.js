import { FaCss3Alt,FaJs,FaPhp,FaReact,FaVuejs,FaPython,FaLaptopCode, FaPlug, FaShoppingCart, FaWordpress, FaDatabase, FaMobileAlt,FaHtml5, FaNodeJs } from 'react-icons/fa';
import { DiMysql } from "react-icons/di";
import { SiExpress } from 'react-icons/si';
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from 'react-icons/si';


export const about = {
    desc: "I’m a passionate Full-Stack Developer skilled in React.js, Node.js,ExpressJs,SQL,MongoDB,Python. While I’m at the beginning of my professional journey, I’ve built multiple personal and collaborative projects that reflect my ability to design, develop, and deploy scalable web applications. I'm focused on writing clean code, continuously learning, and building real-world solutions that matter.\n\n\tI have 2 years of hands-on industry experience at Alstom Transport & Medha Servo Drives Pvt. Ltd., where I worked closely with real-time locomotive systems and data analysis. At Alstom & Medha, I collaborated with cross-functional teams to analyze train data, identify faults using Data Analysis Software (DAS), and help deploy and validate new software systems across locomotives. This experience sharpened my problem-solving skills, taught me the value of system reliability, and sparked my passion for building digital tools that work at scale.",
    services: [
          {
            service: "Web Application Development",
            icon: FaLaptopCode,
            description: "Building scalable and user-friendly applications tailored to client needs."
          },
          {
            service: "API Integration",
            icon: FaPlug,
            description: "Seamlessly connecting third-party services and enhancing functionality through robust API solutions."
          },
          {
            service: "E-commerce Solutions",
            icon: FaShoppingCart,
            description: "Developing secure and efficient online stores with payment integration and inventory management."
          },
          {
            service: "Dynamic Website Development",
            icon: FaWordpress,
            description: "Developing dynamic, responsive websites using HTML, CSS, and JavaScript with interactive features and seamless UX."
          },
          {
            service: "Database Management",
            icon: FaDatabase,
            description: "Designing and managing databases for optimal data storage, retrieval, and security."
          },
          {
            service: "Responsive Design",
            icon: FaMobileAlt,
            description: "Ensuring applications are mobile-friendly and accessible across all devices."
          }
        ],
    testinomials:[
            {
              name: "Chandu Janipireddy",
              projectname: "Spotify clone",
              testimonial: "Sai devoloped a seamless Spotify clone tailored to my requirements. The UI/UX, performance, and attention to detail exceeded expectations.",
              clientlink: "https://www.linkedin.com/in/chandu-janipireddy/"
            },
            {
              name: "Naga Raju",
              projectname: "Screen Recorder App",
              testimonial: "Sai built an intuitive screen recorder application with smooth recording and real-time preview. His ability to handle WebSocket integration and browser compatibility was impressive.",
              clientlink: ""
            }
                ],
    clients: []
};

export const portfolio = [
    {
        projectname: "Spotify Clone",
        thumbnailurl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1747923867/Screenshot_2025-05-22_195006_tm7ih4.png',
        images: ['https://res.cloudinary.com/dk9buau62/image/upload/v1747923867/Screenshot_2025-05-22_195006_tm7ih4.png', 'https://res.cloudinary.com/dk9buau62/image/upload/v1747923980/Screenshot_2025-05-22_195055_pfqykk.png', 'https://res.cloudinary.com/dk9buau62/image/upload/v1747923994/Screenshot_2025-05-22_195037_eyhgno.png', "https://res.cloudinary.com/dk9buau62/image/upload/v1747924023/Screenshot_2025-05-22_195220_fhl5qd.png", "https://res.cloudinary.com/dk9buau62/image/upload/v1747924005/Screenshot_2025-05-22_195125_icysxp.png"],
        projectdesc: 'Built a fully responsive Spotify clone with playlists, streaming, and admin dashboard. Integrated JWT auth and real-time updates.',
        techstack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', "Tailwind CSS", "HTML"],
        livelink: 'https://spotify-music-app-frontend.onrender.com/',
        status: 'In Progress',
        type: 'Mern stack Music Streaming Platform'
    },
    {
        projectname: "Swiggy Clone",
        thumbnailurl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1747927718/Screenshot_2025-05-22_205610_qroosr.png',
        images: ['https://res.cloudinary.com/dk9buau62/image/upload/v1747927718/Screenshot_2025-05-22_205610_qroosr.png', 'https://res.cloudinary.com/dk9buau62/image/upload/v1747927718/Screenshot_2025-05-22_205632_rigxgs.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747927718/Screenshot_2025-05-22_205658_kqpa9h.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747927718/Screenshot_2025-05-22_205800_snqf9k.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747927717/Screenshot_2025-05-22_205740_wsgtlb.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747927718/Screenshot_2025-05-22_205815_xibtei.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747927719/Screenshot_2025-05-22_205722_rtmk9q.png'],
        projectdesc: 'Clone of Swiggy with end-to-end flow: login, browse, cart, checkout. Used JWT for auth and Express sessions',
        techstack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', "Tailwind CSS"],
        livelink: 'https://fullstack-app-frontend-hkfc.onrender.com/order',
        status: 'Completed',
        type: 'Full Stack Web Development'
    },
    {
        projectname: "Screen Recorder",
        thumbnailurl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1747928247/Screenshot_2025-05-22_210549_yuarid.png',
        images: ['https://res.cloudinary.com/dk9buau62/image/upload/v1747928247/Screenshot_2025-05-22_210549_yuarid.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747928248/Screenshot_2025-05-22_210630_n4jex9.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747928249/Screenshot_2025-05-22_210610_l1wnz1.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747928248/Screenshot_2025-05-22_210648_bwlaqv.png'],
        projectdesc: 'In-browser video recorder using WebRTC & MediaRecorder API. Supports video filters & snapshot capture..',
        techstack: ['JavaScript', 'HTML', "CSS"],
        livelink: 'https://saiscreening.ccbp.tech/',
        status: 'Completed',
        type: 'Web Video Capture Tool'
    },
    {
        projectname: "College Website",
        thumbnailurl: 'https://res.cloudinary.com/dk9buau62/image/upload/v1747928791/Screenshot_2025-05-22_211422_x12bjs.png',
        images: ['https://res.cloudinary.com/dk9buau62/image/upload/v1747928791/Screenshot_2025-05-22_211422_x12bjs.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747928786/Screenshot_2025-05-22_211356_q0stsa.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747928789/Screenshot_2025-05-22_211502_jls4eu.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747928784/Screenshot_2025-05-22_211558_agssee.png','https://res.cloudinary.com/dk9buau62/image/upload/v1747928784/Screenshot_2025-05-22_211558_agssee.png'],
        projectdesc: 'Built a responsive college website using HTML, CSS, and JavaScript showcasing courses, faculty, and campus life. Integrated smooth navigation, interactive UI elements, and mobile-first design.',
        techstack: ['CSS', 'JavaScript', 'HTML'],
        livelink: 'https://saisahi.netlify.app/',
        status: 'Compleated',
        type: 'Responsive College Website'
    },
    {
        projectname: "Nxt Trends",
        thumbnailurl: './assets/nxtrends.png',
        images: [],
        projectdesc: 'A dynamic front-end application developed using React.js that showcases the latest trends. This project emphasizes responsive design and user engagement, making it an ideal platform for trend enthusiasts.',
        techstack: ['React.js', 'JavaScript', 'HTML', "CSS"],
        livelink: 'https://saikumarsahi.ccbp.tech/login',
        credentials: {
            username: 'rahul',
            password: 'rahul@2021'
        },
        status: 'Completed',
        type: 'Front End Development'
    },
    {
        projectname: "Nxt Watch",
        thumbnailurl: './assets/nxtwatch.png',
        images: [],
        projectdesc: 'A sleek front-end application built with React.js that provides users with a streamlined interface for exploring watch collections. It features a modern design and intuitive navigation.',
        techstack: ['React.js', 'JavaScript', 'HTML', "CSS"],
        livelink: 'https://nxtwatchgana.ccbp.tech/',
        credentials: {
            username: 'rahul',
            password: 'rahul@2021'
        },
        status: 'Completed',
        type: 'Front End Development'
    },
    {
        projectname: "Wiki Search App",
        thumbnailurl: './assets/wiki.png',
        images: [],
        projectdesc: 'A simple yet effective search application for Wikipedia articles, built with JavaScript and HTML. This project provides users with an easy way to find and explore a wealth of information online.',
        techstack: ['JavaScript', 'HTML', "CSS"],
        livelink: 'https://saiwikipedia.netlify.app/',
        status: 'Completed',
        type: 'Front End Development'
    },
    {
        projectname: "Todo App",
        thumbnailurl: './assets/todo.png',
        images: [],
        projectdesc: 'A straightforward todo list application that helps users manage their tasks efficiently. Built using JavaScript and HTML, it offers a clean interface for adding, editing, and deleting tasks.',
        techstack: ['JavaScript', 'HTML', "CSS"],
        livelink: 'https://saitodolistapp.netlify.app/',
        status: 'Completed',
        type: 'Front End Development'
    },
    {
        projectname: "Food Munch",
        thumbnailurl: './assets/foodmunch.png',
        images: [],
        projectdesc: 'A static web application showcasing various food recipes. Built with HTML and CSS, this project highlights beautiful designs and easy navigation for food lovers.',
        techstack: ['HTML', "CSS"],
        livelink: 'https://saifoodwebsite.netlify.app/',
        status: 'Completed',
        type: 'Static Web App'
    }
];


export const resume = {
    education: [
        {
            collegename: "Newtons Institute of Science & Technology",
            branch: "Electrical & Electronics Engineering",
            duration: "2022 - 2025",
            location:"Macherla,Guntur.,Ap"
        },
        {
            collegename: "Smt.B.Seetha polytechnic College",
            branch: "Electrical & Electronics Engineering",
            duration: "2018 - 2021",
            location:"Bhimavaram,WG.,Ap"
        },
        {
            collegename: "YCH&AZP High School",
            branch: "",
            duration: "2017 - 2018",
            location:"Uppuluru,WG.,Ap"
        }
    ],
    experience: [
        {
            company: "Alstom Transport India Limited",
            role: "Engineer Trainee",
            duration: "Nov 2021 - Nov 2022",
            location:"Sricity"
        },
        {
            company: "Medha Servo Drives",
            role: "Customer Support Engineer",
            duration: "Mar 2023 - Sep 2024",
            location:"Remote"
        },

    ],
 skills :[
    {
        technology: 'HTML',
        icon: FaHtml5,
        percentage: 80,
        color: 'text-orange-600',
    },
    {
        technology: 'Python',
        icon: FaPython,
        percentage: 80,
        color: 'text-blue-500',
    },
    {
        technology: 'JavaScript',
        icon: FaJs,
        percentage: 90,
        color: 'text-yellow-500',
    },
    {
        technology: 'React.js',
        icon: FaReact,
        percentage: 70,
        color: 'text-blue-400',
    },
    {
        technology: 'CSS',
        icon: FaCss3Alt,
        percentage: 70,
        color: 'text-blue-600',
    },
    {
        technology: 'SQL',
        icon: DiMysql,
        percentage: 70,
        color: 'text-blue-700',
     },
    {
        technology: 'Node.js',
        icon: FaNodeJs,
        percentage: 85,
        color: 'text-green-600',
    },
    {
        technology: 'Express.js',
        icon: SiExpress,
        percentage: 80,
        color: 'text-gray-800',
     },
    {
        technology: 'Tailwind CSS',
        icon: RiTailwindCssLine,
        percentage: 90,
        color: 'text-sky-800',
    },
    {
        technology: 'MongoDB',
        icon: SiMongodb,
        percentage: 90,
        color: 'text-sky-800',
    },
    ]
};

export const certifications = [
    {
        name: 'Javascript Essentials',
        image: "https://res.cloudinary.com/dk9buau62/image/upload/v1747930372/Screenshot_2025-05-22_213956_rv6frc.png"
    },
    {
        name: 'Static Webs App',
        image: "https://res.cloudinary.com/dk9buau62/image/upload/v1747930373/Screenshot_2025-05-22_213902_q6uxje.png"
    },
    {
        name: 'Responsive Web App',
        image: "https://res.cloudinary.com/dk9buau62/image/upload/v1747930373/Screenshot_2025-05-22_213756_z6mkye.png"
    },
    {
        name: 'SQL',
        image: "https://res.cloudinary.com/dk9buau62/image/upload/v1747930372/Screenshot_2025-05-22_213929_fmdcyu.png"
        
    },
    {
        name: 'Dynamic Web App',
        image: "https://res.cloudinary.com/dk9buau62/image/upload/v1747930373/Screenshot_2025-05-22_213829_cqcpqs.png"
        
    },
    {
        name: 'Data Analytics',
        image: "https://res.cloudinary.com/dk9buau62/image/upload/v1747930373/Screenshot_2025-05-22_214122_fs9jh9.png"
    },
    {
        name: 'Cyber Secuirity',
        image: "https://res.cloudinary.com/dk9buau62/image/upload/v1747930374/Screenshot_2025-05-22_214202_kjzggs.png"
    },
    {
        name: 'Generative AI',
        image: "https://res.cloudinary.com/dk9buau62/image/upload/v1747930374/Screenshot_2025-05-22_214046_kkepre.png"

    }
]
