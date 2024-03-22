import { Link} from "react-router-dom";

const CardHotel = () => {

  return (
    <section className="w-[67.625rem] rounded-3xl flex flex-col items-start justify-start gap-[1.563rem_0rem] max-w-full text-left text-[1.363rem] text-darkslategray-200 font-inter">
      <div className="w-[55.75rem] rounded-3xl bg-white shadow-[0px_10px_25px_rgba(0,_0,_0,_0.07)] flex flex-col items-start justify-start py-[2.25rem] px-[2.75rem] box-border max-w-full text-[1.444rem] mq450:pt-[1.438rem] mq450:pb-[1.438rem] mq450:box-border mq1050:pl-[1.375rem] mq1050:pr-[1.375rem] mq1050:box-border">
        <div className="w-full flex flex-col items-start justify-start pt-[0rem] pb-[1.5rem] px-[0rem] box-border max-w-[27.875rem] mq450:max-w-full">
          <div className="w-[20.563rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.514rem] box-border max-w-[27.875rem] mq450:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.18px] leading-[1.995rem] inline-block max-h-[1.995rem] mq450:text-[1.125rem] mq450:leading-[1.625rem]">
                Hotel Indonesia
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start mt-[-0.003rem] text-[1.044rem]">
              <div className="relative tracking-[-0.04px] leading-[1.744rem] inline-block max-h-[1.744rem]">
                Jakarta Pusat
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] box-border max-w-full text-[0.594rem]">
          <div className="flex-1 rounded-mini overflow-hidden flex flex-row items-start justify-start min-w-[20.938rem] max-w-[50.25rem] mq1050:max-w-full">
            <div className="flex-1 overflow-hidden flex flex-row items-end justify-start py-[0.625rem] px-[0rem] box-border relative min-h-[18.75rem] max-w-full">
              <img
                className="rounded-3xl h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="../../HotelIndonesia.svg"
              />
              <div className="flex-1 flex flex-row items-start justify-center pt-[0.313rem] px-[1.25rem] pb-[0.4rem] box-border gap-[0rem_0.375rem] max-w-full z-[1] mq450:flex-wrap">
                <div className="h-[0.438rem] w-[0.438rem] relative rounded-6xs bg-floralwhite-100 mq450:w-full" />
                <div className="h-[0.438rem] w-[0.438rem] relative rounded-6xs bg-floralwhite-200 mq450:w-full" />
                <div className="h-[0.438rem] w-[0.438rem] relative rounded-6xs bg-floralwhite-200 mq450:w-full" />
                <div className="h-[0.438rem] w-[0.438rem] relative rounded-6xs bg-floralwhite-200 mq450:w-full" />
                <div className="h-[0.438rem] w-[0.438rem] relative rounded-6xs bg-floralwhite-200 mq450:w-full" />
              </div>
            </div>
          </div>
          <div className="w-[19rem] flex flex-col items-start justify-start py-[0rem] px-[2.5rem] box-border gap-[1rem_0rem] ml-[-0.25rem]">
            <div className="relative tracking-[0.6px] leading-[0.75rem]">{`JENIS KAMAR & HARGA /MALAM`}</div>
            <div className="w-[17.375rem] flex flex-col items-end justify-start gap-[1.494rem_0rem] text-[0.825rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-between pt-[0.5rem] px-[0rem] pb-[0.75rem] gap-[1.25rem] text-[0.85rem] border-b-[4px] border-solid border-gray mq450:flex-wrap">
                  <div className="relative tracking-[0.07px] leading-[1.249rem] inline-block max-h-[1.249rem]">
                    Studio
                  </div>
                  <div className="relative text-[0.806rem] tracking-[0.07px] leading-[1.249rem] inline-block max-h-[1.249rem]">
                    <span className="whitespace-pre-wrap">{`mulai  `}</span>
                    <b>Rp.200K</b>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between pt-[0.5rem] px-[0rem] pb-[0.744rem] gap-[1.25rem] border-b-[4px] border-solid border-gray mq450:flex-wrap">
                  <div className="relative tracking-[0.07px] leading-[1.249rem] inline-block max-h-[1.249rem]">
                    1 Tempat Tidur
                  </div>
                  <div className="relative text-[0.806rem] tracking-[0.07px] leading-[1.249rem] inline-block max-h-[1.249rem]">
                    <span className="whitespace-pre-wrap">{`mulai  `}</span>
                    <b>Rp.200K</b>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between py-[0.5rem] px-[0rem] gap-[1.25rem] mq450:flex-wrap">
                  <div className="relative tracking-[0.07px] leading-[1.249rem] inline-block max-h-[1.249rem]">
                    2 Tempat Tidur
                  </div>
                  <div className="relative text-[0.806rem] tracking-[0.07px] leading-[1.249rem] inline-block max-h-[1.249rem]">
                    <span className="whitespace-pre-wrap">{`mulai  `}</span>
                    <b>Rp.200K</b>
                  </div>
                </div>
              </div>
              <div className="w-[14.6rem] flex flex-row items-start justify-start py-[0rem] px-[1.125rem] box-border">
                <Link
                  className="flex-1 flex flex-col items-end justify-end pt-[4.763rem] px-[0rem] pb-[0rem] box-border min-h-[3.5rem] cursor-pointer"
                  to={"/hotel/detail"}
                >
                  <button className="bg-[#344E41] text-white rounded-3xl cursor-pointer py-[1rem] pr-[1.25rem] pl-[1.75rem] bg-primary self-stretch rounded-981xl flex flex-col items-start justify-start border-[4px] border-solid border-primary">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-[0.963rem] leading-[1.5rem] font-inter text-oldlace text-left">
                        Lihat Selengkapnya
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHotel;
