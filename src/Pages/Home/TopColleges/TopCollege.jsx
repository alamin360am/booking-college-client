import React from "react";

const TopCollege = ({ college }) => {
  const { image, name, admission_dates, events, research_history, sports } =
    college;
  console.log(college);
  return (
    <div className="shadow-md rounded p-4">
      <img src={image} alt="" className="h-48 w-full mb-5" />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mb-4">
        admission date: <span className="text-gray-500">{admission_dates}</span>
      </p>
      <div className="mb-4">
        <p className="bg-orange-400 inline-block px-2 rounded-full text-sm text-white mb-2">
          Events
        </p>
        <ul>
          {events.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <p className="bg-blue-400 inline-block px-2 rounded-full text-sm text-white mb-2">
          Research History
        </p>
        <ul>
          {research_history.map((research_history) => (
            <li key={research_history}>{research_history}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <p className="bg-red-400 inline-block px-2 rounded-full text-sm text-white mb-2">
          Sports
        </p>
        <ul className="flex gap-4">
          {sports.map((sport) => (
            <li key={sport}>{sport}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopCollege;
