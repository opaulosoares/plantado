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
        <section style={{ width: "100%" }}>
            <Stack
                py={8}
                gap={4}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                width={"100%"}
            >
                <Typography
                    variant="h3"
                    fontWeight={700}
                    component={"h3"}
                    tabIndex={0}
                >
                    Descontos imperdíveis
                </Typography>
                <Grid container gap={2} justifyContent={"flex-start"}>
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
