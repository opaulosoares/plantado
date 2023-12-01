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
        <Stack justifyContent={"center"} alignItems={"center"} gap={4}>
            <Grid container spacing={2} justifyContent={"center"}>
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                        <ProductCard key={item?.id} produto={item as any} />
                    </Grid>
                ))}
            </Grid>
            <Stack direction="row" gap={2}>
                <Button
                    variant="outlined"
                    onClick={handleResetTest}
                    startIcon={<Redo />}
                >
                    Refazer teste
                </Button>
                <Button
                    variant="contained"
                    onClick={handleBackHome}
                    startIcon={<Home />}
                >
                    Voltar para pagina inicial
                </Button>
            </Stack>
        </Stack>
    );
}

export default RecommendedProducts;
