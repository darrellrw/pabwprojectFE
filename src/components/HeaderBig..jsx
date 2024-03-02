function HeaderBig() {
    return (
        <>
            <img src="../../placeholder.jpg" className="object-none h-48 w-full"></img>
            <nav className="absolute inset-0 bg-gradient-to-l from-transparent to-[#588157] px-[5%] py-2 h-48 w-full">
                <div className="flex flex-wrap justify-between items-center">
                    <a className="flex items-center text-white">
                        
                        <span className="uppercase">OnMyWay.</span>
                    </a>
                    <ul className="flex flex-row">
                        <li className="m-2">
                            <a className="py-2 px-4 text-white text-center block hover:text-blue-400 uppercase" href="#">Home</a>
                        </li>
                        <li className="m-2">
                            <a className="py-2 px-4 text-white text-center block hover:text-blue-400 uppercase" href="#">Pemesanan</a>
                        </li>
                        <li className="m-2">
                            <a className="py-2 px-4 text-white text-center block hover:text-blue-400 uppercase" href="#">Top-up</a>
                        </li>
                    </ul>
                    <a className="px-8 py-3 bg-[#F3ECDC] rounded-full uppercase" href="#">Get Started</a>
                </div>
                <div className="my-5">
                    <a>Homepage</a>
                    <h1 className="">List Hotel</h1>
                    <p>Hallo Abang ku</p>
                </div>
            </nav>
        </>
    )
}

export default HeaderBig