import React, { useState } from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import { useOperationMethod } from 'react-openapi-client';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { usePromiseTracker } from "react-promise-tracker";

import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



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

const NewEventForm = props => {
  const { register, handleSubmit, watch, } = useForm();
  const [formErrors, setformErrors] = useState({})


  const [createEvent] = useOperationMethod('addEvent');
  const onSubmit = data => {
    console.log(data);
    data.event$startDateTime = data.event$startDateTime + ":00.000+00:00"
    trackPromise(
    createEvent(null, {
      "startDateTime": data.event$startDateTime,
      "name": data.event$name,
      "id": 0
    })
    .then(result => {
      console.log('result', result)
    })
    .catch (err => {
      console.log('err', err)
      setformErrors({
        ...formErrors,
        network : true,
      })
    })
    )

  }

  const classes = useStyles();

  console.log(watch("event$name"));
  // watch input value by passing the name of it
//   Name,
// date
// start time
// end time (optional)
const { promiseInProgress } = usePromiseTracker();





  return (
    !promiseInProgress &&
<form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
  {formErrors.network &&
  (
    <p>Unable to create new event. Check your internet connection or try again later.</p>
  )}

      <TextField
      name="event$name"
      id="standard-basic"
      label="Event name"
      inputRef={register({required : true})}
      />
  <br/>

      <TextField
        name="event$startDateTime"
        id="startDateTime"
        label="Start time"
        type="datetime-local"
        inputRef={register({required : true})}
        InputLabelProps={{
          shrink: true,
        }}
      />
  <br/>
  <br/>
  <Button type="submit" size="large" color="primary" variant="contained">
    Submit
  </Button >
</form>
  )
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
