import { IoSearch } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

function FlightMainSearch() {
    return (
        <div className="relative">
            <img src="/worldmap.png" className="object-cover absolute -z-10 min-h-screen"></img>
            <div className="px-[20%] py-5 min-h-screen flex flex-col justify-around">
                <div className="">
                    <div className="mb-10 flex flex-col justify-center items-center">
                        <a className="font-bold text-4xl mb-5">Temukan Dunia Baru,</a>
                        <a className="font-bold text-4xl">Berpergian Ke Mana Saja Sekarang!</a>
                    </div>

                    <div className="flex flex-wrap justify-between px-[5%] py-10 my-5 bg-gray-200 rounded-xl">
                        <div className="flex flex-col grow pr-5">  
                            <a className="font-bold flex flex-wrap items-center"><FaPlaneDeparture className="mr-3"/>Dari</a>
                            <input id="from-textbox" type="text" name="from-textbox" placeholder="Penerbangan dari?" className="border-b-2 border-gray-400 outline-none appearance-none bg-transparent"></input>
                        </div>

                        <div className="flex flex-col grow px-5">
                            <a className="font-bold flex flex-wrap items-center"><FaPlaneArrival className="mr-3"/> Tujuan</a>
                            <input id="detination-textbox" type="text" name="detination-textbox" placeholder="Menuju?" className="border-b-2 border-gray-400 outline-none appearance-none bg-transparent"></input>
                        </div>

                        <div className="flex flex-col grow px-5">
                            <a className="font-bold flex flex-wrap items-center"><FaRegCalendarAlt className="mr-3"/> Berangkat</a>
                            <input id="date-depart-textbox" type="date" name="date-depart-textbox" placeholder="DD/MM/YYYY" className="border-b-2 border-gray-400 outline-none appearance-none bg-transparent"></input>
                        </div>

                        <button type="submit" className="p-3 m-2 text-white bg-[#588157] rounded-xl"><IoSearch /></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FlightMainSearch