import { ReactNode } from "react";

type color = "white" | "[#141414]";

const PricingCard = ({
  textColor,
  bgColor,
  title,
  body,
  tickLine,
}: {
  textColor: color;
  bgColor: color;
  title: string;
  body: string;
  tickLine: ReactNode;
}) => {
  return (
    <div>
      <div className={`text-${textColor} bg-${bgColor} p-8 rounded-xl`}>
        <div className="font-semibolds text-[1.7rem] mb-2">{title}</div>
        <div className="text-lg">{body}</div>
        <div
          className={`py-5 flex gap-3 items-center ${
            bgColor === "[#141414]" && "invisible"
          }`}
        >
          <span className="text-6xl">5%</span>/transaction
        </div>
        <button
          className={`w-full text-center rounded-full border border-white bg-white text-[#3d3b3b] hover:bg-[#141414] hover:text-white py-2 mb-10 font-semibold shadow-stone-700`}
        >
          Get in Touch for Pricing
        </button>
        <div className="flex flex-col gap-3 mb-32">{tickLine}</div>
      </div>
    </div>
  );
};

export default PricingCard;
