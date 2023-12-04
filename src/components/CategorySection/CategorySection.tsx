import React from "react";
import { CategoryMap, categoryMap } from "../../app/types";
import {
    Card,
    CardHeader,
    CardMedia,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import { Category } from "@mui/icons-material";

interface CategoryCardProps {
    category: CategoryMap;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
            }}
        >
            <CardMedia image={category.img} sx={{ height: 128 }} />
            <CardHeader title={category.label} />
        </Card>
    );
};

const CategorySection: React.FC = () => {
    return (
        <section style={{ width: "100%" }}>
            <Stack width={"100%"} gap={2} py={4}>
                <Typography variant={"h3"} fontWeight={700} gutterBottom>
                    <Category sx={{ mr: 1 }} />
                    Buscar por categoria
                </Typography>
                <Grid container spacing={2}>
                    {categoryMap.map((category: CategoryMap) => (
                        <Grid key={category.label} item xs={16} sm={6} md={3}>
                            <CategoryCard category={category} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </section>
    );
};

export default CategorySection;
