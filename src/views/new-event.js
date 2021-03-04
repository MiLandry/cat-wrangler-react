import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import { usePromiseTracker } from "react-promise-tracker";
import NewEventForm from "./view-components/new-event-form"
import Loader from 'react-loader-spinner';






const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
return (
  promiseInProgress &&
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
);
}

const NewEvent = (props) => {
  return (

    <div id="newFormPage">
      <LoadingIndicator/>
      <NewEventForm />
  </div>

  );
};
export default withAuth0(NewEvent);
