import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+4 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "+200 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+50 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.png",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpeg",
    },

]

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Navegando Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Sitios Web Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Proyectos Web Dinámicos",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];
export const dataExperience = [
    {
        id: 1,
        title: "Lenguages",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                url: "/html.png",

            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                url: "/css.png",
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                url: "/js.png",
            },
            {
                name: "TypeScript",
                subtitle: "Intermedio",
                url: "/ts.png",
            },
            {
                name: "C++",
                subtitle: "Intermedio",
                url: "/c++.png",
            }

        ],
    },
    {
        id: 2,
        title: "Tecnologies ",
        experience: [
            {
                name: "Next.JS",
                subtitle: "Experimentado",
                url: "/next.png",
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermedio",
                url: "/tailwind.png",
            },
            {
                name: "React",
                subtitle: "Experimentado",
                url: "/react.png",
            },
            {
                name: "Git Bash",
                subtitle: "Intermedio",
                url: "/git.png",
            },
        ],
    },
    {
        id: 3,
        title: "Databases",
        experience: [
            {
                name: "Mongo DB",
                subtitle: "Intermedio",
                url: "/mongo.png",
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                url: "/sql.png",
            },
        ],
    },
];

export const dataContact = [
    {
        id: 1,
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/juan-francisco-h-25665412a/",
        icon: "/LinkedIn.png",
    },
    {
        id: 2,
        title: "Discord",
        link: "dragtrop",
        icon: "/discord.png",
    },
    {
        id: 3,
        title: "Email",
        link: "jfhm56@gmail.com",
        icon: "/email.png",
    },
];

