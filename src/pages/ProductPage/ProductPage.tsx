import React, { useEffect, useMemo } from "react";
import db from "../../data/db.json";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import BasePage from "../../templates/BasePage/BasePage";
import { ArrowBack, BackHand } from "@mui/icons-material";

const ProductPage: React.FC = () => {
    const navigate = useNavigate();
    const { id: unsafe_category } = useParams();
    const produto = useMemo(() => {
        const id = Number(unsafe_category);
        return (
            db.produtos.plantas.find((produto) => produto.id === id) ||
            db.produtos.acessorios.find((produto) => produto.id === id) ||
            db.produtos.rega.find((produto) => produto.id === id) ||
            db.produtos.vasos.find((produto) => produto.id === id) || {
                id: 24,
                name: "Bico Especial de Mangueiras",
                category: "acessorio",
                image: "https://i.ibb.co/0m0rqgV/hose-5473324-640.jpg",
                subcategory: "rega",
                description:
                    "Esse bico possui 8 diferentes tipos de saída de água, que oferecem diferentes pressões e vazões de água, se adaptando perfeitamente à sua plantação",
                price: 5.99,
                hasDiscount: true,
                discountedPrice: 2.99,
                onStock: 12,
                alt_text:
                    "Um bico em formato de lanterna, a área para segurar é de cor cinza com um gatilho preto e vermelho, sua cabeça é preta e vermelha, e possui diferentes opções de saída de água.",
            }
        );
    }, [unsafe_category]);

    useEffect(() => {
        if (!produto) {
            navigate("/404");
        }
    }, [produto, navigate]);

    return (
        <BasePage>
            <Stack alignItems={"flex-start"} width={"100%"}>
                <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
                    Voltar
                </Button>
            </Stack>
            <Stack py={2}>
                <Stack width={"100%"} direction={"row"}>
                    <Typography variant="h1">{produto?.name}</Typography>
                    <Typography>
                        {produto.price.toLocaleString("pt-BR")}
                    </Typography>
                </Stack>
                <Typography>
                    {produto.category[0].toUpperCase() +
                        produto.category.slice(1)}
                </Typography>
            </Stack>
        </BasePage>
    );
};

export default ProductPage;
