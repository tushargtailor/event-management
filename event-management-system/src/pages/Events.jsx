import React from "react";
import EventList from "../components/EventList";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      {/* Main container */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800">
            Explore the Best Events Happening Around You
          </h1>
        </div>

        {/* Navigation Section */}
        <div className="mb-8">
          <nav className="flex justify-center gap-8 text-lg font-semibold">
            <span className="cursor-pointer text-red-500 hover:text-red-700">
              All
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-red-500">
              Music
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-red-500">
              Games
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-red-500">
              Sports
            </span>
            <span className="cursor-pointer text-gray-600 hover:text-red-500">
              Arts
            </span>
          </nav>
        </div>

        {/* Events Section */}
        <div className="space-y-12">
          {/* All Events */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              All Events
            </h2>
            <EventList />
          </div>

          {/* Offline Events */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Offline Events
            </h2>
            <EventList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
