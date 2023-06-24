import React from "react";
import Featured from "../../components/featured/Featured";
import Trustedby from "../../components/trustedby/Trustedby";
import Slide from "../../components/slider/Slider";
import { cards } from "../../data";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div>
      <Featured />
      <Trustedby />
      <Slide scroll={4} show={4}>
        {cards.map((dataObj) => {
          return <Card key={dataObj.id} item={dataObj} />;
        })}
      </Slide>
    </div>
  );
};

export default Home;
