import React, { useState, useEffect } from "react";
import API from "../../lib/API";

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API
      .get("/user/")
      .then((res) => {
          setUsers(res.data.data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);

  return (
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-semibold mb-4">User Management</h1>
        <div className="overflow-auto max-h-96">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">id</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.phone}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default UserPage;
