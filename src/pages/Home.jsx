import React from "react";
import hhh from "../assets/hhh.png";
import hhhl from "../assets/hhhl.png";
import hhhm from "../assets/hhhm.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import { data, Link } from "react-router";
import CommonTittle from "../Components/CommonTittle";
import Explore from "../Components/Explore";

function Home() {
  let quality = [
    {
      tittle: "Quantity",
      pera: "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      tittle: "Variety",
      pera: "Articles cover fields like AI, robotics, biotechnology, and more.",
    },
    {
      tittle: "Frequency",
      pera: "Fresh content added daily to keep you up to date.",
    },
    {
      tittle: "Authoritative",
      pera: "Written by our team of tech experts and industry professionals.",
    },
  ];
  let depth = [
    {
      tittle: "Depth",
      pera: "500+ research articles for in-depth understanding.",
    },
    {
      tittle: "Graphics",
      pera: "Visual aids and infographics to enhance comprehension.",
    },
    {
      tittle: "Trends",
      pera: "Explore emerging trends in future technology research.",
    },
    {
      tittle: "Contributors",
      pera: "Contributions from tech researchers and academics.",
    },
  ];
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
            <p className="hidden xll:block text-base leading-150 text-gray-50 tracking-tight 3xl:text-lg">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
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
              <img
                src={hero1}
                alt=" hjero img"
                className="block h-10 w-10 xll:h-12.5 xll:w-12.5 3xl:h-14.5 3xl:w-14.5"
              />
              <img
                src={hero2}
                alt=" hjero img"
                className="block -ml-3.5 h-10 w-10 xll:h-12.5 xll:w-12.5 3xl:h-14.5 3xl:w-14.5"
              />
              <img
                src={hero3}
                alt=" hjero img"
                className="block -ml-3.5 h-10 w-10 xll:h-12.5 xll:w-12.5 3xl:h-14.5 3xl:w-14.5"
              />
              <img
                src={hero4}
                alt=" hjero img"
                className="block -ml-3.5 h-10 w-10 xll:h-12.5 xll:w-12.5 3xl:h-14.5 3xl:w-14.5"
              />
            </div>
            <div className="mb-5 3xl:mb-7.5">
              <h3 className="text-lg font-medium leading-150 tracking-3 text-white mb-1 3xl:text-2xl 3xl:leading-150 3xl:mb-3.5 xll:text-xl xll:leading-150 xll:mb-1.5">
                Explore 1000+ resources
              </h3>
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
            <img
              src={hhh}
              alt="hero absolute img"
              className="hidden 3xl:block"
            />
            <img
              src={hhhl}
              alt="hero absolute img"
              className="hidden xll:block 3xl:hidden"
            />
            <img
              src={hhhm}
              alt="hero absolute img"
              className="block xll:hidden"
            />
          </div>
        </div>
      </section>
      <section className="px-4 xll:px-20 3xl:px-36.6 xll:flex">
        <div className="py-7.5 xll:py-10 xll:pr-12.5 3xl:py-12.5 3xl:pr-20 xll:grow">
          <div className="mb-4 w-fit xll:mb-5 3xl:mb-7.5">
            <svg
              className="h-7.5 w-7.5 xll:h-10 xll:w-10 3xl:h-12.5 3xl:w-12.5"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9275 34.4167H21.1219V50H28.9275V34.4167Z"
                fill="#FFD11A"
              />
              <path d="M28.9275 0H21.1219V15.5833H28.9275V0Z" fill="#FFD11A" />
              <path
                d="M34.4097 21.0945V28.9001H49.993V21.0945H34.4097Z"
                fill="#FFD11A"
              />
              <path
                d="M0 21.1016L0 28.9072H15.5833V21.1016H0Z"
                fill="#FFD11A"
              />
              <path
                d="M34.4245 28.8769L28.9052 34.3962L39.9241 45.4151L45.4434 39.8958L34.4245 28.8769Z"
                fill="#404040"
              />
              <path
                d="M10.0906 4.54558L4.57129 10.0649L15.5903 21.0839L21.1096 15.5646L10.0906 4.54558Z"
                fill="#404040"
              />
              <path
                d="M28.886 15.5885L34.4053 21.1078L45.4243 10.0888L39.9049 4.56949L28.886 15.5885Z"
                fill="#404040"
              />
              <path
                d="M4.55724 39.9197L10.0765 45.439L21.0955 34.4201L15.5762 28.9008L4.55724 39.9197Z"
                fill="#404040"
              />
            </svg>
          </div>
          <div className="mb-2.5 flex justify-between items-center xll:mb-5 3xl:mb-7.5">
            <div>
              <h4 className="text-base font-medium text-white tracking-tight mb-0.5 leading-150 xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150 3xl:mb-1">
                Latest News Updates
              </h4>
              <h5 className="text-sm leading-150 tracking-tight text-gray-50 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                Stay Current
              </h5>
            </div>
            <div className="p-2.5 bg-yellow-55 rounded-full cursor-pointer xll:p-3 3xl:p-3.5">
              <svg
                className="h-5 w-5 3xl:h-6 3xl:w-6"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.58325 4.25L19.8333 4.25C20.0322 4.25 20.2229 4.32902 20.3636 4.46967C20.5042 4.61032 20.5833 4.80109 20.5833 5V16.25C20.5833 16.6642 20.2475 17 19.8333 17C19.419 17 19.0833 16.6642 19.0833 16.25V6.81066L5.36358 20.5303C5.07069 20.8232 4.59582 20.8232 4.30292 20.5303C4.01003 20.2374 4.01003 19.7626 4.30292 19.4697L18.0226 5.75L8.58325 5.75C8.16904 5.75 7.83325 5.41421 7.83325 5C7.83325 4.58579 8.16904 4.25 8.58325 4.25Z"
                  fill="#141414"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-xl 3xl:leading-150">
            Over 1,000 articles published monthly
          </p>
        </div>
        <div className="py-7.5 xll:py-10 xll:px-12.5 3xl:py-12.5 3xl:px-20 border-y border-dark-15 xll:border-x xll:border-y-0 xll:grow">
          <div className="mb-4 w-fit xll:mb-5 3xl:mb-7.5">
            <svg
              className="h-7.5 w-7.5 xll:h-10 xll:w-10 3xl:h-12.5 3xl:w-12.5"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9275 34.4167H21.1219V50H28.9275V34.4167Z"
                fill="#FFD11A"
              />
              <path d="M28.9275 0H21.1219V15.5833H28.9275V0Z" fill="#FFD11A" />
              <path
                d="M34.4097 21.0945V28.9001H49.993V21.0945H34.4097Z"
                fill="#FFD11A"
              />
              <path
                d="M0 21.1016L0 28.9072H15.5833V21.1016H0Z"
                fill="#FFD11A"
              />
              <path
                d="M34.4245 28.8769L28.9052 34.3962L39.9241 45.4151L45.4434 39.8958L34.4245 28.8769Z"
                fill="#404040"
              />
              <path
                d="M10.0906 4.54558L4.57129 10.0649L15.5903 21.0839L21.1096 15.5646L10.0906 4.54558Z"
                fill="#404040"
              />
              <path
                d="M28.886 15.5885L34.4053 21.1078L45.4243 10.0888L39.9049 4.56949L28.886 15.5885Z"
                fill="#404040"
              />
              <path
                d="M4.55724 39.9197L10.0765 45.439L21.0955 34.4201L15.5762 28.9008L4.55724 39.9197Z"
                fill="#404040"
              />
            </svg>
          </div>
          <div className="mb-2.5 flex justify-between items-center xll:mb-5 3xl:mb-7.5">
            <div>
              <h4 className="text-base font-medium text-white tracking-tight mb-0.5 leading-150 xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150 3xl:mb-1">
                Latest News Updates
              </h4>
              <h5 className="text-sm leading-150 tracking-tight text-gray-50 xll:text-base xll:leading-150 3xl:text-xl 3xl:leading-150">
                Stay Current
              </h5>
            </div>
            <div className="p-2.5 bg-yellow-55 rounded-full cursor-pointer xll:p-3 3xl:p-3.5">
              <svg
                className="h-5 w-5 3xl:h-6 3xl:w-6"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.58325 4.25L19.8333 4.25C20.0322 4.25 20.2229 4.32902 20.3636 4.46967C20.5042 4.61032 20.5833 4.80109 20.5833 5V16.25C20.5833 16.6642 20.2475 17 19.8333 17C19.419 17 19.0833 16.6642 19.0833 16.25V6.81066L5.36358 20.5303C5.07069 20.8232 4.59582 20.8232 4.30292 20.5303C4.01003 20.2374 4.01003 19.7626 4.30292 19.4697L18.0226 5.75L8.58325 5.75C8.16904 5.75 7.83325 5.41421 7.83325 5C7.83325 4.58579 8.16904 4.25 8.58325 4.25Z"
                  fill="#141414"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            Over 1,000 articles published monthly
          </p>
        </div>
        <div className="py-7.5 xll:py-10 xll:pl-12.5 3xl:py-12.5 3xl:pl-20 xll:grow">
          <div className="mb-4 w-fit xll:mb-5 3xl:mb-7.5">
            <svg
              className="h-7.5 w-7.5 xll:h-10 xll:w-10 3xl:h-12.5 3xl:w-12.5"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9275 34.4167H21.1219V50H28.9275V34.4167Z"
                fill="#FFD11A"
              />
              <path d="M28.9275 0H21.1219V15.5833H28.9275V0Z" fill="#FFD11A" />
              <path
                d="M34.4097 21.0945V28.9001H49.993V21.0945H34.4097Z"
                fill="#FFD11A"
              />
              <path
                d="M0 21.1016L0 28.9072H15.5833V21.1016H0Z"
                fill="#FFD11A"
              />
              <path
                d="M34.4245 28.8769L28.9052 34.3962L39.9241 45.4151L45.4434 39.8958L34.4245 28.8769Z"
                fill="#404040"
              />
              <path
                d="M10.0906 4.54558L4.57129 10.0649L15.5903 21.0839L21.1096 15.5646L10.0906 4.54558Z"
                fill="#404040"
              />
              <path
                d="M28.886 15.5885L34.4053 21.1078L45.4243 10.0888L39.9049 4.56949L28.886 15.5885Z"
                fill="#404040"
              />
              <path
                d="M4.55724 39.9197L10.0765 45.439L21.0955 34.4201L15.5762 28.9008L4.55724 39.9197Z"
                fill="#404040"
              />
            </svg>
          </div>
          <div className="mb-2.5 flex justify-between items-center xll:mb-5 3xl:mb-7.5">
            <div>
              <h4 className="text-base font-medium text-white tracking-tight mb-0.5 leading-150 xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150 3xl:mb-1">
                Latest News Updates
              </h4>
              <h5 className="text-sm leading-150 tracking-tight text-gray-50 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                Stay Current
              </h5>
            </div>
            <div className="p-2.5 bg-yellow-55 rounded-full cursor-pointer xll:p-3 3xl:p-3.5">
              <svg
                className="h-5 w-5 3xl:h-6 3xl:w-6"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.58325 4.25L19.8333 4.25C20.0322 4.25 20.2229 4.32902 20.3636 4.46967C20.5042 4.61032 20.5833 4.80109 20.5833 5V16.25C20.5833 16.6642 20.2475 17 19.8333 17C19.419 17 19.0833 16.6642 19.0833 16.25V6.81066L5.36358 20.5303C5.07069 20.8232 4.59582 20.8232 4.30292 20.5303C4.01003 20.2374 4.01003 19.7626 4.30292 19.4697L18.0226 5.75L8.58325 5.75C8.16904 5.75 7.83325 5.41421 7.83325 5C7.83325 4.58579 8.16904 4.25 8.58325 4.25Z"
                  fill="#141414"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-xl 3xl:leading-150">
            Over 1,000 articles published monthly
          </p>
        </div>
      </section>
      <CommonTittle capsul="Unlock the Power of" tittle="FutureTech Features" />
      <section className="px-4 xll:flex xll:items-center xll:px-20 xll:gap-14.5 border-b border-dark-15 3xl:px-36.6 3xl:gap-20">
        <div className="py-12.5 xll:w-[413px] 3xl:w-[519px] xll:py-0">
          <div className="w-fit mb-5 xll:mb-10 3xl:mb-12.5">
            <svg
              className="h-12.5 w-12.5 xll:h-14.5 xll:w-14.5 3xl:h-20 3xl:w-20"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.5 41C48.5048 39.0731 54 35.0949 54 30.5C54 25.9051 48.5048 21.9269 40.5 20C41.3235 23.1594 41.787 26.7257 41.787 30.5C41.787 34.2743 41.3235 37.8406 40.5 41Z"
                fill="#404040"
              />
              <path
                d="M19.5 41C11.4952 39.0731 6 35.0949 6 30.5C6 25.9051 11.4952 21.9269 19.5 20C18.6765 23.1594 18.213 26.7257 18.213 30.5C18.213 34.2743 18.6765 37.8406 19.5 41Z"
                fill="#404040"
              />
              <path
                d="M19.5 41C21.4269 49.0048 25.4051 54.5 30 54.5C34.5949 54.5 38.5731 49.0048 40.5 41C37.3406 41.8235 33.7743 42.287 30 42.287C26.2257 42.287 22.6594 41.8235 19.5 41Z"
                fill="#FFD11A"
              />
              <path
                d="M19.5 20C21.4269 11.9952 25.4051 6.5 30 6.5C34.5949 6.5 38.5731 11.9952 40.5 20C37.3406 19.1765 33.7743 18.713 30 18.713C26.2257 18.713 22.6594 19.1765 19.5 20Z"
                fill="#FFD11A"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight leading-150 text-white mb-1.5 3xl:text-3xl xll:leading-150 xll:mb-2.5 3xl:text-[40px] 3xl:mb-4 ">
            Future Technology Blog
          </h3>
          <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            Stay informed with our blog section dedicated to future technology.
          </p>
        </div>
        <div className="grid grid-cols-1 px-4 py-7.5 gap-2.5 border-t border-dark-15 xll:grid-cols-2 xll:gap-5 xll:p-14.5 xll:pr-0 xll:border-l xll:border-t-0 3xl:p-20 3xl:pr-0">
          {quality.map((data) => {
            return (
              <div className="p-6 bg-dark-10 border border-dark-15 rounded-[10px] xll:p-7.5 xll:w-[363px] 3xl:w-[443px] 3xl:p-10 3xl:rounded-xl">
                <h4 className="text-lg font-medium leading-150 tracking-tight text-white mb-1 xll:text-xl xll:leading-150 xll:mb-4 3xl:text-2xl 3xl:leading-150 3xl:mb-5">
                  {data.tittle}
                </h4>
                <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                  {data.pera}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="px-4 xll:flex xll:items-center xll:px-20 xll:gap-14.5 border-b border-dark-15 3xl:px-36.6 3xl:gap-20">
        <div className="py-12.5 xll:w-[413px] 3xl:w-[519px] xll:py-0">
          <div className="w-fit mb-5 xll:mb-10 3xl:mb-12.5">
            <svg
              className="h-12.5 w-12.5 xll:h-14.5 xll:w-14.5 3xl:h-20 3xl:w-20"
              viewBox="0 0 70 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0952 41.9509V60.5H53.2319V41.9509H16.0952Z"
                fill="#FFD11A"
              />
              <path
                d="M53.2241 41.9349L69.2876 32.6604L50.7193 0.500048L34.6558 9.77458L53.2241 41.9349Z"
                fill="#404040"
              />
              <path
                d="M34.6319 9.79968L18.5684 0.525146L2.67029e-05 32.6855L16.0635 41.96L34.6319 9.79968Z"
                fill="#404040"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight leading-150 text-white mb-1.5 3xl:text-3xl xll:leading-150 xll:mb-2.5 3xl:text-[40px] 3xl:mb-4 ">
            Research Insights Blogs
          </h3>
          <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            Dive deep into future technology concepts with our research section.
          </p>
        </div>
        <div className="grid grid-cols-1 px-4 py-7.5 gap-2.5 border-t border-dark-15 xll:grid-cols-2 xll:gap-5 xll:p-14.5 xll:pr-0 xll:border-l xll:border-t-0 3xl:p-20 3xl:pr-0">
          {depth.map((data) => {
            return (
              <div className="p-6 bg-dark-10 border border-dark-15 rounded-[10px] xll:p-7.5 xll:w-[363px] 3xl:w-[443px] 3xl:p-10 3xl:rounded-xl">
                <h4 className="text-lg font-medium leading-150 tracking-tight text-white mb-1 xll:text-xl xll:leading-150 xll:mb-4 3xl:text-2xl 3xl:leading-150 3xl:mb-5">
                  {data.tittle}
                </h4>
                <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                  {data.pera}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <CommonTittle capsul="A Knowledge Treasure Trove"tittle="Explore FutureTech's In-Depth Blog Posts" button="View All Blogs" />
      <Explore/>
    </>
  );
}

export default Home;
