import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-bar">
        <div className="turtle">🐢</div>
      </div>
      <div className="loading-text">
        Loading... It's not that big of a site, I promise!
      </div>
    </div>
  );
};

export default Loading;
