import { useTheme } from "@mui/material";
import { Typography, Button, Box, Divider } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AccessibilityBar from "../../components/AccessibilityBar/AccessbilityBar";
import { useContext, useEffect, useState } from "react";
import {
    ColorModeContext,
    checkLocalStorageTheme,
    spacing,
    tokens,
} from "../../theme";
import { useNavigate } from "react-router-dom";
import BasePage from "../../templates/BasePage/BasePage";

const OrderConfirmationPage: React.FC = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };
    return (
        <BasePage>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.grass[1],
                    color: colors.neutral[12],
                    py: 8,
                }}
            >
                <Typography variant="h2" gutterBottom my={2}>
                    Nós agradecemos a preferência!
                </Typography>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
                    style={{ width: "50%", maxWidth: "100px", height: "auto" }}
                ></img>

                <Typography variant="body1" my={2}>
                    Seu pedido foi confirmado e possui o código
                    #1anJxs723957uKDTopz!
                </Typography>

                <Typography
                    style={{
                        fontSize: "1.3rem",
                        margin: "1vh 3vw",
                        textAlign: "center",
                    }}
                    variant="body2"
                    paragraph
                >
                    O rastreamento do pedido vai aparecer em “Minha Conta” na
                    aba de Pedidos!
                </Typography>
                <Button
                    onClick={handleGoBack}
                    variant="contained"
                    sx={{ mt: 8 }}
                >
                    Voltar para a loja
                </Button>
                {/* Div específica parabenizando pela compra */}

                <Divider sx={{ my: 2 }} />
            </Box>
        </BasePage>
    );
};

export default OrderConfirmationPage;
