import React from "react";

const Title = () => {
  return (
    <div className="flex flex-wrap items-center justify-start p-4 sm:p-6 pt-0 sm:pt-0 pb-0 sm:pb-0">
      <div className="relative">
        <img src="/pfp.png" className="h-24 w-24 rounded-full" />
        <span className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></span>
      </div>

      <h1 className="p-10 text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-400 to-violet-400 text-transparent bg-clip-text">
        {/* from-pink-500 via-purple-500 to-indigo-500 */}
        Hi! I'm Thy
      </h1>
    </div>
  );
};

export default Title;
