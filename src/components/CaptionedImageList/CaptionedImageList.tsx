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
      {captionedImages.map((p) => (
        <div className="captioned-image-list__item">
          <CaptionedImage {...p} />
        </div>
      ))}
    </div>
  );
};
