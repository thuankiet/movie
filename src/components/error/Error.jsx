import React from "react";
import './Error.css'

const Error = (props) => {
  return (
    <div id="wrap-error" className="d-flex justify-content-center align-items-center">
      <div id="error-content">
        <p id="status-code">{props.status}</p>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Error;
