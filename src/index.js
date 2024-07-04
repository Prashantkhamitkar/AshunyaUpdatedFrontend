import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";

import {configureStore} from "./store/store";
import { EventType, PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './Auth-Config';
//here we need to put the msalinstance outside of the component because it re-render with that components
const msalInstance=new PublicClientApplication(msalConfig);
msalInstance.initialize();
if(!msalInstance.getActiveAccount()&&msalInstance.getAllAccounts().length>0){
   msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
}
msalInstance.addEventCallback((event)=>{
  if(event.eventType===EventType.LOGIN_SUCCESS&&event.payload.account){
    const account=event.payload.account;
    msalInstance.setActiveAccount(account);
  }
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore({})}>
    <React.Fragment>
      <BrowserRouter>
        <App  instance={msalInstance}/>
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
reportWebVitals();
// serviceWorker.unregister();

