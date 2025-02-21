import React from "react";

function Revolution() {
  const grid = [
    {
      tittle: "Resource Access",
      pera: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
    },
    {
      tittle: "Community Forum",
      pera: "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
    },
    {
      tittle: "Tech Events",
      pera: "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
    },
  ];
  return (
    <>
      <section className="px-4 xll:px-20 3xl:px-36.6 py-10 bg-dark-10 xll:py-20 3xl:py-24.6">
        <div className="top xll:flex xll:gap-14.5 xll:items-center 3xl:gap-20 mb-10 xll:mb-12.5 3xl:mb-24.5">
          <div className="flex items-center gap-5 mb-5 xll:mb-0">
            <div>
              <svg
                className="h-14.5 w-14.5 xll:h-24.6 xll:w-24.6 3xl:h-36.5 3xl:w-36.5"
                viewBox="0 0 150 151"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M99.9989 150.5V125.5C113.832 125.5 124.999 114.334 124.999 100.5H149.998C149.998 128.167 127.582 150.5 99.9989 150.5Z"
                  fill="#FFD11A"
                />
                <path
                  d="M99.9991 150.5V125.5C86.1659 125.5 74.9993 114.334 74.9993 100.5H49.9996C49.9996 128.167 72.416 150.5 99.9991 150.5Z"
                  fill="#FFD11A"
                />
                <path
                  d="M0 100.498H24.9997C24.9997 114.331 36.1662 125.498 49.9994 125.498V150.497C22.4164 150.497 0 128.164 0 100.498Z"
                  fill="#FFD11A"
                />
                <path
                  d="M0 100.499H24.9997C24.9997 86.6662 36.1662 75.4997 49.9994 75.4997V50.5C22.4164 50.5 0 72.9164 0 100.499Z"
                  fill="#FFD11A"
                />
                <path
                  d="M49.9994 0.500488V25.5002C36.1662 25.5002 24.9997 36.6667 24.9997 50.4999H0C0 22.9169 22.4164 0.500488 49.9994 0.500488Z"
                  fill="#FFD11A"
                />
                <path
                  d="M49.9995 0.500488V25.5002C63.8327 25.5002 74.9992 36.6667 74.9992 50.4999H99.9989C99.9989 22.9169 77.5825 0.500488 49.9995 0.500488Z"
                  fill="#FFD11A"
                />
                <path
                  d="M149.998 50.4999H124.998C124.998 36.6667 113.832 25.5002 99.9987 25.5002V0.500488C127.582 0.500488 149.998 22.9169 149.998 50.4999Z"
                  fill="#FFD11A"
                />
                <path
                  d="M149.998 50.4995H124.998C124.998 64.3327 113.832 75.4992 99.9987 75.4992V100.499C127.582 100.499 149.998 78.1659 149.998 50.4995Z"
                  fill="#FFD11A"
                />
              </svg>
            </div>
            <div className="xll:hidden py-1 px-2 bg-dark-20 rounded-sm">
              <h5 className="text-white text-sm font-medium leading-150 tracking-tight">
                Learn, Connect, and Innovate
              </h5>
            </div>
          </div>
          <div>
            <div className="hidden xll:block py-1 px-2 bg-dark-20 rounded-sm w-fit mb-2.5 3xl:py-1.5 3xl:px-2.5 3xl:mb-4">
              <h5 className="text-white text-base font-medium leading-150 tracking-tight 3xl:text-xl 3xl:leading-150">
                Learn, Connect, and Innovate
              </h5>
            </div>
            <h2 className="text-[28px] font-medium leading-130 tracking-tight mb-1 text-white xll:text-[44px] xll:mb-5 3xl:text-[58px] 3xl:mb-7.5">
              Be Part of the Future Tech Revolution
            </h2>
            <p className="text-sm font-medium leading-150 tracking-tight text-gray-50 xll:hidden">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources.
            </p>
            <p className="hidden xll:block text-base leading-150 tracking-tight text-gray-50 3xl:text-lg 3xl:leading-150">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2.5 p-2.5 bg-dark-8 border border-dark-15 rounded-[10px] lg:grid-cols-3 3xl:p-5 3xl:gap-5">
          {grid.map((data) => {
            return (
              <div className="bg-dark-10 p-6 border border-dark-15 rounded-[10px] xll:p-7.5 3xl:p-10 3xl:rounded-xl">
                <div className="flex items-center justify-between text-white mb-2.5 xll:mb-4 3xl:mb-5">
                  <h4 className="text-base font-semibold leading-150 tracking-tight xll:text-lg 3xl:text-[22px]">
                    {data.tittle}
                  </h4>
                  <div className="p-2.5 rounded-full bg-yellow-55 xll:p-3 3xl:p-3.5">
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
                <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:leading-150 3xl:text-lg">
                  {data.pera}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Revolution;
