import React from "react";
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";

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
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENT_ID}
      redirectUri="https://jotter.site"
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {element}
      <Toaster />
    </Auth0Provider>
  );
};

export default App;