import { Link } from "react-router-dom";

import React from "react";

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen px-6 py-4">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to={"/dashboard"} className="block py-2 px-4 rounded hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/users"} className="block py-2 px-4 rounded hover:bg-gray-700">
            Users
          </Link>
        </li>
        <li>
          <Link to={""} className="block py-2 px-4 rounded hover:bg-gray-700">
            Pesawat
          </Link>
        </li>
        <li>
          <Link to={""} className="block py-2 px-4 rounded hover:bg-gray-700">
            Hotel
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/log"} className="block py-2 px-4 rounded hover:bg-gray-700">
            Log
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;