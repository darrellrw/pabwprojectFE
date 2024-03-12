function Header() {
    return (
        <>
            <nav className="bg-[#588157] px-[5%] py-2">
                <div className="flex flex-wrap justify-between items-center">
                    <a className="flex items-center text-white text-2xl">
                        <img src="../../icon.png" className="mr-5"></img>
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
                    <a className="px-8 py-3 bg-[#F3ECDC] rounded-full uppercase" href="#">Login</a>
                </div>
            </nav>
        </>
    )
}

export default Header