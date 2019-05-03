import React from 'react';
import '../css/Spinner.css';

const Spinner = props => {
  return(
    <div>
      <div className="loader"></div>
      <div>{props.message}</div>
    </div>
  );
}

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;