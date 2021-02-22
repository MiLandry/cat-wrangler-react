import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class NewEvent extends React.Component {
  state = {
    message: "",
  };

  serverUrl = process.env.REACT_APP_SERVER_URL;

  // callApi = async () => {
  //   try {
  //     const response = await fetch(
  //       `${this.serverUrl}/api/messages/public-message`
  //     );

  //     const responseData = await response.json();

  //     this.setState({ message: responseData.message });
  //   } catch (error) {
  //     this.setState({ message: error.message });
  //   }
  // };

  // callSecureApi = async () => {
  //   const { getAccessTokenSilently } = this.props.auth0;
  //   const token = await getAccessTokenSilently();

  //   try {
  //     const response = await fetch(
  //       `${this.serverUrl}/api/messages/protected-message`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     const responseData = await response.json();

  //     this.setState({ message: responseData.message });
  //   } catch (error) {
  //     this.setState({ message: error.message });
  //   }
  // };

  render() {
    return (
      <div>
        <h1>Create New Event</h1>
        <p>
          hello world
        </p>
      </div>
    );
  }
}

export default withAuth0(NewEvent);
