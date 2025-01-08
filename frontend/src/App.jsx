import React from "react";
import "./App.css";
import Home from "./components/Main/Home";
import Footer from "./components/Main/Footer";

function App() {
  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center gap-7 overflow-auto">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
