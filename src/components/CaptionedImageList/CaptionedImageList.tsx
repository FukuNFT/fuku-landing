import clsx from "clsx";
import React from "react";
import "./CaptionedImageList.scss";
import { CaptionedImage, CaptionedImageProps } from "../CaptionedImage";

export interface CaptionedImageListProps {
  className?: string;
  captionedImages: CaptionedImageProps[];
}

export const CaptionedImageList: React.FunctionComponent<
  CaptionedImageListProps
> = ({ className, captionedImages }) => {
  const elemClassName = clsx("captioned-image-list", {
    [`${className}`]: !!className,
  });
  return (
    <div className={elemClassName}>
      {captionedImages.map((p, i) => (
        <div className="captioned-image-list__item">
          <div className="captioned-image-list__index-container">
            <div className="captioned-image-list__top-line" />
            <div className="captioned-image-list__index">{i + 1}</div>
            <div className="captioned-image-list__bottom-line" />
          </div>
          <CaptionedImage {...p} className="captioned-image-list__img" />
        </div>
      ))}
    </div>
  );
};
