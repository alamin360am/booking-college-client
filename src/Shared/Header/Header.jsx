import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-3 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold">Book College</h2>
      </div>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to={"/"}
            className="text-gray-500"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/colleges'} className="text-gray-500">Colleges</NavLink>
        </li>
        <li>
          <NavLink  to={'/admission'} className="text-gray-500">Admission</NavLink>
        </li>
        <li>
          <NavLink  to={'/my-college'} className="text-gray-500">My College</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
