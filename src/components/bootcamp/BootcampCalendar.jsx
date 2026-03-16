import React, { useState } from "react";
import { getAllBootcamps, isBootcampOnDate } from "../../data/bootcampHelpers";
import "./BootcampCalendar.css";

const BootcampCalendar = ({ onDateSelect, filterType = "all" }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1)); // January 2026

  const bootcamps = getAllBootcamps();
  const filteredBootcamps =
    filterType === "all"
      ? bootcamps
      : bootcamps.filter((b) => b.type === filterType);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const getBootcampsForDate = (day) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, day);

    return filteredBootcamps.filter((bootcamp) =>
      isBootcampOnDate(bootcamp, date)
    );
  };

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, day);
    const bootcampsOnDate = getBootcampsForDate(day);

    if (bootcampsOnDate.length > 0) {
      onDateSelect(date, bootcampsOnDate);
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="calendar-day calendar-day--empty"
        ></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const bootcampsOnDate = getBootcampsForDate(day);
      const hasOnline = bootcampsOnDate.some((b) => b.type === "online");
      const hasOffline = bootcampsOnDate.some((b) => b.type === "offline");
      const hasBootcamps = bootcampsOnDate.length > 0;

      days.push(
        <div
          key={day}
          className={`calendar-day ${
            hasBootcamps ? "calendar-day--has-bootcamp" : ""
          }`}
          onClick={() => handleDateClick(day)}
        >
          <span className="calendar-day__number">{day}</span>
          {hasBootcamps && (
            <div className="calendar-day__indicators">
              {hasOnline && (
                <span className="calendar-day__indicator calendar-day__indicator--online"></span>
              )}
              {hasOffline && (
                <span className="calendar-day__indicator calendar-day__indicator--offline"></span>
              )}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bootcamp-calendar">
      <div className="calendar-header">
        <button className="calendar-nav-btn" onClick={previousMonth}>
          ←
        </button>
        <h3 className="calendar-title">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button className="calendar-nav-btn" onClick={nextMonth}>
          →
        </button>
      </div>

      <div className="calendar-legend">
        <div className="calendar-legend__item">
          <span className="calendar-legend__dot calendar-legend__dot--online"></span>
          <span className="calendar-legend__label">Online</span>
        </div>
        <div className="calendar-legend__item">
          <span className="calendar-legend__dot calendar-legend__dot--offline"></span>
          <span className="calendar-legend__label">Offline</span>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-weekdays">
          {weekDays.map((day) => (
            <div key={day} className="calendar-weekday">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-days">{renderCalendarDays()}</div>
      </div>
    </div>
  );
};

export default BootcampCalendar;
