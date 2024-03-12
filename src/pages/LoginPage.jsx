import { useState } from "react";
import { Link } from "react-router-dom";
import eyeIcon from "../assets/eye.svg";
import hideEye from "../assets/hide-eye.svg";
import Background from "../assets/Bali.svg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="min-h-screen relative flex items-center justify-center" style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}>
        <div className="bg-[#247558] border border-slate-400 round-md p-8 shodow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
          <div className="text-center  flex justify-center items-center">
            <img className="h-[2.5rem] w-[2.5rem] relative mr-2" alt="" src="../../group-7529.svg" />
            <h2 className="text-white m-0 relative tracking-[0.15em] uppercase font-medium font-inherit whitespace-nowrap text-3xl">ONMYWAY.</h2>
          </div>
          <form>
            <div className="mb-2">
              <label htmlFor="email" className="block text-black py-5 text-left font-poppins -mb-5 ml-1">
                Alamat Email <span className="text-red-500"> * </span>
              </label>
              <input type="email" id="email" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" required />
            </div>
            <div className="-mt-5">
              <label htmlFor="password" className="block text-black py-5 text-left font-poppins -mb-5 ml-1">
                Password <span className="text-red-600"> * </span>
              </label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} id="password" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" required />
                <span className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <img src={eyeIcon} alt="eyes" /> : <img src={hideEye} alt="hide" />}
                </span>
              </div>
            </div>
            <div className="mb-4 flex mt-3 ml-1 items-center justify-between">
              <label htmlFor="remember" className="text-gray-600 lg:text-lg sm:text-sm mr-4"></label>
            </div>

            <button type="submit" className="bg-[#247558]  hover-bg-slate-900 hover-text-slate-200 text-white hover-border-slate-900 py-3 px-4 rounded w-full font-poppins font-bold mb-4">
              Login
            </button>
            <div className="mb-4 flex mt-3 ml-1 items-center justify-between">
              <Link to={"/ForgotPassword"} className="text-black text-xs lg:text-sm sm:text-sm mr-4">
                Lupa Password?
              </Link>
              <Link to={"/register"} className="text-black text-xs lg:text-sm sm:text-sm">
                Belum punya akun?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
