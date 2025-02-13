import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logop from "../assets/logop.png";
import logom from "../assets/logom.png";
import logol from "../assets/logol.png";

function Header() {
  const [showmanu, setshowmanu] = useState(false);
  function hidden() {
    setshowmanu = false;
  }
  const gotop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <>
      <section className="max-w-wrapper m-auto border-b border-dark-10 bg-dark-8 relative z-[500]">
        <Link
          to="/news"
          className="flex justify-between xll:justify-center xll:gap-2.5 px-6 pt-10 pb-3.5 xll:py-3 3xl:py-5"
        >
          <p className="text-gray-60 text-[12px] leading-150 flex xll:text-sm xll:leading-150 3xl:text-lg 3xl:leading-150 xll:gap-[3px]">
            Subscribe to our Newsletter For{" "}
            <span className="hidden xll:block"> New & latest</span> Blogs and
            Resources
          </p>
          <div>
            <svg
              className="h-5 w-5 3xl:h-6 3xl:w-6"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.375 3.625L16.75 3.625C16.9158 3.625 17.0747 3.69085 17.1919 3.80806C17.3092 3.92527 17.375 4.08424 17.375 4.25V13.625C17.375 13.9702 17.0952 14.25 16.75 14.25C16.4048 14.25 16.125 13.9702 16.125 13.625V5.75888L4.69194 17.1919C4.44786 17.436 4.05214 17.436 3.80806 17.1919C3.56398 16.9479 3.56398 16.5521 3.80806 16.3081L15.2411 4.875L7.375 4.875C7.02982 4.875 6.75 4.59518 6.75 4.25C6.75 3.90482 7.02982 3.625 7.375 3.625Z"
                fill="#FFD11A"
              />
            </svg>
          </div>
        </Link>
      </section>
      <header className="sticky top-0 bg-dark-10 px-4 py-5 z-[500] border-y border-dark-15 xll:px-20 max-w-wrapper m-auto 3xl:px-40.2 3xl:py-6">
        <ul
          className={`xll:hidden absolute w-full flex flex-col items-center left-0 top-full gap-6 bg-dark-10 py-5 z-40 transition-all ease-in-out duration-400  ${
            showmanu ? "translate-x-0" : "translate-x-[-200%] xll:translate-x-0"
          } border-t border-dark-15`}
        >
          <li onClick={gotop}>
            <NavLink
              to="/"
              onClick={() => setshowmanu(!showmanu)}
              className="text-sm leading-150 text-gray-50 py-2.5 px-4.8 border border-transparent rounded-md w-fit"
            >
              Home
            </NavLink>
          </li>
          <li onClick={gotop}>
            <NavLink
              to="/news"
              onClick={() => setshowmanu(!showmanu)}
              className="text-sm leading-150 text-gray-50 py-2.5 px-4.8 border border-transparent rounded-md w-fit"
            >
              News
            </NavLink>
          </li>
          <li onClick={gotop}>
            <NavLink
              to="/podcuste"
              onClick={() => setshowmanu(!showmanu)}
              className="text-sm leading-150 text-gray-50 py-2.5 px-4.8 border border-transparent rounded-md w-fit"
            >
              Podcasts
            </NavLink>
          </li>
          <li onClick={gotop}>
            <NavLink
              to="/resources"
              onClick={() => setshowmanu(!showmanu)}
              className="text-sm leading-150 text-gray-50 py-2.5 px-4.8 border border-transparent rounded-md w-fit"
            >
              Resources
            </NavLink>
          </li>
          <li onClick={gotop}>
            <Link
              to="/contact"
              onClick={() => setshowmanu(!showmanu)}
              className="text-sm leading-150 py-2.5 px-4.8 border border-transparent rounded-md w-fit bg-yellow-55 text-dark-8"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <Link onClick={hidden} to="/">
            <img
              src={logom}
              alt="brand logo"
              className="block xll:hidden"
              onClick={gotop}
            />
            <img
              src={logol}
              alt="brand logo"
              className="hidden xll:block 3xl:hidden"
              onClick={gotop}
            />
            <img
              src={logop}
              alt="brand logo"
              className="hidden 3xl:block"
              onClick={gotop}
            />
          </Link>
          <ul className="hidden xll:flex gap-6">
            <li onClick={gotop}>
              <NavLink
                to="/"
                className="py-2.5 px-4.8 text-sm font-medium text-gray-50 border border-transparent rounded-md transition-all duration-200 ease-in 3xl:py-3.5 3xl:px-6 3xl:rounded-[10px] 3xl:text-lg 3xl:leading-150"
              >
                Home
              </NavLink>
            </li>
            <li onClick={gotop}>
              <NavLink
                to="/news"
                className="py-2.5 px-4.8 text-sm font-medium text-gray-50 border border-transparent rounded-md transition-all duration-200 ease-in 3xl:py-3.5 3xl:px-6 3xl:rounded-[10px] 3xl:text-lg 3xl:leading-150"
              >
                News
              </NavLink>
            </li>
            <li onClick={gotop}>
              <NavLink
                to="/podcuste"
                className="py-2.5 px-4.8 text-sm font-medium text-gray-50 border border-transparent rounded-md transition-all duration-200 ease-in 3xl:py-3.5 3xl:px-6 3xl:rounded-[10px] 3xl:text-lg 3xl:leading-150"
              >
                Podcasts
              </NavLink>
            </li>
            <li onClick={gotop}>
              <NavLink
                to="/resources"
                className="py-2.5 px-4.8 text-sm font-medium text-gray-50 border border-transparent rounded-md transition-all duration-200 ease-in 3xl:py-3.5 3xl:px-6 3xl:rounded-[10px] 3xl:text-lg 3xl:leading-150"
              >
                Resources
              </NavLink>
            </li>
          </ul>
          <div>
            <Link
              to="/contact"
              className="hidden xll:block py-2.5 px-3.5 text-sm font-medium leading-150 text-dark-8 bg-yellow-55 rounded-md 3xl:text-lg 3xl:leading-150 3xl:py-3.5 3xl:px-5 3xl:rounded-[10px]"
            >
              Contact Us
            </Link>
            <div
              onClick={() => setshowmanu(!showmanu)}
              className="xll:hidden cursor-pointer"
            >
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.25 10.0625C4.25 9.4757 4.7257 9 5.3125 9H28.6875C29.2743 9 29.75 9.4757 29.75 10.0625C29.75 10.6493 29.2743 11.125 28.6875 11.125H5.3125C4.7257 11.125 4.25 10.6493 4.25 10.0625ZM4.25 17.5C4.25 16.9132 4.7257 16.4375 5.3125 16.4375H28.6875C29.2743 16.4375 29.75 16.9132 29.75 17.5C29.75 18.0868 29.2743 18.5625 28.6875 18.5625H5.3125C4.7257 18.5625 4.25 18.0868 4.25 17.5ZM15.9375 24.9375C15.9375 24.3507 16.4132 23.875 17 23.875H28.6875C29.2743 23.875 29.75 24.3507 29.75 24.9375C29.75 25.5243 29.2743 26 28.6875 26H17C16.4132 26 15.9375 25.5243 15.9375 24.9375Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
