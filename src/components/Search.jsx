const Search = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[0.75rem] box-border max-w-full text-left text-[0.75rem] text-dimgray-300 font-inter">
        <div className="flex-1 rounded-3xl bg-floralwhite-100 box-border flex flex-row items-start justify-between py-[0.313rem] pr-[1.75rem] pl-[1.063rem] max-w-full gap-[1.25rem] border-[1px] border-solid border-darkgray mq750:flex-wrap">
          <div className="w-[20.188rem] flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.188rem] mq450:flex-wrap">
              <img
                className="h-[1.875rem] w-[1.875rem] relative overflow-hidden shrink-0 min-h-[1.875rem]"
                loading="lazy"
                alt=""
                src="../../material-symbols_search.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] box-border min-w-[11.125rem]">
                <div className="self-stretch relative leading-[1.744rem]">
                  <input type="text" placeholder="Cari Kota yang dituju" className="w-full [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[1.125rem] text-lightgray-200 text-left inline-block min-w-[14.375rem] whitespace-nowrap max-w-full p-0"/>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#344E41] rounded-3xl cursor-pointer py-[0.938rem] px-[2.125rem] bg-primary w-[8.813rem] rounded-79xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-darkgray hover:bg-darkseagreen hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200 text-white">
            <b className="flex-1 relative text-[0.938rem] leading-[1.744rem] font-inter text-oldlace text-center">
              Cari
            </b>
          </button>
        </div>
      </div>
    );
  };
  
  export default Search;
  