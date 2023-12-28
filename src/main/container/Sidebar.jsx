import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

export const Sidebar = () => {
  const [isTransitionActive, setIsTransitionActive] = useState(false);

  return (
    <>
      <div className="w-full">
        <ul className="w-full flex items-center justify-between p-2 md:flex-col ">
          <li className="w-1/5 md:w-full md:mb-4">
            <Link
              to={"/"}
              className="w-full inline-flex flex-col items-center justify-center p-1 lg:flex-row lg:justify-start"
            >
              <div className="w-full flex text-black mb-1 items-center justify-center md:w-8 md:h-8 lg:mb-0 lg:mr-2">
                <FaHome className="w-full" />
              </div>
              <div className="text-xs md:text-lg text-center text-black">
                Home
              </div>
            </Link>
          </li>
          <li className="w-1/5 md:w-full md:mb-4">
            <Link
              to={"/"}
              className="w-full inline-flex flex-col items-center justify-center p-1 lg:flex-row lg:justify-start"
            >
              <div className="w-full flex text-black mb-1 items-center justify-center md:w-8 md:h-8 lg:mb-0 lg:mr-2">
                <FaHome className="w-full" />
              </div>
              <div className="text-xs md:text-lg text-center text-black">
                Home
              </div>
            </Link>
          </li>
          <li className="min-w-14 min-h-14 -translate-y-1/2 border bg-slate-400 rounded-full md:hidden">
            <button
              className="w-full h-full  text-blue-500 text-center lg:flex lg:items-center lg:justify-center"
              onClick={() => setIsTransitionActive(!isTransitionActive)}
            >
              {!isTransitionActive ? (
                <>
                  <span className="hidden text-xl lg:block lg:mr-2">
                    add new
                  </span>
                  <span className="text-5xl lg:text-xl">+</span>
                </>
              ) : (
                <>
                  <span className="hidden text-xl lg:block lg:mr-3">
                    cancel
                  </span>
                  <span className="text-5xl text-center lg:text-xl capitalize">
                    x
                  </span>
                </>
              )}
            </button>
          </li>
          <li className="w-1/5 md:w-full md:mb-4">
            <Link
              to={"/"}
              className="w-full inline-flex flex-col items-center justify-center p-1 lg:flex-row lg:justify-start"
            >
              <div className="w-full flex text-black mb-1 items-center justify-center md:w-8 md:h-8 lg:mb-0 lg:mr-2">
                <FaHome className="w-full" />
              </div>
              <div className="text-xs md:text-lg text-center text-black">
                Home
              </div>
            </Link>
          </li>
          <li className="w-1/5 md:w-full md:mb-4">
            <Link
              to={"/"}
              className="w-full inline-flex flex-col items-center justify-center p-1 lg:flex-row lg:justify-start"
            >
              <div className="w-full flex text-black mb-1 items-center justify-center md:w-8 md:h-8 lg:mb-0 lg:mr-2">
                <FaHome className="w-full" />
              </div>
              <div className="text-xs md:text-lg text-center text-black">
                Home
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
