import React, { ReactElement } from "react";
import "./PunkCard.scss";

export interface PunkCardProps {
  punkName: string;
  punkImage: ReactElement;
  punkCaption: string;
  backgroundColor: string;
}

export const PunkCard: React.FunctionComponent<PunkCardProps> = ({
  punkName,
  punkImage,
  punkCaption,
  backgroundColor,
}) => {
  return (
    <div className="punk-card">
      <div className="punk-card__image-container" style={{ backgroundColor }}>
        {punkImage}
      </div>
      <div className="punk-card__caption-container">
        <h3 className="punk-card__header">{punkName}</h3>
        <div className="punk-card__caption">{punkCaption}</div>
      </div>
    </div>
  );
};
