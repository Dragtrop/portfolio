import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experience",
        icon: <Briefcase />,
        description: "+3 Years of experience",
    },
    {
        id: 2,
        name: "Clients",
        icon: <UsersRound />,
        description: "+20 Satisfied clients",
    },
    {
        id: 3,
        name: "Proyects",
        icon: <Wrench />,
        description: "+10 completed",
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
        title: "Simple Crud",
        image: "/port1.jpg",
        urlGithub: "https://github.com/Dragtrop/Product-Crud",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Garages Web Page(In progress)",
        image: "/port2.jpg",
        urlGithub: "https://github.com/Dragtrop/Repositorio-TP-Backend",
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
                subtitle: "Experienced",
                url: "/html.png",

            },
            {
                name: "CSS",
                subtitle: "Intermediate",
                url: "/css.png",
            },
            {
                name: "JavaScript",
                subtitle: "Experienced",
                url: "/js.png",
            },
            {
                name: "TypeScript",
                subtitle: "Intermediate",
                url: "/ts.png",
            },
            {
                name: "C++",
                subtitle: "Basic",
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
                subtitle: "Experienced",
                url: "/next.png",
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermediate",
                url: "/tailwind.png",
            },
            {
                name: "React",
                subtitle: "Experienced",
                url: "/react.png",
            },
            {
                name: "Git Bash",
                subtitle: "Intermediate",
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
                subtitle: "Basic",
                url: "/mongo.png",
            },
            {
                name: "MySQL",
                subtitle: "Experienced",
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

