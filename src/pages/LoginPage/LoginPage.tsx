import {
    InputLabel,
    Stack,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
import PlantadoLogo from "../../components/PlantadoLogo/PlantadoLogo";
import { spacing, tokens } from "../../theme";
import { NavLink } from "react-router-dom";

const LoginPage: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Stack
            py={8}
            px={spacing.GLOBAL_HORIZONTAL_MARGIN}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            gap={8}
        >
            <NavLink to={"/"} role="button">
                <PlantadoLogo
                    colorText={colors.neutral[12]}
                    style={{ width: 256 }}
                />
            </NavLink>
            <Stack
                id="desktop-login"
                sx={{ display: { xs: "none", md: "flex" } }}
                width={"100%"}
            >
                <Stack
                    width={"100%"}
                    sx={{
                        borderRadius: 2,
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
                    }}
                    direction={"row"}
                >
                    <Stack p={2} width={"50%"}>
                        <Stack
                            bgcolor={colors.grass[12]}
                            width={"100%"}
                            height={"100%"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            sx={{ borderRadius: "8px 0px 0px 8px" }}
                        >
                            <Typography
                                variant={"h1"}
                                color={colors.neutral[1]}
                            >
                                Arte aleatoria
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack p={4}>
                        <InputLabel>Teste</InputLabel>
                        <TextField />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default LoginPage;
