import React, { ReactElement } from "react";
import "./PunkCard.scss";
import clsx from "clsx";

interface PunkCardProps {
  title: string;
  punkImage: ReactElement;
  className?: string;
}

export const PunkCard: React.FunctionComponent<PunkCardProps> = ({
  title,
  punkImage,
  className,
}) => {
  const elemClassName = clsx("punk-card", {
    [`${className}`]: !!className,
  });
  return (
    <div className={elemClassName}>
      {punkImage}
      <div className="punk-card__title">{title}</div>
    </div>
  );
};
