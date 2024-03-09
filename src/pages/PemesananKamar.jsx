import HeaderSmall from "../components/HeaderSmall";
import FormPemesananKamar from "../components/FormPemesananKamar";
import Footer from "../components/Footer";

const PemesananKamar = () => {
  return (
    <div className="w-full h-[70.5rem] relative flex flex-row items-start justify-start tracking-[normal] lg:h-auto lg:min-h-[1128]">
      <div className="w-full !m-[0] relative top-[-0.125rem] right-[0rem] left-[0rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border gap-[7.875rem] max-w-full h-full mq450:gap-[1.938rem] mq750:gap-[3.938rem]">
        <section className="self-stretch flex flex-col items-end justify-start py-[0rem] pr-[0.063rem] pl-[0rem] box-border gap-[1.5rem_0rem] max-w-full">
            <header className="self-stretch flex flex-col items-start justify-start pt-[0.438rem] px-[6.25rem] pb-[0.438rem] box-border gap-[7.188rem_0rem] bg-[url('./assets/header3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[0.938rem] text-secondary font-accent mq450:gap-[1.813rem_0rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq725:gap-[3.563rem_0rem] mq725:pt-[1.25rem] mq725:px-[3.125rem] mq725:pb-[4.063rem] mq725:box-border text-white">
                <HeaderSmall />
            </header>
            <FormPemesananKamar />
        </section>
        <Footer/>
      </div>
    </div>
  );
};

export default PemesananKamar;
