import { Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import { spacing, tokens } from "../../theme";

const AccessibilityBar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Paper
            sx={{
                width: "100svw",
                bgcolor: colors.grass[5],
                px: spacing.GLOBAL_HORIZONTAL_MARGIN,
                py: 1,
            }}
        >
            <Typography variant="body2">Ir para conteúdo</Typography>
        </Paper>
    );
};

export default AccessibilityBar;
