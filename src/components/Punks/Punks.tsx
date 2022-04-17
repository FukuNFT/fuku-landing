import React from "react";
import { PunkCard } from "../PunkCard";
import "./Punks.scss";
import Ape from "../../assets/ape.png";
import Azuki from "../../assets/azuki.png";
import Punk from "../../assets/punk.png";
import clsx from "clsx";

interface PunksProps {
  className?: string;
}

export const Punks: React.FunctionComponent<PunksProps> = ({ className }) => {
  const elemClassName = clsx("punks", {
    [`${className}`]: !!className,
  });
  return (
    <div className={elemClassName}>
      <div className="punks__col-1">
        <PunkCard
          title="Azuki #9998"
          punkImage={<img src={Azuki} />}
          className="punks__card"
        />
      </div>
      <div className="punks__col-2">
        <PunkCard
          title="BAYC #4874"
          punkImage={<img src={Ape} />}
          className="punks__card ape"
        />
        <PunkCard
          title="CryptoPunk #8374"
          punkImage={<img src={Punk} />}
          className="punks__card punk"
        />
      </div>
    </div>
  );
};
