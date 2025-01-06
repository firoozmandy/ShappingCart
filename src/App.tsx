import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Girl from "./pages/Girl";
import Boy from "./pages/Boy";
import Nini from "./pages/Nini";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Girl" element={<Girl />} />
        <Route path="/Boy" element={<Boy />} />
        <Route path="/Nini" element={<Nini />} />
      </Routes>
      <Footer/>
    </ShoppingCartProvider>
  );
}

export default App;
