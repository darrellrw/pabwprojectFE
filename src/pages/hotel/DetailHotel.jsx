import DeskripsiHotel from "./components/DeskripsiHotel";
import CardDetailHotel from "./components/CardDetailHotel";

function DetailHotel() {
    return (
        <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] bg-[#F3ECDC]">
          <section className="self-stretch bg-oldlace overflow-hidden flex flex-row items-start justify-start pt-[2.938rem] px-[6.25rem] pb-[3.044rem] box-border gap-[0rem_1.288rem] max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pt-[1.938rem] mq750:px-[3.125rem] mq750:pb-[2rem] mq750:box-border mq1275:flex-wrap">
            <img
              className="h-[25.831rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[35.375rem] min-h-[25.813rem] mq1100:min-w-full"
              loading="lazy"
              alt=""
              src="../../DetailHotel1.svg"
            />
            <div className="h-[25.831rem] w-[21.775rem] flex flex-col items-start justify-start gap-[1.294rem_0rem] min-w-[21.775rem] max-w-full mq750:min-w-full mq1275:flex-1">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="../../DetailHotel2.svg"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="../../DetailHotel3.svg"
              />
            </div>
          </section>
          <DeskripsiHotel />
          <CardDetailHotel />
        </div>
      );
};

export default DetailHotel;