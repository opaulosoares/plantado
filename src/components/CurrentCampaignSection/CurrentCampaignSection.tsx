import React from "react";
import db from "../../data/db.json";
import ProductCard from "../ProductCard/ProductCard";
import { Grid, Stack, Typography } from "@mui/material";

const CurrentCampaignSection: React.FC = () => {
    const produtosComDesconto = [
        ...db.produtos.plantas.filter((planta) => planta.hasDiscount),
        ...db.produtos.vaso.filter((vaso) => vaso.hasDiscount),
        ...db.produtos.acessorio.filter((acessorio) => acessorio.hasDiscount),
        ...db.produtos.rega.filter((rega) => rega.hasDiscount),
    ];

    return (
        <section>
            <Stack py={8} gap={4}>
                <Typography variant="h2">Descontos imperdíveis</Typography>
                <Grid container gap={2}>
                    {produtosComDesconto.map((produto) => (
                        <Grid item key={produto.id}>
                            {<ProductCard produto={produto} />}
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </section>
    );
};

export default CurrentCampaignSection;
