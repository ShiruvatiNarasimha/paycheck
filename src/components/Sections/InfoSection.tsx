import Wrapper from "../Wrapper";
import Footer from "./Footer";
import Link from "next/link";

const InfoSection = () => {
  return (
    <>
      <div className=" bg-white text-black">
        <Wrapper>
          <div className=" border-b border-dashed ">
            <div className=" grid md:grid-cols-2 md:gap-3 gap-10 py-10">
              <Link href={"/"}>
                <img
                  src={"/xPayBlackIcon.avif"}
                  alt="Logo"
                  width={150}
                  height={"auto"}
                />
              </Link>
              <div className=" grid md:grid-cols-3 gap-3">
                <div>
                  <div className=" text-lg font-semibold mb-4">xPay</div>
                  <div className=" text-sm mb-2">
                    <Link href={"/#waitlist"}>Waitlist</Link>
                  </div>
                  <div className=" text-sm md:mb-2 mb-12">
                    <Link href={"/#pricing"}>Pricing</Link>
                  </div>
                </div>
                <div>
                  <div className=" text-lg font-semibold mb-4">Policies</div>
                  <div className=" text-sm mb-2">
                    <Link href={"/terms-and-condition"}>
                      Terms and Conditions
                    </Link>
                  </div>
                  <div className=" text-sm mb-2">
                    <Link href={"/privacy-policy"}>Privacy Policy</Link>
                  </div>
                  <div className=" text-sm mb-2">
                    <Link href={"/shipping-policy"}>Shipping Policy</Link>
                  </div>
                  <div className=" text-sm md:mb-2 mb-12">
                    <Link href={"/cancellation-and-refund-policy"}>
                      Cancellation and Refund Policy
                    </Link>
                  </div>
                </div>
                <div>
                  <div className=" text-lg font-semibold mb-4">Contact</div>
                  <div className=" text-sm mb-1 flex justify-start items-center gap-2">
                    <img
                      src={"/linkedinIcon.avif"}
                      alt="Logo"
                      width={25}
                      height={"auto"}
                    />
                    <span>
                      <Link
                        target="_blank"
                        href={"https://in.linkedin.com/in/shiruvati-narasimha-669702296/"}
                      >
                        LinkedIn
                      </Link>
                    </span>
                  </div>
                  <div className=" text-sm mb-1 flex justify-start items-center gap-2">
                    <img
                      src={"/emailIcon.avif"}
                      alt="Logo"
                      width={25}
                      height={"auto"}
                    />
                    <span>
                      <Link
                        target="_blank"
                        href={"mailto:mrnattyboy05@gmail.com"}
                      >
                        Email
                      </Link>
                    </span>
                  </div>
                  <div className=" text-sm mb-1 flex justify-start items-center gap-2 ">
                    <img
                      src={"/phoneIcon.avif"}
                      alt="Logo"
                      width={25}
                      height={"auto"}
                    />
                    <span>
                      <Link
                        target="_blank"
                        href={
                          " "
                        }
                      >
                        Talk to Founder
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
};

export default InfoSection;
