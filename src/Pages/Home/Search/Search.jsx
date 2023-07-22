import React from "react";

const Search = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = event.target.keyword.value;
    console.log(keyword);
  };
  return (
    <section>
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center bg-slate-500 py-10"
      >
        <div>
            <h2 className="text-3xl text-center font-bold mb-4">Search a College</h2>
          <input type="text" name="keyword" placeholder="Search College" className="w-96 px-2 py-3 rounded focus:outline-none" />
          <input type="submit" value="Search" className="px-2 py-3 rounded bg-black text-white"/>
        </div>
      </form>
    </section>
  );
};

export default Search;
