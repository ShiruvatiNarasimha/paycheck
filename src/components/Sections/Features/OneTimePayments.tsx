import FeaturesText from "../../FeaturesText";

const OneTimePayments = () => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 gap-20 items-center">
        <div className="py-10 md:order-1 order-2 border rounded-[2rem]">
          <img src="/OTPayment.avif" alt="Logo" width={450} height={"auto"} />
        </div>
        <div className="md:order-2 order-1">
          <FeaturesText
            title={"One time payments"}
            body={
              "Accept one time payments easily in 30+ currencies including USD"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OneTimePayments;
