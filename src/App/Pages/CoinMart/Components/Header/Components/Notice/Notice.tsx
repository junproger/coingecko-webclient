import React from "react";

import styleNotice from "./styleNotice.module.scss";

interface INoticeWithError {
  coinmarterror: string;
}

const Notice: React.FC<INoticeWithError> = ({ coinmarterror }) => {
  return <div className={styleNotice.notice}>{coinmarterror}</div>;
};

export default Notice;
