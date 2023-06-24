import React from "react";
import "./Slider.scss";
import InfiniteCarousel from "react-leaf-carousel";

function Slide({ children, scroll, show }) {
  return (
    <div className="slide">
      <div className="container">
        <h1>Popular Services</h1>
        <InfiniteCarousel
          lazyLoad={true}
          slidesToScroll={scroll}
          slidesToShow={show}>
          {children}
        </InfiniteCarousel>
      </div>
    </div>
  );
}

export default Slide;
