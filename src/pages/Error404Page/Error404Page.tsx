import { Stack, useTheme } from "@mui/material";
import { Typography, Button, Box, Divider } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AccessibilityBar from "../../components/AccessibilityBar/AccessbilityBar";
import { useContext } from "react";
import { ColorModeContext, spacing, tokens } from "../../theme";
import BasePage from "../../templates/BasePage/BasePage";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";

const Error404Page: React.FC = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();

    return (
        <BasePage>
            <section id="inicioConteudo" style={{ height: "100%" }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h3" tabIndex={0}>
                    Página não encontrada
                </Typography>
                <Typography variant="body1" tabIndex={0}>
                    A página que você está procurando não existe ou foi
                    removida.
                </Typography>
                <div>
                    <Button
                        variant="contained"
                        startIcon={<Home />}
                        onClick={() => navigate("/")}
                    >
                        Voltar para a página inicial
                    </Button>
                </div>
            </section>
        </BasePage>
    );
};

export default Error404Page;
