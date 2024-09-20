import Wrapper from "../Wrapper";
import SingleBenefits from "../BenefitsCard";

const Benefits = () => {
  return (
    <div className=" bg-[#141414] text-white">
      <Wrapper>
        <div className=" flex flex-col justify-center items-center md:gap-20 gap-12 py-20">
          <div className=" font-[650] text-center md:text-[2.7rem] text-[1.6rem] ">
            Single integration, many benefits
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <SingleBenefits
                image={"/clockImage.avif"}
                title={"Save 200+ Developer hours per month"}
                body={
                  "Your devs don't need to spend any time integrating several PGs or writing custom code"
                }
              />
            </div>
            <div>
              <SingleBenefits
                image={"/graphImage.avif"}
                title={"Boost success rates by 100%"}
                body={
                  "Users see Local Payment options leading to more trust and more payment options"
                }
              />
            </div>
            <div>
              <SingleBenefits
                image={"/dollerImage.avif"}
                title={"Reduce transaction cost by 30%"}
                body={
                  "We average 4% on international transactions, while Stripe charges 6% and PayPal 9%"
                }
              />
            </div>
            <div>
              <SingleBenefits
                image={"/lockImage.avif"}
                title={"Enterprise grade security"}
                body={
                  "Our systems are highly secure and battle tested. We are compliant with national data and compliance laws in major geographies."
                }
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Benefits;
