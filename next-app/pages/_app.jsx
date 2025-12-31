// pages/_app.jsx
import "../styles/globals.css";

import { Auth0Provider } from "@auth0/auth0-react";
import { ProvideAppContext } from "../context/AppContext.jsx";
import { useRouter } from "next/router";

const AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN;
const AUTH_CLIENT_ID = process.env.NEXT_PUBLIC_AUTH_CLIENT_ID;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log("AUTH_DOMAIN:", AUTH_DOMAIN);
  console.log("AUTH_CLIENT_ID:", AUTH_CLIENT_ID);

  const onRedirectCallback = (appState) => {
    // appState?.returnTo lo usamos si tú lo mandas en loginWithRedirect
    router.push(appState?.returnTo || "/");
  };

  const redirectUri =
    typeof window !== "undefined" ? window.location.origin : undefined;

  return (
    <Auth0Provider
      domain={AUTH_DOMAIN}
      clientId={AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <ProvideAppContext>
        <Component {...pageProps} />
      </ProvideAppContext>
    </Auth0Provider>
  );
}

export default MyApp;
