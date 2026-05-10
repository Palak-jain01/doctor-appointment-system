import doctors from "../data/doctors";
import { Link } from "react-router-dom";

function Doctors() {
  return (
    <div className="container">
      <h1>Available Doctors</h1>

      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div className="card" key={doctor.id}>
            <h3>{doctor.name}</h3>
            <p><strong>Speciality:</strong> {doctor.speciality}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>

            <Link to={`/booking/${doctor.name}`}>
              <button>Book Appointment</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;