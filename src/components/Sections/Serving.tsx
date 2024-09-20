import SingleServing from "../ServingCard";
import Wrapper from "../Wrapper";

const Serving = () => {
  return (
    <div className=" bg-white text-black">
      <Wrapper>
        <div className=" py-20">
          <div className=" font-[550] md:text-5xl text-2xl text-center leading-tight mb-16">
            Serving global companies in global industries
          </div>
          <div className=" grid md:grid-cols-4 gap-6">
            <div>
              <SingleServing
                image={"/cartImage.avif"}
                title={"Ecommerce"}
                body={
                  "Why pay shopify 15% for something you can do at 6%? Save 9% with just an API"
                }
              />
            </div>
            <div>
              <SingleServing
                image={"/globeImage.png"}
                title={"SAAS"}
                body={
                  "Sell software in any country around the globe without setting up an entity!"
                }
              />
            </div>
            <div>
              <SingleServing
                image={"/bookImage.png"}
                title={"Ed-Tech"}
                body={
                  "Scale to 100s of countries with the same content - don’t leave revenue on the table"
                }
              />
            </div>
            <div>
              <SingleServing
                image={"/compassImage.avif"}
                title={"Travel"}
                body={
                  "Boost card success rates by 30%. Provide local payment methods in every country. Experiment with new gateways via a single click."
                }
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Serving;
