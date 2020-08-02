import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//when the Spinner is called without any value for props.message, defaultProps can be used to set a default value
Spinner.defaultProps = {
  message: 'Loading...',
};
export default Spinner;
