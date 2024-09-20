import Wrapper from "../Wrapper";
import OneTimePayments from "./Features/OneTimePayments";
import PaymentLinks from "./Features/PaymentLinks";
import Subscription from "./Features/Subscription";

const FeaturesSection = () => {
  return (
    <div className=" text-[#141414] bg-white py-1">
      <Wrapper>
        <div className=" flex flex-col justify-center items-center md:gap-20 gap-10 md:my-20 my-10">
          <div className=" md:font-[500] font-[450] md:text-5xl text-3xl">
            Features
          </div>
          <OneTimePayments />
          <PaymentLinks />
          <Subscription />
        </div>
      </Wrapper>
    </div>
  );
};

export default FeaturesSection;
