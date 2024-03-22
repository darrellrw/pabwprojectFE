function FlightPaymentDetail() {
    return (
        <>
            <div className="m-5">
                <a className="font-bold text-3xl">Rincian Pemayaran</a>
                <div className="p-5 mt-3 bg-gray-200 rounded-2xl">

                    <div className="flex flex-wrap justify-between">
                        <a className="text-lg">Total Biaya</a>
                        <a className="text-lg text-[#588157]">Rp 10.000.000</a>
                    </div>
                </div>

                <button type="submit" className="mt-5 p-3 w-full text-white bg-[#588157] rounded-xl">Selanjutnya</button>
            </div>
        </>
    )
}

export default FlightPaymentDetail