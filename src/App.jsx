import { Route, Routes } from "react-router-dom";
import "./App.css";
import { styles } from "./utils/Styles";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import License from "./Components/License";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import CardDetails from "./Components/CardDetails";
import SearchResults from "./Components/SearchResults";
import BlogDetails from "./Components/BlogDetails";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/license" element={<License />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloads/:id" element={<CardDetails />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
