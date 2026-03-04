import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Tarifs from "./pages/Tarifs.jsx";
import Contact from "./pages/Contact";
import FAQPage from "./pages/FAQPage";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-transparent">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
