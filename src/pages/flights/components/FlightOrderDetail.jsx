import { FaPlaneDeparture } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

function FlightOrderDetail() {
    return (
        <>
            <div className="m-5">
                <a className="font-bold text-3xl">Detail Pesanan Penerangan</a>
                <div className="p-5 mt-3 bg-gray-200 rounded-2xl">
                    <a className="font-bold flex flex-wrap items-center"><FaPlaneDeparture className="mr-3"/> Departure Flight</a>
                    <div className="flex flex-wrap justify-between items-center">
                        <a className="font-bold text-2xl">Senin, 14 Juni 2021</a>
                        <div className="py-3 flex flex-wrap items-center">
                            <div className="flex flex-col items-start">
                                <a className="mr-5 font-bold">Balikpapan</a>
                                <a className="my-1">(WALL)</a>
                            </div>
                            <a className="flex flex-wrap items-center pr-3">---<IoAirplaneSharp className="mx-1"/>---</a>
                            <div className="flex flex-col items-start">
                                <a className="mr-5 font-bold">Tokyo</a>
                                <a className="my-1">(RJTT)</a>
                            </div>
                        </div>
                        <a className="mx-5 font-bold">Citilink</a>
                        <div className="flex flex-wrap items-center">
                            <a className="font-bold mr-3">15:15</a>
                            <IoChevronForwardOutline />
                            <div className="mx-5 flex flex-col items-center">
                                <a className="font-bold">8h 00m</a>
                                <a className="text-red-300">No Transit</a>
                            </div>
                            <IoChevronForwardOutline />
                            <a className="font-bold ml-3">23:15</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightOrderDetail