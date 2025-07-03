import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
      <div style={{ backgroundColor: dark ? "#222" : "#fff", color: dark ? "#fff" : "#000", minHeight: "100vh" }}>
        <Header dark={dark} toggleTheme={toggleTheme} />
        <Hero />
        <Features />
        <Footer />
      </div>
  );
}

export default App;
