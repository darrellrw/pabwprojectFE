import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen px-6 py-4">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
            Dashboard
          </a>
        </li>
        <li>
          <a href="users" className="block py-2 px-4 rounded hover:bg-gray-700">
            Users
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
            Pesawat
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
            Hotel
          </a>
        </li>
        <li>
          <a href="/log" className="block py-2 px-4 rounded hover:bg-gray-700">
            Log
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
