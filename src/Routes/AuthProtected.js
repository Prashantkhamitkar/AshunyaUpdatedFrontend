import React, { useEffect, useState } from "react";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../Auth-Config"; // Replace with your MSAL configuration and login request
import { ClimbingBoxLoader } from "react-spinners";
import { Route } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const { instance, accounts, inProgress } = useMsal();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const login = async () => {
      try {
        setIsLoggingIn(true);
        await instance.loginRedirect(loginRequest);
      } catch (error) {
        console.error("Error during login redirect:", error);
        setIsLoggingIn(false);
      }
    };

    if (accounts.length === 0 && inProgress === "none" && !isLoggingIn) {
      console.log("Starting login process...");
      login();
    }
  }, [accounts.length, instance, inProgress, isLoggingIn]);

  useEffect(() => {
    console.log("AuthProtected render:", { accounts, inProgress, isLoggingIn });
  }, [accounts, inProgress, isLoggingIn]);

  if (inProgress === "login" || isLoggingIn) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClimbingBoxLoader
          color="#06ff9e"
          loading
          size={25}
          speedMultiplier={1}
        />
      </div>
    );
  }

  if (accounts.length === 0) {
    return null; 
  }

  return (
    <>
      <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
    </>
  );
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export { AuthProtected, AccessRoute };
