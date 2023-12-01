import {
    Button,
    Card,
    CardActionArea,
    Chip,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { useDispatch } from "react-redux";
import { AddShoppingCart, Discount } from "@mui/icons-material";
import { addToCart, Product } from "../../app/store";

const ProductCard = ({ produto }: { produto: Product }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();

    return (
        <Card
            sx={{
                width: 320,
                p: 2,
                bgcolor: colors.grass[1],
                cursor: "pointer",
            }}
        >
            <CardActionArea
                role="button"
                aria-description="Entrar na página do produto"
                onClick={() => {}}
            >
                <Stack sx={{ position: "relative" }}>
                    <img
                        src={produto.image}
                        alt={produto.alt_text}
                        style={{
                            width: "100%",
                            height: 320,
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

                <Stack gap={1} py={1}>
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
                                >
                                    {produto.category.charAt(0).toUpperCase() +
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
                        direction={"column"}
                        alignItems={"flex-start"}
                        width={"100%"}
                        pt={1}
                    >
                        {produto.hasDiscount ? (
                            <>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    sx={{ textDecoration: "line-through" }}
                                    tabIndex={0}
                                    aria-description="preço original"
                                    aria-label={`Preço original de ${produto.name}: ${produto.discountedPrice} reais`}
                                >
                                    {`R$ ${produto.price}`}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    component="p"
                                    fontWeight={800}
                                    tabIndex={0}
                                    aria-description="preço com desconto"
                                    aria-label={`Preço com desconto de ${produto.name}: ${produto.discountedPrice} reais`}
                                >
                                    {`R$ ${produto.discountedPrice}`}
                                </Typography>
                            </>
                        ) : (
                            <Typography
                                variant="h3"
                                component="p"
                                tabIndex={0}
                                aria-description="preço produto"
                                aria-label={`Preço de ${produto.name}: ${produto.discountedPrice} reais`}
                            >
                                {`R$ ${produto.price}`}
                            </Typography>
                        )}
                    </Stack>
                </Stack>
            </CardActionArea>
            <Stack py={1}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => dispatch(addToCart(produto as Product))}
                    tabIndex={0}
                    startIcon={<AddShoppingCart />}
                    size="large"
                >
                    Adicionar ao carrinho
                </Button>
            </Stack>
        </Card>
    );
};

export default ProductCard;
