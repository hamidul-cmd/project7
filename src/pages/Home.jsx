import React from "react";
import hhh from "../assets/hhh.png";
import hhhl from "../assets/hhhl.png";
import hhhm from "../assets/hhhm.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import { Link } from "react-router";
import CommonTittle from "../Components/CommonTittle";
import Explore from "../Components/Explore";
import ebook1 from "../assets/ebook1.png";
import ebook2 from "../assets/ebook2.png";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import grid5 from "../assets/grid5.png";
import grid6 from "../assets/grid6.png";
import Revolution from "../Components/Revolution";

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
  let testimorneal = [
    {
      img: grid1,
      name: "Sarah Thompson",
      address: "San Francisco, USA",
      comment:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    },
    {
      img: grid2,
      name: "Raj Patel",
      address: "Mumbai, India",
      comment:
        "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
    },
    {
      img: grid3,
      name: "Emily Adams",
      address: "London, UK",
      comment:
        "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
    },
    {
      img: grid4,
      name: "Alan Jackson",
      address: "Houston, USA",
      comment:
        "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
    },
    {
      img: grid5,
      name: "Jessica Miller",
      address: "Boston, USA",
      comment:
        "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
    },
    {
      img: grid6,
      name: "Diego Lopez",
      address: "Barcelona, Spain",
      comment:
        "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
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
      <CommonTittle
        capsul="A Knowledge Treasure Trove"
        tittle="Explore FutureTech's In-Depth Blog Posts"
        button="View All Blogs"
      />
      <Explore />
      <CommonTittle
        capsul="Your Gateway to In-Depth Information"
        tittle="Unlock Valuable Knowledge with FutureTech's Resources"
        button="View All Resources"
      />
      <section className="px-4 xll:px-20 3xl:px-36.6 xll:flex xll:items-center xll:gap-14.5 3xl:gap-20 border-b border-dark-15">
        <div className="pt-10 mb-10 xll:w-[413px] 3xl:w-[519px]">
          <div className="mb-6 w-fit xll:mb-7.5 3xl:mb-12.5">
            <svg
              className="h-12.5 w-12.5 xll:h-14.5 xll:w-14.5 3xl:h-20 3xl:w-20"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.5 35C28.5 26.3674 53.6449 11.001 52.4594 16.7595C49.9819 28.7935 49.9819 41.2065 52.4594 53.2405C53.6449 58.999 28.5 43.6326 28.5 35Z"
                fill="#FFD11A"
              />
              <path
                d="M31.5 26C31.5 34.6326 6.35514 49.999 7.54064 44.2405C10.0181 32.2065 10.0181 19.7935 7.54064 7.75952C6.35514 2.00102 31.5 17.3674 31.5 26Z"
                fill="#404040"
              />
            </svg>
          </div>
          <h3 className="text-2xl leading-150 tracking-tight text-white mb-1 xll:text-3xl xll:leading-150 xll:mb-2.5 3xl:text-[40px] 3xl:mb-4">
            Ebooks
          </h3>
          <p className="text-sm leading-150 tracking-tight mb-6 text-gray-60 xll:text-base xll:leading-150 xll:mb-7.5 3xl:text-xl  3xl:mb-12.5">
            Explore our collection of ebooks covering a wide spectrum of future
            technology topics.
          </p>
          <Link className="flex black gap-1 bg-dark-10 justify-center mb-5 xll:mb-10 3xl:mb-14.5">
            <span>Download Ebooks Now</span>
            <div>
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
            </div>
          </Link>
          <div className="flex items-center justify-between px-7.5 py-5 border border-dark-15 rounded-lg bg-dark-10 xll:p-5 xll:gap-7.5 xll:w-fit 3xl:p-7.5 3xl:gap-12.5">
            <div>
              <h5 className="text-sm leading-150 tracking-tight mb-0.5 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                Downloaded By
              </h5>
              <h4 className="text-lg font-semibold leading-150 tracking-tight text-white xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
                10k + Users
              </h4>
            </div>
            <div className="flex space-x-[-9px] p-2 bg-dark-8 rounded-xl 3xl:p-2.5">
              <img src={hero1} alt="mini img" className="block" />
              <img src={hero2} alt="mini img" className="block" />
              <img src={hero3} alt="mini img" className="block" />
              <img src={hero4} alt="mini img" className="block" />
            </div>
          </div>
        </div>
        <div className="py-10 border-y border-dark-15 xll:border-l xll:border-y-0 xll:py-14.5 xll:pl-14.5 3xl:p-20 3xl:pr-0">
          <div className="mb-6 xll:flex xll:justify-between xll:items-center xll:gap-5 3xl:mb-7.5">
            <h4 className="text-lg leading-150 tracking-tight text-white font-semibold mb-2.5 xll:text-xl xll:leading-150 xll:mb-0 3xl:text-2xl 3xl:leading-150">
              Variety of Topics
            </h4>
            <p className="text-sm leading-150 text-gray-60 tracking-tight xll:w-[528px] xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:w-[654px]">
              Topics include AI in education (25%), renewable energy (20%),
              healthcare (15%), space exploration (25%), and biotechnology
              (15%).
            </p>
          </div>
          <div className="mb-6 3xl:mb-7.5">
            <img
              src={ebook1}
              alt=""
              className="block w-full h-[169px] xll:h-[257px] 3xl:h-[332px]"
            />
          </div>
          <div className="xll:flex xll:gap-4 xll:mb-6 3xl:gap-5 3xl:mb-7.5">
            <div className="p-5 bg-dark-10 border border-dark-15 rounded-lg mb-4 xll:p-6 xll:mb-0 3xl:p-7.5 3xl:rounded-xl">
              <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-0.5 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
                Total Whitepapers
              </h5>
              <h4 className="text-base leading-150 tracking-tight font-semibold text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">
                Over 50 whitepapers
              </h4>
            </div>
            <div className="p-5 bg-dark-10 border border-dark-15 rounded-lg mb-4 flex items-center justify-between xll:grow xll:p-6 xll:mb-0">
              <div>
                <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-0.5 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
                  Download Formats
                </h5>
                <h4 className="text-base leading-150 tracking-tight font-semibold text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">
                  PDF format for access.
                </h4>
              </div>
              <Link className="black flex items-center gap-1 bg-dark-8">
                <span>Preview</span>
                <div>
                  <svg
                    className="h-5 w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0023 9.52301C18.2153 9.79098 18.3332 10.1391 18.3332 10.5001C18.3332 10.8611 18.2153 11.2092 18.0023 11.4772C16.6536 13.1251 13.5836 16.3334 9.99984 16.3334C6.4161 16.3334 3.34616 13.1251 1.99744 11.4772C1.78442 11.2092 1.6665 10.8611 1.6665 10.5001C1.6665 10.1391 1.78442 9.79098 1.99744 9.52301C3.34616 7.87509 6.4161 4.66675 9.99984 4.66675C13.5836 4.66675 16.6536 7.87509 18.0023 9.52301Z"
                      stroke="#FFD11A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0003 13.0925C11.4191 13.0925 12.5693 11.9318 12.5693 10.5C12.5693 9.06814 11.4191 7.90741 10.0003 7.90741C8.58145 7.90741 7.43127 9.06814 7.43127 10.5C7.43127 11.9318 8.58145 13.0925 10.0003 13.0925Z"
                      stroke="#FFD11A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="p-5 bg-dark-10 border border-dark-15 rounded-lg xll:p-6">
            <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-0.5 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
              Average Author Expertise
            </h5>
            <p className="text-base leading-150 tracking-tight font-medium text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">
              Ebooks are authored by renowned experts with an average of 15
              years of experience
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 xll:px-20 3xl:px-36.6 xll:flex xll:items-center xll:gap-14.5 3xl:gap-20">
        <div className="pt-10 mb-10 xll:w-[413px] 3xl:w-[519px]">
          <div className="mb-6 w-fit xll:mb-7.5 3xl:mb-12.5">
            <svg
              className="h-12.5 w-12.5 xll:h-14.5 xll:w-14.5 3xl:h-20 3xl:w-20"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.5 35C28.5 26.3674 53.6449 11.001 52.4594 16.7595C49.9819 28.7935 49.9819 41.2065 52.4594 53.2405C53.6449 58.999 28.5 43.6326 28.5 35Z"
                fill="#FFD11A"
              />
              <path
                d="M31.5 26C31.5 34.6326 6.35514 49.999 7.54064 44.2405C10.0181 32.2065 10.0181 19.7935 7.54064 7.75952C6.35514 2.00102 31.5 17.3674 31.5 26Z"
                fill="#404040"
              />
            </svg>
          </div>
          <h3 className="text-2xl leading-150 tracking-tight text-white mb-1 xll:text-3xl xll:leading-150 xll:mb-2.5 3xl:text-[40px] 3xl:mb-4">
            Ebooks
          </h3>
          <p className="text-sm leading-150 tracking-tight mb-6 text-gray-60 xll:text-base xll:leading-150 xll:mb-7.5 3xl:text-xl  3xl:mb-12.5">
            Explore our collection of ebooks covering a wide spectrum of future
            technology topics.
          </p>
          <Link className="flex black gap-1 bg-dark-10 justify-center mb-5 xll:mb-10 3xl:mb-14.5">
            <span>Download Ebooks Now</span>
            <div>
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
            </div>
          </Link>
          <div className="flex items-center justify-between px-7.5 py-5 border border-dark-15 rounded-lg bg-dark-10 xll:p-5 xll:gap-7.5 xll:w-fit 3xl:p-7.5 3xl:gap-12.5">
            <div>
              <h5 className="text-sm leading-150 tracking-tight mb-0.5 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                Downloaded By
              </h5>
              <h4 className="text-lg font-semibold leading-150 tracking-tight text-white xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
                10k + Users
              </h4>
            </div>
            <div className="flex space-x-[-9px] p-2 bg-dark-8 rounded-xl 3xl:p-2.5">
              <img src={hero1} alt="mini img" className="block" />
              <img src={hero2} alt="mini img" className="block" />
              <img src={hero3} alt="mini img" className="block" />
              <img src={hero4} alt="mini img" className="block" />
            </div>
          </div>
        </div>
        <div className="py-10 border-y border-dark-15 xll:border-l xll:border-y-0 xll:py-14.5 xll:pl-14.5 3xl:p-20 3xl:pr-0">
          <div className="mb-6 xll:flex xll:justify-between xll:items-center xll:gap-5 3xl:mb-7.5">
            <h4 className="text-lg leading-150 tracking-tight text-white font-semibold mb-2.5 xll:text-xl xll:leading-150 xll:mb-0 3xl:text-2xl 3xl:leading-150">
              Variety of Topics
            </h4>
            <p className="text-sm leading-150 text-gray-60 tracking-tight xll:w-[528px] xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:w-[654px]">
              Topics include AI in education (25%), renewable energy (20%),
              healthcare (15%), space exploration (25%), and biotechnology
              (15%).
            </p>
          </div>
          <div className="mb-6 3xl:mb-7.5">
            <img
              src={ebook2}
              alt=""
              className="block w-full h-[169px] xll:h-[257px] 3xl:h-[332px]"
            />
          </div>
          <div className="xll:flex xll:gap-4 xll:mb-6 3xl:gap-5 3xl:mb-7.5">
            <div className="p-5 bg-dark-10 border border-dark-15 rounded-lg mb-4 xll:p-6 xll:mb-0 3xl:p-7.5 3xl:rounded-xl">
              <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-0.5 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
                Total Whitepapers
              </h5>
              <h4 className="text-base leading-150 tracking-tight font-semibold text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">
                Over 50 whitepapers
              </h4>
            </div>
            <div className="p-5 bg-dark-10 border border-dark-15 rounded-lg mb-4 flex items-center justify-between xll:grow xll:p-6 xll:mb-0">
              <div>
                <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-0.5 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
                  Download Formats
                </h5>
                <h4 className="text-base leading-150 tracking-tight font-semibold text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">
                  PDF format for access.
                </h4>
              </div>
              <Link className="black flex items-center gap-1 bg-dark-8">
                <span>Preview</span>
                <div>
                  <svg
                    className="h-5 w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0023 9.52301C18.2153 9.79098 18.3332 10.1391 18.3332 10.5001C18.3332 10.8611 18.2153 11.2092 18.0023 11.4772C16.6536 13.1251 13.5836 16.3334 9.99984 16.3334C6.4161 16.3334 3.34616 13.1251 1.99744 11.4772C1.78442 11.2092 1.6665 10.8611 1.6665 10.5001C1.6665 10.1391 1.78442 9.79098 1.99744 9.52301C3.34616 7.87509 6.4161 4.66675 9.99984 4.66675C13.5836 4.66675 16.6536 7.87509 18.0023 9.52301Z"
                      stroke="#FFD11A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0003 13.0925C11.4191 13.0925 12.5693 11.9318 12.5693 10.5C12.5693 9.06814 11.4191 7.90741 10.0003 7.90741C8.58145 7.90741 7.43127 9.06814 7.43127 10.5C7.43127 11.9318 8.58145 13.0925 10.0003 13.0925Z"
                      stroke="#FFD11A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="p-5 bg-dark-10 border border-dark-15 rounded-lg xll:p-6">
            <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-0.5 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
              Average Author Expertise
            </h5>
            <p className="text-base leading-150 tracking-tight font-medium text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">
              Ebooks are authored by renowned experts with an average of 15
              years of experience
            </p>
          </div>
        </div>
      </section>
      <CommonTittle
        capsul="What Our Readers Say"
        tittle="Real Words from Real Readers"
        button="View All Testimonials"
      />
      <section className="px-4 xll:px-20 3xl:px-36.6  border-y border-dark-15">
        <div className="grid__wrapper grid grid-cols-1 xll:grid-cols-3 xll:gap-x-20 overflow-hidden 3xl:gap-x-24.5">
          {testimorneal.map((data) => {
            return (
              <div className="box py-10 xll:py-14.5 3xl:py-20">
                <div className="flex items-center gap-2.5 justify-center mb-12.5 3xl:gap-3 3xl:mb-14.5">
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="h-12.5 w-12.5 3xl:h-14.5 3xl:w-14.5"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-medium leading-150 text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150 3xl:mb-0.5">
                      {data.name}
                    </h4>
                    <h5 className="text-base leading-150 text-dark-40 3xl:text-lg 3xl:leading-150">
                      {data.address}
                    </h5>
                  </div>
                </div>
                <div className="p-5 bg-dark-10 border border-dark-15 rounded-[10px] relative 3xl:p-7.5 3xl:pt-12.5 xll:pt-10 pt-7.5">
                  <p className="text-center text-white text-sm leading-150 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                    {data.comment}
                  </p>
                  <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] flex gap-1 py-2 px-3 bg-dark-8 border border-dark-15 rounded-full 3xl:py-2.5 3xl:px-4 3xl:gap-[7px]">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.13733 1.47145C8.52367 0.812467 9.47633 0.812466 9.86267 1.47145L12.0234 5.15701C12.1644 5.3975 12.3994 5.56821 12.6717 5.62799L16.8446 6.54408C17.5907 6.70788 17.8851 7.61391 17.3777 8.18498L14.5402 11.3789C14.3551 11.5873 14.2653 11.8635 14.2926 12.1409L14.7109 16.3927C14.7857 17.1529 14.0149 17.7129 13.315 17.4068L9.40064 15.6952C9.14522 15.5835 8.85478 15.5835 8.59936 15.6952L4.68496 17.4068C3.98506 17.7128 3.21435 17.1529 3.28913 16.3927L3.70736 12.1409C3.73465 11.8635 3.6449 11.5873 3.45975 11.3789L0.622286 8.18498C0.114944 7.61391 0.40933 6.70788 1.15545 6.54408L5.32833 5.62799C5.60062 5.56821 5.83559 5.3975 5.97658 5.15701L8.13733 1.47145Z"
                          fill="#FFCE22"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.13733 1.47145C8.52367 0.812467 9.47633 0.812466 9.86267 1.47145L12.0234 5.15701C12.1644 5.3975 12.3994 5.56821 12.6717 5.62799L16.8446 6.54408C17.5907 6.70788 17.8851 7.61391 17.3777 8.18498L14.5402 11.3789C14.3551 11.5873 14.2653 11.8635 14.2926 12.1409L14.7109 16.3927C14.7857 17.1529 14.0149 17.7129 13.315 17.4068L9.40064 15.6952C9.14522 15.5835 8.85478 15.5835 8.59936 15.6952L4.68496 17.4068C3.98506 17.7128 3.21435 17.1529 3.28913 16.3927L3.70736 12.1409C3.73465 11.8635 3.6449 11.5873 3.45975 11.3789L0.622286 8.18498C0.114944 7.61391 0.40933 6.70788 1.15545 6.54408L5.32833 5.62799C5.60062 5.56821 5.83559 5.3975 5.97658 5.15701L8.13733 1.47145Z"
                          fill="#FFCE22"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.13733 1.47145C8.52367 0.812467 9.47633 0.812466 9.86267 1.47145L12.0234 5.15701C12.1644 5.3975 12.3994 5.56821 12.6717 5.62799L16.8446 6.54408C17.5907 6.70788 17.8851 7.61391 17.3777 8.18498L14.5402 11.3789C14.3551 11.5873 14.2653 11.8635 14.2926 12.1409L14.7109 16.3927C14.7857 17.1529 14.0149 17.7129 13.315 17.4068L9.40064 15.6952C9.14522 15.5835 8.85478 15.5835 8.59936 15.6952L4.68496 17.4068C3.98506 17.7128 3.21435 17.1529 3.28913 16.3927L3.70736 12.1409C3.73465 11.8635 3.6449 11.5873 3.45975 11.3789L0.622286 8.18498C0.114944 7.61391 0.40933 6.70788 1.15545 6.54408L5.32833 5.62799C5.60062 5.56821 5.83559 5.3975 5.97658 5.15701L8.13733 1.47145Z"
                          fill="#FFCE22"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.13733 1.47145C8.52367 0.812467 9.47633 0.812466 9.86267 1.47145L12.0234 5.15701C12.1644 5.3975 12.3994 5.56821 12.6717 5.62799L16.8446 6.54408C17.5907 6.70788 17.8851 7.61391 17.3777 8.18498L14.5402 11.3789C14.3551 11.5873 14.2653 11.8635 14.2926 12.1409L14.7109 16.3927C14.7857 17.1529 14.0149 17.7129 13.315 17.4068L9.40064 15.6952C9.14522 15.5835 8.85478 15.5835 8.59936 15.6952L4.68496 17.4068C3.98506 17.7128 3.21435 17.1529 3.28913 16.3927L3.70736 12.1409C3.73465 11.8635 3.6449 11.5873 3.45975 11.3789L0.622286 8.18498C0.114944 7.61391 0.40933 6.70788 1.15545 6.54408L5.32833 5.62799C5.60062 5.56821 5.83559 5.3975 5.97658 5.15701L8.13733 1.47145Z"
                          fill="#FFCE22"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.13733 1.47145C8.52367 0.812467 9.47633 0.812466 9.86267 1.47145L12.0234 5.15701C12.1644 5.3975 12.3994 5.56821 12.6717 5.62799L16.8446 6.54408C17.5907 6.70788 17.8851 7.61391 17.3777 8.18498L14.5402 11.3789C14.3551 11.5873 14.2653 11.8635 14.2926 12.1409L14.7109 16.3927C14.7857 17.1529 14.0149 17.7129 13.315 17.4068L9.40064 15.6952C9.14522 15.5835 8.85478 15.5835 8.59936 15.6952L4.68496 17.4068C3.98506 17.7128 3.21435 17.1529 3.28913 16.3927L3.70736 12.1409C3.73465 11.8635 3.6449 11.5873 3.45975 11.3789L0.622286 8.18498C0.114944 7.61391 0.40933 6.70788 1.15545 6.54408L5.32833 5.62799C5.60062 5.56821 5.83559 5.3975 5.97658 5.15701L8.13733 1.47145Z"
                          fill="#FFCE22"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
          <Revolution/>
    </>
  );
}

export default Home;
