import React, { useState } from "react";

import { LogoType } from "@Components/LogoType";
import { MultiDropdown, Option } from "@Components/MultiDropdown";
import { categoriesList } from "@Configs/categoriesList";
import { useNavigate, useParams } from "react-router-dom";

import styleChoose from "./styleChoose.module.scss";

const Choose: React.FC = () => {
  const { idcurr } = useParams<{ idcurr: string }>();
  const currPage = idcurr || "usd";
  const navigate = useNavigate();

  const options: Option[] = categoriesList;

  const pluralizeOptions = (elements: Option[]) =>
    elements.map((elm: Option) => elm.name).join();

  const [value, setValue] = useState<Option[]>([]);

  return (
    <div className={styleChoose.choose}>
      <LogoType
        children="Coinmart"
        onClick={() => navigate(`/${currPage}/pages/1`)}
      />
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
