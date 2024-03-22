import { Link } from "react-router-dom";


const CardBiaya = () => {
    

  return (
    <div className="w-[27.063rem] flex flex-col items-start justify-start gap-[2rem_0rem] min-w-[27.063rem] max-w-full text-left text-[1.125rem] text-darkslategray-100 font-montserrat lg:flex-1 mq450:gap-[1rem_0rem] mq750:min-w-full">
      <div className="self-stretch rounded-2xl bg-white box-border flex flex-col items-start justify-start pt-[1.813rem] pb-[1.188rem] pr-[1.438rem] pl-[1.5rem] gap-[1.5rem_0rem] max-w-full shrink-0 border-[1px] border-solid border-cornflowerblue-200">
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[0.344rem] px-[0rem] pb-[0rem]">
            <div className="relative font-medium">
              Total Biaya
            </div>
          </div>
          <b className="relative text-[1.75rem] font-raleway text-primary text-right whitespace-nowrap mq450:text-[1.375rem]">
            Rp 9.422.790
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.331rem] max-w-full text-[0.875rem] mq450:flex-wrap">
        <input type="checkbox" id="confirm" name="confirm"/>
        <label className="flex-1 relative leading-[1.5rem] inline-block font-medium min-w-[13.688rem] max-w-full"> Saya telah meninjau dan menyetujui tarif dan komisi yang ditawarkan untuk pemesanan ini</label>
        <Link to="/hotel/pemesanan">
        <button className="bg-[#344E41] cursor-pointer [border:none] py-[1.25rem] px-[1.25rem] bg-primary self-stretch rounded-lg flex flex-row items-start justify-center hover:bg-darkseagreen">
            <b className="w-[5.18rem] relative text-[0.875rem] flex font-montserrat text-white text-center items-center justify-center shrink-0">Selanjutnya</b>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBiaya;
