import { ProductionQuantityLimits, ShoppingCart } from "@mui/icons-material";
import {
    Badge,
    Button,
    Drawer,
    IconButton,
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
                            onClick={() => navigate("/checkout")}
                            sx={{ width: "100%", marginTop: 2 }}
                        >
                            Finalizar compra
                        </Button>
                    </Stack>
                </Stack>
            </Drawer>
        </>
    );
};

export default Cart;
