import Wrapper from "../Wrapper";

const YoutubeFrame = () => {
  return (
    <div className="bg-[#141414] text-white">
      <Wrapper>
        <div className=" flex flex-col gap-8 py-20 justify-center items-center">
          <div className=" md:font-[500] font-[450] md:text-5xl text-3xl mb-5">
            Know the product
          </div>
          <div className=" w-[100%] pb-[56.25%] relative">
            <iframe
              className=" absolute"
              width="100%"
              height="100%"
              src={
                " "
              }
              title="YouTube video player"
              allow="accelerometer; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default YoutubeFrame;
