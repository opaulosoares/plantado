/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
    Stack,
    CardMedia,
    CardContent,
    Typography,
    Button,
    IconButton,
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
        <Card key={item.id}>
            <Stack direction="row">
                <CardMedia
                    component="img"
                    sx={{ width: 80, height: 140 }}
                    image={item.image}
                    alt={item.alt_text}
                />
                <CardContent sx={{ flex: 1, position: "relative" }}>
                    <Typography variant="h6">{item.name}</Typography>

                    <Stack
                        direction="row"
                        sx={{ marginTop: 1, justifyContent: "space-between" }}
                    >
                        <Typography
                            variant="subtitle2"
                            color="primary"
                            fontWeight={"bold"}
                        >
                            R$ {item.price.toLocaleString("pt-BR")}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            x{item.qty}
                        </Typography>
                    </Stack>
            <Stack className="card-item-btn-container" gap={1} direction="row">
                        <IconButton
                            onClick={onRemove}
                            aria-label="Excluir produto"
                        >
                            <DeleteOutlineIcon />
                        </IconButton>
                        <IconButton
                            onClick={onSubtract}
                            aria-label="Subtrair quantidade de produto"
                        >
                            <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={onAdd}
                            aria-label="Aumentar quantidade de produto"
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
