import Wrapper from "../Wrapper";

const EmailWaitlist = () => {
  return (
    <div className=" bg-white text-black" id="waitlist">
      <Wrapper>
        <div className=" py-10 pt-32">
          <div className=" flex flex-col justify-around items-center gap-5s md:p-12 p-8 rounded-xl bg-gradient-to-r from-[#252525] to-[#101010] text-white ">
            <div className=" md:font-[650] font-[650] md:text-[2.7rem] text-[1.7rem] mb-3">
              Join the waitlist now
            </div>
            <div className=" md:text-2xl text-xl mb-10 ">
              Sign up for xPay now and get 20% discount on international payment
              fees
            </div>
            <div className=" bg-sfuchsia-400 w-full flex md:flex-row flex-col justify-center items-center gap-3 text-black">
              <input
                className=" h-14 md:w-[60%] w-full rounded-lg placeholder:p-8 placeholder:pl-5 placeholder:bg-[#f2f2f2]"
                name="email"
                type="text"
                placeholder="Email Address"
              />
              <div className=" w-full md:w-fit">
                <button className=" py-[1.1rem] w-full px-4 rounded-lg font-[500] text-sm bg-[#45abff] text-white hover:opacity-80 ">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default EmailWaitlist;
