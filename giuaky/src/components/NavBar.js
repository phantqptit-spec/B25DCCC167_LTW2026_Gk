import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px 0" }}>
      <NavLink to="/" end>Trang chủ</NavLink>
      <NavLink to="/events" end>Danh sách</NavLink>
      <NavLink to="/events/new" end>Thêm mới</NavLink>
    </nav>
  );
};

export default NavBar;