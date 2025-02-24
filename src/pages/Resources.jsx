import React from "react";
import CommonHero from "../Components/CommonHero";
import CommonTittle from "../Components/CommonTittle";
import Aibox from "../Components/Aibox";
import Subscribtionbox from "../Components/Subscribtionbox";
import resourse1 from "../assets/resourse1.png";
import resourse2 from "../assets/resourse2.png";
import Revolution from "../Components/Revolution";
import regrid1 from "../assets/regrid1.png";
import regrid2 from "../assets/regrid2.png";
import regrid3 from "../assets/regrid3.png";
import { Link } from "react-router";

function Resources() {
  const herogrid = [
    {
      bignumber: "300",
      name: "Resources available",
    },
    {
      bignumber: "12k",
      name: "Total Downloads",
    },
    {
      bignumber: "10k",
      name: "Active Users",
    },
    {
      bignumber: "100",
      name: "Countries Usability",
    },
  ];

  const regrid = [
    {
      img: regrid1,
      tittle: "FutureTech Trends 2024",
      pera: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
    },
    {
      img: regrid2,
      tittle: "Space Exploration Ebook",
      pera: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
    },
    {
      img: regrid3,
      tittle: "Quantum Computing Whitepaper",
      pera: "An in-depth whitepaper exploring the principles, applications.",
    },
  ];

  return (
    <>
      <CommonHero
        tittle1="Unlock a World of "
        tittle2="Knowledge"
        pera="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."
      />
      <section className="px-4 xll:px-20 3xl:px-36.6 border-y border-dark-15 relative before:content-[''] before:absolute before:h-[1px] before:w-full before:bg-dark-15 before:left-0 before:top-[50%] xll:before:hidden">
        <div className="grid grid-cols-2 gap-x-10 overflow-hidden xll:grid-cols-4 xll:gap-x-24.5 3xl:gap-x-[160px]">
          {herogrid.map((data) => {
            return (
              <div className="text-center py-5 relative before:content-[''] before:absolute before:h-[100vh] before:w-[1px] before:bg-dark-15 before:right-[-20px] before:top-0 xll:before:right-[-50px] xll:p-14.5 3xl:before:right-[-80px] 3xl:py-20">
                <div className="text-2xl font-semibold leading-150 tracking-tight text-white xll:text-[40px] xll:mb-1.5 3xl:text-6xl 3xl:leading-150 3xl:mb-2.5">
                  <span>{data.bignumber}</span>
                  <span className="text-yellow-55">+</span>
                </div>
                <div>
                  <h5 className="text-sm leading-150 tracking-tight text-gray-60 xll:text-sm xll:leading-150 3xl:text-lg 3xl:leading-150">
                    {data.name}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CommonTittle
        capsul="Dive into the Details"
        tittle="In-Depth Reports and Analysis"
        button="Whitepapers"
      />
      <section className="px-4 xll:px-20 3xl:px-36.6 border-y border-dark-15 pt-10 xll:flex xll:gap-14.5 xll:items-center xll:pt-0 3xl:gap-20">
        <Aibox tittle="AI Revolution" host="Dr. Sarah Mitchell" />
        <Subscribtionbox
          img={resourse1}
          tittle="Delves into the transformative impact of AI"
          pera="Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more."
          total="50"
          length="30"
          type="Weekly"
        />
      </section>
      <section className="px-4 xll:px-20 3xl:px-36.6 border-y border-dark-15 pt-10 xll:flex xll:gap-14.5 xll:items-center xll:pt-0 3xl:gap-20">
        <Aibox tittle="AI Revolution" host="Dr. Sarah Mitchell" />
        <Subscribtionbox
          img={resourse2}
          tittle="Delves into the transformative impact of AI"
          pera="Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more."
          total="50"
          length="30"
          type="Weekly"
        />
      </section>
      <section className="px-4 xll:px-20 3xl:px-36.6">
        <div className="grid grid-cols-1 overflow-hidden xll:grid-cols-3 xll:gap-14.5 3xl:gap-[92px] border-b border-dark-15">
          {regrid.map((data) => {
            return (
              <div className="py-10 relative before:content-[''] before:absolute before:h-[1px] before:w-full before:bg-dark-15 before:bottom-[-1px] xll:before:w-[1px] xll:before:h-full xll:before:right-[-30px] xll:py-14.5 3xl:py-20 3xl:before:right-[-45px]">
                <div className="mb-5 xll:mb-6 3xl:mb-7.5">
                  <img
                    src={data.img}
                    alt=""
                    className="w-full h-[223px] block xll:h-[290px]"
                  />
                </div>
                <div className="mb-5 xll:mb-6 3xl:mb-7.5">
                  <h3 className="text-base font-semibold leading-150 tracking-tight mb-2.5 text-white xll:text-lg xll:leading-150 xll:mb-2.5 3xl:text-[22px] 3xl:mb-3.5">
                    {data.tittle}
                  </h3>
                  <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                    {data.pera}
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <Link className="block black grow justify-center">
                    View Details
                  </Link>
                  <Link className="block black grow justify-center bg-dark-10">
                    Download PDF Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Revolution />
    </>
  );
}

export default Resources;
