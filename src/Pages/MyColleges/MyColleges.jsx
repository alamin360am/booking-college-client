import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Heading from "../../Components/Heading";
import MyCollege from "./MyCollege";

const MyColleges = () => {
  const [loader, setLoader] = useState(true);
  const [applied, setApplied] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/admission?email=alaminrahmatullah567@gmail.com`
    )
      .then((res) => res.json())
      .then((data) => setApplied(data));
    setLoader(false);
  }, []);

  return (
    <section className="mb-8">
      <Helmet>
        <title>My Colleges</title>
      </Helmet>
      <Heading heading={"My Colleges"}></Heading>
      {loader ? (
        <div className="text-center p-10 border rounded">Loading....</div>
      ) : (
        applied.map((apply) => (
          <MyCollege key={apply._id} apply={apply}></MyCollege>
        ))
      )}
    </section>
  );
};

export default MyColleges;
