import React from "react";
import Swal from "sweetalert2";

const MyCollege = ({ apply }) => {
  const {
    _id,
    collegeName,
    image,
    dateOfBirth,
    subject,
    phoneNumber,
    address,
    studentName,
    email,
  } = apply;

  console.log(apply);

  const handleDelete = id =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your apply has been deleted.',
            'success'
          )
        }
      })
    console.log(id);
  }

  return (
    <div className="mb-4 w-full p-4 md:p-2 border rounded">
      <div className="grid gap-4 items-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="h-28 w-28 rounded-full overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div>
          <p className="font-bold">
            Name:{" "}
            <span className="font-normal text-gray-500">{studentName}</span>
          </p>
          <p className="font-bold">
            College:{" "}
            <span className="font-normal text-gray-500">{collegeName}</span>
          </p>
          <p className="font-bold">
            Subject:{" "}
            <span className="font-normal text-gray-500">{subject}</span>
          </p>
          <p className="font-bold">
            Email:{" "}
            <span className="font-normal text-gray-500">{email}</span>
          </p>
        </div>
        <div>
          <p className="font-bold">
            Date of Birth:{" "}
            <span className="font-normal text-gray-500">{dateOfBirth}</span>
          </p>
          <p className="font-bold">
            Phone Number:{" "}
            <span className="font-normal text-gray-500">{phoneNumber}</span>
          </p>
          <p className="font-bold">
            Address:{" "}
            <span className="font-normal text-gray-500">{address}</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
            <button className="bg-green-700 inline-block px-2 rounded text-sm text-white">Update</button>
            <button onClick={()=>handleDelete(_id)} className="bg-red-700 inline-block px-2 rounded text-sm text-white">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
