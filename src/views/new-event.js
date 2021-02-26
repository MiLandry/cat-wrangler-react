import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import { useOperation, useOperationMethod } from 'react-openapi-client';
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from 'react-datetime-picker'


const NewEvent = (props) => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const onSubmit = data => {
    console.log(data);
  }


  const [createEvent, { loading, response, error }] = useOperationMethod('addEvent');
  const cb = () => {
    // debugger
    console.log('data')
    createEvent(null, {
      "startDateTime": "2000-01-23T04:56:07.000+00:00",
      "name": "board game christmas get together",
      "id": 0
    })
  }

  console.log(watch("event$name"));
  // watch input value by passing the name of it
//   Name,
// date
// start time
// end time (optional)

  return (
    <div className="App">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input name="event$name" ref={register({ required: true })} />
      {errors.event$name && <span>Event name is required</span>}
      <label>Start date</label>
      <Controller
        name="event$startDateTime"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => <DateTimePicker onChange={onChange} value={value} />}
      />

      {errors.event$startDateTime && <span>Pick a start time</span>}
      <input type="submit" />
    </form>

  </div>

  );
};
export default withAuth0(NewEvent);




// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit, watch, errors } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
//     <form onSubmit={handleSubmit(onSubmit)}>
//     {/* register your input into the hook by invoking the "register" function */}
//       <input name="example" defaultValue="test" ref={register} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input name="exampleRequired" ref={register({ required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   );
// }
