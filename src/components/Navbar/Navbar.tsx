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
    const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
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
                    px={{ md: 4, lg: 8, xl: 16 }}
                    gap={2}
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    <NavLink
                        to={"/categoria/plantas"}
                        aria-label="Ir para a página de plantas"
                        style={(isActive) => {
                            return {
                                borderBottom: isActive.isActive
                                    ? "1px solid white"
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
                                    ? "1px solid white"
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
                                    ? "1px solid white"
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
                                    ? "1px solid white"
                                    : "",
                            };
                        }}
                    >
                        <Typography fontWeight={600}>Acessórios</Typography>
                    </NavLink>
                </Stack>
                <Stack
                    width={"100%"}
                    sx={{ display: { xs: "none", lg: "flex" } }}
                >
                    <Paper
                        sx={{
                            p: "0.25rem 1rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            gap: 1,
                            border: `1px solid ${colors.neutral[7]}`,
                        }}
                        elevation={0}
                        component="form"
                    >
                        <InputBase
                            size="medium"
                            id="busca"
                            placeholder={`Digite o título do produto: "Vaso de planta" `}
                            value={inputValue}
                            fullWidth={true}
                            onChange={(event) =>
                                setInputValue(event.target.value)
                            }
                            tabIndex={0}
                        />
                        <IconButton
                            color="primary"
                            type="submit"
                            sx={{
                                background: colors.grass[12],
                                color: colors.grass[1],
                            }}
                            onClick={() => alert("busca")}
                        >
                            <Search />
                        </IconButton>
                    </Paper>
                </Stack>
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"row"}
                    gap={2}
                >
                    {isLoggedIn ? (
                        <div aria-label="informações usuário">
                            <UserAvatarDrawer />
                        </div>
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
                        <Button
                            variant="contained"
                            onClick={() => navigate("/entrar")}
                            tabIndex={0}
                            aria-label="entrar"
                            aria-details="Botão para entrar na conta do usuário."
                        >
                            Entrar
                        </Button>
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
                                        ? "1px solid white"
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
                                        ? "1px solid white"
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
                                        ? "1px solid white"
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
                                        ? "1px solid white"
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
