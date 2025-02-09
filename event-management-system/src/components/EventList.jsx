// src/components/EventList.js
import React from 'react';
import EventCard from './EventCard';

const events = [
  {
    image: "../../public/art.jpg",
    name: "Art",
    date: "March 5, 2025",
  },
  {
    image: "../../public/music.jpg",
    name: "Melodies of the Ancients",
    date: "April 15, 2025",
  },
  {
    image: "../../public/game.jpg",
    name: "Game Night",
    date: "May 22, 2025",
  },
  {
    image: "../../public/sport.jpg",
    name: "Summer Sports Fest",
    date: "May 22, 2025",
  },
  
];

const EventList = () => {
  return (
    <div className="event-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {events.map((event, index) => (
        <EventCard key={index} image={event.image} name={event.name} date={event.date} />
      ))}
    </div>
  );
};

export default EventList;
