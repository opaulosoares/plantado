import {
    Box,
    IconButton,
    Paper,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { spacing, tokens } from "../../theme";
import { Contrast, TextDecrease, TextIncrease } from "@mui/icons-material";

const AccessibilityBar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [zoomLevel, setZoomLevel] = useState(1);

    const handleZoomIn = () => {
        const root = document.documentElement;
        // get current size and add specified amount
        const currentSize = parseFloat(window.getComputedStyle(root).fontSize);
        const newSize = currentSize + 1;
        // set new size
        root.style.setProperty("--font-size", newSize + "px");
    };

    const handleZoomOut = () => {
        const root = document.documentElement;
        const currentSize = parseFloat(window.getComputedStyle(root).fontSize);
        const newSize = currentSize - 1;
        // set new size
        root.style.setProperty("--font-size", newSize + "px");
    };

    return (
        <Paper
            sx={{
                width: "100svw",
                bgcolor: colors.grass[5],
                px: spacing.GLOBAL_HORIZONTAL_MARGIN,
                py: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Stack direction={"row"} gap={2}>
                <a href="#inicioConteudo">
                    <Typography variant="body2">
                        Ir para conteúdo [1]
                    </Typography>
                </a>

                <a href="#menuPrincipal">
                    <Typography variant="body2">Ir para o menu [2]</Typography>
                </a>

                <a href="#busca">
                    <Typography variant="body2">Ir para a busca [3]</Typography>
                </a>

                <a href="#rodape">
                    <Typography variant="body2">
                        Ir para o rodapé [4]
                    </Typography>
                </a>
            </Stack>
            <Stack direction={"row"} gap={2}>
                <IconButton size="small" onClick={handleZoomOut}>
                    <TextDecrease />
                </IconButton>
                <IconButton size="small" onClick={handleZoomIn}>
                    <TextIncrease />
                </IconButton>

                <IconButton size="small">
                    <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                        <Contrast />
                        <Typography variant="body2">Contraste</Typography>
                    </Stack>
                </IconButton>
            </Stack>
        </Paper>
    );
};

export default AccessibilityBar;
