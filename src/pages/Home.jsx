import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import HeaderBig from "../components/HeaderBig";
import Footer from "../components/Footer";


const Home = () => {
  const navigate = useNavigate();

  const onIconCariHotel = useCallback(() => {
    navigate("/list-hotel");
  }, [navigate]);

//   const onIconCariPesawat = useCallback(() => {
//   }, []);


  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal]">
      <HeaderBig/>
      <section className="self-stretch bg-oldlace overflow-hidden flex flex-row items-end justify-between py-[4.188rem] px-[6.25rem] box-border min-h-[29.625rem] max-w-full gap-[1.25rem] text-left text-[2.5rem] text-secondary font-icon-small mq450:py-[2.75rem] mq450:px-[1.25rem] mq450:box-border mq1050:flex-wrap mq725:pl-[3.125rem] mq725:pr-[3.125rem] mq725:box-border text-white">
      <div
        className="bg-[#344E41] w-[26.063rem] rounded-3xl bg-accent flex flex-col items-center justify-start pt-[4.563rem] px-[1.25rem] pb-[2.25rem] box-border relative gap-[0.813rem] max-w-full cursor-pointer z-[1]"
        onClick={onIconCariHotel}
      >
        <div className="w-[12rem] flex flex-row items-start justify-start py-[0rem] px-[2.688rem] box-border">
          <img
            className="h-[8.063rem] flex-1 relative max-w-full overflow-hidden z-[1]"
            loading="lazy"
            alt=""
            src="../../IconHotel.svg"
          />
        </div>
        <h1 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-[1.5rem] mq1000:text-[2rem]">
          Cari Hotel
        </h1>
      </div>
      <div
        className="bg-[#344E41] w-[26.063rem] rounded-3xl bg-accent flex flex-col items-center justify-start pt-[4.563rem] px-[1.25rem] pb-[2.25rem] box-border relative gap-[0.813rem] max-w-full cursor-pointer z-[1]"
        // onClick={onIconCariPesawat}
      >
        <div className="w-[12rem] flex flex-row items-start justify-start py-[0rem] px-[2.688rem] box-border">
          <img
            className="h-[8.063rem] flex-1 relative max-w-full overflow-hidden z-[1]"
            loading="lazy"
            alt=""
            src="../../IconPlane.svg"
          />
        </div>
        <h1 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-[1.5rem] mq1000:text-[2rem]">
          Cari Tiket Pesawat
        </h1>
      </div>
    </section>
      <Footer/>
    </div>
  );
};

export default Home;