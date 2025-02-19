import React from "react";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import { Link } from "react-router";

function BlogGrid() {
  const bloggrid = [
    {
      img: blog2,
      tittle: "A Decisive Victory for Progressive Policies",
      type: "Politics",
      like: "2.2k",
      share: "60",
    },
    {
      img: blog3,
      tittle: "Tech Giants Unveil Cutting-Edge AI Innovations",
      type: "Technology",
      like: "6k",
      share: "92",
    },
    {
      img: blog4,
      tittle: "COVID-19 Variants",
      type: "Health",
      like: "10k",
      share: "124",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 gap-7.5 md:grid-cols-3 py-10 xll:py-14.5 3xl:py-20">
        {bloggrid.map((data) => {
          return (
            <div>
              <div className="img mb-4 3xl:mb-5">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-[185px] block 3xl:h-[222px]"
                />
              </div>
              <h3 className="text-base leading-150 tracking-tight font-semibold text-white mb-1 3xl:text-xl 3xl:leading-150 3xl:mb-2.5">
                {data.tittle}
              </h3>
              <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-2.5 xll:mb-4 3xl:text-xl 3xl:leading-150 3xl:mb-5">
                {data.type}
              </h5>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 3xl:gap-2.5">
                  <div className="flex gap-1 p-1.5 px-3.5 bg-dark-10 border border-dark-15 rounded-full 3xl:py-2 3xl:px-4">
                    <svg
                      className="h-5 w-5 3xl:h-6 3xl:w-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6.60406C12.6507 5.84844 13.7765 5 15.4907 5C18.4883 5 20.5 7.79375 20.5 10.3953C20.5 15.8338 13.6792 20 12 20C10.3208 20 3.5 15.8338 3.5 10.3953C3.5 7.79375 5.51167 5 8.50933 5C10.2235 5 11.3493 5.84844 12 6.60406Z"
                        stroke="#666666"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-sm leading-150 tracking-tight text-gray-60 3xl:text-lg 3xl:leading-150">
                      {data.like}
                    </span>
                  </div>
                  <div className="flex gap-1 p-1.5 px-3.5 bg-dark-10 border border-dark-15 rounded-full 3xl:py-2 3xl:px-4">
                    <svg
                      className="h-5 w-5 3xl:h-6 3xl:w-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0386 14.4615L4.17215 11.7949C3.36478 11.428 3.39923 10.2696 4.22697 9.95123L18.9002 4.3077C19.7089 3.99664 20.5035 4.79128 20.1925 5.60002L14.549 20.2732C14.2306 21.101 13.0722 21.1354 12.7052 20.328L10.0386 14.4615ZM10.0386 14.4615L14.4234 10.0769"
                        stroke="#666666"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-sm leading-150 tracking-tight text-gray-60 3xl:text-lg 3xl:leading-150">
                      {data.share}
                    </span>
                  </div>
                </div>
                <Link className="flex gap-1 items-center black w-[153px] justify-center xll:w-[200px] 3xl:w-[277px]">
                  <span>Read More</span>{" "}
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
          );
        })}
      </section>
    </>
  );
}

export default BlogGrid;
