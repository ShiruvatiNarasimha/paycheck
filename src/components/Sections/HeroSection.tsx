import WaitlistButton from "../WaitlistButton";
import Wrapper from "../Wrapper";

const HeroSection = () => {
  return (
    <div className=" bg-[#141414] text-white ">
      <Wrapper>
        <div className=" relative ">
          <div className=" grid md:grid-cols-12 ">
            <div className=" md:col-span-7 pl-2 mb-20">
              <div className=" font-medium md:text-5xl text-3xl leading-tight	my-10">
                Accept Customer Payments from any country via cards, bank
                accounts & more
              </div>
              <div className=" md:text-2xl text-l mb-10">
                Go live in US, EU, MENA and SEA via a single integration in
                1/10th the time
              </div>
              <WaitlistButton color={"white"} />
            </div>
            <div className=" md:col-span-5 h-[100%] overflow-hidden">
              <img
                src="/GlobeImage.avif"
                alt="Logo"
                width={500}
                height={"auto"}
              />
            </div>
          </div>
          <div className=" flex gap-1 justify-center absolute bottom-5 left-[0%] right-[0%] items-center font-extralight text-xl dpb-10">
            <span>Backed by </span>
            <img
              src="/Y-Combinator.avif"
              alt="Logo"
              width={150}
              height={"auto"}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
