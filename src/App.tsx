import "./App.css";
import { Home } from "./modules/Home";
import Header from "./components/Header";
import { AboutSection } from "./modules/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Products } from "./modules/Products";
import { SingleProduct } from "./modules/SingleProduct";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutSection />} />
        <Route path="products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
