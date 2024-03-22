import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/Bali.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk memverifikasi email di sini
    console.log("Verifikasi email:", email);
  };

  return (
    <>
      <div className="min-h-screen relative flex items-center justify-center" style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}>
        <div className="bg-[#247558] border border-slate-400 round-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
          <div className="text-center  flex justify-center items-center">
            <img className="h-[2.5rem] w-[2.5rem] relative mr-2" alt="" src="../../group-7529.svg" />
            <h2 className="text-white m-0 relative tracking-[0.15em] uppercase font-medium font-inherit whitespace-nowrap text-3xl">ONMYWAY.</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="email" className="block text-black py-5 text-left font-poppins -mb-5 ml-1">
                Email Address <span className="text-red-500"> * </span>
              </label>
              <input type="email" id="email" className="w-full border rounded border-slate-800 py-1.5 px-3 md:w-80 lg:w-80 sm:w-80" required value={email} onChange={handleEmailChange} />
            </div>
            <button type="submit" className="bg-[#247558] hover-bg-slate-900 hover-text-slate-200 text-white hover-border-slate-900 py-3 px-4 rounded w-full font-poppins font-bold mb-4">
              Verify Email
            </button>
          </form>
          <div className="mb-4 flex mt-3 ml-1 items-center justify-between">
            <Link to={"/login"} className="text-black text-xs lg:text-sm sm:text-sm mr-4">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
