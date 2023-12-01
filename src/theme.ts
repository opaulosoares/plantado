/* eslint-disable no-unused-labels */

import { createContext, useState, useMemo } from "react";
import { PaletteMode, ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const spacing = {
    SECTION_PADDING_Y: "3rem",
    SECTION_TITLE_TO_CONTENT: "1rem",
    TEXT_DEFAULT_SPACING: "1rem",
    GLOBAL_HORIZONTAL_MARGIN: { xs: 4, md: 16 },
};

export const tokens = (mode: PaletteMode) => ({
    ...(mode === "dark"
        ? {
              neutral: {
                  1: "#0d1d2a",
                  2: "#1c1c1c",
                  3: "#232323",
                  4: "#282828",
                  5: "#2e2e2e",
                  6: "#343434",
                  7: "#3e3e3e",
                  8: "#505050",
                  9: "#707070",
                  10: "#7e7e7e",
                  11: "#a0a0a0",
                  12: "#ededed",
              },
              neutralTransparent: {
                  1: "rgba(13,29,42,0.25)", // Tom 1 com 50% de transparência
                  2: "rgba(28,28,28,0.25)", // Tom 2 com 50% de transparência
                  3: "rgba(35,35,35,0.25)", // Tom 3 com 50% de transparência
                  4: "rgba(40,40,40,0.25)", // Tom 4 com 50% de transparência
                  5: "rgba(46,46,46,0.25)", // Tom 5 com 50% de transparência
                  6: "rgba(52,52,52,0.25)", // Tom 6 com 50% de transparência
                  7: "rgba(62,62,62,0.25)", // Tom 7 com 50% de transparência
                  8: "rgba(80,80,80,0.25)", // Tom 8 com 50% de transparência
                  9: "rgba(112,112,112,0.25)", // Tom 9 com 50% de transparência
                  10: "rgba(126,126,126,0.25)", // Tom 10 com 50% de transparência
                  11: "rgba(160,160,160,0.25)", // Tom 11 com 50% de transparência
                  12: "rgba(237,237,237,0.25)", // Tom 12 com 50% de transparência
              },
              grass: {
                  1: "#0d1912",
                  2: "#0f1e13",
                  3: "#132819",
                  4: "#16301d",
                  5: "#193921",
                  6: "#1d4427",
                  7: "#245530",
                  8: "#2f6e3b",
                  9: "#46a758",
                  10: "#55b467",
                  11: "#63c174",
                  12: "#e5fbeb",
              },
              sky: {
                  1: "#0c1820",
                  2: "#071d2a",
                  3: "#082636",
                  4: "#082d41",
                  5: "#08354c",
                  6: "#083e59",
                  7: "#064b6b",
                  8: "#005d85",
                  9: "#68ddfd",
                  10: "#8ae8ff",
                  11: "#2ec8ee",
                  12: "#eaf8ff",
              },
              orange: {
                  1: "#1f1206",
                  2: "#2b1400",
                  3: "#391a03",
                  4: "#441f04",
                  5: "#4f2305",
                  6: "#5f2a06",
                  7: "#763205",
                  8: "#943e00",
                  9: "#f76808",
                  10: "#ff802b",
                  11: "#ff8b3e",
                  12: "#feeadd",
              },
              tomato: {
                  1: "#1d1412",
                  2: "#2a1410",
                  3: "#3b1813",
                  4: "#481a14",
                  5: "#541c15",
                  6: "#652016",
                  7: "#7f2315",
                  8: "#a42a12",
                  9: "#e54d2e",
                  10: "#ec5e41",
                  11: "#f16a50",
                  12: "#feefec",
              },
              brown: {
                  1: "#191513",
                  2: "#221813",
                  3: "#2e201a",
                  4: "#36261e",
                  5: "#3e2c22",
                  6: "#493528",
                  7: "#5c4332",
                  8: "#775940",
                  9: "#ad7f58",
                  10: "#bd8b60",
                  11: "#dba16e",
                  12: "#faf0e5",
              },
              indigo: {
                  1: "#131620",
                  2: "#15192d",
                  3: "#192140",
                  4: "#1c274f",
                  5: "#1f2c5c",
                  6: "#22346e",
                  7: "#273e89",
                  8: "#2f4eb2",
                  9: "#3e63dd",
                  10: "#5373e7",
                  11: "#849dff",
                  12: "#eef1fd",
              },
          }
        : {
              neutral: {
                  1: "#fcfcfc",
                  2: "#f8f8f8",
                  3: "#f3f3f3",
                  4: "#ededed",
                  5: "#e8e8e8",
                  6: "#e2e2e2",
                  7: "#dbdbdb",
                  8: "#c7c7c7",
                  9: "#8f8f8f",
                  10: "#858585",
                  11: "#6f6f6f",
                  12: "#0d1d2a",
              },
              neutralTransparent: {
                  1: "rgba(252,252,252,0.25)", // Tom 1 com 50% de transparência
                  2: "rgba(248,248,248,0.25)", // Tom 2 com 50% de transparência
                  3: "rgba(243,243,243,0.25)", // Tom 3 com 50% de transparência
                  4: "rgba(237,237,237,0.25)", // Tom 4 com 50% de transparência
                  5: "rgba(232,232,232,0.25)", // Tom 5 com 50% de transparência
                  6: "rgba(226,226,226,0.25)", // Tom 6 com 50% de transparência
                  7: "rgba(219,219,219,0.25)", // Tom 7 com 50% de transparência
                  8: "rgba(199,199,199,0.25)", // Tom 8 com 50% de transparência
                  9: "rgba(143,143,143,0.25)", // Tom 9 com 50% de transparência
                  10: "rgba(133,133,133,0.25)", // Tom 10 com 50% de transparência
                  11: "rgba(111,111,111,0.25)", // Tom 11 com 50% de transparência
                  12: "rgba(13,29,42,0.25)", // Tom 12 com 50% de transparência
              },
              sky: {
                  1: "#f9feff",
                  2: "#f1fcff",
                  3: "#e4f9ff",
                  4: "#d5f4fd",
                  5: "#c1ecf9",
                  6: "#a4dff1",
                  7: "#79cfea",
                  8: "#2ebde5",
                  9: "#68ddfd",
                  10: "#5fd4f4",
                  11: "#0078a1",
                  12: "#003242",
              },
              grass: {
                  1: "#fbfefb",
                  2: "#f3fcf3",
                  3: "#ebf9eb",
                  4: "#dff3df",
                  5: "#ceebcf",
                  6: "#b7dfba",
                  7: "#97cf9c",
                  8: "#65ba75",
                  9: "#46a758",
                  10: "#3d9a50",
                  11: "#297c3b",
                  12: "#1b311e",
              },
              orange: {
                  1: "#fefcfb",
                  2: "#fef8f4",
                  3: "#fff1e7",
                  4: "#ffe8d7",
                  5: "#ffdcc3",
                  6: "#ffcca7",
                  7: "#ffb381",
                  8: "#fa934e",
                  9: "#f76808",
                  10: "#ed5f00",
                  11: "#bd4b00",
                  12: "#451e11",
              },
              tomato: {
                  1: "#fffcfc",
                  2: "#fff8f7",
                  3: "#fff0ee",
                  4: "#ffe6e2",
                  5: "#fdd8d3",
                  6: "#fac7be",
                  7: "#f3b0a2",
                  8: "#ea9280",
                  9: "#e54d2e",
                  10: "#db4324",
                  11: "#ca3214",
                  12: "#341711",
              },
              brown: {
                  1: "#fefdfc",
                  2: "#fcf9f6",
                  3: "#f8f1ea",
                  4: "#f4e9dd",
                  5: "#efddcc",
                  6: "#e8cdb5",
                  7: "#ddb896",
                  8: "#d09e72",
                  9: "#ad7f58",
                  10: "#a07653",
                  11: "#886349",
                  12: "#3f2c22",
              },
              indigo: {
                  1: "#fdfdfe",
                  2: "#f8faff",
                  3: "#f0f4ff",
                  4: "#e6edfe",
                  5: "#d9e2fc",
                  6: "#c6d4f9",
                  7: "#aec0f5",
                  8: "#8da4ef",
                  9: "#3e63dd",
                  10: "#3a5ccc",
                  11: "#3451b2",
                  12: "#101d46",
              },
          }),
});

export const themeSettings = (mode: PaletteMode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode as PaletteMode,
            ...(mode === "dark"
                ? ({
                      primary: {
                          main: colors.grass[12],
                          contrastText: colors.neutral[1],
                      },
                      secondary: {
                          main: colors.neutral[12],
                          contrastText: colors.neutral[1],
                      },
                      warning: {
                          main: colors.tomato[9],
                      },
                      background: {
                          default: colors.neutral[4],
                      },
                  } as ThemeOptions["palette"])
                : ({
                      primary: {
                          main: colors.grass[12],
                          contrastText: colors.neutral[1],
                      },
                      secondary: {
                          main: colors.neutral[12],
                          contrastText: colors.neutral[1],
                      },
                      warning: {
                          main: colors.tomato[9],
                      },
                      background: {
                          default: colors.neutral[2],
                      },
                  } as ThemeOptions["palette"])),
        } as ThemeOptions["palette"],
        typography: {
            allVariants: {
                color: colors.neutral[12],
                fontFamily: "Inter",
            },
            h1: {
                fontSize: "3rem",
                fontWeight: 700,
                lineHeight: 1.2,
            },
            h2: {
                fontSize: "2.25rem",
                fontWeight: 600,
                lineHeight: 1.2,
                color: colors.neutral[12],
            },
            h3: {
                fontSize: "1.5rem",
                fontWeight: 500,
                lineHeight: 1.2,
            },
            h4: {
                fontSize: "1.25rem",
                fontWeight: 700,
                lineHeight: 1.2,
            },
            h5: {
                fontSize: "1rem",
                fontWeight: 700,
                lineHeight: 1.2,
            },
            h6: {
                fontSize: "0.875rem",
                fontWeight: 700,
                lineHeight: 1.2,
            },
            subtitle1: {
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
            },
            subtitle2: {
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: 1.5,
            },
            body1: {
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
            },
            body2: {
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: 1.5,
            },
            button: {
                fontSize: "0.875rem",
                fontWeight: 700,
                lineHeight: 1.5,
            },
            caption: {
                fontSize: "0.75rem",
                fontWeight: 400,
                lineHeight: 1.5,
            },
            overline: {
                fontSize: "0.75rem",
                fontWeight: 400,
                lineHeight: 1.5,
            },
        } as ThemeOptions["typography"],
    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const systemPrefersDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

export const checkLocalStorageTheme = () => {
    const localStoragePreference =
        typeof window !== "undefined" && localStorage.getItem("color-mode");
    if (
        localStoragePreference === "dark" ||
        localStoragePreference === "light"
    ) {
        return localStoragePreference === "dark" ? true : false;
    } else {
        return systemPrefersDarkMode ? true : false;
    }
};

export const useMode = () => {
    /* Function to check localStorage preferences or system preference */
    const getInitialColorModePreference = () => {
        const localStoragePreference =
            typeof window !== "undefined" && localStorage.getItem("color-mode");
        if (
            localStoragePreference === "dark" ||
            localStoragePreference === "light"
        ) {
            return localStoragePreference;
        } else {
            return systemPrefersDarkMode ? "dark" : "light";
        }
    };

    /* Theme management */
    const [mode, setMode] = useState<PaletteMode>(
        getInitialColorModePreference()
    );

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev: string) => {
                    const newMode = prev === "light" ? "dark" : "light";
                    typeof window !== "undefined" &&
                        localStorage.setItem("color-mode", newMode);
                    return newMode;
                }),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode] as const;
};
