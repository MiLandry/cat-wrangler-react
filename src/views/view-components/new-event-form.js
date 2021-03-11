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
  const { register, handleSubmit, control } = useForm();
  const [createEvent] = useOperationMethod("addEvent");

  const [formErrors, setFormErrors] = useState({});

  // If there is an error on submit this function runs.
  const onError = (errors, event) => {
    console.log("Errors: ", errors);
    console.log("Event: ", event);
    errors.eventName?.message.length === 0
      ? setFormErrors({ ...formErrors, nameNull: true })
      : setFormErrors({ ...formErrors, nameNull: false });
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(formErrors);
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
          setFormErrors({
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
          render={({ value, onChange, onBlur }) => (
            <TextField
              error={formErrors.nameNull ? true : false}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label={formErrors.nameNull ? "Event Name" : "Event Name"}
              id={
                formErrors.nameNull
                  ? "standard-error-helper-text"
                  : "standard-basic"
              }
              helperText={formErrors.nameNull ? "Required Field" : ""}
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
