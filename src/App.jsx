import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Characters from "./pages/Characters";
import ComicsByCharacter from "./pages/ComicsByCharacter";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  // const [search, setSearch] = useState("spi");

  return (
    <>
      <Router>
        <Header
        // token={token}
        // setToken={setToken}
        />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/comics/:id" element={<ComicsByCharacter />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/favorites" element={<Favorites />} />

          {/* <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment token={token} />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
