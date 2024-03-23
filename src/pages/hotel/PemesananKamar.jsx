import FormPemesananKamar from "./components/FormPemesananKamar";

function PemesananKamar() {
    return (
        <div className="w-full h-[70.5rem] relative flex flex-row items-start justify-start tracking-[normal] lg:h-auto lg:min-h-[1128]">
        <div className="w-full !m-[0] relative top-[-0.125rem] right-[0rem] left-[0rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border gap-[7.875rem] max-w-full h-full mq450:gap-[1.938rem] mq750:gap-[3.938rem]">
          <section className="self-stretch flex flex-col items-end justify-start py-[1.25rem] pr-[0.063rem] pl-[0rem] box-border gap-[1.5rem_0rem] max-w-full">
              <FormPemesananKamar />
          </section>
        </div>
      </div>
    );
};

export default PemesananKamar;