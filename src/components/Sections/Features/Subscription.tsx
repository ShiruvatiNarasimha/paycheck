import FeaturesText from "../../FeaturesText";

const Subscription = () => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 gap-20 items-center">
        <div className="py-10 md:order-1 order-2">
          <img
            src="/SubscriptionImage.webp"
            alt="Logo"
            width={450}
            height={"auto"}
          />
        </div>
        <div className="md:order-2 order-1">
          <FeaturesText
            title={"Subscription"}
            body={
              "Create subscriptions easily for anywhere in the world using a single API"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
