import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    IconButton,
    List,
    ListItem,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PlantadoLogo from "../PlantadoLogo/PlantadoLogo";
import { spacing, tokens } from "../../theme";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import {
    ExpandMore as ExpandMoreIcon,
    Spa as EcoIcon,
} from "@mui/icons-material";

const hierarchy = [
    {
        categoria: "Plantas",
        subcategorias: ["Flor", "Especiaria", "Interior"],
    },
    {
        categoria: "Vasos",
        subcategorias: ["Plastico", "Ceramica", "Inox"],
    },
    {
        categoria: "Rega",
        subcategorias: ["Regador"],
    },
    {
        categoria: "Acessórios",
        subcategorias: ["Tesoura", "Rastelo", "Pás", "Sensores", "Rega"],
    },
];

const Footer: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Stack
            bgcolor={colors.grass[1]}
            color={colors.neutral[12]}
            paddingX={spacing.GLOBAL_HORIZONTAL_MARGIN}
            paddingY={4}
            direction={"column"}
            alignItems={"center"}
            gap={4}
            id="rodape"
        >
            <Stack
                id="plantado-and-social-media"
                direction={"row"}
                width={"100%"}
                justifyContent={"space-between"}
            >
                <Stack>
                    <NavLink to={"/"}>
                        <PlantadoLogo
                            colorText={colors.neutral[12]}
                            style={{ width: 128 }}
                        />
                    </NavLink>
                </Stack>

                <Stack
                    direction={"row"}
                    id="social-media-list"
                    flexWrap={"wrap"}
                >
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                    <IconButton>
                        <Twitter />
                    </IconButton>
                    <IconButton>
                        <YouTube />
                    </IconButton>
                </Stack>
            </Stack>
            <Stack direction={{ md: "column", lg: "row" }} gap={8}>
                <div
                    aria-description="Listagem de categorias e subcategorias do site"
                    role="region"
                    tabIndex={0}
                    style={{ width: "100%" }}
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        flexWrap={"wrap"}
                    >
                        {hierarchy.map((categoria) => (
                            <Stack>
                                <Typography
                                    aria-label="Título categoria"
                                    variant="h5"
                                    tabIndex={0}
                                >
                                    {categoria.categoria}
                                </Typography>

                                <List>
                                    {categoria.subcategorias.map(
                                        (subcategoria) => (
                                            <ListItem>
                                                <Typography
                                                    variant="body2"
                                                    aria-label="Título subcategoria"
                                                    tabIndex={0}
                                                >
                                                    {subcategoria}
                                                </Typography>
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            </Stack>
                        ))}
                    </Stack>
                </div>
                <Stack
                    component="section"
                    id="ecology-text"
                    spacing={2}
                    aria-description="Seção que fala sobre o comprometimento da Plantado com a ecologia"
                    tabIndex={0}
                >
                    <Typography variant="h4" tabIndex={0}>
                        A Plantado está comprometida com medidas para combate ao
                        desmatamento
                    </Typography>
                    <Typography tabIndex={0}>
                        O desmatamento é uma questão crítica que afeta nosso
                        planeta. Na Plantado, estamos empenhados em tomar
                        medidas proativas para combater esse problema. Nós nos
                        comprometemos a promover práticas sustentáveis,
                        preservar habitats naturais e apoiar iniciativas de
                        reflorestamento.
                    </Typography>
                    <Typography tabIndex={0}>
                        Além disso, estamos em parceria com organizações
                        ambientais e dedicamos parte dos nossos lucros para
                        programas de conservação florestal. Acreditamos que cada
                        pequena ação faz a diferença para um futuro mais verde e
                        sustentável.
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Saiba mais sobre nossas iniciativas ambientais
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Aqui, na Plantado, trabalhamos ativamente para
                                reduzir nossa pegada de carbono e promover
                                práticas de negócios sustentáveis. Colaboramos
                                com especialistas e ativistas ambientais para
                                garantir que nossas operações sejam o mais
                                eco-friendly possível.
                            </Typography>
                            <Typography>
                                Nossos esforços se estendem desde a fonte de
                                nossos produtos até o modo como são entregues,
                                sempre priorizando o menor impacto ambiental.
                                Junte-se a nós nessa jornada para um planeta
                                mais saudável e próspero para todos.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Footer;
