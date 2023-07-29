import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Heading from "../../Components/Heading";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user]);

  return (
    <section className="mb-8 flex justify-center items-center">
      {user ? (
        <div className="bg-sky-400 pt-4">
        <Heading heading={"Your Profile"} className="text-white"></Heading>
          <div className="p-10 pt-0 flex gap-8 flex-wrap justify-center">
            <div className="h-48 w-48 border-8 border-white shadow-lg">
              <img src={data[0]?.image} alt="" />
            </div>
            <div className="text-xl flex gap-8 justify-center items-start">
              <div>
                <p className="text-white font-bold mb-2">Name:</p>
                <p className="text-white font-bold mb-2">University:</p>
                <p className="text-white font-bold mb-2">Birthday:</p>
                <p className="text-white font-bold mb-2">Email:</p>
                <Link to={`/profile/${data[0]?._id}`} className="bg-orange-400 px-2 py-1 text-sm rounded-full text-white inline-block">
                  Edit Profile
                </Link>
              </div>
              <div>
                <p className="mb-2 text-white">{data[0]?.name}</p>
                <p className="mb-2 text-white">{data[0]?.university}</p>
                <p className="mb-2 text-white">{data[0]?.birthday}</p>
                <p className="mb-2 text-white">{data[0]?.email}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-10 bg-sky-400">Loading.......</div>
      )}
    </section>
  );
};

export default Profile;
