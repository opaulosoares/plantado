import React, { useEffect, useMemo, useState } from "react";
import db from "../../data/db.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    Avatar,
    Button,
    Chip,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import BasePage from "../../templates/BasePage/BasePage";
import { AddShoppingCart, ArrowBack } from "@mui/icons-material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { RootState, addToCart } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>("");
    const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
    const userData = useSelector((state: RootState) => state.user);
    const handleCommentSubmit = () => {
        if (newComment.trim() !== "") {
            setComments((prevComments) => [...prevComments, newComment]);
            setNewComment("");
        }
    };

    return (
        <section>
            <Stack gap={2} py={4}>
                <Typography
                    variant="h3"
                    fontWeight={700}
                    component="h3"
                    aria-label="Seção de comentários"
                    tabIndex={0}
                >
                    Comentários
                </Typography>

                <Stack gap={2}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            border: "1px solid #ccc",
                            padding: 2,
                            borderRadius: 4,
                        }}
                    >
                        <Avatar
                            src={`https://placekitten.com/80/40`}
                            alt="User"
                        />
                        <Typography tabIndex={0} aria-label={`Comentário`}>
                            Muito bom
                        </Typography>
                    </Stack>

                    {comments.map((comment, index) => (
                        <Stack
                            key={index}
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{
                                border: "1px solid #ccc",
                                padding: 2,
                                borderRadius: 4,
                            }}
                        >
                            <Avatar
                                src={"https://placekitten.com/40/40"}
                                alt="User"
                            />
                            <Typography tabIndex={0} aria-label={`Comentário`}>
                                {comment}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>

                <Divider sx={{ width: "100%" }} />

                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                        src={isLoggedIn ? `https://placekitten.com/40/40` : ""}
                        alt="User"
                    />
                    <TextField
                        label="Adicione um comentário"
                        variant="outlined"
                        fullWidth
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        onClick={handleCommentSubmit}
                        disabled={!isLoggedIn}
                    >
                        Enviar
                    </Button>
                </Stack>
            </Stack>
        </section>
    );
};

const RecommendedProducts: React.FC = () => {
    const navigate = useNavigate();
    const produtosRecommended = [
        // pick random product
        db.produtos.plantas[
            Math.floor(Math.random() * db.produtos.plantas.length) % 3
        ],

        db.produtos.rega[
            Math.floor(Math.random() * db.produtos.rega.length) % 2
        ],
        db.produtos.vasos[
            Math.floor(Math.random() * db.produtos.vasos.length) % 2
        ],
        db.produtos.acessorios[
            Math.floor(Math.random() * db.produtos.acessorios.length) % 2
        ],
    ];
    return (
        <section>
            <Stack gap={2} py={4} height={"100%"}>
                <Typography
                    variant="h3"
                    fontWeight={700}
                    component="h3"
                    tabIndex={0}
                    aria-label="Recomendados"
                >
                    Você também pode gostar
                </Typography>
                <Grid container spacing={2} height={"100%"}>
                    {produtosRecommended.map((produto) => (
                        <Grid
                            key={produto.id}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={2.4}
                        >
                            <ProductCard produto={produto} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </section>
    );
};

const ProductPage: React.FC = () => {
    const navigate = useNavigate();
    const { id: unsafe_category } = useParams();
    const dispatch = useDispatch();

    const produto = useMemo(() => {
        const id = Number(unsafe_category);
        return (
            db.produtos.plantas.find((produto) => produto.id === id) ||
            db.produtos.acessorios.find((produto) => produto.id === id) ||
            db.produtos.rega.find((produto) => produto.id === id) ||
            db.produtos.vasos.find((produto) => produto.id === id) || {
                id: 24,
                name: "Bico Especial de Mangueiras",
                category: "acessorio",
                image: "https://i.ibb.co/0m0rqgV/hose-5473324-640.jpg",
                subcategory: "rega",
                description:
                    "Esse bico possui 8 diferentes tipos de saída de água, que oferecem diferentes pressões e vazões de água, se adaptando perfeitamente à sua plantação",
                price: 5.99,
                hasDiscount: true,
                discountedPrice: 2.99,
                onStock: 12,
                alt_text:
                    "Um bico em formato de lanterna, a área para segurar é de cor cinza com um gatilho preto e vermelho, sua cabeça é preta e vermelha, e possui diferentes opções de saída de água.",
            }
        );
    }, [unsafe_category]);

    useEffect(() => {
        if (!produto) {
            navigate("/404");
        }
    }, [produto, navigate]);

    return (
        <BasePage>
            <Stack alignItems={"flex-start"} width={"100%"}>
                <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
                    Voltar
                </Button>
            </Stack>
            <Stack py={2} width={"100%"} height={"100%"}>
                <Stack
                    width={"100%"}
                    height={"100%"}
                    direction={{ xs: "column", md: "row" }}
                    alignItems={{ xs: "center", md: "flex-start" }}
                    textAlign={{ xs: "center", md: "left" }}
                    gap={8}
                >
                    <Avatar
                        src={produto.image}
                        sx={{ width: 256, height: 256 }}
                        alt={produto.alt_text}
                        tabIndex={0}
                        aria-label="imagem-produto"
                        aria-description={produto.alt_text}
                    />
                    <Stack
                        gap={2}
                        justifyContent={"flex-start"}
                        height={"100%"}
                    >
                        <Stack gap={2}>
                            <Typography
                                variant="h1"
                                tabIndex={0}
                                aria-label="nome-produto"
                                aria-description="Nome do produto"
                            >
                                {produto?.name}
                            </Typography>
                            <Link to={`/categoria/${produto.category}`}>
                                <Chip
                                    label={
                                        produto.category[0].toUpperCase() +
                                        produto.category.slice(1)
                                    }
                                    aria-label={
                                        "categoria-" +
                                        produto.category[0].toUpperCase()
                                    }
                                    variant="outlined"
                                    aria-description="Categoria do produto"
                                />
                            </Link>
                        </Stack>

                        <Typography
                            aria-label="descrição"
                            aria-description="Descrição detalhada do produto"
                            tabIndex={0}
                        >
                            {produto.description}
                        </Typography>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                        >
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                gap={2}
                            >
                                <Typography
                                    gutterBottom
                                    py={3}
                                    variant="h2"
                                    component={"p"}
                                    aria-label="preço"
                                    aria-description="Preço do produto em reais"
                                    tabIndex={0}
                                >
                                    R$ {produto.price.toLocaleString("pt-BR")}
                                </Typography>
                            </Stack>
                            <Stack justifyContent={"center"}>
                                <Button
                                    startIcon={<AddShoppingCart />}
                                    variant="contained"
                                    aria-label="adicionar-carrinho"
                                    aria-description="Botão que permite usuário a adicionar produto ao carrinho"
                                    onClick={() => dispatch(addToCart(produto))}
                                >
                                    Adicionar ao carrinho
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Divider sx={{ width: "100%" }} />
            <CommentSection />
            <Divider sx={{ width: "100%" }} />
            <RecommendedProducts />
        </BasePage>
    );
};

export default ProductPage;
