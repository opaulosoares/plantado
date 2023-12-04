import React, { useMemo } from "react";
import BasePage from "../../templates/BasePage/BasePage";
import { Button, Divider, Stack, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
    CartProduct,
    Product,
    RootState,
    addToCart,
    clearCart,
    removeFromCart,
    subtractFromCart,
} from "../../app/store";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import {
    ArrowBack,
    CheckOutlined,
    ProductionQuantityLimits,
} from "@mui/icons-material";
import CartItem from "../../components/Cart/CartItem/CartItem";

const aggregateProducts = (products: Product[]): CartProduct[] => {
    return Object.values(
        products.reduce<Record<number, CartProduct>>((acc, item) => {
            if (item.id in acc) {
                acc[item.id].qty++;
                return acc;
            }

            return {
                ...acc,
                [item.id]: {
                    ...item,
                    qty: 1,
                },
            };
        }, [])
    );
};

const getTotal = (cartProducts: CartProduct[]): string => {
    return cartProducts
        .reduce((acc, product) => {
            return acc + product.qty * product.price;
        }, 0)
        .toFixed(2);
};

const BeforeConfirmation: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart);
    const cartProducts = useMemo(
        () => aggregateProducts(cartItems),
        [cartItems]
    );

    const total = useMemo(() => getTotal(cartProducts), [cartProducts]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleAdd = (product: CartProduct) => {
        dispatch(addToCart(product as Product));
    };

    const handleSubtract = (product: CartProduct) => {
        dispatch(subtractFromCart(product.id));
    };

    const handleRemove = (product: CartProduct) => {
        dispatch(removeFromCart(product.id));
    };
    return (
        <BasePage>
            <Stack width={"100%"}>
                <Typography variant="h2" tabIndex={0}>
                    Resumo
                </Typography>
                <Divider sx={{ mt: 2 }} />

                {cartProducts.length === 0 && (
                    <Stack
                        py={4}
                        alignItems={"center"}
                        gap={1}
                        sx={{ color: colors.neutral[9] }}
                    >
                        <ProductionQuantityLimits
                            sx={{
                                fontSize: 64,
                            }}
                        />
                        <Typography
                            variant="body1"
                            component="p"
                            color={"inherit"}
                        >
                            Seu carrinho está vazio
                        </Typography>
                    </Stack>
                )}
                <Stack my={4} gap={2}>
                    {cartProducts.map((item) => (
                        <CartItem
                            item={item}
                            key={item.name}
                            onAdd={() => handleAdd(item)}
                            onRemove={() => handleRemove(item)}
                            onSubtract={() => handleSubtract(item)}
                        />
                    ))}
                </Stack>
                <Stack
                    direction="row"
                    gap={1}
                    justifyContent={"flex-end"}
                    my={2}
                >
                    <Typography
                        variant="button"
                        tabIndex={0}
                        aria-label="total-preço"
                        aria-description="Preço total dos itens no carrinho"
                    >
                        Total: R$ {total}
                    </Typography>
                </Stack>
            </Stack>
            <Stack>
                <Typography variant="h2" tabIndex={0} gutterBottom>
                    Endereço de entrega
                </Typography>
                <Typography variant="body1" tabIndex={0}>
                    Rua das Margaridas, 123, São Paulo - SP, CEP: 12345-678
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
                    <Button variant="outlined" onClick={() => navigate(-1)}>
                        Voltar
                    </Button>
                    <Button
                        variant="contained"
                        disabled={cartProducts.length === 0}
                        onClick={() => {
                            navigate("/sucesso"), dispatch(clearCart());
                        }}
                    >
                        Finalizar pedido
                    </Button>
                </Stack>
            </Stack>
        </BasePage>
    );
};

export default BeforeConfirmation;
