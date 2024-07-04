import { Route, Routes } from "react-router-dom";
import "./App.css";
import { styles } from "./utils/Styles.js";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import License from "./Components/License.jsx";
import Blog from "./Components/Blog.jsx";
import Contact from "./Components/Contact.jsx";
import CardDetails from "./Components/CardDetails.jsx";
import SearchResults from "./Components/SearchResults.jsx";
import BlogDetails from "./Components/BlogDetails.jsx";
import Cart from "./Components/Cart.jsx";

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
