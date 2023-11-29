import { useContext, useEffect, useState } from "react";
import {
    ColorModeContext,
    checkLocalStorageTheme,
    spacing,
    tokens,
} from "../../theme";
import { IconButton, Stack, Switch, useTheme } from "@mui/material";
import { LightMode, MenuRounded, Nightlight } from "@mui/icons-material";
import { motion } from "framer-motion";
import PlantadoLogo from "../PlantadoLogo/PlantadoLogo";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    /* Theme management */
    const [darkModeChecked, setDarkModeChecked] = useState(
        checkLocalStorageTheme()
    );

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 999,
                backgroundColor: colors.grass[1],
                color: colors.neutral[12],
                borderBottom: `1px solid ${colors.neutralTransparent[8]}`,
            }}
            role="navigation"
        >
            <Stack
                sx={{
                    px: spacing.GLOBAL_HORIZONTAL_MARGIN,
                    py: 2,
                    justifyContent: "space-between",
                }}
                direction="row"
            >
                <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
                    <MenuRounded />
                </IconButton>

                <NavLink
                    to="/"
                    aria-label="Voltar para a página inicial"
                    aria-description="Botão para retornar para a página inicia ativado por um clique único"
                    aria-details="Logo da empresa com ilustração de uma folha de planta dentro de um círculo e texto escrito Plantado à sua direita."
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <PlantadoLogo
                        colorText={colors.neutral[12]}
                        style={{ width: 128 }}
                    />
                </NavLink>

                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                    aria-description="Botão para alternar entre os modos de cores claro e escuro"
                    aria-details="Ícone de uma lua e um sol, representando os modos de cores escuro e claro, respectivamente."
                >
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {darkModeChecked ? (
                            <Nightlight sx={{ fill: colors.neutral[12] }} />
                        ) : (
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                style={{ display: "flex" }}
                            >
                                <LightMode sx={{ fill: colors.neutral[12] }} />
                            </motion.div>
                        )}

                        <Switch
                            checked={darkModeChecked}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setDarkModeChecked(event.target.checked);
                            }}
                            onClick={colorMode.toggleColorMode}
                        />
                    </Stack>
                </motion.div>
            </Stack>
        </nav>
    );
};

export default Navbar;
