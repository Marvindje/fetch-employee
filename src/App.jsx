import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const App = () => {
  const [employee, setEmployee] = useState(null);

  const getEmployee = () => {
    axios
      .get('https://randomuser.me/api?nat=en')
      .then((response) => {
        setEmployee(response.data.results[0]);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Employee Information</h1>
      {employee && (
        <div className={styles.card}>
          <img
            className={styles.image}
            src={employee.picture.large}
            alt={`${employee.name.first} ${employee.name.last}`}
          />
          <div className={styles.info}>
            <p>
              <strong>Name:</strong> {`${employee.name.first} ${employee.name.last}`}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Location:</strong> {`${employee.location.city}, ${employee.location.country}`}
            </p>
          </div>
        </div>
      )}
      <button type="button" className={styles.button} onClick={getEmployee}>
        Get Employee
      </button>
    </div>
  );
};

export default App;

