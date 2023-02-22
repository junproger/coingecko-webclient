import React, { useState } from "react";

import { Button } from "@Components/Button";
import { Card } from "@Components/Card";
import { CheckBox } from "@Components/CheckBox";
import { Input } from "@Components/Input";
import { Loader } from "@Components/Loader";
import { MultiDropdown, Option } from "@Components/MultiDropdown";
import { WithLoader } from "@Components/WithLoader";

import styleApp from "./styleApp.module.scss";

const App: React.FC = () => {
  const options: Option[] = [
    { key: "msk", value: "Москва" },
    { key: "spb", value: "Санкт-Петербург" },
    { key: "ekb", value: "Екатеринбург" },
  ];

  const pluralizeOptions = (elements: Option[]) =>
    elements.map((elm: Option) => elm.value).join();

  const [value, setValue] = React.useState<Option[]>([]);

  const [getCheck, setCheck] = useState<boolean>(true);

  return (
    <div className={styleApp.app}>
      <Loader loading={true} />
      <WithLoader loading={true}>Page content</WithLoader>
      <CheckBox checked={getCheck} onChange={setCheck} />
      <Input
        disabled
        value="What is Bitcoin?"
        // eslint-disable-next-line no-console
        onChange={(value: string) => console.log(value)}
      />
      <Button loading={true} disabled>
        Cancel
      </Button>
      <Card
        alt="Bitcoin"
        image="https://www.file-extensions.org/imgs/app-icon/128/10409/bitcoin-core-icon.png"
        title="Bitcoin"
        subtitle="BTC"
      />
      <MultiDropdown
        value={value}
        disabled={false}
        options={options}
        onChange={setValue}
        placeHolder="Choose an options"
        pluralizeOptions={pluralizeOptions}
      />
    </div>
  );
};

export default App;
