import React from "react";
import "./Slider.scss";
import InfiniteCarousel from "react-leaf-carousel";

function Slide({ children, scroll, show, serviceName }) {
  return (
    <div className="slide">
      <div className="container">
        <h1>{serviceName}</h1>
        <InfiniteCarousel
          lazyLoad={true}
          slidesToScroll={scroll}
          autoCycle={true}
          cycleInterval={3000}
          slidesToShow={show}>
          {children}
        </InfiniteCarousel>
      </div>
    </div>
  );
}

export default Slide;
