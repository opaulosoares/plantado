import { ProductionQuantityLimits, ShoppingCart } from "@mui/icons-material";
import { Drawer, IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { tokens } from "../../theme";

const Cart: React.FC = () => {
    const [open, setOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.user.cart);
    console.log(cartItems);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <IconButton color={"inherit"} onClick={() => setOpen(!open)}>
                <ShoppingCart />
            </IconButton>
            <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
                <Stack sx={{ padding: 4, width: 320 }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={1}
                    >
                        <ShoppingCart />
                        <Typography variant="h4" component="h1">
                            Carrinho
                        </Typography>
                    </Stack>
                    <Stack>
                        {Object.keys(cartItems).length === 0 ? (
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
                            "Algo"
                        )}
                    </Stack>
                </Stack>
            </Drawer>
        </>
    );
};

export default Cart;
