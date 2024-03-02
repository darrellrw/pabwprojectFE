function Footer() {
    return (
        <>
            <footer className="bg-[#344E41] px-[15%] py-8 absolute inset-x-0 bottom-0">
                <div className="flex flex-wrap justify-between items-start">
                    <div className="">
                        <a className="flex items-center text-white text-2xl pb-5">
                            <img src="../../icon.png" className="mr-5"></img>
                            <span className="uppercase">OnMyWay.</span>
                        </a>
                        <p className="text-white">Layanan pemesanan hotel dan tiket pesawat terbaik di Indonesia</p>
                    </div>
                    <div className="">
                        <h2 className="text-white text-2xl text-[#F3ECDC]">Quick Links</h2>
                        <ul className="">
                            <li className="m-2">
                                <a className="py-2 px-4 text-white block hover:text-blue-400" href="#">Home</a>
                            </li>
                            <li className="m-2">
                                <a className="py-2 px-4 text-white block hover:text-blue-400" href="#">Pemesanan</a>
                            </li>
                            <li className="m-2">
                                <a className="py-2 px-4 text-white block hover:text-blue-400" href="#">Top-up</a>
                            </li>
                        </ul>
                    </div>
                    <div className="pr-[15%]">
                        <h2 className="text-white text-2xl text-[#F3ECDC]">Tetap Bersama Kami</h2>
                        <ul className="">
                            <li className="m-2">
                                <a className="py-2 px-4 text-white block hover:text-blue-400" href="#">Balikpapan, Indonesia</a>
                            </li>
                            <li className="m-2">
                                <a className="py-2 px-4 text-white block hover:text-blue-400" href="#">pabwkel3@itk.ac.id</a>
                            </li>
                            <li className="m-2">
                                <a className="py-2 px-4 text-white block hover:text-blue-400" href="#">(+62)123 456 789</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr class="my-4 border-gray-900"></hr>
                <div className="text-center">
                    <a className="">Copyright</a>
                </div>
            </footer>
        </>
    )
}

export default Footer