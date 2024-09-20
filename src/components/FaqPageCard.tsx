"use client";
import { useState } from "react";
import PlusIcon from "./icons/PlusIcon";
import { motion } from "framer-motion";

const FaqPageCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const variants = {
    show: {
      height: "auto",
      overflow: "hidden",
      "padding-top": "5px",
      "padding-right": "2.5rem",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    hide: {
      height: 0,
      padding: 0,
      overflow: "hidden",
      "padding-right": "2.5rem",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };
  return (
    <div>
      <div className=" p-5 border-b border-[#c7d2fe] text-[#141414] ">
        <div
          className=" flex justify-between items-center cursor-pointer"
          onClick={() => setToggle((p) => !p)}
        >
          <span className="md:text-[1.35rem] text-[1.1rem] md:py-3 mr-3 ">
            {title}
          </span>
          <PlusIcon
            className={` w-7 h-7 shrink-0 transition-all duration-[400ms] ease-in-out ${
              toggle ? "rotate-45 " : "rotate-0"
            }`}
          />
        </div>
        <motion.div
          className={`md:text-[1.1rem] text-[0.98rem]  leading-snug pl-3 md:pl-0 md:pt-0 pt-3`}
          animate={toggle ? "show" : "hide"}
          variants={variants}
        >
          {content}
        </motion.div>
      </div>
    </div>
  );
};

export default FaqPageCard;
