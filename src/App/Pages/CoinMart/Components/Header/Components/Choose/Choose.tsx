import React, { useState } from "react";

import { LogoType } from "@Components/LogoType";
import { MultiDropdown, Option } from "@Components/MultiDropdown";
import { Link } from "react-router-dom";

import styleChoose from "./styleChoose.module.scss";

const Choose: React.FC = () => {
  const options: Option[] = [
    { key: "msk", value: "Moscow" },
    { key: "nnv", value: "Nizhny Novgorod" },
    { key: "rnd", value: "Rostov-na-Donu" },
    { key: "spb", value: "Saint-Petersburg" },
    { key: "vvk", value: "Vladivostok" },
    { key: "ekb", value: "Yekaterinburg" },
  ];

  const pluralizeOptions = (elements: Option[]) =>
    elements.map((elm: Option) => elm.value).join();

  const [value, setValue] = useState<Option[]>([]);

  return (
    <div className={styleChoose.choose}>
      <Link to={"/"}>
        <LogoType children="Coinmart" />
      </Link>
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
