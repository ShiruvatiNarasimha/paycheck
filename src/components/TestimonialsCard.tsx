const TestimonialsCard = ({
    content,
    image,
    name,
    founder,
  }: {
    content: string;
    image: string;
    name: string;
    founder: string;
  }) => {
    return (
      <div>
        <div className=" flex flex-col justify-between items-center border rounded-2xl p-4 md:h-80">
          <div className="flex flex-col justify-start items-center mb-8 md:mb-0">
            <div className=" pb-2">
              <img
                src={"/commaImage.avif"}
                alt="Logo"
                width={25}
                height={"auto"}
              />
            </div>
            <div className=" text-[0.85rem] text-[#333333] leading-relaxed">
              {content}
            </div>
          </div>
          <div className="flex flex-col justify-end items-center">
            <img
              src={image}
              alt="Logo"
              width={60}
              height={"auto"}
              className="rounded-full w-10 md:w-14"
            />
            <div className=" text-[#333333] font-semibold md:text-[1.4rem] text-[1rem] ">
              {name}
            </div>
            <div className=" text-[#4f4f4f] md:text-[1.18rem] text-[0.8rem] ">
              {founder}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialsCard;
  