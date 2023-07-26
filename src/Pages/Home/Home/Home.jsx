import React from "react";
import Search from "../Search/Search";
import TopColleges from "../TopColleges/TopColleges";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet><title>Book Colleges || Home</title></Helmet>
      <div>
        <Search></Search>
        <TopColleges></TopColleges>
      </div>
    </>
  );
};

export default Home;
