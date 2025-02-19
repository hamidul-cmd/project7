import React from "react";
import ex1 from "../assets/ex1.png";
import ex2 from "../assets/ex2.png";
import ex3 from "../assets/ex3.png";
import { Link } from "react-router";

function Explore() {
  const explore = [
    {
      img: ex1,
      name: "John Techson",
      job: "Quantum Computing",
      date: "October 15, 2023",
      tittle: "The Quantum Leap in Computing",
      discribtion:
        "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
      like: "24.5k",
      comment: "50",
      share: "20",
    },
    {
      img: ex2,
      name: "Sarah Ethicist",
      job: "AI Ethics",
      date: "November 5, 2023",
      tittle: "The Ethical Dilemmas of AI",
      discribtion:
        "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
      like: "32k",
      comment: "72",
      share: "18",
    },
    {
      img: ex3,
      name: "Astronomer X",
      job: "Space Exploration",
      date: "December 10, 2023",
      tittle: "The Mars Colonization Challenge",
      discribtion:
        "Exploring the technical and logistical challenges of human colonization on Mars.",
      like: "20k",
      comment: "31",
      share: "12",
    },
  ];

  return (
    <>
      <section className="h-[97px] relative overflow-hidden xll:h-[150px] 3xl:h-[190px] border-y border-dark-15">
        <div className="box px-4 py-5 flex gap-3.5 absolute top-0 left-0 xll:py-10 xll:px-20 3xl:px-36.6 3xl:py-12.5 3xl:gap-5">
          <button className=" block w-[150px] whitespace-nowrap px-4 py-4.8 border border-dark-15 rounded-md text-sm leading-150 tracking-tight text-gray-60 xll:py-6 xll:w-[201px] 3xl:w-[250px] 3xl:py-7.5 3xl:rounded-lg 3xl:text-lg 3xl:leading-150 cursor-pointer hover:bg-dark-10 hover:text-white transition-all duration-200 ease-in-out">
            All
          </button>
          <button className="block w-[150px] whitespace-nowrap px-4 py-4.8 border border-dark-15 rounded-md text-sm leading-150 tracking-tight text-gray-60 xll:py-6 xll:w-[201px] 3xl:w-[250px] 3xl:py-7.5 3xl:rounded-lg 3xl:text-lg 3xl:leading-150 cursor-pointer hover:bg-dark-10 hover:text-white transition-all duration-200 ease-in-out">
            Quantum Computing
          </button>
          <button className="block w-[150px] whitespace-nowrap px-4 py-4.8 border border-dark-15 rounded-md text-sm leading-150 tracking-tight text-gray-60 xll:py-6 xll:w-[201px] 3xl:w-[250px] 3xl:py-7.5 3xl:rounded-lg 3xl:text-lg 3xl:leading-150 cursor-pointer hover:bg-dark-10 hover:text-white transition-all duration-200 ease-in-out">
            AI Ethics
          </button>
          <button className="block w-[150px] whitespace-nowrap px-4 py-4.8 border border-dark-15 rounded-md text-sm leading-150 tracking-tight text-gray-60 xll:py-6 xll:w-[201px] 3xl:w-[250px] 3xl:py-7.5 3xl:rounded-lg 3xl:text-lg 3xl:leading-150 cursor-pointer hover:bg-dark-10 hover:text-white transition-all duration-200 ease-in-out">
            Space Exploration
          </button>
          <button className="block w-[150px] whitespace-nowrap px-4 py-4.8 border border-dark-15 rounded-md text-sm leading-150 tracking-tight text-gray-60 xll:py-6 xll:w-[201px] 3xl:w-[250px] 3xl:py-7.5 3xl:rounded-lg 3xl:text-lg 3xl:leading-150 cursor-pointer hover:bg-dark-10 hover:text-white transition-all duration-200 ease-in-out">
            Biotechnology
          </button>
          <button className="block w-[150px] whitespace-nowrap px-4 py-4.8 border border-dark-15 rounded-md text-sm leading-150 tracking-tight text-gray-60 xll:py-6 xll:w-[201px] 3xl:w-[250px] 3xl:py-7.5 3xl:rounded-lg 3xl:text-lg 3xl:leading-150 cursor-pointer hover:bg-dark-10 hover:text-white transition-all duration-200 ease-in-out">
            Renewable Energy
          </button>
        </div>
      </section>
      <section>
        {explore.map((data) => {
          return (
            <section className="py-10 xll:py-14.5 3xl:py-20 border-b border-dark-15 px-4 xll:px-20 3xl:px-36.6 xll:flex xll:justify-between">
              <div className="flex justify-between items-center mb-7.5 xll:w-[305px] xll:block xll:mb-0 3xl:w-[384px]">
                <div className="flex items-center gap-2 xll:gap-2.5 3xl:gap-4">
                  <img
                    src={data.img}
                    alt="img"
                    className="h-14.5 w-14.5 3xl:h-20 3xl:w-20 block"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white leading-150 tracking-tight 3xl:text-xl 3xl:leading-150 3xl:mb-0.5">
                      {data.name}
                    </h4>
                    <h5 className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                      {data.job}
                    </h5>
                  </div>
                </div>
                <div className="xll:hidden">
                  <Link className=" black">
                    <span>View Blog</span>
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
                </div>
              </div>
              <div className="xll:w-[768px] 3xl:w-[950px]">
                <h5 className="text-base leading-150 tracking-tight font-semibold text-gray-60 mb-5 xll:text-lg xll:leading-150 xll:mb-6 3xl:text-xl 3xl:leading-150 3xl:mb-7.5">
                  {data.date}
                </h5>
                <h3 className="text-lg font-semibold leading-150 tracking-tight text-white mb-1 xll:text-[22px] xll:mb-1.5 3xl:text-[26px] 3xl:leading-150 3xl:mb-2.5">
                  {data.tittle}
                </h3>
                <p className="text-sm leading-150 tracking-tight text-gray-60 mb-5 pr-4 xll:text-base xll:leading-150 xll:mb-6 3xl:text-lg 3xl:leading-150 3xl:mb-7.5 xll:pr-0">
                  {data.discribtion}
                </p>
                <div className="flex gap-2 3xl:gap-2.5">
                  <div className="flex gap-0.5 px-3 py-1.5 bg-dark-10 border border-dark-15 rounded-full 3xl:py-2 3xl:px-4 3xl:gap-1 cursor-pointer">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.645 21.4107L11.6384 21.4071L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4071L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z"
                          stroke="#666666"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm leading-150 tracking-tight text-gray-60  3xl:text-lg 3xl:leading-150">
                      {data.like}
                    </span>
                  </div>
                  <div className="flex gap-0.5 px-3 py-1.5 bg-dark-10 border border-dark-15 rounded-full 3xl:py-2 3xl:px-4 3xl:gap-1 cursor-pointer">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.48581 19.6888C9.54657 20.2083 10.7392 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 14.1401 4.49356 15.665 5.34026 16.9341M8.48581 19.6888L4 20.5L5.34026 16.9341M8.48581 19.6888L8.49231 19.6877M5.34026 16.9341L5.34154 16.9308"
                          stroke="#666666"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm leading-150 tracking-tight text-gray-60  3xl:text-lg 3xl:leading-150">
                      {data.comment}
                    </span>
                  </div>
                  <div className="flex gap-0.5 px-3 py-1.5 bg-dark-10 border border-dark-15 rounded-full 3xl:py-2 3xl:px-4 3xl:gap-1 cursor-pointer">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0384 14.4616L4.1719 11.7951C3.36454 11.4281 3.39898 10.2697 4.22673 9.95134L18.8999 4.30781C19.7087 3.99675 20.5033 4.79139 20.1922 5.60013L14.5487 20.2733C14.2303 21.1011 13.072 21.1355 12.705 20.3281L10.0384 14.4616ZM10.0384 14.4616L14.4231 10.077"
                          stroke="#666666"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm leading-150 tracking-tight text-gray-60 3xl:text-lg 3xl:leading-150">
                      {data.share}
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden xll:block">
                <Link className="black">
                  <span>View Blog</span>
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
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default Explore;
