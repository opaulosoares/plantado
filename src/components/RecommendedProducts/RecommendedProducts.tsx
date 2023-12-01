/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Stack } from "@mui/material";
import db from "../../data/db.json";
import { useMemo } from "react";
import ProductCard from "../ProductCard/ProductCard";

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
    <Stack>
      <Stack direction="row" sx={{ justifyContent: "center", gap: 3 }}>
        {products.map((item) => (
          <ProductCard key={item?.id} produto={item as any} />
        ))}
      </Stack>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-evenly", width: "100%", marginTop: 5 }}
      >
        <Button variant="contained" onClick={handleResetTest}>
          Refazer teste
        </Button>
        <Button variant="contained" onClick={handleBackHome}>
          Voltar para pagina inicial
        </Button>
      </Stack>
    </Stack>
  );
}

export default RecommendedProducts;
