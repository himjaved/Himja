import React, { useRef } from "react";
import MapImg from "../graphics/Australian Map/Map/Map-01.svg";

import { FaCircle } from "react-icons/fa";

import "./Map.css";

function Map() {
  const box1Ref = useRef(null);
  return (
    <div className="Map">
      <img src={MapImg} alt="Aussie Map" className="map-img" />

      <div className="city-marks">
        <FaCircle id="sydney" className="circle" />
      </div>
    </div>
  );
}
export default Map;
