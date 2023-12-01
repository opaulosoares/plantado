/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchIcon from "@mui/icons-material/Search";
import { Alert, AlertTitle, Grid, Typography } from "@mui/material";
import BasePage from "../../templates/BasePage/BasePage";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import db from "../../data/db.json";
import ProductCard from "../../components/ProductCard/ProductCard";

function capitalize(s: string) {
    return s[0].toUpperCase() + s.slice(1);
}

function ProductCategoriesPage() {
    const { category: unsafe_category } = useParams();
    const category: string = useMemo(
        () =>
            ["plantas", "rega", "vasos", "acessorios"].includes(
                unsafe_category ?? ""
            )
                ? (unsafe_category as string)
                : "plantas",
        [unsafe_category]
    );
    const products = useMemo(() => {
        return (db.produtos as any)[category] ?? db.produtos.plantas;
    }, [category]);

    const navigate = useNavigate();

    const handleGoToRecommendation = () => {
        navigate("/recomendacoes");
    };

    return (
        <BasePage>
            <div>
                <Typography
                    align="center"
                    variant="h3"
                    sx={{
                        marginTop: 8,
                    }}
                    tabIndex={0}
                >
                    {category === "acessorios"
                        ? "Acessórios"
                        : capitalize(category)}
                </Typography>
            </div>

            <Alert
                icon={false}
                onClick={handleGoToRecommendation}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 3,
                    cursor: "pointer",
                    py: 2,
                }}
                tabIndex={0}
            >
                <AlertTitle color="primary" sx={{ display: "flex", gap: 1 }}>
                    <SearchIcon />
                    <Typography
                        variant="h4"
                        fontWeight={600}
                        component={"h1"}
                        tabIndex={0}
                    >
                        Descubra qual planta é perfeita pra você!
                    </Typography>
                </AlertTitle>
                <Typography tabIndex={0} variant="caption" component="h2">
                    Um sistema de recomendação para te auxiliar a escolher a
                    planta certa.
                </Typography>
            </Alert>
            <Grid container spacing={2} marginTop={3}>
                {products.map((item: any) => (
                    <Grid
                        key={item.id}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2.4}
                    >
                        <ProductCard produto={item} />
                    </Grid>
                ))}
            </Grid>
        </BasePage>
    );
}

export default ProductCategoriesPage;
