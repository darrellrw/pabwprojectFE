import HeaderSmall from "./HeaderSmall";


const HeaderBig = () => {
  

  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-[0.938rem] px-[6.25rem] pb-[6.25rem] box-border gap-[7.188rem_0rem] bg-[url('./assets/header3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[0.938rem] text-secondary font-accent mq450:gap-[1.813rem_0rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq725:gap-[3.563rem_0rem] mq725:pt-[1.25rem] mq725:px-[3.125rem] mq725:pb-[4.063rem] mq725:box-border text-white">
      <HeaderSmall/>
      <div className="w-[44.5rem] flex flex-col items-start justify-start gap-[1.563rem_0rem] max-w-full">
        <div className="self-stretch relative tracking-[0.15em] uppercase font-semibold">
          Tempatnya Pemesanan terbaik di indonesia
        </div>
        <h1 className="m-0 self-stretch relative text-[3.438rem] font-normal font-icon-small text-oldlace mq450:text-[2.063rem] mq1000:text-[2.75rem]">
          <span>{`Ayo, `}</span>
          <span className="text-secondary">Cari</span>
          <span>{` Destinasi Impian `}</span>
          <span className="text-secondary">Anda</span>
          <span className="whitespace-pre-wrap">{`  `}</span>
          <span className="text-secondary">Disini..</span>
        </h1>
        <div className="w-[36.938rem] relative text-[1.125rem] leading-[1.813rem] text-white-transparent inline-block max-w-full">
          Destinasi Impian Anda: Temukan Kenyamanan
          dalam Setiap perjalanan Di Indoensia.
        </div>
      </div>
    </section>
  );
};

export default HeaderBig;
