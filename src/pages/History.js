function History() {
  const appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

  return (
    <div className="container">
      <h1>Appointment History</h1>

      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        appointments.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p>Doctor: {item.doctor}</p>
            <p>Date: {item.date}</p>
            <p>Time: {item.time}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default History;