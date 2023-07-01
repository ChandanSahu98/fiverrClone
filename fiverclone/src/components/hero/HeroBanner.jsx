import React from "react";
import "./HeroBanner.scss";

function HeroBanner() {
  return (
    <div className="hero">
      <div className="container">
        <div className="heroimg">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png"
            alt=""
          />
        </div>
        <h1>
          Suddenly it's all <i>doable</i>.
        </h1>
        <button>Join fiverr</button>
      </div>
    </div>
  );
}

export default HeroBanner;
