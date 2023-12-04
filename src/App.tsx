import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import VLibras from "@djpfs/react-vlibras";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendationsPage from "./pages/RecommendationsPage/RecommendationsPage";
import OrderConfirmationPage from "./pages/SuccessPage/OrderConfirmationPage";
import ProductCategoriesPage from "./pages/ProductsCategoriesPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Error404Page from "./pages/Error404Page/Error404Page";
import ScrollToTop from "./app/scrollToTop";
import BeforeConfirmation from "./pages/BeforeConfirmation/BeforeConfirmation";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <VLibras forceOnload={true} />
                <Router>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/entrar" element={<LoginPage />} />
                        <Route
                            path="/recomendacoes"
                            element={<RecommendationsPage />}
                        />
                        <Route
                            path="/categoria/:category"
                            element={<ProductCategoriesPage />}
                        />
                        <Route
                            path="/sucesso"
                            element={<OrderConfirmationPage />}
                        />
                        <Route path="/produto/:id" element={<ProductPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route
                            path="/resumo"
                            element={<BeforeConfirmation />}
                        />
                        <Route path="*" element={<Error404Page />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
