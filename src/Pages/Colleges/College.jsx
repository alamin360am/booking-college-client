import React from "react";
import { Link } from "react-router-dom";

const College = ({ college }) => {
  const { _id, image, name, rating, admission_dates, research_history } = college;
  return (
    <div className="shadow-lg rounded-md p-4 border">
      <img src={image} alt="" className="h-48 w-full mb-5" />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mb-4">
        admission date: <span className="text-gray-500">{admission_dates}</span>
      </p>
      <p className="mb-2">
        Rating:{" "}
        <span className="ml-2 px-2 text-white bg-green-400 rounded-lg">
          {rating}
        </span>
      </p>
      <p className="mb-4">
        Number of Research:{" "}
        <span className="ml-2 px-2 text-white bg-blue-400 rounded-lg">
          {research_history.length}
        </span>
      </p>
      <div className="flex justify-center">
        <Link
          to={`/colleges/${_id}`}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default College;
