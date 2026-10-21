const BUILD_TAG = "wn-1726";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./components/Layout";
import AddEvent from "./pages/AddEvent";
import EventDetail from "./pages/EventDetail";
import Home from "./pages/Home";
import EventList from "./pages/EventList";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("/data/events.json")
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter((ev) => ev.id !== id);
    setEvents(updatedEvents);
  };

  const handleRegisterEvent = (id) => {
    const updatedEvents = events.map((ev) => {
      if (ev.id === id && ev.registered < ev.capacity) {
        return { ...ev, registered: ev.registered + 1 };
      }
      return ev;
    });
    setEvents(updatedEvents);
  };

  const handleAddEvent = (newEvent) => {
    const maxId = events.length > 0 ? Math.max(...events.map((e) => e.id)) : 0;
    const eventToAdd = {
      ...newEvent,
      id: maxId + 1,
      registered: 0,
    };
    setEvents([...events, eventToAdd]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home events={events} loading={loading} error={error} />} />
        <Route
          path="events"
          element={
            <EventList
              events={events}
              loading={loading}
              error={error}
              onDelete={handleDeleteEvent}
              onRegister={handleRegisterEvent}
            />
          }
        />
        <Route path="events/new" element={<AddEvent onAdd={handleAddEvent} />} />
        <Route path="events/:id" element={<EventDetail events={events} />} />
      </Route>
    </Routes>
  );
}

export default App;