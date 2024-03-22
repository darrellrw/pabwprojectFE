import { Link } from "react-router-dom";

const CardDetailHotel = () => {
  

  return (
    <section className="self-stretch bg-oldlace overflow-hidden flex flex-row items-end justify-between pt-[2.688rem] pb-[2.694rem] pr-[4.688rem] pl-[6.188rem] box-border min-h-[25.25rem] max-w-full gap-[1.25rem] text-left text-[1.419rem] text-darkslategray-200 font-inter mq450:pl-[1.25rem] mq450:pt-[1.75rem] mq450:pb-[1.75rem] mq450:box-border mq750:pl-[3.063rem] mq750:pr-[2.313rem] mq750:box-border mq1275:flex-wrap">
      <div className="w-[50.688rem] flex flex-row items-start justify-start gap-[0rem_1.625rem] max-w-full mq750:flex-wrap">
        <img
          className="h-[18rem] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover min-w-[19.5rem]"
          loading="lazy"
          alt=""
          src="../../SingleRoom.svg"
        />
        <div className="w-[19.063rem] flex flex-col items-start justify-start gap-[0.813rem_0rem] min-w-[19.063rem] mq750:flex-1">
          <div className="relative tracking-[-0.18px] leading-[1.995rem] mq450:text-[1.125rem] mq450:leading-[1.625rem]">
            Single Room
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.063rem_0rem] text-[0.819rem]">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem]">
                  <div className="overflow-hidden flex flex-col items-start justify-start">
                    <img
                      className="w-[1.25rem] h-[1.25rem] relative"
                      alt=""
                      src="../../BedIcon.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.07px] leading-[1.249rem] inline-block max-h-[1.249rem]">
                    25 rooms left
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-[0.975rem]">
              <div className="relative leading-[1.5rem]">
                Tersedia Fasilitas :
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.125rem]">
                <div className="relative leading-[1.5rem]">
                  <ul className="m-0 font-inherit text-inherit pl-[1.346rem] list-disc">
                    <li>Twin bed</li>
                    <li>Air Conditioning</li>
                    <li>Television</li>
                  </ul>
                </div>
                <div className="relative text-[0.931rem] leading-[1.5rem]">
                  <ul className="m-0 font-inherit text-inherit pl-[1.342rem] list-disc">
                    <li >Cable TV</li>
                    <li >Streaming device</li>
                    <li>Kamar mandi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[12.063rem] flex flex-col items-end justify-start gap-[11.688rem_0rem] text-right text-[1.444rem]">
        <div className="w-[9.875rem] flex flex-col items-start justify-start py-[0rem] px-[0.563rem] box-border">
          <div className="self-stretch flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[3.2rem]">
            <div className="relative tracking-[-0.18px] leading-[1.995rem] inline-block max-w-[8.75rem] max-h-[1.995rem] whitespace-nowrap mq450:text-[1.125rem] mq450:leading-[1.625rem]">
              Rp. 500.000
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.594rem]">
            <div className="self-stretch flex flex-col items-end justify-start">
              <div className="relative tracking-[0.1px] leading-[0.75rem] inline-block max-w-[8.75rem]">
                Harga /malam
              </div>
            </div>
          </div>
        </div>
        <Link
          className="bg-[#344E41] rounded-3xl cursor-pointer py-[0.938rem] px-[2.125rem] bg-oldlace self-stretch rounded-79xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkgray-200 hover:bg-lightgray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200"
          to = {"/hotel/pemesanan"}
        >
          <div className="flex-1 relative text-[0.938rem] leading-[1.744rem] font-inter text-dimgray-300 text-center text-white">
            Tentukan tanggal
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CardDetailHotel;
