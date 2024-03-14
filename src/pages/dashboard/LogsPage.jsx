import React, { useEffect, useState } from 'react';
import API from "../../lib/API";

function LogsPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    API
      .get("/log/")
      .then((res) => {
          setLogs(res.data.data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);

  return (
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
                <td className="border px-4 py-2">{log.Pengguna.name}</td>
                <td className="border px-4 py-2">{log.pesan}</td>
                <td className="border px-4 py-2">{log.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsPage;