import React from "react";

const Home = ({ events, loading, error }) => {
  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Không tải được dữ liệu</div>;

  const totalEvents = events.length;
  const totalRegistered = events.reduce((sum, ev) => sum + ev.registered, 0);
  const totalFullEvents = events.reduce((count, ev) => {
    return ev.registered >= ev.capacity ? count + 1 : count;
  }, 0);

  return (
    <div>
      <h2>Sự kiện CLB</h2>
      <p>Tổng số sự kiện: {totalEvents}</p>
      <p>Tổng số lượt đăng ký: {totalRegistered}</p>
      <p>Số sự kiện đã đầy: {totalFullEvents}</p>
    </div>
  );
};

export default Home;