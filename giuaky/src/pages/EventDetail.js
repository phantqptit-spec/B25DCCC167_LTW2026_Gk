import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetail = ({ events }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const eventId = Number(id);
  const event = events.find((ev) => ev.id === eventId);

  if (!event) {
    return (
      <div>
        <p>Không tìm thấy sự kiện</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Chi tiết sự kiện</h2>
      <p>Tên sự kiện: {event.name}</p>
      <p>Địa điểm: {event.location}</p>
      <p>Ngày: {event.date}</p>
      <p>Số chỗ: {event.registered}/{event.capacity}</p>
      <br />
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default EventDetail;