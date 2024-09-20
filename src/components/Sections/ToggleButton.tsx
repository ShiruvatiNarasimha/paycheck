import { Dispatch, SetStateAction } from "react";

const ToggleButton = ({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
}) => {
  return (
    <button
      onClick={() => setSidebarOpen((p) => !p)}
      className="flex flex-col justify-center items-center"
    >
      <span
        className={`bg-white block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm ${
          sidebarOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm my-1 ${
              sidebarOpen ? "opacity-0" : "opacity-100"
            }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${
              sidebarOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
