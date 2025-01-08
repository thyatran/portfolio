import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 space-y-8">
      {/* SECTION TITLE */}
      <div class="flex items-center space-x-2 w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-600">\ About</h1>
        <span className="border-t border-gray-300 flex-1"></span>
      </div>
      <p className="leading-loose text-lg text-gray-500">
        Hey! I'm <span className="font-bold">Thy</span>, a{" "}
        <span className="font-bold">
          third-year Data Science major at San José State University
        </span>{" "}
        . I'm passionate about building projects and focusing on the development
        side of things. I enjoy creating web applications and working on tech
        solutions that make an impact.
      </p>
    </div>
  );
};

export default About;
