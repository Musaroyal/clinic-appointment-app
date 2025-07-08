import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    patientName: '',
    email: '',
    date: '',
    time: '',
    doctorId: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/doctors')
      .then(res => setDoctors(res.data.filter(d => d.role === 'Doctor')))
      .catch(err => console.error(err));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/appointments', form)
      .then(() => {
        alert('Appointment booked!');
        setForm({
          patientName: '',
          email: '',
          date: '',
          time: '',
          doctorId: ''
        });
      })
      .catch(err => alert('Error booking appointment.'));
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="patientName" placeholder="Your Name" value={form.patientName} onChange={handleChange} required />
        <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="time" type="time" value={form.time} onChange={handleChange} required />

        <select name="doctorId" value={form.doctorId} onChange={handleChange} required>
          <option value="">Select Doctor</option>
          {doctors.map(doc => (
            <option key={doc._id} value={doc._id}>{doc.name}</option>
          ))}
        </select>

        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
