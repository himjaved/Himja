import React, { useRef } from "react";
import MapImg from "../graphics/Australian Map/Map/Map-01.svg";
import MelbourneText from "../graphics/Australian Map/City Names/Melbourne/Melbourne-01.svg";
import SydneyText from "../graphics/Australian Map/City Names/Sydney/Sydney-01.svg";
import PerthText from "../graphics/Australian Map/City Names/Perth/Perth-01.svg";
import Xarrow, { Xwrapper } from "react-xarrows";
import { FaCircle } from "react-icons/fa";

import "./Map.css";

function Map() {
  const box1Ref = useRef(null);
  return (
    <div className="Map">
      <img src={MapImg} alt="Aussie Map" className="map-img" />
      <p className="melbourne-text">
        <img
          src={MelbourneText}
          alt="Melbourne"
          className="melbourne-img"
          ref={box1Ref}
        />
      </p>
      <p className="sydney-text">
        <img src={SydneyText} alt="Sydney" className="sydney-img" />
      </p>
      <p className="perth-text">
        <img src={PerthText} alt="Perth" className="perth-img" />
      </p>
      <div className="city-marks">
        <FaCircle id="sydney" className="circle" />
        <FaCircle id="melbourne" className="circle2" />
        <FaCircle id="perth" className="circle3" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Xwrapper>
          <Xarrow
            start="melbourne"
            end="perth"
            showHead={false}
            color="blue"
            dashness={true}
            path="straight"
          />
        </Xwrapper>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Xwrapper>
          <Xarrow
            start="melbourne"
            end="sydney"
            showHead={false}
            color="blue"
            dashness={true}
            path="straight"
            passProps={{ onClick: () => console.log("clicked") }}
          />
        </Xwrapper>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Xwrapper>
          <Xarrow
            start="perth"
            end="sydney"
            showHead={false}
            color="blue"
            dashness={true}
            path="straight"
          />
        </Xwrapper>
      </div>
    </div>
  );
}
export default Map;
