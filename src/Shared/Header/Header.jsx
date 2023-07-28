import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = ()=>{
    logOut();
  }

  return (
    <nav className="py-3 flex items-center justify-between">
      <div>
        <NavLink to={"/"}>
          <h2 className="text-3xl font-bold">Book College</h2>
        </NavLink>
      </div>
      <ul className="flex gap-4">
        <li>
          <NavLink to={"/"} className="text-gray-500 hover:text-gray-700">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/colleges"}
            className="text-gray-500 hover:text-gray-700"
          >
            Colleges
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/admission"}
            className="text-gray-500 hover:text-gray-700"
          >
            Admission
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/my-college"}
            className="text-gray-500 hover:text-gray-700"
          >
            My College
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-4">
        {user ? (
          <>
          <NavLink onClick={handleLogOut} to={"/signin"} className="text-gray-500 hover:text-gray-700">Log Out</NavLink>
          </>
        ) : (
          <>
            <NavLink
              to={"/signin"}
              className="text-gray-500 hover:text-gray-700"
            >
              Sign In
            </NavLink>
            <NavLink
              to={"/signup"}
              className="text-gray-500 hover:text-gray-700"
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
