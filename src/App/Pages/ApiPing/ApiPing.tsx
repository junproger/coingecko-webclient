import React, { useEffect, useState } from "react";

import { Loader } from "@Components/Loader";
import axios from "axios";

import styleApiPing from "./styleApiPing.module.scss";

const ApiPing: React.FC = () => {
  const urlApiV3Ping: string = "https://api.coingecko.com/api/v3/ping";

  const [getPingStatus, setPingStatus] = useState<{ gecko_says: string }>({
    gecko_says: "",
  });

  const isPingOk = (data: string): string =>
    data === "(V3) To the Moon!" ? "Status OK" : "Unavailable";

  useEffect(() => {
    const fetchPingData = async () => {
      const result = await axios({
        method: "get",
        url: urlApiV3Ping,
      });
      setPingStatus(result.data);
    };
    fetchPingData();
  }, []);

  return (
    <div className={styleApiPing.apiping}>
      {getPingStatus.gecko_says ? (
        isPingOk(getPingStatus.gecko_says)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ApiPing;
