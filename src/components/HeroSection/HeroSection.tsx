import { Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

interface HeroSectionProps {
    primaryText: string;
    secondaryText: string;
    callToActionList: Array<{
        text: string;
        path: string;
        variant: "primary" | "secondary";
    }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    primaryText,
    secondaryText,
    callToActionList,
}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Stack
            sx={{
                py: { xs: 3, md: 6 },
                px: { xs: 4, md: 8 },
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                textAlign: "center",
                bgcolor: colors.grass[5],
                width: "100%",
                borderRadius: 2,
                mb: 4,
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
            <Stack direction={{ xs: "column", md: "row" }} sx={{ gap: 1 }}>
                {callToActionList.map((item) => (
                    <Link key={item.text} to={item.path}>
                        <Button variant="contained" color={item.variant}>
                            {item.text}
                        </Button>
                    </Link>
                ))}
            </Stack>
        </Stack>
    );
};

export default HeroSection;
