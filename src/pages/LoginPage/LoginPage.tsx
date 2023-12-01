import React, { useContext, useState } from "react";
import {
    useTheme,
    Typography,
    Button,
    Box,
    Divider,
    TextField,
    Grid,
    Paper,
    Checkbox,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import AccessibilityBar from "../../components/AccessibilityBar/AccessbilityBar";
import { ColorModeContext, spacing, tokens } from "../../theme";
import PlantadoLogo from "../../components/PlantadoLogo/PlantadoLogo";

const LoginPage: React.FC = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [rememberMe, setRememberMe] = React.useState(false);

    const handleLogin = () => {
        // Adicionar lógica para lidar com o login
    };

    const handleForgotPassword = () => {
        // Adicionar lógica para redefinir a senha
    };

    return (
        <>
            <header>
                <AccessibilityBar />
                <Navbar />
            </header>
            <main>
                <Box
                    sx={{
                        width: "50%",
                        height: "20%",
                        margin: "2% auto",
                        textAlign: "center",
                        tabindex: "0",
                    }}
                >
                    <PlantadoLogo
                        colorText={colors.neutral[12]}
                        style={{ width: 450 }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "80vh",
                        width: "70%",
                        padding: "3% 0%",
                        margin: "0 auto",

                        backgroundColor: colors.grass[1],
                        boxShadow: "5",
                    }}
                >
                    <Box
                        sx={{
                            width: "90%",
                            display: "flex",
                            //   backgroundColor: "#4CAF50", // Fundo verde
                        }}
                    >
                        {/* Lado Esquerdo - Fundo Verde */}
                        <Box
                            sx={{
                                width: "60%",
                                padding: "20px",
                                backgroundColor: colors.grass[10],
                            }}
                        >
                            {/* Adicione qualquer conteúdo adicional do lado esquerdo aqui */}
                        </Box>

                        {/* Lado Direito - Sessão de Login */}
                        <Box
                            sx={{
                                width: "50%",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "15%",
                                backgroundColor: colors.grass[1],
                            }}
                        >
                            <Typography
                                tabIndex={0}
                                variant="h4"
                                gutterBottom
                                component="h4"
                            >
                                Faça Login
                            </Typography>
                            <form>
                                <TextField
                                    fullWidth
                                    label="E-mail"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Senha"
                                    variant="outlined"
                                    margin="normal"
                                    type="password"
                                    required
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Checkbox
                                        checked={rememberMe}
                                        onChange={() =>
                                            setRememberMe(!rememberMe)
                                        }
                                    />
                                    <Typography> Lembrar Dados</Typography>
                                </Box>
                                <Button
                                    sx={{ width: "100%" }}
                                    variant="contained"
                                    onClick={handleLogin}
                                >
                                    Entrar
                                </Button>
                                <Typography
                                    sx={{
                                        cursor: "pointer",
                                        marginTop: "10px",
                                        tabIndex: "0",
                                    }}
                                    onClick={handleForgotPassword}
                                >
                                    Esqueceu a senha? Redefina aqui
                                </Typography>
                            </form>
                            <Button
                                sx={{
                                    width: "60%",
                                    marginTop: "10px",
                                    marginRight: "45%",
                                }}
                            >
                                Não é cliente? Cadastre-se aqui
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </main>
        </>
    );
};

export default LoginPage;
