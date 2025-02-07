import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import { useMoralis } from "react-moralis";
import JoinLobby from "./JoinLobby";

import "./index.css";
function App({ isServerInfo }) {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <>
      <HomePage />
      <JoinLobby />
    </>
  );
}

export default App;
