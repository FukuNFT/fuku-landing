import React from "react";
import "./Navbar.scss";
import clsx from "clsx";
import { FukuLogoBlack } from "../../assets";

export interface NavbarProps {
  className?: string;
}

export const Navbar: React.FunctionComponent<NavbarProps> = ({ className }) => {
  const elemClassName = clsx("navbar", {
    [`${className}`]: !!className,
  });

  return (
    <nav className={elemClassName}>
      <FukuLogoBlack />
    </nav>
  );
};
