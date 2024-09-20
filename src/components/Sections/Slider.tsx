"use client";
import Wrapper from "../Wrapper";

const Slider = () => {
  const allLogos = [
    "/cLogo1.avif",
    "/cLogo2.avif",
    "/cLogo3.avif",
    "/cLogo4.avif",
    "/cLogo5.svg",
    "/cLogo6.avif",
    "/cLogo7.avif",
    "/cLogo8.avif",
    "/cLogo9.webp",
  ];
  return (
    <div className=" bg-[#ebebeb]q bg-white text-[#141414] py-1">
      <Wrapper>
        <div className=" my-16 py-16 bg-[#f2fbff] rounded-lg">
          <div className=" text-center text-2xl font-medium mb-8 mx-6">
            Helping teams at the world&apos;s best companies
          </div>
          <div
            className=" flex overflow-hidden mx-10"
            style={{
              maskImage:
                "linear-gradient(to right, hsl(0 0% 0% /0), hsl(0 0% 0% /1) 10%, hsl(0 0% 0% /1) 90%, hsl(0 0% 0% /0))",
            }}
          >
            <div className=" flex gap-20 justify-arounds pr-20 animate-loop-scroll ">
              {allLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Logo"
                  width={180}
                  height={"auto"}
                  className="max-w-none"
                />
              ))}
            </div>
            <div
              className=" flex gap-20 pr-20 justify-arounds animate-loop-scroll"
              aria-hidden="true"
            >
              {allLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Logo"
                  width={180}
                  height={"auto"}
                  className="max-w-none"
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Slider;
