import React, { useEffect, useState } from "react";
import Heading from "../../../Components/Heading";

const ImgGallery = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <section className="mb-8">
        <Heading heading={"Popular College Images"}></Heading>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
        {
            datas.map(data=> <div>
                <img src={data.image} alt=""  className="w-full h-full scale-1 hover:scale-105 transition-all" />
            </div>)
        }
      </div>
    </section>
  );
};

export default ImgGallery;
