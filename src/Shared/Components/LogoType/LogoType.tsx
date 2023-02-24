import React from "react";

import styleLogoType from "./styleLogoType.module.scss";

export const LogoType: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <h1 className={styleLogoType.logotype}>{children}</h1>;
};
