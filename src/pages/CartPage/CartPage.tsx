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
  Stepper,
  Step
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import AccessibilityBar from "../../components/AccessibilityBar/AccessbilityBar";
import { ColorModeContext, spacing, tokens } from "../../theme";
import { NavLink, useNavigate } from "react-router-dom";



const CheckoutPage: React.FC = ({ children }) => {
const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1); // Assuming Rega is the third step

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
              margin: "2% auto",
              maxWidth: "1200px",
              
              
            }}
          >
            {/* Stepper */}
            <Box sx={{ 
                marginBottom: "20px",
                maxWidth: "30%",
                marginLeft: "10%"
        
            }}>
            <Stepper activeStep={activeStep}>
                <Step>
                <StepLabel>Produto Escolhido</StepLabel>
                </Step>
                <Step>
                <StepLabel>Carrinho</StepLabel>
                </Step>
                <Step>
                <StepLabel>Pagamento</StepLabel>
                </Step>
            </Stepper>
            </Box>
            <Box sx={{ 
              flexDirection: "column",
              marginBottom: "40vh"
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
                  src="https://i.ibb.co/0m0rqgV/hose-5473324-640.jpg"
                  alt="Um bico em formato de lanterna, a área para segurar é de cor cinza com um gatilho preto e vermelho, sua cabeça é preta e vermelha, e possui diferentes opções de saída de água."
                  style={{
                    maxWidth: "40%",
                    marginRight: "15px",
                  }}
                  tabindex="0"
                />
                <Box>
                  <Typography tabIndex="0" variant="h4">Bico Especial para Mangueiras</Typography>
                  <Box mb={2} />

                  <Typography tabindex="0" variant="h6">Esse bico possui 8 diferentes tipos de saída de água</Typography>
                  <Box mb={8} />

                  <Typography tabindex="0" variant="subtitle1">$5.99</Typography>
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
                  Preço total: $5.99
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
