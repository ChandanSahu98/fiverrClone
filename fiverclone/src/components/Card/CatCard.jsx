import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function CatCard({ item }) {
  return (
    <Link to="gigs/?cat=design">
      <div className="card">
        <img src={item.img} />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}

export default CatCard;
