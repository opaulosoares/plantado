import React, { useMemo, useState } from "react";
import BasePage from "../../templates/BasePage/BasePage";
import {
    Button,
    Checkbox,
    Divider,
    FormLabel,
    InputLabel,
    Select,
    Stack,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
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
import { tokens } from "../../theme";
import { Navigate, useNavigate } from "react-router-dom";
import { Balance, NavigateNext } from "@mui/icons-material";

// import { Container } from './styles';

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

const CheckoutPage: React.FC = () => {
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
    const [useRegisteredAdd, setUseRegisteredAdd] = useState(false);
    const [useRegisteredCard, setUseRegisteredCard] = useState(false);

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
            <section id="inicioConteudo">
                <Stack
                    id="stack-root-checkout"
                    direction={{ xs: "column", md: "row" }}
                    justifyContent={{ xs: "flex-start", md: "space-between" }}
                    gap={4}
                >
                    <Stack width={"100%"}>
                        <Stack>
                            <Typography variant="h2" tabIndex={0}>
                                Confirmar dados de entrega
                            </Typography>
                            <Divider sx={{ mt: 2 }} />
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                mt={2}
                            >
                                <Checkbox
                                    aria-label="usar-endereço"
                                    aria-description="Usar endereço registrado"
                                    checked={useRegisteredAdd}
                                    onChange={(e) =>
                                        setUseRegisteredAdd(e.target.checked)
                                    }
                                />
                                Usar endereço registrado
                            </Stack>
                            <Stack component="form" my={4}>
                                <InputLabel htmlFor="zipCode" tabIndex={0}>
                                    CEP
                                </InputLabel>
                                <TextField
                                    id="zipCode"
                                    name="zipCode"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    disabled={useRegisteredAdd}
                                    autoFocus
                                    margin="normal"
                                    placeholder="Ex: 12.345-678"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <InputLabel htmlFor="city" tabIndex={0}>
                                    Cidade
                                </InputLabel>
                                <TextField
                                    id="city"
                                    name="city"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    disabled={useRegisteredAdd}
                                    required
                                    autoFocus
                                    margin="normal"
                                    placeholder="Ex: São Paulo"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <InputLabel htmlFor="state" tabIndex={0}>
                                    Estado
                                </InputLabel>
                                <TextField
                                    id="state"
                                    name="state"
                                    type="text"
                                    variant="outlined"
                                    disabled={useRegisteredAdd}
                                    fullWidth
                                    required
                                    autoFocus
                                    margin="normal"
                                    placeholder="Ex: SP"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <InputLabel htmlFor="street" tabIndex={0}>
                                    Rua
                                </InputLabel>
                                <TextField
                                    id="street"
                                    name="street"
                                    type="text"
                                    variant="outlined"
                                    disabled={useRegisteredAdd}
                                    fullWidth
                                    required
                                    autoFocus
                                    margin="normal"
                                    placeholder="Ex: Rua ABC"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <InputLabel htmlFor="number" tabIndex={0}>
                                    Número
                                </InputLabel>
                                <TextField
                                    id="number"
                                    name="number"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    disabled={useRegisteredAdd}
                                    required
                                    autoFocus
                                    margin="normal"
                                    placeholder="Ex: 123"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack width={"100%"}>
                        <Typography variant="h2" tabIndex={0}>
                            Confirmar dados de pagamento
                        </Typography>
                        <Divider sx={{ mt: 2 }} />
                        <Stack direction={"row"} alignItems={"center"} mt={2}>
                            <Checkbox
                                aria-label="usar-endereço"
                                aria-description="Usar endereço registrado"
                                checked={useRegisteredCard}
                                onChange={(e) =>
                                    setUseRegisteredCard(e.target.checked)
                                }
                            />
                            Usar cartão registrado
                        </Stack>
                        <Stack component="form" my={4}>
                            <InputLabel htmlFor="cardNumber" tabIndex={0}>
                                Número do Cartão
                            </InputLabel>
                            <TextField
                                id="cardNumber"
                                name="cardNumber"
                                type="text"
                                variant="outlined"
                                fullWidth
                                required
                                disabled={useRegisteredCard}
                                autoFocus
                                margin="normal"
                                placeholder="Ex: 1234 5678 9012 3456"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <InputLabel htmlFor="cardName" tabIndex={0}>
                                Nome do Titular
                            </InputLabel>
                            <TextField
                                id="cardName"
                                name="cardName"
                                type="text"
                                variant="outlined"
                                fullWidth
                                required
                                disabled={useRegisteredCard}
                                autoFocus
                                margin="normal"
                                placeholder="Ex: João da Silva"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <InputLabel htmlFor="cardExpiration" tabIndex={0}>
                                Data de Expiração
                            </InputLabel>
                            <TextField
                                id="cardExpiration"
                                name="cardExpiration"
                                type="text"
                                variant="outlined"
                                fullWidth
                                disabled={useRegisteredCard}
                                required
                                autoFocus
                                margin="normal"
                                placeholder="Ex: 12/24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <InputLabel htmlFor="cardCVC" tabIndex={0}>
                                Código de Segurança (CVC)
                            </InputLabel>
                            <TextField
                                id="cardCVC"
                                name="cardCVC"
                                type="text"
                                variant="outlined"
                                fullWidth
                                required
                                disabled={useRegisteredCard}
                                autoFocus
                                margin="normal"
                                placeholder="Ex: 123"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
                    <Button variant="outlined" onClick={() => navigate(-1)}>
                        Voltar para loja
                    </Button>
                    <Button
                        variant="contained"
                        disabled={cartProducts.length === 0}
                        onClick={() => {
                            navigate("/resumo");
                        }}
                    >
                        Ir para resumo do pedido
                    </Button>
                </Stack>
            </section>
        </BasePage>
    );
};

export default CheckoutPage;
