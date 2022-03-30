import React, { ReactElement } from "react";
import "./SocialMedia.scss";
import clsx from "clsx";

export interface SocialMediaProps {
  image: ReactElement;
  link: string;
  className?: string;
}

export const SocialMedia: React.FunctionComponent<SocialMediaProps> = ({
  image,
  link,
  className,
}) => {
  const elemClassName = clsx("social-media", {
    [`${className}`]: !!className,
  });
  return (
    <a href={link} className={elemClassName} target="_blank" rel="noreferrer">
      {image}
    </a>
  );
};
