import "./App.css";
import { Home } from "./modules/Home";
import Header from "./components/Header";
import { AboutSection } from "./modules/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Products } from "./modules/Products";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutSection />} />
        <Route path="products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
