const SingleBenefits = ({
    title,
    body,
  }: {
    image: string;
    title: string;
    body: string;
  }) => {
    return (
      <div className=" bg-[#f0f0f0] rounded-3xl">
        <div className=" grid md:grid-cols-4 md:pb-24 pb-10 mx-4 md:pt-16 pt-6 pr-3">
          <div className=" col-span-1 flex justify-center">
            <div className=" ml-2 mb-2">
            </div>
          </div>
          <div className=" col-span-3 md:h-28 mx-2">
            <div className=" text-[#141414] font-[650] text-[1.36rem] mb-5">
              {title}
            </div>
            <div className=" text-[#4f5874] text-[1.06rem]">{body}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleBenefits;
  