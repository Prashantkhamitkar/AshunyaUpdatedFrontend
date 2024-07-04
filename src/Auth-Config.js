import {LogLevel} from "@azure/msal-browser"
export const msalConfig = {
  auth: {
    clientId: `${process.env.REACT_APP_SSO_CLIENT_ID}`,
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_SSO_TENANT_ID}`,
    redirectUri: "http://localhost:3000/dashboard",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
            default :
            console.log("Default Case");
        }
      },
      piiLoggingEnabled: false,
      logLevel: LogLevel.Info,
    },
  },
};
export const loginRequest = {
  scopes: ["user.read"],
};

    