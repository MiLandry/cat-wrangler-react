import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";

class Auth0ProviderWithHistory extends React.Component {
  domain = 'dev-l9nr9s-8.us.auth0.com';
  clientId = 'Te33Ar7pFRRFzbPy3RWw5UvKR1jmaSCL';
  audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  onRedirectCallback = (appState) => {
    this.props.history.push(appState?.returnTo || window.location.pathname);
  };

  render() {
    return (
      <Auth0Provider
        domain={this.domain}
        clientId={this.clientId}
        redirectUri={window.location.origin}
        onRedirectCallback={this.onRedirectCallback}
        audience={this.audience}
      >
        {this.props.children}
      </Auth0Provider>
    );
  }
}

export default withRouter(Auth0ProviderWithHistory);
