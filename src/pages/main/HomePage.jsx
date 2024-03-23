import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <div className="w-full relative flex flex-col items-start justify-start tracking-[normal]">
                <section className="self-stretch flex flex-col items-start justify-start pt-[0.938rem] px-[6.25rem] pb-[6.25rem] box-border gap-[7.188rem_0rem] bg-[url('./assets/header3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[0.938rem] text-secondary font-accent mq450:gap-[1.813rem_0rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq725:gap-[3.563rem_0rem] mq725:pt-[1.25rem] mq725:px-[3.125rem] mq725:pb-[4.063rem] mq725:box-border text-white">
                    <div className="w-[44.5rem] flex flex-col items-start justify-start gap-[1.563rem_0rem] max-w-full">
                        <div className="self-stretch relative tracking-[0.15em] uppercase font-semibold pt-[6.938rem]">
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
                <section className="mx-[12%] self-stretch bg-oldlace overflow-hidden flex flex-row items-end justify-between py-[4.188rem] px-[6.25rem] box-border min-h-[29.625rem] max-w-full gap-[1.25rem] text-left text-[2.5rem] text-secondary font-icon-small mq450:py-[2.75rem] mq450:px-[1.25rem] mq450:box-border mq1050:flex-wrap mq725:pl-[3.125rem] mq725:pr-[3.125rem] mq725:box-border text-white">
                    <Link to={"/hotel"}
                        className="bg-[#344E41] w-[26.063rem] rounded-3xl bg-accent flex flex-col items-center justify-start pt-[4.563rem] px-[1.25rem] pb-[2.25rem] box-border relative gap-[0.813rem] max-w-full cursor-pointer z-[1]"
                    >
                        <div className="w-[12rem] flex flex-row items-start justify-start py-[0rem] px-[2.688rem] box-border">
                            <img
                                className="h-[8.063rem] flex-1 relative max-w-full overflow-hidden z-[1]"
                                loading="lazy"
                                alt=""
                                src="../../IconHotel.svg"
                            />
                        </div>
                        <h1 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-[1.5rem] mq1000:text-[2rem]">
                            Cari Hotel
                        </h1>
                    </Link>
                    <Link to={"/flight"}
                        className="bg-[#344E41] w-[26.063rem] rounded-3xl bg-accent flex flex-col items-center justify-start pt-[4.563rem] px-[1.25rem] pb-[2.25rem] box-border relative gap-[0.813rem] max-w-full cursor-pointer z-[1]"
                    >
                        <div className="w-[12rem] flex flex-row items-start justify-start py-[0rem] px-[2.688rem] box-border">
                            <img
                                className="h-[8.063rem] flex-1 relative max-w-full overflow-hidden z-[1]"
                                loading="lazy"
                                alt=""
                                src="../../IconPlane.svg"
                            />
                        </div>
                        <h1 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-[1.5rem] mq1000:text-[2rem]">
                            Cari Tiket Pesawat
                        </h1>
                    </Link>
                </section>
            </div>
        </>
    );
}

export default HomePage;