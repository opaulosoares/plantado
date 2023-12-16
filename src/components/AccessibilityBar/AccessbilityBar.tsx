import {
    Button,
    IconButton,
    Paper,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ColorModeContext, spacing, tokens } from "../../theme";
import { Contrast, TextDecrease, TextIncrease } from "@mui/icons-material";

const AccessibilityBar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [contrastMode, setContrastMode] = useState(false);

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

    const handleContrast = () => {
        setContrastMode(!contrastMode);
        document.body.classList.toggle("contrast-mode");
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
                    fontSize: "0.7em",
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
                    href="#rodape"
                    role="navigation"
                    aria-label="Ir para o rodapé"
                    tabIndex={4}
                >
                    Ir para o rodapé [3]
                </a>
            </Stack>
            <Stack direction={"row"} gap={2}>
                <IconButton size="small" onClick={handleZoomOut}>
                    <TextDecrease />
                </IconButton>
                <IconButton size="small" onClick={handleZoomIn}>
                    <TextIncrease />
                </IconButton>

                <Button
                    size="small"
                    onClick={handleContrast}
                    startIcon={<Contrast />}
                    variant={contrastMode ? "contained" : "text"}
                >
                    Contraste
                </Button>
            </Stack>
        </Paper>
    );
};

export default AccessibilityBar;
