import React, { useContext, useState } from "react";
import { ColorModeContext, spacing, tokens } from "../../theme";
import {
    Button,
    Drawer,
    IconButton,
    InputBase,
    Paper,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { MenuRounded, Search } from "@mui/icons-material";
import PlantadoLogo from "../PlantadoLogo/PlantadoLogo";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import UserAvatarDrawer from "../UserAvatarDrawer/UserAvatarDrawer";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Navbar: React.FC = () => {
    // const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav
            style={{
                width: "100%",
                backgroundColor: colors.grass[1],
                color: colors.neutral[12],
                borderBottom: `1px solid ${colors.neutralTransparent[8]}`,
            }}
            role="navigation"
            id="menuPrincipal"
        >
            <Stack
                sx={{
                    px: spacing.GLOBAL_HORIZONTAL_MARGIN,
                    py: 2,
                    justifyContent: "space-between",
                    gap: 4,
                }}
                direction="row"
            >
                <IconButton
                    sx={{ display: { xs: "flex", md: "none" } }}
                    onClick={handleDrawerToggle}
                >
                    <MenuRounded />
                </IconButton>

                <NavLink
                    to="/"
                    aria-label="Voltar para a página inicial"
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
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={4}
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    <NavLink
                        to={"/categoria/plantas"}
                        aria-label="Ir para a página de plantas"
                        style={(isActive) => {
                            return {
                                borderBottom: isActive.isActive
                                    ? `2px solid ${colors.grass[9]}`
                                    : "",
                            };
                        }}
                    >
                        <Typography fontWeight={600}>Plantas</Typography>
                    </NavLink>
                    <NavLink
                        to={"/categoria/rega"}
                        aria-label="Ir para a página de rega"
                        style={(isActive) => {
                            return {
                                borderBottom: isActive.isActive
                                    ? `2px solid ${colors.grass[9]}`
                                    : "",
                            };
                        }}
                    >
                        <Typography fontWeight={600}>Rega</Typography>
                    </NavLink>
                    <NavLink
                        to={"/categoria/vasos"}
                        aria-label="Ir para a página de vasos"
                        style={(isActive) => {
                            return {
                                borderBottom: isActive.isActive
                                    ? `2px solid ${colors.grass[9]}`
                                    : "",
                            };
                        }}
                    >
                        <Typography fontWeight={600}>Vasos</Typography>
                    </NavLink>
                    <NavLink
                        to={"/categoria/acessorios"}
                        aria-label="Ir para a página de acessórios"
                        style={(isActive) => {
                            return {
                                borderBottom: isActive.isActive
                                    ? `2px solid ${colors.grass[9]}`
                                    : "",
                            };
                        }}
                    >
                        <Typography fontWeight={600}>Acessórios</Typography>
                    </NavLink>
                </Stack>
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"row"}
                    gap={2}
                >
                    {isLoggedIn ? (
                        <Stack sx={{ display: { xs: "none", md: "flex" } }}>
                            <UserAvatarDrawer />
                        </Stack>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={() => navigate("/entrar")}
                            tabIndex={0}
                            aria-label="entrar"
                            aria-details="Botão para entrar na conta do usuário."
                            sx={{ display: { xs: "none", md: "flex" } }}
                        >
                            Entrar
                        </Button>
                    )}
                    <Cart />
                    {isLoggedIn ? null : (
                        <Stack sx={{ display: { xs: "none", md: "flex" } }}>
                            <ThemeSwitcher />
                        </Stack>
                    )}
                </Stack>
            </Stack>

            {/* Drawer for smaller screens */}
            <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
            >
                {/* Content inside the drawer */}
                <Stack
                    direction={"row"}
                    sx={{
                        p: spacing.GLOBAL_HORIZONTAL_MARGIN,
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                    }}
                >
                    {isLoggedIn ? (
                        <div aria-label="informações usuário">
                            <UserAvatarDrawer />
                        </div>
                    ) : (
                        <Stack gap={2}>
                            <Button
                                variant="contained"
                                onClick={() => navigate("/entrar")}
                                tabIndex={0}
                                aria-label="entrar"
                                aria-details="Botão para entrar na conta do usuário."
                            >
                                Entrar
                            </Button>
                            <ThemeSwitcher />
                        </Stack>
                    )}
                    <Stack
                        sx={{
                            justifyContent: "center",
                            alignItems: "flex-end",
                        }}
                    >
                        <NavLink
                            to={"/categoria/plantas"}
                            aria-label="Ir para a página de plantas"
                            style={(isActive) => {
                                return {
                                    borderBottom: isActive.isActive
                                        ? `2px solid ${colors.grass[9]}`
                                        : "",
                                };
                            }}
                        >
                            Plantas
                        </NavLink>
                        <NavLink
                            to={"/categoria/rega"}
                            aria-label="Ir para a página de rega"
                            style={(isActive) => {
                                return {
                                    borderBottom: isActive.isActive
                                        ? `2px solid ${colors.grass[9]}`
                                        : "",
                                };
                            }}
                        >
                            Rega
                        </NavLink>
                        <NavLink
                            to={"/categoria/vasos"}
                            aria-label="Ir para a página de vasos"
                            style={(isActive) => {
                                return {
                                    borderBottom: isActive.isActive
                                        ? `2px solid ${colors.grass[9]}`
                                        : "",
                                };
                            }}
                        >
                            Vasos
                        </NavLink>
                        <NavLink
                            to={"/categoria/acessorios"}
                            aria-label="Ir para a página de acessórios"
                            style={(isActive) => {
                                return {
                                    borderBottom: isActive.isActive
                                        ? `2px solid ${colors.grass[9]}`
                                        : "",
                                };
                            }}
                        >
                            Acessórios
                        </NavLink>
                    </Stack>
                </Stack>
            </Drawer>
        </nav>
    );
};

export default Navbar;
