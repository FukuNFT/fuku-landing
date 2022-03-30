import React, { ReactElement } from "react";
import "./CaptionedImage.scss";

export interface CaptionedImageProps {
  image: ReactElement;
  imageCaptionHeader: string;
  imageCaptionDescription: string;
}

export const CaptionedImage: React.FunctionComponent<CaptionedImageProps> = ({
  image,
  imageCaptionHeader,
  imageCaptionDescription,
}) => {
  return (
    <div className="captioned-image">
      <div className="captioned-image__img-container">{image}</div>
      <div className="captioned-image__text">
        <h3 className="captioned-image__header">{imageCaptionHeader}</h3>
        <div className="captioned-image__description">
          {imageCaptionDescription}
        </div>
      </div>
    </div>
  );
};
