
import CardBiaya from "./CardBiaya";

const FormPemesananKamar = () => {


  return (
    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.063rem] box-border max-w-full shrink-0 text-left text-[1.5rem] text-darkslategray-100 font-montserrat">
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.313rem_0rem] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_2.313rem] max-w-full mq750:gap-[0rem_1.125rem]">
          <div className="w-[56rem] flex flex-col items-start justify-start pt-[0.688rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <b className="self-stretch relative mq450:text-[1.188rem]">
              Detail Pemesanan Kamar
            </b>
          </div>
        </div>
        <form className="m-0 self-stretch flex flex-row items-start justify-start gap-[0rem_2.313rem] max-w-full lg:flex-wrap mq750:gap-[0rem_1.125rem]">
          <div className="flex-1 flex flex-col items-start justify-start px-[0rem] pb-[0rem] box-border max-w-full mq750:min-w-full">
            <div className="self-stretch rounded-2xl bg-white box-border flex flex-col items-start justify-start py-[2.5rem] pr-[1.438rem] pl-[1.5rem] gap-[1rem_0rem] max-w-full shrink-0 border-[1px] border-solid border-cornflowerblue-200">
              <div className="relative text-[1.125rem] leading-[1.125rem] font-semibold font-montserrat text-black text-left">
                Informasi Pemesan
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1rem] mq1050:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[0.388rem] px-[0rem] pb-[0rem] box-border min-w-[12.75rem]">
                      <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] font-montserrat text-darkslategray-300 text-left">
                        Name
                      </div>
                      <div className="self-stretch rounded bg-white flex flex-row items-start justify-start py-[1rem] px-[0.875rem] border-[2px] border-solid border-cornflowerblue-100 mq450:gap-[0rem_6.063rem]">
                        <input
                          className="w-full [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[1.125rem] text-darkslategray-100 text-left inline-block min-w-[9rem] p-0"
                          placeholder="John"
                          type="text"
                        />
                      </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[0.388rem] px-[0rem] pb-[0rem] box-border min-w-[12.75rem]">
                      <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] font-montserrat text-darkslategray-300 text-left">
                        Check-In
                      </div>
                      <div className="self-stretch rounded bg-white flex flex-row items-start justify-start py-[1rem] px-[0.875rem] border-[2px] border-solid border-cornflowerblue-100 mq450:gap-[0rem_6.063rem]">
                        <input
                          className="w-full [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[1.125rem] text-darkslategray-100 text-left inline-block min-w-[9rem] p-0"
                          type="date"
                        />
                      </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[0.388rem] px-[0rem] pb-[0rem] box-border min-w-[12.75rem]">
                      <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] font-montserrat text-darkslategray-300 text-left">
                      Check-Out
                      </div>
                      <div className="self-stretch rounded bg-white flex flex-row items-start justify-start py-[1rem] px-[0.875rem] border-[2px] border-solid border-cornflowerblue-100 mq450:gap-[0rem_6.063rem]">
                        <input
                          className="w-full [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[1.125rem] text-darkslategray-100 text-left inline-block min-w-[9rem] p-0"
                          type="date"
                        />
                      </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem] max-w-full">
                  <div className="relative text-[1.125rem] leading-[1.125rem] font-semibold font-montserrat text-black text-left">
                    Detail Kontak
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1rem] max-w-full mq1050:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem] min-w-[16.875rem] max-w-full">
                      <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] font-montserrat text-darkslategray-300 text-left">
                        Email
                      </div>
                      <div className="self-stretch rounded bg-white box-border flex flex-row items-center justify-start py-[1rem] px-[0.938rem] max-w-full border-[1px] border-solid border-whitesmoke-200 mq450:gap-[0rem_6.063rem]">
                        <input
                          className="w-full [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[1.125rem] text-lightgray-200 text-left inline-block min-w-[14.375rem] whitespace-nowrap max-w-full p-0"
                          placeholder="example@email.com"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem] min-w-[16.875rem] max-w-full">
                      <div className="self-stretch relative text-[0.75rem] leading-[1.125rem] font-montserrat text-darkslategray-300 text-left">
                        Mobile Phone
                      </div>
                      <div className="self-stretch rounded bg-white box-border flex flex-row items-center justify-start py-[1rem] px-[0.938rem] max-w-full border-[1px] border-solid border-whitesmoke-200 mq450:gap-[0rem_6.063rem]">
                        <input
                          className="w-full [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.125rem] flex-1 relative leading-[1.125rem] text-lightgray-200 text-left inline-block min-w-[14.375rem] max-w-full p-0"
                          placeholder="Enter Your Phone Number"
                          type="tel"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CardBiaya/>
        </form>
      </div>
    </div>
  );
};

export default FormPemesananKamar;
