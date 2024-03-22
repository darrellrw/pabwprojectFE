import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';

const Log = () => {
  const [logs, setLogs] = useState([]);

  // Fungsi untuk menambahkan log baru
  const addLog = (name, activity) => {
    const timestamp = new Date().toLocaleString();
    const newLog = { name, activity, timestamp };
    setLogs(prevLogs => [...prevLogs, newLog]);
  };

  useEffect(() => {
    addLog('John Doe', 'Login'); // Add initial log entry only once
  }, []);

  return (
    
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-semibold mb-4">Activity Log</h1>
        <div className="overflow-auto max-h-96">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Activity</th>
                <th className="px-4 py-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{log.name}</td>
                  <td className="border px-4 py-2">{log.activity}</td>
                  <td className="border px-4 py-2">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Log;
