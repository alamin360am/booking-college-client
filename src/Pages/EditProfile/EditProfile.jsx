import React, { useEffect, useState } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { BiUpload } from "react-icons/bi";
import Swal from "sweetalert2";

const EditProfile = () => {
  const user = useLoaderData();
  const navigate = useNavigate()
  const [imgToken, setImgToken] = useState("");

  useEffect(() => {
    setImgToken(import.meta.env.VITE_IMG_API);
  }, []);

  const imgURL = `https://api.imgbb.com/1/upload?key=${imgToken}`;
  
  const {_id, name, university, birthday} = user;

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const university = form.university.value;
    const birthday = form.dateOfBirth.value;
    const img = form.img.files;

    const formData = new FormData();
    formData.append("image", img[0]);

    fetch(imgURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
            const data = { name, university, birthday, image: imgResponse.data.display_url };
            fetch(`http://localhost:5000/users/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(result => {
                if(result.modifiedCount === 1) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your profile has been updated',
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate("/profile")
                }
            })
        }
      })
  }



  return (
    <section className="mb-8">
      <form
        onSubmit={handleSubmit}
        className="bg-purple-200 p-4 flex gap-4 flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="focus:outline-none px-3 py-2 rounded"
            defaultValue={name}
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="university">Your University</label>
          <input
            type="text"
            id="university"
            name="university"
            placeholder="Your University"
            className="focus:outline-none px-3 py-2 rounded"
            defaultValue={university}
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="date">Date of Birth</label>
          <input
            type="date"
            id="date"
            name="dateOfBirth"
            placeholder="date of birth"
            className="focus:outline-none px-3 py-2 rounded"
            defaultValue={birthday}
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label
            htmlFor="img"
            className="p-4 bg-purple-900 text-white flex items-center gap-4 rounded"
          >
            <BiUpload className="text-xl"></BiUpload>{" "}
            <span>Upload Profile Photo</span>
          </label>
          <input type="file" name="img" id="img" className="hidden" />
        </div>
        <input
          type="submit"
          value="Update"
          className="bg-purple-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-purple-800"
        />
      </form>
    </section>
  );
};

export default EditProfile;
