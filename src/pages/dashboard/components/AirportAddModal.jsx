import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import API from "../../../lib/API";

function AirportAddModal({addAirport, setAddAirport}) {
    const [name, setName] = useState("");
    const [icao_code, setICAO] = useState("");
    const [city, setCity] = useState("");

    const toggleAddVisibility = () => {
        setAddAirport(!addAirport);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ name, icao_code, city });

        API
            .post("/bandara/add", { name, icao_code, city })
            .then((res) => {
                window.location.reload(false);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full h-full max-h-full bg-black/50">
                <div className="relative m-auto p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Add Airport
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => toggleAddVisibility()}>
                                <IoMdClose />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-4 md:p-5 space-y-4">
                                <div className="mb-2">
                                    <label htmlFor="name" className="block text-black py-5 text-left font-poppins">
                                        Name <span className="text-red-500"> * </span>
                                    </label>
                                    <input type="text" id="name" className="w-full border rounded border-slate-800 py-1.5 px-3" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="icao" className="block text-black py-5 text-left font-poppins">
                                        ICAO <span className="text-red-500"> * </span>
                                    </label>
                                    <input type="text" id="icao" className="w-full border rounded border-slate-800 py-1.5 px-3" value={icao_code} onChange={(e) => setICAO(e.target.value)} required />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="city" className="block text-black py-5 text-left font-poppins">
                                        City <span className="text-red-500"> * </span>
                                    </label>
                                    <input type="text" id="city" className="w-full border rounded border-slate-800 py-1.5 px-3" value={city} onChange={(e) => setCity(e.target.value)} required />
                                </div>
                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                                <button type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={() => toggleAddVisibility()}>Back</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AirportAddModal;