import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />



        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
