import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useOperationMethod } from "react-openapi-client";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, watch } = useForm();
  const [createEvent] = useOperationMethod("addEvent");

  const [formErrors, setformErrors] = useState({});
  const [formValues, setFormValues] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onError = (errors, event) => console.log(errors, event);

  const onSubmit = (data) => {
    console.log(data);
    // data.event$startDateTime = data.event$startDateTime + ":00.000+00:00";
    // trackPromise(
    //   createEvent(null, {
    //     startDateTime: data.event$startDateTime,
    //     name: data.event$name,
    //     id: 0,
    //   })
    //     .then((result) => {
    //       console.log("result", result);
    //       history.push("/success");
    //       //redirect user to success view
    //     })
    //     .catch((err) => {
    //       console.log("err", err);
    //       setformErrors({
    //         ...formErrors,
    //         network: true,
    //       });
    //     })
    // );
  };

  console.log(watch("event$name"));
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

        <TextField
          name="eventName"
          onChange={handleInputChange}
          value={formValues.eventName}
          id="standard-basic"
          label="Event name"
          inputRef={register({ required: true })}
        />
        <br />

        <TextField
          name="startDateTime"
          onChange={handleInputChange}
          value={formValues.startDate}
          id="startDateTime"
          label="Start time"
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
