import React from "react";
import { Link } from "react-router";

function CommonTittle({capsul, tittle, button}) {
  return (
    <>
      <section className="px-4 py-10 bg-dark-10 text-white xll:flex xll:justify-between xll:items-center xll:p-20 3xl:px-36.6 3xl:py-[120px]">
        <div>
          <div className="py-1 px-2 bg-dark-20 rounded-sm mb-2.5 w-fit 3xl:py-1.5 3xl:px-2.5 3xl:mb-4">
            <h4 className="text-sm font-medium leading-150 tracking-tight xll:text-base xll:leading-150 3xl:text-xl 3xl:leading-150">{capsul}</h4>
          </div>
          <h2 className="text-[28px] font-medium leading-130 tracking-tight mb-7.5 xll:text-[44px] xll:mb-0 3xl:text-[58px]">{tittle}</h2>
        </div>
        {button && <div>
          <Link className="black bg-dark-8 justify-center">
            <span className="tracking-tight 3xl:tracking-normal">{button}</span>
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
        </div>}
      </section>
    </>
  );
}

export default CommonTittle;
