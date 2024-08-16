import React from 'react'
import Calendar from '../components/Events/calendar/Calendar'
import EventHeader from '../components/Events/EventHeader/EventHeader';
import EventsSlider from '../components/Events/Events/EventsSlider';


const EventPage = () => {
  return (
    <>
    <EventHeader/>
    <Calendar/>
    <EventsSlider/>
    </>
  )
}

export default EventPage
