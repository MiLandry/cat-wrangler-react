import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useOperationMethod } from "react-openapi-client";
import TextField from "@material-ui/core/TextField";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { trackPromise } from "react-promise-tracker";
import { makeStyles } from "@material-ui/core/styles";
import { usePromiseTracker } from "react-promise-tracker";

// Required by Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const NewEventForm = ({ history }) => {
  const classes = useStyles();
  const { register, handleSubmit, control, watch } = useForm();
  const [createEvent] = useOperationMethod("addEvent");

  const [formErrors, setformErrors] = useState({});

  const onError = (errors, event) => console.log(errors, event);

  const onSubmit = (data) => {
    console.log(data);
    data.event$startDateTime = data.event$startDateTime + ":00.000+00:00";
    trackPromise(
      createEvent(null, {
        startDateTime: data.event$startDateTime,
        name: data.event$name,
        id: 0,
      })
        .then((result) => {
          console.log("result", result);
          history.push("/success");
          //redirect user to success view
        })
        .catch((err) => {
          console.log("err", err);
          setformErrors({
            ...formErrors,
            network: true,
          });
        })
    );
  };

  // console.log(watch("event$name"));
  // watch input value by passing the name of it
  //   Name,
  // date
  // start time
  // end time (optional)
  const { promiseInProgress } = usePromiseTracker();

  return (
    !promiseInProgress && (
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {formErrors.network && (
          <p>
            Unable to create new event. Check your internet connection or try
            again later.
          </p>
        )}
        <Controller
          name="eventName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={{value, onChange, onBlur} => (
            <TextField
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label="Event Name"
              id="standard-basic"
            />
          )}
        />
        <br />

        <TextField
          name="event$startDateTime"
          id="startDateTime"
          label="Start Date"
          type="datetime-local"
          inputRef={register({ required: true })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <TextField
          name="event$endDateTime"
          id="endDateTime"
          label="End Date"
          type="datetime-local"
          inputRef={register({ required: true })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <br />
        <Button type="submit" size="large" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    )
  );
};

export default withRouter(NewEventForm);
