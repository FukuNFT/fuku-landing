import React, { ReactElement } from "react";
import { AlphaLogo } from "../../assets";
import NFTTech from "../../assets/nft-tech-logo.gif";
import "./Partners.scss";

interface Partner {
  logo: ReactElement;
  link: string;
}

export const Partners = () => {
  const partners: Partner[] = [
    {
      logo: <AlphaLogo />,
      link: "https://alphafinance.io/",
    },
    {
      logo: <img src={NFTTech} alt="nft-tech" />,
      link: "https://www.nfttech.com/",
    },
  ];
  return (
    <div className="partners">
      {partners.map((p) => (
        <a href={p.link} className="partner" target="_blank" rel="noreferrer">
          {p.logo}
        </a>
      ))}
    </div>
  );
};
