import { useTheme } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import { spacing, tokens } from "../../theme";
import Navbar from "../../components/Navbar/Navbar";
import AccessibilityBar from "../../components/AccessibilityBar/AccessbilityBar";

interface BasePageProps {
    children: React.ReactNode;
}

const BasePage: React.FC<BasePageProps> = ({ children }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <header>
                <AccessibilityBar />
                <Navbar />
            </header>
            <main>
                <Stack
                    sx={{
                        px: spacing.GLOBAL_HORIZONTAL_MARGIN,
                        width: "100svh",
                    }}
                >
                    {children}
                </Stack>
            </main>
        </>
    );
};

export default BasePage;
