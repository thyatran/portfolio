import React from "react";
import Title from "../components/Main/Title";
import Contacts from "../components/Main/Contacts";
import About from "../components/Main/About";
import Projects from "../components/Main/Projects";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 h-auto">
      <div className="w-full max-w-4xl p-6 rounded-3xl shadow-md bg-gray-50 bg-opacity-30">
        <Title />
        <Contacts />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
