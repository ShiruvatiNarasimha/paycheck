import WaitlistButton from "./WaitlistButton";

const FeaturesText = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className=" pr- bg-fuchsias-400">
      <div className=" inline border border-[#ccc7c7] rounded-lg py-1 px-2 ">
        <span className="">&#9679;&nbsp;&nbsp;</span>
        <span className=" text-xs">FEATURES</span>
      </div>
      <div className=" md:text-4xl text-[1.7rem] font-[500] md:my-8 mt-3">
        {title}
      </div>
      <div className=" my-5 text-lg text-slate-500">{body}</div>
      <WaitlistButton />
    </div>
  );
};

export default FeaturesText;
