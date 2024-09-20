import PricingCard from "../PricingCard";
import TickLine from "../TickLine";
import Wrapper from "../Wrapper";

const Pricing = () => {
  return (
    <div className=" bg-white text-black" id="pricing">
      <Wrapper>
        <div className=" py-24">
          <div className=" md:font-[550] font-[450] md:text-5xl text-[1.7rem] text-center leading-tight mb-16">
            Premium features without premium pricing
          </div>
          <div className=" grid md:grid-cols-2 gap-10">
            <PricingCard
              textColor={"[#141414]"}
              bgColor={"white"}
              title={"Basic"}
              body={"Onboard. Integrate. Start collecting USD in 24 hours."}
              tickLine={
                <>
                  <TickLine bgWhite={true} text={"Accept payments in USD"} />
                  <TickLine
                    bgWhite={true}
                    text={"Collect from 100+ countries"}
                  />
                  <TickLine
                    bgWhite={true}
                    text={"Get money in your INR account"}
                  />
                  <TickLine
                    bgWhite={true}
                    text={"Create Global Payment Links"}
                  />
                </>
              }
            />
            <PricingCard
              textColor={"white"}
              bgColor={"[#141414]"}
              title={"Enterprise"}
              body={"White Glove managed solution for teams powering the world"}
              tickLine={
                <>
                  <TickLine text={"Everything in Basic plus"} />
                  <TickLine text={"Accept payments in 30+ currencies"} />
                  <TickLine text={"Managed Sales tax solution"} />
                  <TickLine
                    text={"High priority addition of new payment methods"}
                  />
                </>
              }
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Pricing;
