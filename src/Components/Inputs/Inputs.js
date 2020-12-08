import React, { useState } from "react";

const Inputs = props => {
  return (
    <div className="inputs-container">
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        // value={props.value}
      />
    </div>
  );
};

export default Inputs;
