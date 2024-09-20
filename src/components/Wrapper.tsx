"use client";
import { ReactNode } from "react";
import Animations from "./Animations";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" md:max-w-[75%] max-w-[90%]   mx-auto">
        <Animations>{children}</Animations>
      </div>
    </div>
  );
};

export default Wrapper;
