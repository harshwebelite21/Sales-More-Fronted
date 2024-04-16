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

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutSection />} />
        <Route path="products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
