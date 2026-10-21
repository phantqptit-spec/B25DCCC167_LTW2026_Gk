import React, { useState } from "react";
import FilterBar from "../components/FilterBar";
import EventTable from "../components/EventTable";

const EventList = ({ events, loading, error, onDelete, onRegister }) => {
  const [query, setQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tất cả");

  const handleQueryShift = (e) => {
    setQuery(e.target.value);
  };

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Không tải được dữ liệu</div>;

  const filteredEvents = events.filter((ev) => {
    const matchesQuery = ev.name.toLowerCase().includes(query.toLowerCase());
    const isFull = ev.registered >= ev.capacity;

    if (filterStatus === "Còn chỗ") return matchesQuery && !isFull;
    if (filterStatus === "Đã đầy") return matchesQuery && isFull;
    return matchesQuery;
  });

  return (
    <div>
      <FilterBar
        query={query}
        onQueryChange={handleQueryShift}
        filterStatus={filterStatus}
        onStatusChange={handleStatusChange}
      />
      {filteredEvents.length > 0 ? (
        <>
          <p>Tìm thấy {filteredEvents.length} sự kiện</p>
          <EventTable events={filteredEvents} onDelete={onDelete} onRegister={onRegister} />
        </>
      ) : (
        <p>Không có dữ liệu</p>
      )}
    </div>
  );
};

export default EventList;