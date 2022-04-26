import React, { ReactElement } from "react";

import "./Partners.scss";

interface Partner {
  logo: ReactElement;
  link: string;
}

interface PartnerProps {
  partners: Partner[];
}

export const Partners: React.FunctionComponent<PartnerProps> = ({
  partners,
}) => {
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
