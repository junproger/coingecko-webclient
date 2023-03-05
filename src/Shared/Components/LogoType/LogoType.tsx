import React from "react";

import styleLogoType from "./styleLogoType.module.scss";

export interface ILogoType {
  children: React.ReactNode;
  onClick?: () => void;
}

export const LogoType: React.FC<ILogoType> = ({ children, onClick }) => {
  return (
    <h1 onClick={onClick} className={styleLogoType.logotype}>
      {children}
    </h1>
  );
};
