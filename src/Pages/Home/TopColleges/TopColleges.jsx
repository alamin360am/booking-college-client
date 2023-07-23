import React, { useEffect, useState } from "react";
import Heading from "../../../Components/Heading";
import TopCollege from "./TopCollege";

const TopColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 3);
        setColleges(sliceData);
      });
  }, []);

  return (
    <section className="mb-4">
      <Heading heading={"Top Colleges"}></Heading>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <TopCollege key={college._id} college={college}></TopCollege>
        ))}
      </div>
    </section>
  );
};

export default TopColleges;
