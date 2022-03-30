import React from "react";
import { PurpleBackground } from "../../assets";
import { PunkCard } from "../PunkCard";
import "./Punks.scss";
import PunkOne from "../../assets/punkOne.png";

export const Punks: React.FunctionComponent = () => {
  return (
    <div className="punks">
      <div className="punks-background">
        <PurpleBackground />
      </div>
      <div className="punks-images-container">
        <div className="punks-images">
          <PunkCard
            backgroundColor="#E3C8FF"
            punkImage={<img src={PunkOne} />}
            punkName="Crypto Punks"
            punkCaption="Punk One"
          />
        </div>
      </div>
    </div>
  );
};
