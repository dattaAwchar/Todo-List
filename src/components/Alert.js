import React from 'react';

const Alert = ({ message }) => {
  if (!message) return null;

  return (
    <div className="alert alert-warning alert-dismissible fade show text-center" role="alert" style={{height:'56px', position:'absolute', width:'100%', zIndex:1}}>
      {message}
    </div>
  );
}

export default Alert;
