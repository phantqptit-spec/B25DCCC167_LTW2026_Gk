import React from "react";

const FilterBar = ({ query, onQueryChange, filterStatus, onStatusChange }) => {
  return (
    <div style={{ marginBottom: "15px", display: "flex", gap: "20px", alignItems: "center" }}>
      <div>
        <label htmlFor="searchQuery" style={{ marginRight: "8px" }}>Tìm kiếm</label>
        <input
          id="searchQuery"
          type="text"
          value={query}
          onChange={onQueryChange}
          placeholder="Nhập tên sự kiện..."
        />
      </div>
      <div>
        <label htmlFor="filterStatus" style={{ marginRight: "8px" }}>Tình trạng</label>
        <select id="filterStatus" value={filterStatus} onChange={onStatusChange}>
          <option value="Tất cả">Tất cả</option>
          <option value="Còn chỗ">Còn chỗ</option>
          <option value="Đã đầy">Đã đầy</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;