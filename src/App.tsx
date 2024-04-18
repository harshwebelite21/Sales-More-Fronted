import "./App.css";
import { Home } from "./modules/Home";
import Header from "./components/Header";
import { AboutSection } from "./modules/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Products } from "./modules/Products";
import { SingleProduct } from "./modules/SingleProduct";
import { ShoppingCart } from "./modules/ShoppingCart";
import Contact from "./modules/Contact";
import CheckOut from "./modules/Checkout";
import PaymentSuccess from "./modules/PaymentSuccess.tsx/PaymentSuccess";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutSection />} />
        <Route path="products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route
          path="/cart"
          element={<ShoppingCart activeState={0 as number} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart/checkout"
          element={<CheckOut activeState={1 as number} />}
        />
        <Route
          path="/payment-success"
          element={<PaymentSuccess activeState={2 as number} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
