import { ProductionQuantityLimits, ShoppingCart } from "@mui/icons-material";
import {
    Alert,
    Badge,
    Button,
    Drawer,
    IconButton,
    Snackbar,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    CartProduct,
    Product,
    RootState,
    addToCart,
    removeFromCart,
    subtractFromCart,
} from "../../app/store";
import { tokens } from "../../theme";
import CartItem from "./CartItem/CartItem";
import "./index.css";
import { render } from "react-dom";

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

const Cart: React.FC = () => {
    const [open, setOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
    const [showSnackbar, setShowSnackbar] = useState(false);

    const cartProducts = useMemo(
        () => aggregateProducts(cartItems),
        [cartItems]
    );
    const total = useMemo(() => getTotal(cartProducts), [cartProducts]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = (product: CartProduct) => {
        dispatch(addToCart(product as Product));
    };

    const handleSubtract = (product: CartProduct) => {
        dispatch(subtractFromCart(product.id));
    };

    const handleRemove = (product: CartProduct) => {
        dispatch(removeFromCart(product.id));
    };

    const handleSnackbarClose = () => {
        setShowSnackbar(false);
    };

    return (
        <>
            <IconButton color={"inherit"} onClick={() => setOpen(!open)}>
                <Badge badgeContent={cartItems.length}>
                    <ShoppingCart />
                </Badge>
            </IconButton>
            <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
                <Stack sx={{ padding: 3, width: 320, height: "100vh" }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={1}
                        sx={{ height: "60px" }}
                    >
                        <ShoppingCart />
                        <Typography variant="h4" component="h1">
                            Carrinho
                        </Typography>
                    </Stack>
                    <Stack
                        sx={{
                            height: "calc(100vh - 160px)",
                            overflowY: "auto",
                        }}
                    >
                        {cartProducts.length === 0 ? (
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
                        ) : (
                            <Stack gap={3}>
                                {cartProducts.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onAdd={() => handleAdd(item)}
                                        onSubtract={() => handleSubtract(item)}
                                        onRemove={() => handleRemove(item)}
                                    />
                                ))}
                            </Stack>
                        )}
                    </Stack>
                    <Stack sx={{ height: "100px", justifyContent: "center" }}>
                        <Typography
                            variant="h4"
                            color="primary"
                            fontWeight={"bold"}
                        >
                            Total: R$ {total}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => {
                                if (isLoggedIn) {
                                    navigate("/checkout");
                                } else {
                                    setShowSnackbar(true);
                                    navigate("/entrar");
                                }
                            }}
                            sx={{ width: "100%", marginTop: 2 }}
                            disabled={cartProducts.length === 0}
                        >
                            Finalizar compra
                        </Button>
                    </Stack>
                </Stack>
            </Drawer>
            <Snackbar
                open={showSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={handleSnackbarClose}
                autoHideDuration={5000}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="error"
                    sx={{ width: "100%" }}
                    role="alertdialog"
                    aria-label="entrar para prosseguir compra"
                    aria-description="Necessário entrar na plataforma para prosseguir"
                >
                    Necessário entrar na plataforma para prosseguir
                </Alert>
            </Snackbar>
        </>
    );
};

export default Cart;
