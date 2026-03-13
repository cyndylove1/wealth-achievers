import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import ServicePage from "./page/servicesPage";
import Consultation from "./page/consultation";
import BlogPage from "./page/blog";
import "./App.css";
import Contact from "./page/contact";
import WhyUs from "./page/whyUs";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
