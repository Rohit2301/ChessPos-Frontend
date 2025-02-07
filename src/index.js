import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../src/css/home.css";
import "../src/css/nft.css";
import "../src/css/detail.css";
import "antd/dist/antd.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import reportWebVitals from "./reportWebVitals";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  console.log(APP_ID, SERVER_URL);
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <App isServerInfo />
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        Moralis not connected
      </div>
    );
  }
};

ReactDOM.render(<Application />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
