import FeaturesText from "../../FeaturesText";

const PaymentLinks = () => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 md:gap-12 gap-20 items-center">
        <div className="">
          <FeaturesText
            title={"Payment Links"}
            body={
              "Create a single payment link that works seamlessly throughout the world. Easy management, tracking and automated follow ups"
            }
          />
        </div>
        <div className="py-10">
          <img src="/PLinksImage.webp" alt="Logo" width={450} height={"auto"} />
        </div>
      </div>
    </div>
  );
};

export default PaymentLinks;
