import { Home, Yard } from "@mui/icons-material";

export type BreadcrumbInfo = {
    label: string;
    route: string;
    icon: React.ReactNode;
};

export type CategoryMap = {
    label: string;
    route: string;
    img: string;
};

export const categoryMap: CategoryMap[] = [
    {
        label: "Plantas",
        route: "/categoria/plantas",
        img: "https://i.ibb.co/Vx9JXtV/cactus-6679665-1280.jpg",
    },
    {
        label: "Acessórios",
        route: "/categoria/acessorios",
        img: "https://i.ibb.co/0m0rqgV/hose-5473324-640.jpg",
    },
    {
        label: "Rega",
        route: "/categoria/rega",
        img: "https://i.ibb.co/zFMC4PK/watering-can-3547861-640.jpg",
    },
    {
        label: "Vasos",
        route: "/categoria/vasos",
        img: "https://i.ibb.co/1Q3L815/tropical-4008043-640.png",
    },
];

export const breadcrumbMaps: BreadcrumbInfo[] = [
    { label: "Página inicial", route: "/", icon: <Home /> },
    { label: "Entrar", route: "/", icon: <Home /> },
];
