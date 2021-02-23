import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import { useOperation, useOperationMethod } from 'react-openapi-client';

const NewEvent = (props) => {
  // debugger
  // const { loading, data, error } = useOperation('getEvent', props.id);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  // debugger

  // createEvent(null, {
  //   "startDateTime": "2000-01-23T04:56:07.000+00:00",
  //   "name": "board game christmas get together",
  //   "id": 0
  // })


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

  return (
    <div className="App">
      hello
      <button onClick={cb}>
        click me
      </button>
  </div>
    // <div className="App">
    //   <img src={data.image} alt={data.name} />
    //   <h3>{data.name}</h3>
    //   <ul>
    //     <li>
    //       <strong>id:</strong> {data.id}
    //     </li>
    //     <li>
    //       <strong>status:</strong> {data.status}
    //     </li>
    //   </ul>
    // </div>
  );
};
export default withAuth0(NewEvent);
