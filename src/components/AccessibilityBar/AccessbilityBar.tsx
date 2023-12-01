import { IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { spacing, tokens } from "../../theme";
import { Contrast, TextDecrease, TextIncrease } from "@mui/icons-material";

const AccessibilityBar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
                bgcolor: colors.grass[3],
                px: spacing.GLOBAL_HORIZONTAL_MARGIN,
                py: 0.5,
                display: "flex",
                justifyContent: { xs: "flex-end", md: "space-between" },
                alignItems: "center",
            }}
        >
            <Stack
                direction={"row"}
                gap={2}
                sx={{
                    fontSize: "0.8em",
                    fontWeight: 600,
                    display: { xs: "none", md: "flex" },
                }}
            >
                <a
                    href="#inicioConteudo"
                    role="navigation"
                    aria-label="Ir para conteúdo"
                    tabIndex={1}
                >
                    Ir para conteúdo [1]
                </a>

                <a
                    href="#menuPrincipal"
                    role="navigation"
                    aria-label="Ir para o menu principal"
                    tabIndex={2}
                >
                    Ir para o menu [2]
                </a>

                <a
                    href="#busca"
                    role="navigation"
                    aria-label="Ir para a busca"
                    tabIndex={3}
                >
                    Ir para a busca [3]
                </a>

                <a
                    href="#rodape"
                    role="navigation"
                    aria-label="Ir para o rodapé"
                    tabIndex={4}
                >
                    Ir para o rodapé [4]
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
