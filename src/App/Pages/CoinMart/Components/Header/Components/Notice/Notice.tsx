import React from "react";

import styleNotice from "./styleNotice.module.scss";

export interface INoticeWithError {
  coinmarterror: string;
}

export const Notice: React.FC<INoticeWithError> = ({ coinmarterror }) => {
  return <div className={styleNotice.notice}>{coinmarterror}</div>;
};
