import React, { useContext, useState } from "react";
import {
  useTheme,
  Typography,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Rating,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import AccessibilityBar from "../../components/AccessibilityBar/AccessbilityBar";
import { ColorModeContext, tokens } from "../../theme";
import { NavLink, useNavigate } from "react-router-dom";

const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [activeStep, setActiveStep] = useState(2); // Assuming Rega is the third step

  // Product details
  const productDetails = {
    name: "Bico Especial para Mangueiras",
    description: "Esse bico possui 8 diferentes tipos de saída de água",
    price: "$5.99",
    imageUrl: "https://i.ibb.co/0m0rqgV/hose-5473324-640.jpg",
    rating: 5,
  };

  // Function to handle adding to cart (replace with your actual logic)
  const handleAddToCart = () => {
    // Add your logic here
    console.log("Product added to cart:", productDetails);
  };

  // Sample recommended products
  const recommendedProducts = [
    {
      name: "Regador Giratório",
      imageUrl: "https://i.ibb.co/1G3L1xy/water-sprinklers-880970-640.jpg",
      price: "$10.99",
    },
    {
      name: "Medidor de Umidade",
      imageUrl: "https://i.ibb.co/X7HVxML/the-soil-profile-2412916-1280.jpg",
      price: "$12.99",
    },
    {
      name: "Pá Vermelha",
      imageUrl: "https://i.ibb.co/gwtq1TT/gardening-2448134-640.jpg",
      price: "$14.99",
    },
    {
      name: "Rastelo Azul",
      imageUrl: "https://i.ibb.co/5xwZrXz/leaves-broom-3406799-640.jpg",
      price: "$8.99",
    },
  ];

  return (
    <>
      <header>
        <AccessibilityBar />
        <Navbar />
      </header>
      <main>
        <Box sx={{
             width: '80%',
             margin: '2% auto',
             }}>

            {/* Stepper */}
            <Box sx={{ 
                marginBottom: "20px",
                maxWidth: "30%",
                marginLeft: "10%"
        
            }}>
            <Stepper activeStep={activeStep}>
                <Step>
                <StepLabel>Homepage</StepLabel>
                </Step>
                <Step>
                <StepLabel>Acessórios</StepLabel>
                </Step>
                <Step>
                <StepLabel>Rega</StepLabel>
                </Step>
            </Stepper>
            </Box>

            <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: "70vh",
                margin: "2% auto",
                maxWidth: "1200px",
            }}
            >
            {/* Left side */}
            <Box sx={{ flex: 1 }}>
                <img
                src={productDetails.imageUrl}
                alt={productDetails.name}
                style={{
                    maxWidth: "100%",
                    marginBottom: "15px",
                }}
                />
                <Box>
                <Typography variant="h3">Descrição:</Typography>
                <Typography variant="body1">{productDetails.description}</Typography>

                </Box>
            </Box>

            {/* Right side */}
            <Paper
                elevation={3}
                sx={{
                padding: "2%",
                width: "40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                backgroundColor: colors.grass[1],
                }}
            >
                <Typography variant="h3">{productDetails.name}</Typography>
                <br></br>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Typography variant="h4">Preço:&ensp;&ensp; </Typography>
                <br></br>
                <br></br>
                <Typography variant="h4"> {productDetails.price}</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
            }}>

                <Typography variant="h4">Avaliação: &ensp; </Typography>
                <Rating name="product-rating" value={productDetails.rating } readOnly />
            </Box>
            <br></br>

                <Button variant="contained" onClick={() => navigate("/cart")} sx={{ marginTop: "10px" }}>
                Adicionar ao Carrinho
                </Button>
            </Paper>
            </Box>
        </Box>


        {/* Recommended products */}
        <Typography sx={{
            width: "60%",
            margin: '0 auto'
        }} variant="h4">Recomendados:</Typography>

        <Grid container spacing={2} sx={{ justifyContent: "center",
        width: "65%",
        margin: '0 auto'
        }}>

          {recommendedProducts.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="200px"
                  image={product.imageUrl}
                />
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="subtitle1">{product.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{
            height: '200px'
        }}></Box>
      </main>
    </>
  );
};

export default ProductPage;
