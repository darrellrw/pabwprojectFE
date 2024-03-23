import eyeIcon from "../../assets/eye.svg";
import hideEye from "../../assets/hide-eye.svg";
import Background from "../../assets/Bali.svg";
import Logo from "/icon.png";

import API from "../../lib/API";

import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
    const [cookie, setCookie] = useCookies(["token"]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [role, setRole] = useState(2);

    const navigate = useNavigate();

    useEffect(() => {
        if (cookie["token"]) {
            navigate("/")
        }
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password == passwordConfirm) {
            API
                .post("/user/register", { name, email, phone, password, role })
                .then((res) => {
                    console.log(res);
                    navigate("/login")
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            console.log("Password dan Retype Password tidak sesuai");
        }
    }

    return (
        <>
            <div className="min-h-screen relative flex items-center justify-center" style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}>
                <div className="bg-[#247558] border border-slate-400 round-md p-8 shodow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
                    <div className="text-center  flex justify-center items-center">
                        <img className="h-[2.5rem] w-[2.5rem] relative mr-2" alt="" src={Logo} />
                        <h2 className="text-white m-0 relative tracking-[0.15em] uppercase font-medium font-inherit whitespace-nowrap text-3xl">ONMYWAY.</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-black py-5 text-left font-poppins -mb-5 ml-1">
                                Nama <span className="text-red-500"> * </span>
                            </label>
                            <input type="name" id="name" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="phone" className="block text-black py-5 text-left font-poppins -mb-5 ml-1">
                                Nomor Handphone <span className="text-red-500"> * </span>
                            </label>
                            <input type="phone" id="phone" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-black py-5 text-left font-poppins -mb-5 ml-1">
                                Alamat Email <span className="text-red-500"> * </span>
                            </label>
                            <input type="email" id="email" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="-mt-5">
                            <label htmlFor="password" className="block text-black py-5 text-left font-poppins -mb-5 ml-1">
                                Password <span className="text-red-600"> * </span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} id="password" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <span className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <img src={eyeIcon} alt="eyes" /> : <img src={hideEye} alt="hide" />}
                                </span>
                            </div>
                        </div>
                        <div className="-mt-5">
                            <label htmlFor="password" className="block text-black py-5 text-left font-poppins -mb-5 ml-1">
                                Retype Password <span className="text-red-600"> * </span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} id="passwordConfirm" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
                                <span className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <img src={eyeIcon} alt="eyes" /> : <img src={hideEye} alt="hide" />}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4 flex mt-3 ml-1 items-center justify-between">
                            <label htmlFor="remember" className="text-gray-600 lg:text-lg sm:text-sm mr-4"></label>
                        </div>

                        <button type="submit" className="bg-[#247558]  hover-bg-slate-900 hover-text-slate-200 text-white hover-border-slate-900 py-3 px-4 rounded w-full font-poppins font-bold mb-4">
                        Register
                        </button>
                        <div className="mb-4 flex mt-3 ml-1 items-center justify-between">
                            <Link to={"/login"} className="text-black text-xs lg:text-sm sm:text-sm mr-4">
                                Back to Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;