/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Grid, Stack } from "@mui/material";
import db from "../../data/db.json";
import { useMemo } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Home, Redo } from "@mui/icons-material";

interface Props {
  productIds: [number, number, number];
  handleResetTest: VoidFunction;
  handleBackHome: VoidFunction;
}

function RecommendedProducts(props: Props) {
  const { productIds, handleResetTest, handleBackHome } = props;
  const products = useMemo(() => {
    return productIds.map((productId) =>
      db.produtos.plantas.find((item) => item.id === productId)
    );
  }, [productIds]);

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      sx={{ height: "calc(100vh - 250px)", overflow: 'auto' }}
    >
      <Grid container spacing={2} justifyContent={"center"}>
        {products.map((item) => (
          <Grid key={item!.id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <ProductCard produto={item as any} />
          </Grid>
        ))}
      </Grid>
      <Stack
        direction="row"
        sx={{
          margin: "auto auto 16px auto",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleResetTest}
          size="large"
          startIcon={<Redo />}
        >
          Refazer teste
        </Button>
        <Button
          variant="contained"
          onClick={handleBackHome}
          size="large"
          startIcon={<Home />}
        >
          Voltar para pagina inicial
        </Button>
      </Stack>
    </Stack>
  );
}

export default RecommendedProducts;
