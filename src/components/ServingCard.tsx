const SingleServing = ({
  image,
  title,
  body,
}: {
  image: string;
  title: string;
  body: string;
}) => {
  return (
    <div>
      <div className="">
        <div className=" bg-[#f2fbff] md:h-[23rem] rounded-3xl px-[1.6rem] py-4">
          <div className=" py-2">
            <img src={image} alt="Logo" width={65} height={"auto"} />
          </div>
          <div className=" text-[#141414] font-semibold text-[1.32rem] my-4">
            {title}
          </div>
          <div className=" text-[#4f5874] text-[1.06rem]">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleServing;
