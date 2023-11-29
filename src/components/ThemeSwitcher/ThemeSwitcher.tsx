import { LightMode, Nightlight } from "@mui/icons-material";
import { MenuItem, Stack, Switch, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { ColorModeContext, checkLocalStorageTheme, tokens } from "../../theme";

// import { Container } from './styles';

const ThemeSwitcher: React.FC = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    /* Theme management */
    const [darkModeChecked, setDarkModeChecked] = useState(
        checkLocalStorageTheme()
    );
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <MenuItem>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    display={{ xs: "none", md: "flex" }}
                >
                    {darkModeChecked ? (
                        <Nightlight sx={{ fill: colors.neutral[12] }} />
                    ) : (
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            style={{ display: "flex" }}
                        >
                            <LightMode sx={{ fill: colors.neutral[12] }} />
                        </motion.div>
                    )}

                    <Switch
                        checked={darkModeChecked}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setDarkModeChecked(event.target.checked);
                        }}
                        onClick={colorMode.toggleColorMode}
                        inputProps={{
                            "aria-label": "Alternar entre os modos de cores",
                            "aria-description":
                                "Botão para alternar entre os modos de cores claro e escuro",
                            "aria-details":
                                "Ícone de uma lua e um sol, representando os modos de cores escuro e claro, respectivamente.",
                        }}
                    />
                </Stack>
            </MenuItem>
        </motion.div>
    );
};

export default ThemeSwitcher;
