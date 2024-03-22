const DeskripsiHotel = () => {
    return (
      <section className="self-stretch bg-oldlace overflow-hidden flex flex-col items-start justify-start pt-[3rem] pb-[3.544rem] pr-[6.25rem] pl-[6.75rem] box-border gap-[0.238rem_0rem] max-w-full text-left text-[2.825rem] text-darkslategray-200 font-icon-small mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pt-[1.938rem] mq750:pb-[2.313rem] mq750:pr-[3.125rem] mq750:pl-[3.375rem] mq750:box-border">
        <div className="relative tracking-[-0.6px] leading-[3.51rem] inline-block max-w-[80rem] max-h-[3.51rem] shrink-0 mq450:text-[1.688rem] mq450:leading-[2.125rem] mq750:text-[2.25rem] mq750:leading-[2.813rem] mq1275:max-w-full">
          Hotel Indonesia
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_4.831rem] max-w-full shrink-0 text-[1.056rem] font-inter mq450:gap-[0rem_1.188rem] mq750:gap-[0rem_2.438rem]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.256rem] px-[0rem] pb-[0rem] box-border min-w-[23.375rem] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.644rem_0rem]">
              <div className="relative tracking-[-0.04px] leading-[1.744rem] inline-block max-w-[36.25rem] max-h-[1.744rem] mq750:max-w-full">
                Jakarta Pusat
              </div>
              <div className="w-full relative text-[1.088rem] tracking-[-0.04px] leading-[1.744rem] inline-block max-w-[36.25rem] mq750:max-w-full">
                <p className="m-0">{`Selamat datang di "Hotel Indonesia" Hotel mewah di tengah jantung kota yang menawarkan pengalaman tinggal yang serba modern dan penuh kenyamanan. `}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Dengan desain interior yang elegan, setiap kamar apartemen kami
                  dirancang untuk memadukan keindahan estetika dengan
                  fungsionalitas yang optimal.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Dari dapur berdesain mutakhir hingga kamar tidur yang dilengkapi
                  dengan teknologi terbaru, Puncak Harmoni Residence memanjakan
                  penghuninya dengan gaya hidup modern yang tanpa kompromi.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2rem] box-border min-w-[23.563rem] max-w-full text-[0.831rem] mq450:gap-[0rem_2.5rem] mq750:min-w-full">
            <div className="w-[18.063rem] flex flex-col items-start justify-start gap-[1rem_0rem]">
              <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[8.077rem] pl-[0rem]">
                <div className="relative tracking-[0.07px] leading-[1.249rem] inline-block max-h-[1.249rem] text-[1rem]">
                  Fasilitas
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-[0.969rem]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[1.5rem]">
                        <ul className="list-disc">
                            <li>Pemanas ruangan dan ruang kerja</li>
                            <li>Ruangan Ber Ac</li>
                            <li>Elevator</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[1.313rem]" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default DeskripsiHotel;
  