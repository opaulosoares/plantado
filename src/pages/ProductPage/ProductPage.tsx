import React, { useEffect, useMemo } from "react";
import db from "../../data/db.json";
import { useNavigate, useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import BasePage from "../../templates/BasePage/BasePage";

const ProductPage: React.FC = () => {
    const navigate = useNavigate();
    const { id: unsafe_category } = useParams();
    const produto = useMemo(() => {
        const id = Number(unsafe_category);
        return (
            db.produtos.plantas.find((produto) => produto.id === id) ||
            db.produtos.acessorios.find((produto) => produto.id === id) ||
            db.produtos.rega.find((produto) => produto.id === id) ||
            db.produtos.vasos.find((produto) => produto.id === id) ||
            null
        );
    }, [unsafe_category]);

    useEffect(() => {
        if (!produto) {
            navigate("/404");
        }
    }, [produto, navigate]);

    return <BasePage>{JSON.stringify(produto)}</BasePage>;
};

export default ProductPage;
