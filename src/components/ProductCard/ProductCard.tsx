import { AddShoppingCart, Discount } from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    Chip,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Product, addToCart } from "../../app/store";
import { tokens } from "../../theme";

const ProductCard = ({ produto }: { produto: Product }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                width: "100%",
                height: "100%",
            }}
        >
            <Box
                sx={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    width: "100%",
                    height: "100%",
                    p: 2,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Stack
                    sx={{
                        minWidth: "100%",
                        maxWidth: "100%",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                    onClick={() => navigate(`/produto/${produto.id}`)}
                >
                    <Stack sx={{ position: "relative" }}>
                        <img
                            src={produto.image}
                            alt={produto.alt_text}
                            style={{
                                width: "100%",
                                height: 256,
                                objectFit: "cover",
                                borderRadius: 4,
                            }}
                            tabIndex={0}
                        />
                        {produto.hasDiscount ? (
                            <Chip
                                sx={{
                                    position: "absolute",
                                    bottom: 16,
                                    right: 16,
                                    p: 1,
                                    bgcolor: colors.grass[7],
                                }}
                                icon={
                                    <Discount
                                        sx={{
                                            fontSize: 14,
                                            fill: colors.neutral[12],
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="overline"
                                        fontWeight={800}
                                        tabIndex={0}
                                        color={colors.neutral[12]}
                                    >
                                        {Math.ceil(
                                            (produto.discountedPrice /
                                                produto.price) *
                                                100
                                        ).toFixed(0)}
                                        % de desconto
                                    </Typography>
                                }
                            />
                        ) : null}
                    </Stack>

                    <Stack gap={1} py={2}>
                        <Typography variant="h4" component="h4" tabIndex={0}>
                            {produto.name}
                        </Typography>
                        <Stack direction={"row"} gap={1}>
                            <Chip
                                label={
                                    <Typography
                                        variant="overline"
                                        fontWeight={600}
                                        tabIndex={0}
                                        aria-label="Categoria"
                                    >
                                        {produto.category
                                            .charAt(0)
                                            .toUpperCase() +
                                            produto.category.slice(1)}
                                    </Typography>
                                }
                            />
                            <Chip
                                label={
                                    <Typography
                                        variant="overline"
                                        fontWeight={600}
                                        tabIndex={0}
                                        aria-label="Subcategoria"
                                    >
                                        {produto.subcategory
                                            .charAt(0)
                                            .toUpperCase() +
                                            produto.subcategory.slice(1)}
                                    </Typography>
                                }
                            />
                        </Stack>
                        <Stack
                            direction={"row"}
                            alignItems={"flex-end"}
                            justifyContent={"space-between"}
                        >
                            <Stack
                                direction={"column"}
                                alignItems={"flex-start"}
                                height={"100%"}
                                pt={1}
                            >
                                {produto.hasDiscount ? (
                                    <>
                                        <Typography
                                            variant="h6"
                                            component="p"
                                            sx={{
                                                textDecoration: "line-through",
                                            }}
                                            color={colors.neutral[10]}
                                            tabIndex={0}
                                            aria-label={"Preço original"}
                                        >
                                            {`R$ ${produto.price.toLocaleString(
                                                "pt-BR"
                                            )}`}
                                        </Typography>
                                        <Typography
                                            variant="h3"
                                            component="p"
                                            fontWeight={800}
                                            tabIndex={0}
                                            aria-label={`Preço com desconto`}
                                        >
                                            {`R$ ${produto.discountedPrice.toLocaleString(
                                                "pt-BR"
                                            )}`}
                                        </Typography>
                                    </>
                                ) : (
                                    <Typography
                                        variant="h3"
                                        component="p"
                                        tabIndex={0}
                                        aria-label={`Preço do produto`}
                                    >
                                        {`R$ ${produto.price.toLocaleString(
                                            "pt-BR"
                                        )}`}
                                    </Typography>
                                )}
                            </Stack>
                            <Stack alignItems={"flex-end"}>
                                <Typography
                                    color={colors.neutral[11]}
                                    tabIndex={0}
                                    aria-label="Disponibilidade"
                                >
                                    Em estoque
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack py={1} direction={"row"}>
                    <Button
                        role="button"
                        variant="contained"
                        fullWidth
                        onClick={() => dispatch(addToCart(produto as Product))}
                        tabIndex={0}
                        startIcon={<AddShoppingCart />}
                    >
                        Adicionar ao carrinho
                    </Button>
                </Stack>
            </Box>
        </Card>
    );
};

export default ProductCard;
