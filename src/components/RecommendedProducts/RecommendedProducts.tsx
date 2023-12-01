/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Grid, Stack } from "@mui/material";
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
            <Grid container spacing={2}>
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                        <ProductCard key={item?.id} produto={item as any} />
                    </Grid>
                ))}
            </Grid>
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-evenly",
                    width: "100%",
                    marginTop: 5,
                }}
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
