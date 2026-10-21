import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventRow = ({ event, onDelete, onRegister }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isFull = event.registered >= event.capacity;

  return (
    <tr
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? "#f0f0f0" : "transparent" }}
    >
      <td>
        <Link
          to={`/events/${event.id}`}
          style={{
            fontStyle: isFull ? "italic" : "normal",
            color: isFull ? "gray" : "blue",
          }}
        >
          {event.name}
        </Link>
      </td>
      <td>{event.location}</td>
      <td>{event.date}</td>
      <td style={{ fontStyle: isFull ? "italic" : "normal", color: isFull ? "gray" : "inherit" }}>
        {event.registered}/{event.capacity}
      </td>
      <td>
        <button
          onClick={() => onRegister(event.id)}
          disabled={isFull}
          style={{ opacity: isFull ? 0.6 : 1, marginRight: "8px" }}
        >
          Đăng ký
        </button>
        <button onClick={() => onDelete(event.id)}>Xóa</button>
      </td>
    </tr>
  );
};

export default EventRow;