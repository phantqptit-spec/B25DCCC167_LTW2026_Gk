import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEvent = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !location.trim() || !date || !capacity) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin phía dưới form");
      return;
    }

    const capNum = Number(capacity);
    if (isNaN(capNum) || capNum < 10 || capNum > 1000) {
      setErrorMessage("Sức chứa phải từ 10 đến 1000");
      return;
    }

    onAdd({
      name: name.trim(),
      location: location.trim(),
      date,
      capacity: capNum,
    });

    navigate("/events", { replace: true });
  };

  return (
    <div>
      <h2>Thêm sự kiện mới</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Tên sự kiện</label><br />
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="location">Địa điểm</label><br />
          <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="date">Ngày diễn ra</label><br />
          <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="capacity">Sức chứa</label><br />
          <input id="capacity" type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        </div>
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default AddEvent;