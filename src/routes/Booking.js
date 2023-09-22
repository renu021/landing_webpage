import React from "react";
import "../components/BookingStyle.css";

function Booking() {
  return (
    <div className="form-container">
      <h1>Book Tickets here</h1>
      <form>
        <input placeholder="Theater Name" />
        <input placeholder="Location" />
        <input placeholder="Show Time" />
        <input placeholder="Price" />
        <button>Book Ticket</button>
      </form>
    </div>
  );
}

export default Booking;
