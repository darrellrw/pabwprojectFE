import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardHistory from "./components/CardHistory";
import ContentHeroHistory from "./components/ContentHeroHistory";

const ListHotel = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <div className="self-stretch flex flex-col items-start justify-start pt-[0.938rem] px-[6.25rem] pb-[6.25rem] box-border gap-[7.188rem_0rem] bg-[url('./assets/header3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[0.938rem] text-secondary font-accent mq450:gap-[1.813rem_0rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq725:gap-[3.563rem_0rem] mq725:pt-[1.25rem] mq725:px-[3.125rem] mq725:pb-[4.063rem] mq725:box-border text-white">
        <ContentHeroHistory />
      </div>
      <main className="self-stretch bg-oldlace overflow-hidden flex flex-col items-end justify-start pt-[3.188rem] px-[5.375rem] pb-[4.313rem] box-border gap-[3.25rem_0rem] max-w-full lg:pt-[1.313rem] lg:pb-[1.813rem] lg:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[1.625rem_0rem] mq750:py-[1.25rem] mq750:px-[2.688rem] mq750:box-border">
        <div className="flex flex-wrap justify-between items-center">
          <a className="font-bold text-2xl">Senin, 14 Juni 2021</a>
          <CardHistory />
        </div>
      </main>
      |<Footer />
    </div>
  );
};

export default ListHotel;
