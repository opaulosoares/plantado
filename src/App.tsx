import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import VLibras from "@djpfs/react-vlibras";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendationsPage from "./pages/RecommendationsPage/RecommendationsPage";
import RegisterPage from "./components/Register/Register";
import OrderConfirmationPage from "./pages/SuccessPage/OrderConfirmationPage";
import Error404Page from "./pages/Error404Page/Error404Page";
import CheckoutPage from "./pages/Checkout/Checkout"
import CartPage from "./pages/CartPage/CartPage";

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
            <Route path="/recomendacoes" element={<RecommendationsPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/success" element={<OrderConfirmationPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
