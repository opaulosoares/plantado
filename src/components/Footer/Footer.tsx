import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  LocationOn,
  Info,
  ShoppingCart,
  Share,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  if (isSmallScreen) {
    return (
      <footer>
        <div
          style={{
            flexDirection: "column",
            padding: "16px",
            backgroundColor: "#333", // Escolha a cor de fundo desejada
            color: "#fff", // Escolha a cor do texto desejada
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
                <Typography>Facebook</Typography>
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
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#333", // Escolha a cor de fundo desejada
          color: "#fff", // Escolha a cor do texto desejada
          height: "120px", // Ajuste a altura conforme necessário
          gap: "16px", // Ajuste o espaçamento entre as colunas conforme necessário
        }}
      >
        <div>
          <Typography variant="h6">Localização</Typography>
          <Typography>Endereço 1</Typography>
          <Typography>Endereço 2</Typography>
        </div>

        <div>
          <Typography variant="h6">Sobre</Typography>
          <Typography>Nossa História</Typography>
          <Typography>Missão e Visão</Typography>
        </div>

        <div>
          <Typography variant="h6">Produtos</Typography>
          <Typography>Categoria 1</Typography>
          <Typography>Categoria 2</Typography>
        </div>

        <div>
          <Typography variant="h6">Redes Sociais</Typography>
          <Typography>Facebook</Typography>
          <Typography>Instagram</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
