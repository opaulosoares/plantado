/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchIcon from "@mui/icons-material/Search";
import { Alert, AlertTitle, Grid, Typography } from "@mui/material";
import BasePage from "../../templates/BasePage/BasePage";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import db from "../../data/db.json";
import ProductCard from "../../components/ProductCard/ProductCard";

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function ProductCategoriesPage() {
  const { category: unsafe_category } = useParams();
  const category: string = useMemo(
    () =>
      ["plantas", "rega", "vasos", "acessorios"].includes(unsafe_category ?? "")
        ? (unsafe_category as string)
        : "plantas",
    [unsafe_category]
  );
  const products = useMemo(() => {
    return (db.produtos as any)[category] ?? db.produtos.plantas;
  }, [category]);

  const navigate = useNavigate();

  const handleGoToRecommendation = () => {
    navigate("/recomendacoes");
  };

  return (
    <BasePage>
      <Typography
        align="center"
        variant="h3"
        sx={{
          marginTop: 5,
        }}
      >
        {category === "acessorios" ? "Acessórios" : capitalize(category)}
      </Typography>
      <Alert
        icon={false}
        onClick={handleGoToRecommendation}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 3,
          cursor: "pointer",
        }}
      >
        <AlertTitle color="primary" sx={{ display: "flex", gap: 1 }}>
          <SearchIcon />
          Descubra qual planta é perfeita pra você!
        </AlertTitle>
        Um sistema de recomendação para te auxiliar a escolher a planta certa.
      </Alert>
      <Grid container spacing={2} marginTop={3}>
        {products.map((item: any) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <ProductCard produto={item} />
          </Grid>
        ))}
      </Grid>
    </BasePage>
  );
}

export default ProductCategoriesPage;
