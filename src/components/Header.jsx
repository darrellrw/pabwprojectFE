import { Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="sticky px-[6.25rem] py-[0.82rem] bg-[url('./assets/header3x.png')] self-stretch flex flex-row items-start justify-between top-[0] z-[99] gap-[1.25rem] max-w-full text-left text-[1.875rem] font-poppins text-white">
        <div className="flex flex-col items-start justify-start pt-[0.469rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[0rem_0.375rem]">
            <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[2.375rem] h-[2.375rem] relative"
                loading="lazy"
                alt=""
                src="../../group-7529.svg"
              />
            </div>
            <h2 className="m-0 relative text-inherit tracking-[0.15em] uppercase font-medium font-inherit whitespace-nowrap">
              ONMYWAY.
            </h2>
          </div>
        </div>
        <div className="w-[35.75rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border max-w-full text-[0.938rem] text-white-transparent font-accent mq1000:w-[3.813rem]">
          <div className="flex flex-row items-start justify-start gap-[0rem_1.975rem] max-w-full mq725:gap-[0rem_1rem] mq1000:hidden">
            <Link to={"/"}
              className="relative tracking-[0.15em] uppercase font-semibold text-white cursor-pointer"
            >
              Home
            </Link>
            <Link to={"/hotel"}
              className="flex flex-row items-start justify-start cursor-pointer"
            >
              <div className="relative tracking-[0.15em] uppercase font-semibold whitespace-nowrap">
                Cari HOTEL
              </div>
            </Link>
            <Link to={"/flight"}
              className="flex flex-row items-start justify-start cursor-pointer"
            >
              <div className="relative tracking-[0.15em] uppercase font-semibold whitespace-nowrap">
                Cari tiket Pesawat
              </div>
            </Link>
            <Link to={"/topup"}
              className="flex flex-row items-start justify-start cursor-pointer"
            >
              <div className="relative tracking-[0.15em] uppercase font-semibold">
                Topup
              </div>
            </Link>
          </div>
        </div>
          <Link to={"/login"} className="cursor-pointer rounded-3xl bg-oldlace flex flex-row items-start justify-start py-[0.75rem] px-[2.438rem] bg-[#344E41]">
            <div className="relative text-[0.938rem] tracking-[0.15em] uppercase font-semibold font-accent text-primary text-left text-white">
              Login
            </div>
          </Link>
      </header>
    );
  };
  
  export default Header;
  
