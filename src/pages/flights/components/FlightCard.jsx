import { IoAirplaneSharp } from "react-icons/io5";

function FlightCard() {
    return (
        <>
            <div className="m-5">
                <div className="bg-gray-100 rounded-xl p-5">
                    <div className="flex justify-between">
                        <a className="font-bold">Citilink</a>
                        <a className="text-red-500">3 seats left</a>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="flex justify-between items-center">
                            <a>15:00</a>
                            <a className="mx-5 text-xs text-red-300 flex flex-col items-center"><IoAirplaneSharp className="text-black"/> No Transit</a>
                            <a>21:00</a>
                        </div>
                        <a className="font-bold text-[#588157] ml-12">Rp 5.000.000</a>
                    </div>
                </div>
                <button type="submit" className="p-3 w-full text-white bg-[#588157] rounded-b-xl">Pilih</button>
            </div>
        </>
    )
}

export default FlightCard