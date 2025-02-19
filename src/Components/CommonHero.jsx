import React from "react";

function CommonHero({ tittle1, tittle2, pera }) {
  return (
    <>
      <section className="px-4 xll:px-20 3xl:px-36.6 py-10 xll:py-20 text-white 3xl:pt-[130px] 3xl:pb-36.5">
        <h1 className="xll:hidden text-[28px] font-medium leading-130 tracking-tight mb-3.5">
          {tittle1} {tittle2}
        </h1>
        <h1 className="hidden xll:block text-[55px] font-medium leading-130 tracking-tight mb-5 3xl:text-[80px]">
          {tittle1}
        </h1>
        <div className="xll:flex xll:gap-14.5 xll:items-center 3xl:gap-20">
          <h1 className="hidden xll:block text-[55px] font-medium leading-130 tracking-tight xl:text-[80px]">
            {tittle2}
          </h1>
          <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            {pera}
          </p>
        </div>
      </section>
    </>
  );
}

export default CommonHero;
