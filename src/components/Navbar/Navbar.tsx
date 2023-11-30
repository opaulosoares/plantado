import { useContext, useEffect, useState } from "react";
import {
    ColorModeContext,
    checkLocalStorageTheme,
    spacing,
    tokens,
} from "../../theme";
import { Button, IconButton, Stack, Switch, useTheme } from "@mui/material";
import { LightMode, MenuRounded, Nightlight } from "@mui/icons-material";
import { motion } from "framer-motion";
import PlantadoLogo from "../PlantadoLogo/PlantadoLogo";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import UserAvatarDrawer from "../UserAvatarDrawer/UserAvatarDrawer";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
    const navigate = useNavigate();

    /* Theme management */
    const [darkModeChecked, setDarkModeChecked] = useState(
        checkLocalStorageTheme()
    );

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
                {isLoggedIn ? (
                    <div aria-label="informações usuário">
                        <UserAvatarDrawer />
                    </div>
                ) : (
                    <div
                        aria-label="entrar"
                        aria-description="Entrar na plataforma"
                        tabIndex={0}
                    >
                        <Button
                            variant="contained"
                            onClick={() => navigate("/entrar")}
                        >
                            Entrar
                        </Button>
                    </div>
                )}
            </Stack>
        </nav>
    );
};

export default Navbar;
