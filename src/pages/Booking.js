import { useState } from "react";
import { useParams } from "react-router-dom";

function Booking() {
  const { doctor } = useParams();

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push({
      ...form,
      doctor
    });

    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );

    alert("Appointment Booked Successfully!");
  };

  return (
    <div className="container">
      <h1>Book Appointment</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          value={doctor}
          disabled
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;