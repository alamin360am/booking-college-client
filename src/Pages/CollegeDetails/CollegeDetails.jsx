import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { Helmet } from "react-helmet";

const CollegeDetails = () => {
  const college = useLoaderData();
  const {
    _id,
    image,
    name,
    admission_dates,
    events,
    rating,
    research_history,
    sports,
    admission_process,
  } = college;
  return (
    <section className="mb-4">
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div className="flex justify-center h-72 mb-4">
        <img src={image} alt="" />
      </div>
      <h3 className="text-2xl text-center font-bold">{name}</h3>
      <p className="text-center">
        Admission Date: <span className="text-gray-500">{admission_dates}</span>
      </p>
      <p className="mb-4 text-center">
        Ratings: <span className="text-gray-500">{rating}</span>
      </p>
      <div className="mb-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="bg-blue-400 inline-block w-full md:w-1/3 px-2 rounded-full text-sm text-white font-bold mb-2">
            Research Works
          </h3>
          <ul>
            {research_history.map((research_history) => (
              <li
                key={research_history}
                className="flex items-center gap-2 mb-1"
              >
                <AiFillCheckCircle className="text-blue-400"></AiFillCheckCircle>
                <span>{research_history}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="bg-orange-400 inline-block w-full md:w-1/3 px-2 rounded-full text-sm text-white font-bold mb-2">
            Events
          </h3>
          <ul>
            {events.map((event) => (
              <li key={event} className="flex items-center gap-2 mb-1">
                <AiFillCheckCircle className="text-orange-400"></AiFillCheckCircle>
                <span>{event}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="bg-red-400 inline-block w-full md:w-1/3 px-2 rounded-full text-sm text-white font-bold mb-2">
            Sports
          </h3>
          <ul>
            {sports.map((sport) => (
              <li key={sport} className="flex items-center gap-2 mb-1">
                <AiFillCheckCircle className="text-red-400"></AiFillCheckCircle>
                <span>{sport}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold bg-purple-700 text-white inline-block px-2 py-1 mb-3 rounded">
          Admission Process
        </h2>
        <ul>
          {admission_process.map((process, i) => (
            <li className="flex items-center gap-2 mb-2">
              <span className="border h-6 w-6 flex justify-center items-center border-purple-800 p-1 rounded-full">
                <span className="text-purple-800">{i + 1}</span>
              </span>
              <span>{process}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link to={`/admission/${_id}`} className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 cursor-pointer">Apply</Link>
    </section>
  );
};

export default CollegeDetails;
