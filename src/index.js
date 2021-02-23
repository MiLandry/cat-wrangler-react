import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { OpenAPIProvider } from 'react-openapi-client';

import "./index.css";

const server = {
  url : 'http://localhost:8080/',
}

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
    <OpenAPIProvider definition="http://localhost:8080/api-docs" withServer={server}>
      <App />
    </OpenAPIProvider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
