import CheckIcon from "./icons/CheckIcon";

const TickLine = ({
  text,
  bgWhite = false,
}: {
  text: string;
  bgWhite?: boolean;
}) => {
  return (
    <div>
      <div className=" flex items-center gap-2">
        <CheckIcon
          className={`w-8 h-8 p-2 text-black shrink-0 ${
            bgWhite ? "bg-[#d5dadd]" : "bg-white"
          } rounded-full `}
        />
        <span className=" text-[1.1rem]">{text}</span>
      </div>
    </div>
  );
};

export default TickLine;
