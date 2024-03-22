import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  // Mengambil data pengguna saat komponen dimuat
  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUsers(); // Mengambil data pengguna dari backend
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
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
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">{user.registrationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
