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
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(2); // Assuming Rega is the third step

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
              height: "20vh",
              marginTop: "10vh",
              maxWidth: "60%",
              // textAlign: "center",
              flexDirection: "column",
            }}
          >
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
          <img
              src="https://i.ibb.co/2SY1wzs/Group-1.png"
              alt="Credit Card"
              style={{ 
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // margin: "5vh 25vw",
                maxWidth: "40%",
              }}
            />
            {/* Checkbox */}
            <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "100%",
              marginRight: "12%"
              // justifyContent: "left",
              // alignItems: "left",
              // textAlign: "left",
            }}
          >
              <Checkbox
              onChange={() => setDisableCreditCard(!disableCreditCard)}
              checked={disableCreditCard}
              sx={{
                marginTop: "1%"
              }}
            />
            <Typography variant="body2"
            sx={{
              marginTop: "4.5%"
            }}>
              Utilizar meu cartão de crédito salvo.
            </Typography>
            </Box>
            
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
              margin: "0% auto auto",
              maxWidth: "1200px",
            }}
          >
            {/* Card Image */}
            

            {/* Formulário */}
            <div className="v920_11763" style={{ width: "70%", marginRight: "20px" }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {/* Coluna de dados do cartão */}
                  <Grid item xs={6}>
                    <Typography variant="h4" gutterBottom>
                      Dados do Cartão
                    </Typography>
                    Número do Cartão:
                    <TextField
                      required
                      fullWidth
                      placeholder="1234 5678 9012 3456"
                      disabled={disableCreditCard}
                    />
                    <Box mb={2} />
                    Nome do Titular:
                    <TextField
                      required
                      fullWidth
                      placeholder="Nome Completo"
                      disabled={disableCreditCard}
                    />
                    <Box mb={2} />

                    Data de Expiração:
                    <TextField
                      required
                      fullWidth
                      placeholder="MM/AA"
                      disabled={disableCreditCard}
                    />
                    <Box mb={2} />

                    Código de Segurança:
                    <TextField
                      required
                      fullWidth
                      placeholder="CVV"
                      disabled={disableCreditCard}
                    />
                    <Box mb={2} />
                  </Grid>
                  {/* Coluna de dados de endereço */}
                  <Grid item xs={6}>
                    <Typography variant="h4" gutterBottom>
                      Endereço de Entrega
                    </Typography>
                    
                    Endereço:
                    <TextField
                      required
                      fullWidth
                      placeholder="Rua dos Bobos"
                    />
                    
                    <Box mb={2} />
                    Número:
                    <TextField
                      required
                      fullWidth
                      placeholder="0"
                    />
                    <Box mb={2} />

                    Cidade:
                    <TextField required fullWidth placeholder="São Carlos" />
                    <Box mb={2} />

                    CEP:
                    <TextField
                      required
                      fullWidth
                      placeholder="12345-678"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                    />
                    <Box mb={2} />
                  </Grid>
                </Grid>
                

                {/* Botão de Envio */}
              </form>
            </div>

            {/* Linha Vertical */}
            <div
              style={{ borderRight: "1px solid #ccc", height: "200%", margin: "0 20px" }}
            ></div>

            {/* Resumo do Pedido */}
            <Paper
              elevation={3}
              sx={{
                padding: "2%",
                width: "40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "100vh", // Adicionando margem inferior
              }}
            >
              <Typography variant="h3" gutterBottom>
                Resumo do Pedido
              </Typography>
              <br></br>
              <Typography variant="h5" gutterBottom>
                Bico de Mangueira - $5.99
              </Typography>
              <div
              style={{ borderBottom: "1px solid #ccc", height: "1%", width: "100%", margin: "0 20px" }}
            ></div>
              <br></br>
              <Typography variant="h5" gutterBottom>
                Frete: $0
              </Typography>
              <br></br>
              <Typography variant="h5" gutterBottom>
                Total: $5.99
              </Typography>
              <br></br>
              {/* Adicione informações do resumo do pedido aqui (foto do produto, nome, preço total) */}
              <Button 
onClick={() => navigate("/entrar")}
                sx={{ width: "100%"}} variant="contained" type="submit">Finalizar Pedido</Button>
            </Paper>
          </Box>
        </main>
      </>
    );
  };

export default CheckoutPage;
