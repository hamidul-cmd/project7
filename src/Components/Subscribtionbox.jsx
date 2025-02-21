import React from "react";

function Subscribtionbox({img, tittle, pera, total, length, type}) {
  return (
    <>
      <div className="px-6 py-10 border-t border-dark-15 xll:border-t-0 xll:border-l xll:w-[807px] xll:p-14.5 xll:pr-0 3xl:p-20 3xl:pr-0 3xl:w-[997px]">
        <div className="mb-5 relative xll:mb-6 3xl:mb-7.5">
          <img src={img} alt="" className="block w-full h-[157px] xll:h-[297px] 3xl:h-[412px]" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer">
            <svg
              className="h-12.5 w-12.5 3xl:h-[70px] 3xl:w-[70px]"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.6875 25C4.6875 13.7817 13.7817 4.6875 25 4.6875C36.2183 4.6875 45.3125 13.7817 45.3125 25C45.3125 36.2183 36.2183 45.3125 25 45.3125C13.7817 45.3125 4.6875 36.2183 4.6875 25ZM33.9045 22.9513C35.5119 23.8443 35.5119 26.1559 33.9045 27.0489L22.232 33.5336C20.6698 34.4015 18.75 33.2719 18.75 31.4848V18.5153C18.75 16.7283 20.6698 15.5986 22.232 16.4665L33.9045 22.9513Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="mb-5 xll:mb-10 3xl:mb-12.5">
          <h3 className="text-lg font-semibold leading-150 tracking-tight mb-1.5 text-white xll:text-[22px] xll:mb-2.5 3xl:text-[26px] 3xl:leading-150 3xl:mb-3.5">
            {tittle}
          </h3>
          <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
          {pera}
          </p>
        </div>
        <div className="space-y-3.5 xll:space-y-0 xll:flex xll:gap-4 3xl:gap-5">
          <div className="p-5 bg-dark-10 border border-dark-15 rounded-lg xll:grow xll:p-5 3xl:p-7.5 3xl:rounded-xl">
            <h5 className="text-sm leading-150 tracking-tight mb-0.5 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
              Total Episodes
            </h5>
            <span className="text-base leading-150 tracking-tight text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">
              {total}
            </span>
          </div>
          <div className="p-5 bg-dark-10 border border-dark-15 rounded-lg xll:grow xll:p-5 3xl:p-7.5 3xl:rounded-xl">
            <h5 className="text-sm leading-150 tracking-tight mb-0.5 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
              Average Episode Length
            </h5>
            <span className="text-base leading-150 tracking-tight text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">
              {length} min
            </span>
          </div>
          <div className="p-5 bg-dark-10 border border-dark-15 rounded-lg xll:grow xll:p-5 3xl:p-7.5 3xl:rounded-xl">
            <h5 className="text-sm leading-150 tracking-tight mb-0.5 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
              Release Frequency
            </h5>
            <span className="text-base leading-150 tracking-tight text-white xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">
              {type}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribtionbox;
