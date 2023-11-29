import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
    primaryText: string;
    secondaryText: string;
    callToAction: string;
    actionRoute: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    primaryText,
    secondaryText,
    callToAction,
    actionRoute,
}) => {
    return (
        <Stack
            sx={{
                py: { xs: 12, md: 16 },
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                textAlign: "center",
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
            <Link to={actionRoute}>
                <Button variant="contained" color="primary">
                    {callToAction}
                </Button>
            </Link>
        </Stack>
    );
};

export default HeroSection;
