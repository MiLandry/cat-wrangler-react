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
  const { handleSubmit, control } = useForm();
  const [createEvent] = useOperationMethod("addEvent");

  const [formErrors, setFormErrors] = useState({});

  // If there is an error on submit this function runs.
  const onError = (errors, event) => {
    console.log("Errors: ", errors);
    console.log("Event: ", event);
    errors.eventName?.message.length === 0
      ? setFormErrors({ ...formErrors, nameNull: true })
      : setFormErrors({ ...formErrors, nameNull: false });
    errors.event$startDateTime?.message.length === 0
      ? setFormErrors({ ...formErrors, startDateTimeNull: true })
      : setFormErrors({ ...formErrors, startDateTimeNull: false });
  };

  const onSubmit = (data) => {
    // setFormErrors((error) => {
    //   console.log(error);
    // })
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
        <Controller
          name="event$startDateTime"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ value, onChange, onBlur }) => (
            <TextField
              error={formErrors.startDateTimeNull ? true : false}
              value={value}
              type="datetime-local"
              onChange={onChange}
              onBlur={onBlur}
              InputLabelProps={{
                shrink: true,
              }}
              label={formErrors.startDateTimeNull ? "Start Date" : "Start Date"}
              id="startDateTime"
              helperText={formErrors.startDateTimeNull ? "Required Field" : ""}
            />
          )}
        />
        <br />
        <Controller
          name="event$endDateTime"
          control={control}
          defaultValue=""
          render={({ value, onChange, onBlur }) => (
            <TextField
              error={formErrors.endDateTimeBeforeStart ? true : false}
              value={value}
              type="datetime-local"
              onChange={onChange}
              onBlur={onBlur}
              InputLabelProps={{
                shrink: true,
              }}
              label={
                formErrors.endDateTimeBeforeStart ? "End Date" : "End Date"
              }
              id="endDateTime"
              helperText={
                formErrors.endDateTimeBeforeStart
                  ? "End Date Before Start Date"
                  : ""
              }
            />
          )}
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
