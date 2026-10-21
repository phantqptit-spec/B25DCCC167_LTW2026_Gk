import React from "react";
import EventRow from "./EventRow";

const EventTable = ({ events, onDelete, onRegister }) => {
  return (
    <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Sự kiện</th>
          <th>Địa điểm</th>
          <th>Ngày</th>
          <th>Số chỗ</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {events.map((ev) => (
          <EventRow key={ev.id} event={ev} onDelete={onDelete} onRegister={onRegister} />
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;