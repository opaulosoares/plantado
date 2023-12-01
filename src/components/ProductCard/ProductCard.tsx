import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

// import { Container } from './styles';

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: number;
    discountedPrice: number;
    hasDiscount: boolean;
    image: string;
    alt_text: string;
    subcategory: string;
}

const ProductCard = ({ produto }: { produto: ProductCardProps }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Card sx={{ width: 320, p: 2, bgcolor: colors.grass[1] }}>
            <img
                src={produto.image}
                alt={produto.alt_text}
                style={{ width: "100%", height: 320, objectFit: "cover" }}
                tabIndex={0}
            />
            <Stack gap={1}>
                <Typography variant="h4" component="h4" tabIndex={0}>
                    {produto.name}
                </Typography>
                <Stack direction={"row"} gap={1}>
                    {produto.hasDiscount ? (
                        <div>
                            <Chip
                                color="warning"
                                label={
                                    <p>
                                        {Math.ceil(
                                            (produto.discountedPrice /
                                                produto.price) *
                                                100
                                        ).toFixed(0)}
                                        % de desconto
                                    </p>
                                }
                            />
                        </div>
                    ) : null}
                    <div>
                        <Chip
                            label={
                                produto.subcategory.charAt(0).toUpperCase() +
                                produto.subcategory.slice(1)
                            }
                        />
                    </div>
                </Stack>
                <Stack>
                    <Typography variant="h3" component="p">
                        {`R$ ${produto.price}`}
                    </Typography>
                    <Button></Button>
                </Stack>
            </Stack>
        </Card>
    );
};

export default ProductCard;
