import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class NewEventSuccess extends React.Component {

  render() {
    return (
      <div>
        <h1>Success!</h1>
      </div>
    );
  }
}

export default withAuth0(NewEventSuccess);
