"use client";
import { motion } from "framer-motion";

import ToggleButton from "./ToggleButton";
import { useState } from "react";
import AppbarContent from "../AppbarContent";
import Link from "next/link";
const Appbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const variants = {
    show: {
      height: "20rem",
      overflow: "hidden",
      "padding-top": "5px",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    hide: {
      height: "auto",
      padding: 0,
      overflow: "hidden",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.div
        className={` md:bg-[#141414]  text-[#ebebeb] w-full  fixed top-0 z-30  ${
          sidebarOpen
            ? " backdrop-blur-md bg-[#141414]/80 h-[20rem]"
            : "bg-[#141414]"
        }`}
        animate={sidebarOpen ? "show" : "hide"}
        variants={variants}
      >
        <div className=" flex justify-between items-center h-auto py-6 blur-[.5px] max-w-[75%] mx-auto ">
          <Link href={"/"}>
            <img src="" alt="Logo" width={90} height={"auto"} />
          </Link>
          <div
            className={`flex md:hidden absolute top-10 pt-16 justify-center items-center  w-full flex-col gap-6  ${
              sidebarOpen ? "flex-col" : " hidden "
            }`}
          >
            <AppbarContent setSidebarOpen={setSidebarOpen} />
          </div>
          <div className={`md:flex flex-row gap-6 hidden -mr-10`}>
            <AppbarContent setSidebarOpen={setSidebarOpen} />
          </div>
          <div className=" md:hidden block  ">
            <ToggleButton
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
          </div>
        </div>
      </motion.div>
      <div className=" h-20"></div>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className=" fixed inset-0 z-20 h-[100%] items-center"
        ></div>
      )}
    </>
  );
};

export default Appbar;
