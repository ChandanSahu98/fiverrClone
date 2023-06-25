import React from "react";
import Featured from "../../components/featured/Featured";
import Trustedby from "../../components/trustedby/Trustedby";
import Slide from "../../components/slider/Slider";
import { cards } from "../../data";
import Card from "../../components/Card/Card";
import { TickMark } from "../../icons";
import "./Home.scss";
import { categories } from "../../data";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Trustedby />
      <Slide scroll={4} show={4}>
        {cards.map((dataObj) => {
          return <Card key={dataObj.id} item={dataObj} />;
        })}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h2>The best part? Everything.</h2>
            <div className="title">
              <TickMark />
              <span>Stick to your budget</span>
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <TickMark />
              <span>Get quality work done quickly</span>
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className="title">
              <TickMark />
              <span>Pay when you're happy</span>
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <TickMark />
              <span>Count on 24/7 support</span>
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>

          <div className="item">
            <video
              src="./videos/video.mp4"
              controls
              poster="./images/poster.png"></video>
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="container">
          {categories.map((catObj) => (
            <div key={catObj.id} className="catObj">
              <img src={catObj.img} alt="catObj" />
              <hr />
              <span>{catObj.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fvrbusiness">
        <div className="container">
          <div className="item">
            <div className="fbusiness">
              fiverr business. <span className="newbtn">New</span>
            </div>
            <h1>
              A solution built for <i>business</i>
            </h1>
            <p>
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>
            <div className="list">
              <TickMark />
              <span>Talent matching</span>
            </div>
            <div className="list">
              <TickMark />
              <span>Dedicated account management</span>
            </div>
            <div className="list">
              <TickMark />
              <span>Team collaboration tools</span>
            </div>
            <div className="list">
              <TickMark />
              <span>Business payment solutions</span>
            </div>
            <div>
              <button>Explore fiverr Business</button>
            </div>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624769/business-desktop-585-x1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
