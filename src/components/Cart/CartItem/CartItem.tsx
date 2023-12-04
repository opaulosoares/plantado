/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
    Stack,
    CardMedia,
    CardContent,
    Typography,
    Button,
    IconButton,
    CardActionArea,
} from "@mui/material";
import { CartProduct } from "../../../app/store";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./index.css";

interface Props {
    item: CartProduct;
    onAdd: VoidFunction;
    onRemove: VoidFunction;
    onSubtract: VoidFunction;
}

function CartItem(props: Props) {
    const { item, onAdd, onRemove, onSubtract } = props;

    return (
        <Card key={item.id} sx={{ px: 1 }}>
            <Stack direction="row">
                <CardMedia
                    component="img"
                    sx={{ width: 80, height: 140 }}
                    image={item.image}
                    alt={item.alt_text}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography
                        variant="h4"
                        tabIndex={0}
                        aria-label="nome-item"
                        aria-description="Nome do item no carrinho"
                    >
                        {item.name}
                    </Typography>

                    <Stack
                        direction="row"
                        sx={{ marginTop: 1, justifyContent: "space-between" }}
                    >
                        <Typography
                            variant="subtitle2"
                            color="primary"
                            fontWeight={"bold"}
                            tabIndex={0}
                            aria-label="preço-item"
                            aria-description="Preço do item citado"
                        >
                            R$ {item.price.toLocaleString("pt-BR")}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            tabIndex={0}
                            aria-label="quantidade-item"
                            aria-description="Quantidade do item citado"
                        >
                            x{item.qty}
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent={"flex-end"}
                        gap={2}
                        pt={2}
                    >
                        <IconButton
                            onClick={onRemove}
                            aria-label="excluir-produto"
                            aria-description="Excluir produto"
                        >
                            <DeleteOutlineIcon />
                        </IconButton>
                        <IconButton
                            onClick={onSubtract}
                            aria-label="subtrair-quantidade"
                            aria-description="Subtrair quantidade de produto"
                        >
                            <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={onAdd}
                            aria-label="adicionar-quantidade"
                            aria-description="Aumentar quantidade de produto"
                        >
                            <AddIcon />
                        </IconButton>
                    </Stack>
                </CardContent>
            </Stack>
        </Card>
    );
}

export default CartItem;
