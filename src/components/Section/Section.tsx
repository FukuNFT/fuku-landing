import React, { ReactElement } from "react";
import "./Section.scss";
import clsx from "clsx";

export interface SectionProps {
  header: string;
  content: string | ReactElement;
  isCentered?: boolean;
  className?: string;
}

export const Section: React.FunctionComponent<SectionProps> = ({
  header,
  content,
  className,
  isCentered,
}) => {
  const elemClassName = clsx("section", {
    [`${className}`]: !!className,
    "section--centered": isCentered,
  });
  return (
    <div className={elemClassName}>
      <h2 className="section-header">{header}</h2>
      <div className="section-content">{content}</div>
    </div>
  );
};
