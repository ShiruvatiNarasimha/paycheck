"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <button
        className={`${
          isVisible ? "block" : "hidden"
        } px-5 py-3 text-[0.9rem] rounded-full bg-[#141414] text-white fixed bottom-8 right-10`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Scroll to Top
      </button>
    </div>
  );
};

export default ScrollToTop;
