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
interface OrderConfirmationProps {
    children: React.ReactNode;
}

const OrderConfirmationPage: React.FC<OrderConfirmationProps> = ({ children }) => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <header>
                <AccessibilityBar />
                <Navbar />
            </header>
            <main>
            <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh", // Ajuste conforme necessário
            backgroundColor: colors.grass[1],
            color: colors.neutral[12],
            width: "50vw",
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "5vh 25vw",
            padding: "2vh 3vw"
          }}
        >
          <Typography style={{
            color: colors.neutral[12],
            fontSize: "1.7rem",
            margin: "1vh 3vw",
            maxWidth: "100%",
            maxHeight: "100%",
            }} variant="h4" gutterBottom>
            Nós agradecemos a preferência!
          </Typography>
          <img 
          src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
          style={{ width: "50%", maxWidth: "200px", height: "auto" }}

          ></img>

          <Typography style={{color: colors.neutral[12],
            fontSize: "1.7rem",
            margin: "1vh 3vw",
            maxWidth: "100%",
            maxHeight: "100%",
            textAlign: "center"


          }}  variant="body2" paragraph>
            Seu pedido foi confirmado e possui o código #1anJxs723957uKDTopz!
          </Typography>

          <Typography style={{color: colors.neutral[12],
            fontSize: "1.3rem",
            margin: "1vh 3vw",
            textAlign: "center"

          }}  variant="body2" paragraph>
          O rastreamento do pedido vai aparecer em “Minha Conta” na aba de Pedidos!
          </Typography>
          <Button style={{
            backgroundColor: colors.neutral[12],
            color:colors.grass[1],
            width: "30%",
            height: "10%",
            padding: "2%",
            marginTop: "5%"
          }}>
            Voltar para a loja
          </Button>
          {/* Div específica parabenizando pela compra */}
          
          <Divider sx={{ my: 2 }} />
        </Box>
            </main>
        </>
    );
};

export default OrderConfirmationPage;
