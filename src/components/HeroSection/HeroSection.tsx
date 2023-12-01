import { Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

interface HeroSectionProps {
    primaryText: string;
    secondaryText: string;
    callToAction?: string;
    actionRoute?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    primaryText,
    secondaryText,
}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Stack
            sx={{
                py: { xs: 12, md: 16 },
                px: { xs: 4, md: 8 },
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                textAlign: "center",
                bgcolor: colors.grass[5],
                width: "100%",
                borderRadius: 2,
                my: 4,
            }}
        >
            <Stack
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Typography variant="h1" component="h1" tabIndex={0}>
                    {primaryText}
                </Typography>
                <Typography variant="h3" component="p" tabIndex={0}>
                    {secondaryText}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default HeroSection;
