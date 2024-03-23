import React, { useState, useEffect } from "react";
import API from "../../../lib/API";

function FlightPage() {
    const [flights, setFlights] = useState([]);

    // useEffect(() => {
    //     API
    //     .get("/bandara/")
    //     .then((res) => {
    //         setAirports(res.data.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }, []);

    return (
        <>
            <div className="flex-1 p-4">
                <h1 className="text-3xl font-semibold mb-4">Flight Management</h1>
                <div className="overflow-auto max-h-96">
                    <table className="table-auto w-full">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">id</th>
                            <th className="px-4 py-2">Pesawat</th>
                            <th className="px-4 py-2">Asal</th>
                            <th className="px-4 py-2">Tujuan</th>
                        </tr>
                        </thead>
                        <tbody>
                        {flights.map((flight, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{flight.id}</td>
                                <td className="border px-4 py-2">{flight.name}</td>
                                <td className="border px-4 py-2">{flight.icao_code}</td>
                                <td className="border px-4 py-2">{flight.city}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default FlightPage;