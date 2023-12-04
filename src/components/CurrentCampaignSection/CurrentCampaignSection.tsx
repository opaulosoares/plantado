import React from "react";
import db from "../../data/db.json";
import ProductCard from "../ProductCard/ProductCard";
import { Grid, Stack, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { Loyalty } from "@mui/icons-material";
const CurrentCampaignSection: React.FC = () => {
    const navigate = useNavigate();
    const produtosComDesconto = [
        ...db.produtos.plantas.filter((planta) => planta.hasDiscount),
        ...db.produtos.vasos.filter((vaso) => vaso.hasDiscount),
        ...db.produtos.acessorios.filter((acessorio) => acessorio.hasDiscount),
        ...db.produtos.rega.filter((rega) => rega.hasDiscount),
    ];

    return (
        <section id="inicioConteudo" style={{ width: "100%", height: "100%" }}>
            <Stack gap={2} py={4} height={"100%"}>
                <Typography
                    variant="h3"
                    fontWeight={700}
                    component="h3"
                    tabIndex={0}
                    aria-label="Ofertas"
                >
                    <Loyalty sx={{ mr: 1 }} />
                    Ofertas válidas até o término do estoque
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    tabIndex={0}
                    aria-label="Validade da promoção"
                >
                    Aproveite ofertas exclusivas até dia 26/12
                </Typography>
                <Grid container spacing={2} height={"100%"}>
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
