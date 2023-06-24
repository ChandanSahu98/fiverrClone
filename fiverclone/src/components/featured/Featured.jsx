import React from "react";
import "./Featured.scss";
import { SearchInputIcon } from "../../icons";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the right <span>freelance service</span>, right away
          </h1>

          <div className="search">
            <div className="searchinput">
              <input type="text" placeholder="Search for any service" />
            </div>
            <button>
              <SearchInputIcon />
            </button>
          </div>

          <div className="popular">
            Popular:
            <button>Website Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>

        <div className="right">
          <div className="image">
            <img src="./images/man.png" alt="artist" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
