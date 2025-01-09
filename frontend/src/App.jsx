import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./components/Main/Footer";
import Loading from "./pages/Loading";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center gap-7 overflow-auto">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
