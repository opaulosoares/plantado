import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import VLibras from "@djpfs/react-vlibras";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <VLibras forceOnload={true} />
                <Router>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/entrar" element={<LoginPage />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
