import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";

const mycontext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedcountry, setSelectedcountry] = useState("");
  const [isHeaderFootShow, setIsHeaderFootShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getcountry("https://countriesnow.space/api/v0.1/countries");
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
        console.log(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const getcountry = async (url) => {
    const res = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
    });
  };

  const values = {
    products,
    setProducts,
    countryList,
    setSelectedcountry,
    selectedcountry,
    setIsHeaderFootShow,
    isHeaderFootShow,
    isLogin,
    setIsLogin,
  };
  return (
    <>
      <BrowserRouter>
        <mycontext.Provider value={values}>
          {isHeaderFootShow === true && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat/:id" element={<Listing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          {isHeaderFootShow === true && <Footer />}
        </mycontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { mycontext };
