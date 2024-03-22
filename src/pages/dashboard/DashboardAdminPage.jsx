import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

function DashboardAdmin() {
  const [cookie, setCookie] = useCookies(["token"]);
  const decoded = jwtDecode(cookie["token"]);

  return (
    <div className='flex flex-col'>
      <div className="flex flex-col p-4">
        <h1 className="text-3xl font-semibold mb-4">Admin Page</h1>
        <p>Welcome to the admin page! Here you can manage users, products, and orders.</p>
      </div>

      <div className="bg-white max-w-2xl shadow overflow-hidden">
        <div className="px-4 py-5">
            <a className="text-lg leading-6 font-medium text-gray-900">
                Information (From Cookies)
            </a>
        </div>
        <div className="border-t border-gray-200">
            <dl>
                <div className="bg-gray-50 px-4 py-5">
                    <dt className="text-sm font-medium text-gray-500">
                        Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        {decoded.name}
                    </dd>
                </div>
                <div className="bg-white px-4 py-5">
                    <dt className="text-sm font-medium text-gray-500">
                        Email Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        {decoded.email}
                    </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5">
                    <dt className="text-sm font-medium text-gray-500">
                        Phone
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        {decoded.phone}
                    </dd>
                </div>
            </dl>
        </div>
      </div>
    </div>

  );
}

export default DashboardAdmin;
