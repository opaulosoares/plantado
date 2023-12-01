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
            <Stack gap={2} py={4}>
                <Typography
                    variant="h3"
                    fontWeight={700}
                    component="h3"
                    tabIndex={0}
                    aria-label="Ofertas"
                >
                    Natal na Plantado
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    tabIndex={0}
                    aria-label="Validade da promoção"
                >
                    Aproveite ofertas exclusivas até dia 26/12
                </Typography>
                <Grid container spacing={2}>
                    {produtosComDesconto.map((produto) => (
                        <Grid
                            key={produto.id}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={2.4}
                        >
                            <ProductCard produto={produto} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </section>
    );
};

export default CurrentCampaignSection;
