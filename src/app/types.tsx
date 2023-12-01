import { Home } from "@mui/icons-material";

export type BreadcrumbInfo = {
    label: string;
    route: string;
    icon: React.ReactNode;
};

export const breadcrumbMaps: BreadcrumbInfo[] = [
    { label: "Página inicial", route: "/", icon: <Home /> },
    { label: "Entrar", route: "/", icon: <Home /> },
];
