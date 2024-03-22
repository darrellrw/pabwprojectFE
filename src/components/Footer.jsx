import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <footer className="bg-[#344E41] self-stretch bg-accent overflow-hidden flex flex-col items-center justify-start pt-[6.25rem] px-[1.25rem] pb-[2.625rem] box-border gap-[3.75rem_0rem] max-w-full text-left text-[1.875rem] text-oldlace font-icon-small mq725:gap-[1.875rem_0rem] mq725:pt-[4.063rem] mq725:pb-[3rem] mq725:box-border text-white">
        <div className="w-[77.5rem] overflow-hidden flex flex-row items-start justify-start gap-[0rem_1.875rem] max-w-full mq1050:flex-wrap ">
          <div className="flex-[0.8465] overflow-hidden flex flex-col items-start justify-start py-[0rem] pr-[3.75rem] pl-[0rem] box-border gap-[1.563rem_0rem] min-w-[18.313rem] min-h-[13.75rem] max-w-full text-white font-poppins mq450:pr-[1.25rem] mq450:box-border mq450:flex-1 mq1050:min-h-[auto]">
            <div className="w-[11.625rem] h-[2.375rem] flex flex-row items-center justify-start gap-[0rem_0.375rem]">
              <img
                className="h-[2.375rem] w-[2.375rem] relative"
                alt=""
                src="../../group-7529.svg"
              />
              <h2 className="m-0 relative text-inherit tracking-[0.15em] uppercase font-medium font-inherit shrink-0 mq450:text-[1.125rem] mq1000:text-[1.5rem]">
                ONMYWAY.
              </h2>
            </div>
            <div className="self-stretch relative text-[1.125rem] leading-[1.813rem] font-accent text-white-transparent">
              Layanan pemesanan hotel dan tiket pesawat terbaik di Indoensia
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1.563rem_0rem] min-w-[18.438rem] max-w-full text-[1.563rem]">
            <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-[1.25rem]">
              Quick Links
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.938rem_0rem] max-w-full text-[1.125rem] text-white-transparent font-accent">
              <Link
                className="self-stretch flex flex-row items-center justify-start max-w-full cursor-pointer"
                to={"/"}
              >
                <div className="flex-1 relative leading-[1.813rem] inline-block max-w-full">
                  Home
                </div>
              </Link>
              <Link
                className="self-stretch flex flex-row items-center justify-start max-w-full cursor-pointer"
                to={"/hotel"}
              >
                <div className="flex-1 relative leading-[1.813rem] inline-block max-w-full">
                  Cari Hotel
                </div>
              </Link>
              <div
                className="self-stretch flex flex-row items-center justify-start max-w-full cursor-pointer"
                // onClick={onIconCariPesawat}
              >
                <div className="flex-1 relative leading-[1.813rem] inline-block max-w-full">
                  Cari Tiket Pesawat
                </div>
              </div>
              <Link
                className="self-stretch flex flex-row items-center justify-start max-w-full cursor-pointer"
                to={"/topup"}
              >
                <div className="flex-1 relative leading-[1.813rem] inline-block max-w-full">
                  Top-Up
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1.563rem_0rem] min-w-[18.438rem] max-w-full text-[1.25rem]">
            <h3 className="m-0 self-stretch relative text-[1.563rem] font-normal font-inherit mq450:text-[1.25rem]">
              Tetap bersama kami
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_0.938rem] max-w-full mq450:flex-wrap">
                <img
                className="w-[1.125rem] leading-[1.813rem] relative inline-block mq450:text-[1rem] mq450:w-full mq450:h-[0.813rem]"
                alt=""
                src="../../IconLocation.svg"
              />
                <div className="flex-1 relative text-[1.125rem] leading-[1.813rem] font-accent text-white-transparent inline-block min-w-[7.5rem] max-w-full">
                  Jakarta, Indonesia
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_0.938rem] max-w-full mq450:flex-wrap">
                <img
                className="w-[1.125rem] leading-[1.813rem] relative inline-block mq450:text-[1rem] mq450:w-full mq450:h-[0.813rem]"
                alt=""
                src="../../IconEmail.svg"
              />
                <div className="flex-1 relative text-[1.125rem] leading-[1.813rem] font-accent text-white-transparent inline-block min-w-[7.5rem] max-w-full">
                Hello@Email.com
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_0.938rem] max-w-full mq450:flex-wrap">
                <img
                className="w-[1.125rem] leading-[1.813rem] relative inline-block mq450:text-[1rem] mq450:w-full mq450:h-[0.813rem]"
                alt=""
                src="../../IconPhone.svg"
              />
                <div className="flex-1 relative text-[1.125rem] leading-[1.813rem] font-accent text-white-transparent inline-block min-w-[7.5rem] max-w-full">
                ( +62 ) 123 456 789
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[77.5rem] box-border overflow-hidden flex flex-col items-center justify-start pt-[1.5rem] px-[0rem] pb-[0rem] max-w-full text-center text-[0.938rem] font-accent border-t-[1px] border-solid border-border-transparent">
          <div className="self-stretch relative tracking-[0.15em] uppercase font-semibold">
            Copyright diesnatalis
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  