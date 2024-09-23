import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductInfoPage from "./pages/ProductInfoPage";
import CartInfoPage from "./pages/CartInfoPage";
import CheckoutPage from "./pages/CheckoutPage";
import {ProductsProvide} from "./contexts/ProductContext";

function App() {
  return (
    <ProductsProvide>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productInfo/:productId" element={<ProductInfoPage />} />
          <Route path="/cartInfo" element={<CartInfoPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </ProductsProvide>
  );
}

export default App;
