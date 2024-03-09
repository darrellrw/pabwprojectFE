import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeaderSmall from "../components/HeaderSmall";

const TopUp = () => {

  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] ">
        <header className="self-stretch flex flex-col items-start justify-start pt-[0.438rem] px-[6.25rem] pb-[0.438rem] box-border gap-[7.188rem_0rem] bg-[url('./assets/header3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[0.938rem] text-secondary font-accent mq450:gap-[1.813rem_0rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq725:gap-[3.563rem_0rem] mq725:pt-[1.25rem] mq725:px-[3.125rem] mq725:pb-[4.063rem] mq725:box-border text-white">
        <HeaderSmall />
        </header>
        <ContactForm />
        <Footer/>
    </div>
  );
};

export default TopUp;
