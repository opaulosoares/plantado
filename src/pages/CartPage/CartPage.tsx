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



const CheckoutPage: React.FC = ({ children }) => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    nome: "",
    endereco: "",
    cidade: "",
    cep: "",
  });

  const [disableCreditCard, setDisableCreditCard] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  const newLocal = "35%";
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
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
              margin: "2% auto auto",
              maxWidth: "1200px",
              
              
            }}
          >
            <Box sx={{ 
              flexDirection: "column"
              }}>

              {/* Produto no carrinho */}
              <Box
              
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: colors.grass[1], // Cor de fundo do card
                  padding: "3%",
                  marginBottom: "10px",
                  tabindex: "0"
                }}
              >
                <img
                  src="https://i.ibb.co/2SY1wzs/Group-1.png"
                  alt="Product Image"
                  style={{
                    maxWidth: "40%",
                    marginRight: "15px",
                  }}
                  tabindex="0"
                />
                <Box>
                  <Typography tabIndex="0" variant="h6">Nome do Produto</Typography>
                  <Box mb={2} />

                  <Typography tabindex="0" variant="h6">Descrição do Produto</Typography>
                  <Box mb={8} />

                  <Typography tabindex="0" variant="subtitle1">$99.99</Typography>
                </Box>
              </Box>
              
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: colors.grass[1], // Cor de fundo do card
                  padding: "3%",
                  marginBottom: "10px",
                }}
              >
                <img tabindex="0"
                  src="https://i.ibb.co/2SY1wzs/Group-1.png"
                  alt="Product Image"
                  style={{
                    maxWidth: "40%",
                    marginRight: "15px",
                  }}
                />
                <Box>
                  <Typography tabindex="0" variant="h6">Nome do Produto</Typography>
                  <Box mb={2} />

                  <Typography tabindex="0" variant="h6">Descrição do Produto</Typography>
                  <Box mb={8} />

                  <Typography tabindex="0" variant="subtitle1">$99.99</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: colors.grass[1], // Cor de fundo do card
                  padding: "3%",
                  marginBottom: "10px",
                }}
              >
                <img tabindex="0"
                  src="https://i.ibb.co/2SY1wzs/Group-1.png"
                  alt="Product Image"
                  style={{
                    maxWidth: "40%",
                    marginRight: "15px",
                  }}
                />
                <Box>
                  <Typography tabindex="0" variant="h6">Nome do Produto</Typography>
                  <Box mb={2} />

                  <Typography tabindex="0" variant="h6">Descrição do Produto</Typography>
                  <Box mb={8} />

                  <Typography tabindex="0" variant="subtitle1">$99.99</Typography>
                </Box>
              </Box>
            </Box>

            

              {/* Linha Vertical */}
              <div
                style={{ borderRight: "1px solid #ccc", height: "100%", margin: "0 20px" }}
              ></div>

              {/* Resumo do Pedido */}
              <Paper
                elevation={3}
                sx={{
                  padding: "2%",
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  marginBottom: "45vh", // Adicionando margem inferior
                  backgroundColor: colors.grass[1], // Cor de fundo do card

                }}
              >
                <Typography tabindex="0" variant="h3" gutterBottom>
                  Resumo
                </Typography>
                <hr></hr>
                <Typography tabindex="0" variant="h5" gutterBottom>
                  Preço total: $20.00
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate("/checkout")}
                    tabIndex={0}
                    sx={{
                      marginTop: "5%", 
                      display: { xs: "none", md: "flex" } }}
                >
                    Ir para Opções de Pagamento
                </Button>

                {/* Adicione informações do resumo do pedido aqui (foto do produto, nome, preço total) */}
              </Paper>
            </Box>
            
        </main>
      </>
    );
  };

export default CheckoutPage;
