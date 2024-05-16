import React from "react";
import './css/musicnote1.css';
import img from "../images/1.png";

export default function YourImageComponent() {
  return (
    <div className="jumping-image">
      <img src={img} className="img"/>
    </div>
  );
}