import React, { useEffect, useState } from "react";
import Heading from "../../../Components/Heading";

const ImgGallery = () => {
  const [loader, setLoader] = useState(true);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoader(false);
      });
  }, []);

  return (
    <section className="mb-8">
      <Heading heading={"Popular College Images"}></Heading>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
        {loader ? (
          <>
            <div className="shadow-lg rounded-md p-4 border">
              <p className="text-center">Loading......</p>
            </div>
            <div className="shadow-lg rounded-md p-4 border">
              <p className="text-center">Loading......</p>
            </div>
            <div className="shadow-lg rounded-md p-4 border">
              <p className="text-center">Loading......</p>
            </div>
          </>
        ) : (
          datas.map((data) => (
            <div>
              <img
                src={data.image}
                alt=""
                className="w-full h-full scale-1 hover:scale-105 transition-all"
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ImgGallery;
