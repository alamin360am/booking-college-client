import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import College from "./College";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  return (
    <section className="mb-4">
      <Heading heading={"All Colleges"}></Heading>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <College key={college._id} college={college}></College>
        ))}
      </div>
    </section>
  );
};

export default Colleges;
