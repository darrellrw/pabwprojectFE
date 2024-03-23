import React, { useState, useEffect } from "react";
import API from "../../../lib/API";

import AirportAddModal from "../components/AirportAddModal";

function AirportPage() {
    const [airports, setAirports] = useState([]);

    const [addAirport, setAddAirport] = useState(false);

    const toggleAddVisibility = () => {
        setAddAirport(!addAirport);
    };

    useEffect(() => {
        API
        .get("/bandara/")
        .then((res) => {
            setAirports(res.data.bandara);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>  {
                addAirport ? <AirportAddModal addAirport={addAirport} setAddAirport={setAddAirport}/> : ""
            }
            <div className="flex-1 p-4">
                <h1 className="text-3xl font-semibold mb-4">Airport Management</h1>
                <div className="py-5 px-10 flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => toggleAddVisibility()}>
                        Add Airport
                    </button>
                </div>
                <div className="overflow-auto max-h-96">
                    <table className="table-auto w-full">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">ICAO</th>
                            <th className="px-4 py-2">City</th>
                        </tr>
                        </thead>
                        <tbody>
                        {airports.map((airport, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{airport.id}</td>
                                <td className="border px-4 py-2">{airport.name}</td>
                                <td className="border px-4 py-2">{airport.icao_code}</td>
                                <td className="border px-4 py-2">{airport.city}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AirportPage;