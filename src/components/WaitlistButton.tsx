"use client";
import Link from "next/link";
import RightArrow from "./icons/RightArrow";
import { motion, useAnimation } from "framer-motion";

const WaitlistButton = ({ color = "black" }: { color?: "white" | "black" }) => {
  const arrowControls = useAnimation();

  const handleHoverStart = () => {
    arrowControls.start({ x: 5 });
  };

  const handleHoverEnd = () => {
    arrowControls.start({ x: 0 });
  };
  return (
    <div>
      <motion.button
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        whileHover={{ scaleX: 1.01 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={"/#waitlist"}>
          <div
            className={`${
              color === "black"
                ? "bg-[#141414] text-white"
                : "bg-white text-black hover:bg-[#141414] hover:text-white"
            } flex gap-2 rounded-full py-3 px-6 transition ease-linear delay-150 border border-white`}
          >
            <span>Join Waitlist</span>
            <motion.div animate={arrowControls} transition={{ duration: 0.2 }}>
              <RightArrow />
            </motion.div>
          </div>
        </Link>
      </motion.button>
    </div>
  );
};

export default WaitlistButton;
