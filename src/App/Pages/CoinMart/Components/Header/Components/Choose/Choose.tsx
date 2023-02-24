import React from "react";

import { LogoType } from "@Components/LogoType";
import { MultiDropdown, Option } from "@Components/MultiDropdown";

import styleChoose from "./styleChoose.module.scss";

const Choose: React.FC = () => {
  const options: Option[] = [
    { key: "msk", value: "Москва" },
    { key: "spb", value: "Санкт-Петербург" },
    { key: "ekb", value: "Екатеринбург" },
  ];

  const pluralizeOptions = (elements: Option[]) =>
    elements.map((elm: Option) => elm.key).join();

  const [value, setValue] = React.useState<Option[]>([]);

  return (
    <div className={styleChoose.choose}>
      <LogoType children="Coins" />
      <MultiDropdown
        tabIndex={1}
        value={value}
        disabled={false}
        options={options}
        onChange={setValue}
        placeHolder="Choose category"
        pluralizeOptions={pluralizeOptions}
      />
    </div>
  );
};

export default Choose;
