import React, { useState } from "react";
import "./Calendar.scss";

const Calendar = () => {
  const eventsData = [
    {
      id: 1,
      date: "2024-03-06",
      title: "Conduct UX research for new project",
      type: "Research",
      icon: "mask-group.png",
      description: "Detailed information about conducting UX research for the new project."
    },
    {
      id: 2,
      date: "2024-08-15",
      title: "Planning and Meeting for new project",
      type: "Meeting",
      icon: "/assets/images/headPlanet.png",
      description: "Meeting with the team to plan the new project."
    },
    {
      id: 3,
      date: "2024-08-30",
      title: "Retrospective Meeting",
      type: "Retrospective",
      icon: "/assets/images/headPlanet.png",
      description: "Reflecting on the project's progress in the retrospective meeting."
    },
    {
      id: 4,
      date: "2024-07-10",
      title: "Design Sprint",
      type: "Workshop",
      icon: "/assets/images/headPlanet.png",
      description: "A full-day workshop focused on design sprints."
    },
    {
      id: 5,
      date: "2024-08-22",
      title: "User Testing",
      type: "Testing",
      icon: "user-testing.png",
      description: "Conduct user testing sessions to gather feedback."
    },
    {
      id: 6,
      date: "2024-03-25",
      title: "Development Handoff",
      type: "Handoff",
      icon: "handoff.png",
      description: "Handoff designs to the development team."
    }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeView, setActiveView] = useState("Month");

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "All" || event.type === filterType;
    const isInCurrentMonth = new Date(event.date).getMonth() === currentDate.getMonth();
    return matchesSearch && matchesType && isInCurrentMonth;
  });

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);
    if (activeView === "Year") {
      newDate.setFullYear(currentDate.getFullYear() + direction);
    } else if (activeView === "Month") {
      newDate.setMonth(currentDate.getMonth() + direction);
    } else if (activeView === "Day") {
      newDate.setDate(currentDate.getDate() + direction);
    }
    setCurrentDate(newDate);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty" />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${i.toString().padStart(2, "0")}`;
      const eventsForDay = filteredEvents.filter((e) => e.date === dateStr);
  
      days.push(
        <div key={i} className="calendar-day">
          <div className="day-number">{i}</div>
          {eventsForDay.map((event) => (
            <div
              key={event.id}
              className="event-item"
              onClick={() => handleEventClick(event)}
            >
              <img className="event-icon" alt={event.title} src={event.icon} />
              <div className="event-title">{event.title}</div>
            </div>
          ))}
        </div>
      );
    }
    return days;
  };

  const getCurrentLabel = () => {
    if (activeView === "Year") {
      return currentDate.getFullYear();
    } else if (activeView === "Month") {
      return currentDate.toLocaleString("en-US", { month: "long" });
    } else if (activeView === "Day") {
      return currentDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-controls">
          <div className="search-container">
            <img className="icon-search" alt="Search Icon" src="/assets/icons/calendar/search.svg" />
            <input
              type="text"
              placeholder="Search Event"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="calendar-nav">
            <div className="calendar-nav-control">
              <img className="icon-calendar" alt="Calendar Icon" src="/assets/icons/calendar/calendar.svg" />
              <div className="date-text">{currentDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
                year: "numeric"
              })}</div>
            </div>
            <div
              className={`calendar-nav-control ${activeView === "Year" ? "active" : ""}`}
              onClick={() => handleViewChange("Year")}
            >
              Year
            </div>
            <div
              className={`calendar-nav-control ${activeView === "Month" ? "active" : ""}`}
              onClick={() => handleViewChange("Month")}
            >
              Month
            </div>
            <div
              className={`calendar-nav-control ${activeView === "Day" ? "active" : ""}`}
              onClick={() => handleViewChange("Day")}
            >
              Day
            </div>
            <div className="calendar-month-control">
              <img className="icon-back" alt="Back" src="/assets/icons/calendar/arrow2.svg" onClick={() => handleDateChange(-1)} />
              <div className="month-label">{getCurrentLabel()}</div>
              <img className="icon-next" alt="Next" src="/assets/icons/calendar/arrow.svg" onClick={() => handleDateChange(1)} />
            </div>
          </div>
        </div>
      </div>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="weekday-label">{day}</div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;
