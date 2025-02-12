import React from "react";
import hhh from "../assets/hhh.png";
import hhhl from "../assets/hhhl.png";
import hhhm from "../assets/hhhm.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <section className="hero xll:flex">
        <div className="pt-10 xll:pt-24.5 3xl:pt-36.5">
          <div className="px-4 mb-7.5 xll:w-[837px] xll:pl-20 xll:pr-10 xll:mb-24.5 3xl:w-[1105px] 3xl:pl-36.6 3xl:pr-12.5">
            <h3 className="text-lg font-medium leading-120 tracking-3 text-dark-40 mb-3.5 xll:text-[22px] xll:mb-5 3xl:text-3xl 3xl:leading-120 3xl:mb-7.5">
              Your Journey to Tomorrow Begins Here
            </h3>
            <h1 className="text-3xl font-medium leading-120 tracking-3 mb-2.5 text-white xll:text-[55px] xll:mb-3.5 3xl:text-[70px] 3xl:mb-5">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-sm leading-150 tracking-3 text-gray-50 xll:hidden">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future.
            </p>
            <p className="hidden xll:block text-base leading-150 text-gray-50 tracking-tight 3xl:text-lg">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
          </div>
          <div className="border-y border-dark-15 flex xll:pl-20 3xl:pl-36.6">
            <div className="p-5 xll:grow xll:pl-0 xll:py-7.5 3xl:py-12.5">
              <span className="block text-2xl font-semibold leading-150 tracking-3 text-white xll:text-3xl xll:leading-150 xll:mb-1 3xl:text-[40px] 3xl:mb-2.5">
                300<span className="text-yellow-55">+</span>
              </span>
              <h5 className="text-sm leading-150 tracking-3 text-gray-60 3xl:text-lg">
                Resources available
              </h5>
            </div>
            <div className="p-5 border-x border-dark-15 xll:grow xll:py-7.5 3xl:py-12.5">
              <span className="block text-2xl font-semibold leading-150 tracking-3 text-white xll:text-3xl xll:leading-150 xll:mb-1 3xl:text-[40px] 3xl:mb-2.5">
                12k<span className="text-yellow-55">+</span>
              </span>
              <h5 className="text-sm leading-150 tracking-3 text-gray-60 3xl:text-lg">
                Resources available
              </h5>
            </div>
            <div className="p-5 xll:grow xll:py-7.5 3xl:py-12.5">
              <span className="block text-2xl font-semibold leading-150 tracking-3 text-white xll:text-3xl xll:leading-150 xll:mb-1 3xl:text-[40px] 3xl:mb-2.5">
                10k<span className="text-yellow-55">+</span>
              </span>
              <h5 className="text-sm leading-150 tracking-3 text-gray-60 3xl:text-lg">
                Resources available
              </h5>
            </div>
          </div>
        </div>
        {/* hero right part start */}
        <div className="p-10 pt-24.5 relative overflow-hidden xll:pt-0 flex flex-col justify-end xll:pb-12.5 xll:border-l xll:border-b border-dark-15 w-full xll:pl-12.5 xll:pr-0 3xl:p-20">
         <div className="main__item relative z-30">
         <div className="p-2 bg-dark-10 border border-dark-15 mb-5 flex w-fit rounded-full xll:p-2.5 xll:mb-7.5">
            <img src={hero1} alt=" hjero img" className="block h-10 w-10 xll:h-12.5 xll:w-12.5 3xl:h-14.5 3xl:w-14.5" />
            <img src={hero2} alt=" hjero img" className="block -ml-3.5 h-10 w-10 xll:h-12.5 xll:w-12.5 3xl:h-14.5 3xl:w-14.5" />
            <img src={hero3} alt=" hjero img" className="block -ml-3.5 h-10 w-10 xll:h-12.5 xll:w-12.5 3xl:h-14.5 3xl:w-14.5" />
            <img src={hero4} alt=" hjero img" className="block -ml-3.5 h-10 w-10 xll:h-12.5 xll:w-12.5 3xl:h-14.5 3xl:w-14.5" />
          </div>
          <div className="mb-5 3xl:mb-7.5">
            <h3 className="text-lg font-medium leading-150 tracking-3 text-white mb-1 3xl:text-2xl 3xl:leading-150 3xl:mb-3.5 xll:text-xl xll:leading-150 xll:mb-1.5">Explore 1000+ resources</h3>
            <p className="text-sm leading-150 tracking-3 text-gray-60 3xl:text-lg 3xl:leading-150 xll:text-base xll:leading-150">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
          </div>
          <Link className="black justify-center xll:w-fit">
            <span>Explore Resources</span>
            <svg
              className="h-5 w-5 3xl:h-6 3xl:w-6"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.1875 3.3125L14.625 3.3125C14.7742 3.3125 14.9173 3.37176 15.0227 3.47725C15.1282 3.58274 15.1875 3.72582 15.1875 3.875V12.3125C15.1875 12.6232 14.9357 12.875 14.625 12.875C14.3143 12.875 14.0625 12.6232 14.0625 12.3125V5.233L3.77275 15.5227C3.55308 15.7424 3.19692 15.7424 2.97725 15.5227C2.75758 15.3031 2.75758 14.9469 2.97725 14.7273L13.267 4.4375L6.1875 4.4375C5.87684 4.4375 5.625 4.18566 5.625 3.875C5.625 3.56434 5.87684 3.3125 6.1875 3.3125Z"
                fill="#FFD11A"
              />
            </svg>
          </Link>
         </div>
         <div className="absolute__img absolute top-0 left-0 z-10">
          <img src={hhh} alt="hero absolute img" className="hidden 3xl:block" />
          <img src={hhhl} alt="hero absolute img" className="hidden xll:block 3xl:hidden" />
          <img src={hhhm} alt="hero absolute img" className="block xll:hidden" />
         </div>
        </div>
      </section>
    </>
  );
}

export default Home;
