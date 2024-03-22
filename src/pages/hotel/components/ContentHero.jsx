import { Link } from "react-router-dom";


const ContentHero = () => {

  return (
    <div className="w-[77.5rem] flex flex-row items-start justify-start gap-[0rem_3.75rem] max-w-full text-left text-[3.438rem] text-oldlace font-icon-small mq1050:flex-wrap mq750:gap-[0rem_1.875rem]">
      <div className="w-[44.5rem] flex flex-col items-start justify-start gap-[1.563rem_0rem] min-w-[44.5rem] max-w-full mq1050:flex-1 mq1050:min-w-full">
        <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[0rem_1.125rem] whitespace-nowrap text-left text-[0.938rem] text-secondary font-accent mq450:flex-wrap">
          <Link
            className="relative tracking-[0.15em] uppercase font-semibold cursor-pointer text-[#A3B18A]"
            to={"/"}
          >
            Homepage
          </Link>
          <div className="w-[0.625rem] relative inline-block mq450:text-[1rem] mq450:w-full mq450:h-[0.525rem]">
          <img
                className="inline-block mq450:text-[1rem] mq450:w-full mq450:h-[0.2rem]"
                alt=""
                src="../../caret-right.svg"
              />
          </div>
          <div className="relative tracking-[0.15em] uppercase font-semibold text-white-transparent">
            List HOtel
          </div>
        </nav>
        <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-[2.063rem] mq1050:text-[2.75rem]">
          List Hotel
        </h1>
        <div className="self-stretch relative text-[1.125rem] leading-[1.813rem] font-accent text-white-transparent">
          Segera pilih list apartemen impian anda dibawah ini.
        </div>
      </div>
      <div className="h-[10.813rem] w-[29.25rem] overflow-hidden min-w-[19rem] max-w-full" />
    </div>
  );
};

export default ContentHero;