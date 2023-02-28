import React, { useState } from "react";

import { Button } from "@Components/Button";
import { Input } from "@Components/Input";

import styleSearch from "./styleSearch.module.scss";
import { ICoinMartQuery } from "../../Interface/ICoinMartQuery";

const Search: React.FC<ICoinMartQuery> = ({ coinmartquery }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (value: string): void => {
    setValue(value.trim().toLowerCase());
  };

  const handlerEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!value.trim()) return setValue("");
    if (e.key === "Enter") {
      return makerQuerySearch(value);
    }
    return value;
  };

  const makerQuerySearch = (value: string) => {
    if (!value) return;
    const api = "coins";
    const hook = "market";
    const datas = "market";
    const control = {
      type: "input",
      path: "@Components/Input",
    };
    const handler = null;
    const query = value;
    const currency = query;
    const paging = "&per_page=10&page=1";
    const params = {
      required: "vs_currency",
      vs_currency: "usd",
      per_page: 10,
      page: 1,
    };
    const urlreq =
      "https://api.coingecko.com/api/v3/coins/markets?per_page=10&page=1&vs_currency=";
    const request = `https://api.coingecko.com/api/v3/coins/markets?per_page=10&page=1&vs_currency=${query}`;
    coinmartquery({
      api: api,
      hook: hook,
      datas: datas,
      control: control,
      handler: handler,
      query: query,
      currency: currency,
      paging: paging,
      params: params,
      urlreq: urlreq,
      request: request,
    });
  };

  return (
    <div className={styleSearch.search}>
      <Input
        value={value}
        placeholder="Search in currency: btc, usd, eur, gbp, jpy ..."
        onChange={handleChange}
        onKeyDown={handlerEnter}
      />
      {value && (
        <Button
          loading={false}
          className="button_clear"
          onClick={() => setValue("")}
        >
          x
        </Button>
      )}
      <Button loading={false} onClick={() => makerQuerySearch(value)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.55249 17.105C10.4501 17.1046 12.2929 16.4694 13.7877 15.3004L18.4873 20L19.9989 18.4883L15.2993 13.7888C16.4689 12.2938 17.1045 10.4505 17.105 8.55249C17.105 3.83686 13.2681 0 8.55249 0C3.83686 0 0 3.83686 0 8.55249C0 13.2681 3.83686 17.105 8.55249 17.105ZM8.55249 2.13812C12.09 2.13812 14.9669 5.01497 14.9669 8.55249C14.9669 12.09 12.09 14.9669 8.55249 14.9669C5.01497 14.9669 2.13812 12.09 2.13812 8.55249C2.13812 5.01497 5.01497 2.13812 8.55249 2.13812Z"
            fill="#6C757D"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Search;
