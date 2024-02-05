import React from 'react';

function Alert(props) {
  return (
    <div id='alerts'>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong className='text'>{props.alert.type}:</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
