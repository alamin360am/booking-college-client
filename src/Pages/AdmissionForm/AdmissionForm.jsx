import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { BiUpload } from "react-icons/bi";

const AdmissionForm = () => {
  const college = useLoaderData();
  const [imgToken, setImgToken] = useState("");

  useEffect(() => {
    setImgToken(import.meta.env.VITE_IMG_API);
  }, []);

  const imgURL = `https://api.imgbb.com/1/upload?key=${imgToken}`;

  const { name } = college;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const studentName = form.studentName.value;
    const subject = form.subject.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const dateOfBirth = form.dateOfBirth.value;
    const img = form.img.files;

    const formData = new FormData();
    formData.append('image', img[0]);

    fetch(imgURL, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
      if(imgResponse.success) {
        const data = {
          studentName,
          collegeName: name,
          subject,
          email,
          phoneNumber,
          address,
          dateOfBirth,
          image: imgResponse.data.display_url
        };
        fetch('http://localhost:5000/admission', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId) {
            alert("Apply Successful")
          }
        })
      }
    })
  };
  return (
    <section className="mb-8">
      <Helmet>
        <title>Admission on {name}</title>
      </Helmet>
      <form onSubmit={handleSubmit} className="bg-purple-200 p-4">
        <p className="text-center mt-2">
          Admission to <span>{name}</span>
        </p>
        <h2 className="text-2xl font-bold text-center mb-4">
          Please fill up the form
        </h2>
        <div className="grid gap-x-10 gap-y-4 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              placeholder="Student Name"
              className="focus:outline-none px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="focus:outline-none px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Student Email"
              className="focus:outline-none px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber">Student Phone Number</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Student Phone Number"
              className="focus:outline-none px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address">Address</label>
            <textarea
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              className="focus:outline-none px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date">Date of Birth</label>
            <input
              type="date"
              id="date"
              name="dateOfBirth"
              placeholder="date of birth"
              className="focus:outline-none px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="img" className="p-4 bg-purple-900 text-white flex items-center gap-4 rounded">
              <BiUpload className="text-xl"></BiUpload> <span>Upload a image</span>
            </label>
            <input type="file" name="img" id="img" className="hidden"/>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
        />
      </form>
    </section>
  );
};

export default AdmissionForm;
