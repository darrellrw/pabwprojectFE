import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

import { FaChevronDown } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoLogoBuffer } from "react-icons/io";

function Sidebar() {
  const [cookie, setCookie] = useCookies(["token"]);
  const [decoded, setDecoded] = useState(cookie["token"] ? jwtDecode(cookie["token"]) : null);

  const [showDropFlight, setShowDropFlight] = useState(false);
  const [showDropHotel, setShowDropHotel] = useState(false);

  const toggleDropVisibility = (whichData) => {
    if (whichData == "flight") {
      setShowDropFlight(!showDropFlight);
    } else if (whichData == "hotel") {
      setShowDropHotel(!showDropHotel);
    }
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen px-6 py-4">
      <h2 className="text-2xl font-semibold mb-4">{decoded.role == 0 ? "Admin" : "Partner"} Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to={"/dashboard"} className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
            <MdDashboard className="mr-3"/> Dashboard
          </Link>
        </li>
        <li>
            <button type="button" className="flex items-center w-full py-2 px-4 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-700" onClick={() => toggleDropVisibility("flight")}>
              <FaPlane />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">Pesawat</span>
              <FaChevronDown />
            </button>
            <ul className={showDropFlight ? "py-2 space-y-2" : "hidden py-2 space-y-2"}>
            <li>
                <Link to={"/dashboard/flight"} className="block ml-7 py-2 px-4 rounded hover:bg-gray-700">
                  Penerbangan
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/airport"} className="block ml-7 py-2 px-4 rounded hover:bg-gray-700">
                  Bandara
                </Link>
              </li>
              <li>
                <Link to={""} className="block ml-7 py-2 px-4 rounded hover:bg-gray-700">
                  List Pesawat
                </Link>
              </li>
              <li>
                <Link to={""} className="block ml-7 py-2 px-4 rounded hover:bg-gray-700">
                  Kursi Pesawat
                </Link>
              </li>
					</ul>
        </li>
        <li>
          <button type="button" className="flex items-center w-full py-2 px-4 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-700" onClick={() => toggleDropVisibility("hotel")}>
            <FaHotel />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Hotel</span>
            <FaChevronDown />
          </button>
          <ul className={showDropHotel ? "py-2 space-y-2" : "hidden py-2 space-y-2"}>
              <li>
                <Link to={""} className="block ml-7 py-2 px-4 rounded hover:bg-gray-700">
                  Hotel
                </Link>
              </li>
              <li>
                <Link to={""} className="block ml-7 py-2 px-4 rounded hover:bg-gray-700">
                  Kamar
                </Link>
              </li>
					</ul>
        </li>
        {
          decoded.role == 0 ?
            (
              <>
                <li>
                  <Link to={"/dashboard/users"} className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                    <FaUser className="mr-3"/> Users
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/log"} className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                  <IoLogoBuffer className="mr-3"/> Log
                  </Link>
                </li>
              </>
            )
          :
          <></>
        }
      </ul>
    </div>
  );
};

export default Sidebar;