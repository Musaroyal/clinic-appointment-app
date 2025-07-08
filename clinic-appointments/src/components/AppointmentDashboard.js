import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Appointments</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(app => (
            <tr key={app._id}>
              <td>{app.patientName}</td>
              <td>{app.email}</td>
              <td>{app.date}</td>
              <td>{app.time}</td>
              <td>{app.doctorId?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentDashboard;
