import { FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

function FlightPassengerDetail() {
    return (
        <>
            <div className="m-5">
                <a className="font-bold text-3xl">Detail Penumpang</a>
                <div className="p-5 mt-3 bg-gray-200 rounded-2xl">
                    <a className="font-bold flex flex-wrap items-center"><FaUser className="mr-3"/> Informasi Penumpang</a>
                    <div className="mt-5 flex flex-col">
                        <div className="grid grid-cols-2 gap-10">
                            <div className="">
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                                <input type="text" id="first_name" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
                            </div>
                            <div className="">
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                                <input type="text" id="last_name" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Doe" required />
                            </div>

                            <div className="">
                                <label htmlFor="nik_ktp" className="block mb-2 text-sm font-medium text-gray-900">NIK</label>
                                <input type="text" id="nik_ktp" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="1234567890" required />
                            </div>
                            <div className="">
                                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                                <input type="text" id="gender" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="0 or 1" required />
                            </div>
                        </div>
                    </div>

                    <a className="mt-10 font-bold flex flex-wrap items-center"><MdContactPhone className="mr-3"/> Informasi Kontak Penumpang</a>
                    <div className="mt-5 flex flex-col">
                        <div className="grid grid-cols-2 gap-10">
                            <div className="">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-Mail</label>
                                <input type="text" id="email" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="example@mail.com" required />
                            </div>
                            <div className="">
                                <label htmlFor="phone-num" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                                <input type="text" id="phone-num" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="(+62) 1234567890" required />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightPassengerDetail