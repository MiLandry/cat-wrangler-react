import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { useOperationMethod } from 'react-openapi-client';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import { trackPromise } from 'react-promise-tracker';
import { makeStyles } from '@material-ui/core/styles';
import { usePromiseTracker } from "react-promise-tracker";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const NewEventForm = ({history}) => {
  const { register, handleSubmit, watch, errors } = useForm();
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
      history.push('/success')
      //redirect user to success view
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
      label="Event Name*"
      error={'event$name' in errors}
      helperText={errors.event$name?.message}
      inputRef={register({required : "Field is required"})}
      />
  <br/>

      <TextField
        name="event$startDateTime"
        id="startDateTime"
        label="Start Time*"
        type="datetime-local"
        error={'event$startDateTime' in errors}
        helperText={errors.event$startDateTime?.message}
        inputRef={register({required : "Field is required"})}
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

export default withRouter(NewEventForm);
