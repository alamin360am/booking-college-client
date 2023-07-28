import React, { useContext, useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import { AuthContext } from "../../Providers/AuthProvider";
import { BiUpload } from "react-icons/bi";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [imgToken, setImgToken] = useState("");

  useEffect(() => {
    setImgToken(import.meta.env.VITE_IMG_API);
  }, []);

  const imgURL = `https://api.imgbb.com/1/upload?key=${imgToken}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const university = form.university.value;
    const birthday = form.dateOfBirth.value;
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
            const data = {name, email, password, university, birthday, image: imgResponse.data.display_url}
            console.log(data);
        }
    })

    // createUser(email, password)
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));
  };
  return (
    <section className="mb-8">
      <Heading heading={"Sign Up Now"}></Heading>
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
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="focus:outline-none px-3 py-2 rounded"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            className="focus:outline-none px-3 py-2 rounded"
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
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label htmlFor="img" className="p-4 bg-purple-900 text-white flex items-center gap-4 rounded">
              <BiUpload className="text-xl"></BiUpload> <span>Upload Profile Photo</span>
            </label>
            <input type="file" name="img" id="img" className="hidden"/>
          </div>
        <input
          type="submit"
          value="Sign Up"
          className="bg-purple-600 text-white px-4 py-2 rounded"
          required={true}
        />
      </form>
    </section>
  );
};

export default SignUp;
