import React, { useContext, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
    useTheme,

} from "@mui/material";
import {
  LocationOn,
  Info,
  ShoppingCart,
  Share
} from "@mui/icons-material";
import { ColorModeContext, spacing, tokens } from "../../theme";

const Footer: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (isSmallScreen) {
    return (
      <footer>
        <div
          style={{
            flexDirection: "column",
            padding: "16px",
            backgroundColor: colors.grass[1], // Escolha a cor de fundo desejada
            color: colors.neutral[12], // Escolha a cor do texto desejada
          }}
        >
          <Accordion style={{ marginBottom: "8px" }}>
            <AccordionSummary expandIcon={<LocationOn />}>
              <Typography>Localização</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ flexDirection: "column" }}>
                <Typography>Endereço 1</Typography>
                <Typography>Endereço 2</Typography>
                {/* Adicione mais informações de localização conforme necessário */}
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginBottom: "8px" }}>
            <AccordionSummary expandIcon={<Info />}>
              <Typography>Sobre</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ flexDirection: "column" }}>
                <Typography>Nossa História</Typography>
                <Typography>Missão e Visão</Typography>
                {/* Adicione mais informações sobre a empresa conforme necessário */}
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginBottom: "8px" }}>
            <AccordionSummary expandIcon={<ShoppingCart />}>
              <Typography>Produtos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ flexDirection: "column" }}>
                <Typography>Categoria 1</Typography>
                <Typography>Categoria 2</Typography>
                {/* Adicione mais categorias de produtos conforme necessário */}
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<Share />}>
              <Typography>Redes Sociais</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ flexDirection: "column" }}>
               <Typography>Faceebook</Typography>
          <Typography>Twitter</Typography>
          <Typography>Instagram</Typography>
                {/* Adicione mais links para redes sociais conforme necessário */}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </footer>
    );
  }

  // Se a tela for maior que 768px, exibir colunas lado a lado
  return (
    <footer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "16px",
           backgroundColor: colors.grass[1], // Escolha a cor de fundo desejada
            color: colors.neutral[12], // Escolha a cor do texto desejada
          height: "220px", // Ajuste a altura conforme necessário
          gap: "16px", // Ajuste o espaçamento entre as colunas conforme necessário
        }}
      >
        <div>
          <Typography variant="h6">Localização</Typography>
          <Typography>Avenida São Carlos</Typography>
          <Typography>Nº 1004</Typography>
        </div>

        <div>
          <Typography variant="h6">Sobre</Typography>
          <Typography>Nossa História</Typography>
          <Typography>Missão e Visão</Typography>
        </div>

        <div>
          <Typography variant="h6">Produtos</Typography>
          <Typography>Plantas</Typography>
          <Typography>Vasos</Typography>
        </div>

        <div>
          <Typography variant="h6">Redes Sociais</Typography>
          <Typography>Faceebook</Typography>
          <Typography>Twitter</Typography>
          <Typography>Instagram</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
