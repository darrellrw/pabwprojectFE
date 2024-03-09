const ContactForm = () => {
    return (
      <section className="self-stretch bg-oldlace overflow-hidden flex flex-row items-end justify-center py-[3.125rem] px-[1.25rem] box-border min-h-[54.25rem] max-w-full text-left text-[2.188rem] text-heading font-icon-small mq450:pt-[1.313rem] mq450:pb-[1.313rem] mq450:box-border mq750:gap-[0rem_1.875rem] mq1050:pt-[2rem] mq1050:pb-[2rem] mq1050:box-border bg-[#F3ECDC]">
        <div className="w-[77.5rem] rounded-3xl bg-white-smoke shadow-[0px_10px_25px_rgba(0,_0,_0,_0.07)] flex flex-col items-start justify-start p-[3.125rem] box-border gap-[1.25rem_0rem] max-w-full lg:pl-[1.563rem] lg:pr-[1.563rem] lg:box-border mq750:pt-[2rem] mq750:pb-[2rem] mq750:box-border bg-white">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-[1.313rem] mq1050:text-[1.75rem]">
            Top-Up
          </h1>
          <div className="self-stretch relative text-[1.125rem] leading-[1.813rem] font-accent text-dimgray-100">{`Jangan ragu untuk meminta konsultasi atau bertanya lansung saja hubungi kami `}</div>
          <form className="m-0 self-stretch overflow-hidden flex flex-col items-start justify-start gap-[1.875rem_0rem] max-w-full">
            <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[0rem_1.875rem] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem_0rem] min-w-[22.563rem] max-w-full mq750:min-w-full">
                <div className="self-stretch relative text-[1.063rem] leading-[1.813rem] font-semibold font-accent text-heading text-left">
                  First Name
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-whitesmoke-100 self-stretch h-[3.75rem] rounded-3xl overflow-hidden shrink-0 flex flex-row items-start justify-start p-[1.25rem] box-border font-accent text-[0.938rem] text-dimgray-100 min-w-[15.625rem] bg-[#F3ECDC]"
                  placeholder="first name"
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem_0rem] min-w-[22.563rem] max-w-full mq750:min-w-full">
                <div className="self-stretch relative text-[1.063rem] leading-[1.813rem] font-semibold font-accent text-heading text-left">
                  Last Name
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-whitesmoke-100 self-stretch h-[3.75rem] rounded-3xl overflow-hidden shrink-0 flex flex-row items-start justify-start p-[1.25rem] box-border font-accent text-[0.938rem] text-dimgray-100 min-w-[15.625rem] bg-[#F3ECDC]"
                  placeholder="last name"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[0rem_1.875rem] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem_0rem] min-w-[22.563rem] max-w-full mq750:min-w-full">
                <div className="self-stretch relative text-[1.063rem] leading-[1.813rem] font-semibold font-accent text-heading text-left">
                  Email Address
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-whitesmoke-100 self-stretch h-[3.75rem] rounded-3xl overflow-hidden shrink-0 flex flex-row items-start justify-start p-[1.25rem] box-border font-accent text-[0.938rem] text-dimgray-100 min-w-[15.625rem] bg-[#F3ECDC]"
                  placeholder="Hello@email"
                  type="email"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem_0rem] min-w-[22.563rem] max-w-full mq750:min-w-full">
                <div className="self-stretch relative text-[1.063rem] leading-[1.813rem] font-semibold font-accent text-heading text-left">
                  Subjek
                </div>
                <select name="Subjek" id="Subjek" className="w-full [border:none] [outline:none] self-stretch h-[4.188rem] rounded-3xl overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1.25rem] px-[1.25rem] pb-[1.25rem] box-border font-accent text-[0.938rem] text-dimgray-100 min-w-[15.625rem] bg-[#F3ECDC]">
                    <option value="Top-Up">Top-Up</option>
                    <option value="Tarik Saldo">Tarik Saldo</option>
                </select>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem_0rem] max-w-full">
                <div className="self-stretch relative text-[1.063rem] leading-[1.813rem] font-semibold font-accent text-heading text-left">
                  Pesan
                </div>
                <textarea id="pesan" name="pesan" placeholder="Ketik pesan disini..." className="w-full [border:none] [outline:none] bg-whitesmoke-100 self-stretch h-[7.188rem] rounded-3xl overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1.25rem] px-[1.25rem] pb-[4.688rem] box-border font-accent text-[0.938rem] text-dimgray-100 min-w-[15.625rem] bg-[#F3ECDC]">
                </textarea>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[1.25rem] pr-[2.438rem] pl-[2.375rem] bg-primary rounded-3xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkseagreen bg-[#344E41]">
              <div className="relative text-[0.938rem] tracking-[0.15em] uppercase font-semibold font-accent text-whitesmoke-100 text-left text-white">
                Kirim
              </div>
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  