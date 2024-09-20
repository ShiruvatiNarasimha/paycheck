import FaqPageCard from "../FaqPageCard";
import Wrapper from "../Wrapper";

const FaqPage = () => {
  return (
    <div className=" bg-white text-black">
      <Wrapper>
        <div className=" md:py-16 py-10">
          <div className=" font-[450] md:text-[2.8rem] text-[1.6rem] text-center leading-tight md:mb-12 mb-2">
            FAQs
          </div>
          <div>
            <FaqPageCard
              title={"What problem does xPay solve?"}
              content={
                "xPay makes it very easy for a global business to accept international payments from multiple countries without having to onboard and integrate multiple different payment solutions. This makes it very easy for businesses to go international"
              }
            />
          </div>
          <div>
            <FaqPageCard
              title={"Does xPay also provide bank account transfers?"}
              content={
                "We do. We provide you Virtual accounts in 30+ countries in the world"
              }
            />
          </div>
          <div>
            <FaqPageCard
              title={"Does xPay also provide solutions for payment links?"}
              content={
                "We do. You can generate global payment links through us with a single click and manage them from our dashboard"
              }
            />
          </div>
          <div>
            <FaqPageCard
              title={"Which countries is xPay currently available in?"}
              content={
                "xPay is currently compatible from 100+ countries including United States, India, United Kingdom, Germany, France, Canada, Austria, Singapore, Vietnam, Philippines, Indonesia, United Arab Emirates, Japan and most countries in EU."
              }
            />
          </div>
          <div>
            <FaqPageCard
              title={"What is xPay's pricing?"}
              content={
                "We take a small fixed cut for every transaction. However, we're also open to customizing our pricing. Please reach out at hello@xpaycheckout.com"
              }
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FaqPage;
