import React from 'react';

const EventCard = ({ image, name, date }) => {
  return (
    <div className="event-card w-full sm:w-70 bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-[150px] object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-primary">{name}</h2>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default EventCard;
