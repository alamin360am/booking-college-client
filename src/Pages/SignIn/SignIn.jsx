import React from "react";
import Heading from "../../Components/Heading";

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    <section className="mb-8">
      <Heading heading={"Sign Up Now"}></Heading>
      <form
        onSubmit={handleSubmit}
        className="bg-purple-200 p-4 flex gap-4 flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="focus:outline-none px-3 py-2 rounded"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="email">Your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            className="focus:outline-none px-3 py-2 rounded"
          />
        </div>
        <input
          type="submit"
          value="Sign Up"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        />
      </form>
    </section>
  );
};

export default SignIn;
