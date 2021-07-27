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
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri="http://localhost:8000"
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {element}
      <Toaster position="top-left" />
    </Auth0Provider>
  );
};

export default App;



// import React from "react";
// import { Toaster } from "react-hot-toast";
// import { Auth0Provider } from "../services/auth";

// const App = ({ element, location }) => {
//   const onRedirectCallback = (appState) => {
//     location.navigate(
//       appState && appState.targetUrl
//         ? appState.targetUrl
//         : window.location.pathname
//     );
//   };

//   return (
//     <Auth0Provider
//       domain={process.env.AUTH0_DOMAIN}
//       client_id={process.env.AUTH0_CLIENT_ID}
//       redirect_uri="http://localhost:8000/"
//       onRedirectCallback={onRedirectCallback}
//       useRefreshTokens={true}
//     >
//       {element}
//       <Toaster position="top-left" />
//     </Auth0Provider>
//   );
// };

// export default App;
