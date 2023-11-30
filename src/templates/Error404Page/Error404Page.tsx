import { useTheme } from "@mui/material";
import { Typography, Button, Box, Divider } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AccessibilityBar from "../../components/AccessibilityBar/AccessbilityBar";
import { useContext } from "react";
import { ColorModeContext, spacing, tokens } from "../../theme";

interface Error404Props {
  children: React.ReactNode;
}

const Error404Page: React.FC<Error404Props> = ({ children }) => {
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
            height: "70vh",
            backgroundColor: colors.grass[1], // Cor para indicar erro
            color: colors.neutral[12],
            width: "50vw",
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "5vh 25vw",
            padding: "2vh 3vw",
          }}
        >
          <img
            src="https://i.ibb.co/n65R7mS/6325253.png"
            style={{ maxWidth: "50%", height: "auto" }}
            alt="Erro 404"
          ></img>
          <Typography
            style={{
              color: colors.neutral[12],
              fontSize: "1.7rem",
              margin: "1vh 3vw",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            variant="h1"
            gutterBottom
          >
            Desculpe-nos, a página que você procura não foi encontrada. 
            Recomendamos verificar o endereço e tentar novamente.
             Se o problema persistir, entre em contato conosco para obter assistência. 
             Voltar para a página inicial é sempre uma opção. 
          </Typography>
          

          <Typography
            style={{
              color: colors.neutral[12],
              fontSize: "1.7rem",
              margin: "1vh 3vw",
              maxWidth: "100%",
              maxHeight: "100%",
              textAlign: "center",
            }}
            variant="body2"
            paragraph
          >
          </Typography>

          <Button
            style={{
              backgroundColor: colors.neutral[12],
              color: colors.grass[1],
              width: "30%",
              height: "10%",
              padding: "2%",
              marginTop: "5%",
            }}
          >
            Voltar para a loja
          </Button>

          <Divider sx={{ my: 2 }} />
        </Box>
      </main>
    </>
  );
};

export default Error404Page;
