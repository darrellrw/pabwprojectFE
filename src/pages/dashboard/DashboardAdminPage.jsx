import React from 'react';
import Sidebar from '../../components/Sidebar';


const AdminPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-semibold mb-4">Admin Page</h1>
        <p>Welcome to the admin page! Here you can manage users, products, and orders.</p>
      </div>
    </div>
  );
};

export default AdminPage;