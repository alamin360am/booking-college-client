import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const Search = () => {
  const [colleges, setColleges] = useState([]);
  const [searchColleges, setSearchColleges] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/colleges')
    .then(res => res.json())
    .then(data => setColleges(data))
  },[]);

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = event.target.keyword.value;
    const search = colleges.filter(college => college.name == keyword);
    setSearchColleges(search);
  };

  return (
    <section>
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center bg-slate-500 py-10 mb-4"
      >
        <div>
          <h2 className="text-3xl text-center font-bold mb-4">
            Search a College
          </h2>
          <div className="flex">
            <div className="relative">
              <input
                type="text"
                name="keyword"
                placeholder="Search College"
                className="w-96 px-8 py-3 rounded focus:outline-none"
              />
              <AiOutlineSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-lg"></AiOutlineSearch>
            </div>
            <input
              type="submit"
              value="Search"
              className="px-2 py-3 rounded bg-black text-white"
            />
          </div>
        </div>
      </form>
      <div>result</div>
    </section>
  );
};

export default Search;
