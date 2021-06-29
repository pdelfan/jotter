import "./src/styles/base.scss";
import "./src/styles/setting.scss";

import React from "react";
import { Location } from "@reach/router";
import App from "./src/components/App";
import axios from "axios";

export const wrapRootElement = ({ element }) => {
  return (
    <Location>
      {(location) => <App element={element} location={location} />}
    </Location>
  );
};

export const baseurl =
  "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/jotter-bdqbf/service/Jotter/incoming_webhook/";

export default axios.create({
  baseURL: baseurl,
  headers: {
    "Content-type": "application/json",
  },
});
