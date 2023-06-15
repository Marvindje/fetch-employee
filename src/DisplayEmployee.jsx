import React from 'react';

function DisplayEmployee({ employee }) {
  return (
    <div className="Employee">
      <img src={employee.picture.large} alt="Employee" />
      <h2>{`${employee.name.first} ${employee.name.last}`}</h2>
      <p>Email: {employee.email}</p>
    </div>
  );
}

export default DisplayEmployee;
