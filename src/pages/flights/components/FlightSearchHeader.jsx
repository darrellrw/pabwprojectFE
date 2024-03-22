import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

function FlightSearchHeader() {
    return (
        <>
            <div className="p-5 flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                    <a className="mx-5 font-bold flex flex-wrap items-center"><FaPlaneDeparture className="mr-3"/> Balikpapan (WALL)</a>
                    <a>-</a>
                    <a className="mx-5 font-bold flex flex-wrap items-center"><FaPlaneArrival className="mr-3"/>Tokyo (RJTT)</a>
                </div>
                <div className="inline-block h-10 w-0.5 self-stretch bg-black opacity-100"></div>
                <div className="flex flex-col items-center">
                    <a className="font-bold flex flex-wrap items-center"><FaRegCalendarAlt className="mr-3"/> Berangkat</a>
                    <a>Senin, 14 Juni 2021</a>
                </div>
                <div className="inline-block h-10 w-0.5 self-stretch bg-black opacity-100"></div>
                <button type="submit" className="p-3 text-white bg-[#588157] rounded-xl">Cari Tiket Lain</button>
            </div>
        </>
    )
}

export default FlightSearchHeader