import React from "react";
import { Auth0Provider } from "../services/auth";
import { Toaster } from "react-hot-toast";

const App = ({ element, location }) => {
  const onRedirectCallback = (appState) => {
    location.navigate(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      client_id={process.env.AUTH0_CLIENT_ID}
      redirect_uri="http://localhost:8000"
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      {element}
      <Toaster position="top-left" />
    </Auth0Provider>
  );
};

export default App;
