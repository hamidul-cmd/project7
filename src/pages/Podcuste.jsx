import React from "react";
import CommonHero from "../Components/CommonHero";
import Aibox from "../Components/Aibox";
import Subscribtionbox from "../Components/Subscribtionbox";
import CommonTittle from "../Components/CommonTittle";
import container from "../assets/Container.png";
import container2 from "../assets/Container2.png";
import ai1 from "../assets/ai1.png";
import ai2 from "../assets/ai2.png";
import ai3 from "../assets/ai3.png";
import ai4 from "../assets/ai4.png";
import ai5 from "../assets/ai5.png";
import ai6 from "../assets/ai6.png";
import { data, Link } from "react-router";
import Revolution from "../Components/Revolution";

function Podcuste() {
  const aigrid1 = [
    {
      img: ai1,
      tittle: "AI in Healthcare",
      pera: "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    },
    {
      img: ai2,
      tittle: "AI Ethics",
      pera: "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    },
    {
      img: ai3,
      tittle: "Machine Learning Explained",
      pera: "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
    },
  ];
  const aigrid2 = [
    {
      img: ai4,
      tittle: "AI and the Future of Work",
      pera: "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
    },
    {
      img: ai5,
      tittle: "AI in Education",
      pera: "Explore the role of AI in education as Emily Turner discusses how AI is transforming...",
    },
    {
      img: ai6,
      tittle: "AI in Entertainment",
      pera: "David Smith as they explore the influence of AI in the entertainment industry.",
    },
  ];
  console.log(window);
  return (
    <>
      <CommonHero
        tittle1="Unlock the World of Artificial Intelligence "
        tittle2="through Podcasts"
        pera="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."
      />
      <section className="px-4 xll:px-20 3xl:px-36.6 border-y border-dark-15 pt-10 xll:flex xll:gap-14.5 xll:items-center xll:pt-0 3xl:gap-20">
        <Aibox tittle="AI Revolution" host="Dr. Sarah Mitchell" />
        <Subscribtionbox
          img={container}
          tittle="Delves into the transformative impact of AI"
          pera="Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more."
          total="50"
          length="30"
          type="Weekly"
        />
      </section>
      <section className="px-4 xll:px-20 3xl:px-36.6 border-b border-dark-15 pt-10 xll:flex xll:gap-14.5 xll:items-center xll:pt-0 3xl:gap-20">
        <Aibox tittle="AI Conversations" host="Mark Anderson" />
        <Subscribtionbox
          img={container2}
          tittle="Engage in thought-provoking conversations with leading experts."
          pera="Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts."
          total="40"
          length="40"
          type="Monthly"
        />
      </section>
      <CommonTittle
        capsul="Stay Informed with Fresh Content"
        tittle="Latest Podcast Episodes"
      />
      <section className="px-4 xll:px-20 3xl:px-36.6 py-10 xll:py-14.5 3xl:py-20">
        <div className="grid grid-cols-1 gap-20 xll:grid-cols-3 xll:gap-x-14.5 xll:gap-y-24.6 3xl:gap-y-[160px] 3xl:gap-x-[92px] overflow-hidden h-fit">
          {aigrid1.map((data) => {
            return (
              <div className="relative before:content-[''] before:absolute before:hidden xll:before:block before:h-[100vh] before:w-[1px] before:bg-dark-15 xll:before:right-[-30px] 3xl:before:right-[-46px] after:content-[''] after:absolute after:h-[1px] after:w-[100vw] after:bg-dark-15 xll:after:bottom-[-60px] 3xl:after:bottom-[-80px] after:bottom-[-40px]">
                <div className="img relative mb-5 xll:mb-6 3xl:mb-7.5">
                  <img
                    src={data.img}
                    alt=""
                    className="block w-full h-[208px] xll:h-[244px] 3xl:h-[290px]"
                  />
                  <div className="flex absolute left-0 bottom-0 p-7.5 justify-between w-full items-end">
                    <div>
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
                    <span className="text-sm leading-150 tracking-tight text-gray-50 3xl:text-lg 3xl:leading-150">
                      2.30 min
                    </span>
                  </div>
                </div>
                <div className="mb-5 xll:mb-6 3xl:mb-7.5">
                  <h3 className="text-white text-base font-semibold leading-150 tracking-tight mb-1.5 xll:text-lg xll:leading-150 xll:mb-2.5 3xl:text-[22px] 3xl:mb-3.5">
                    {data.tittle}
                  </h3>
                  <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                    {data.pera}
                  </p>
                </div>
                <Link className=" black flex justify-center items-center gap-1 xll:w-fit">
                  <span className="text-sm leading-150 tracking-tight text-gray-60 3xl:text-lg 3xl:leading-150">
                    Listen Podcast
                  </span>
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
            );
          })}
          {window.innerWidth >= 1440 &&
            aigrid2.map((data) => {
              return (
                <div className="relative before:content-[''] before:absolute before:hidden xll:before:block before:h-[100vh] before:w-[1px] before:bg-dark-15 xll:before:right-[-30px] 3xl:before:right-[-46px] after:content-[''] after:absolute after:h-[1px] after:w-[100vw] after:bg-dark-15 xll:after:bottom-[-60px] 3xl:after:bottom-[-80px] after:bottom-[-40px]">
                  <div className="img relative mb-5 xll:mb-6 3xl:mb-7.5">
                    <img
                      src={data.img}
                      alt=""
                      className="block w-full h-[208px] xll:h-[244px] 3xl:h-[290px]"
                    />
                    <div className="flex absolute left-0 bottom-0 p-7.5 justify-between w-full items-end">
                      <div>
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
                      <span className="text-sm leading-150 tracking-tight text-gray-50 3xl:text-lg 3xl:leading-150">
                        2.30 min
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 xll:mb-6 3xl:mb-7.5">
                    <h3 className="text-white text-base font-semibold leading-150 tracking-tight mb-1.5 xll:text-lg xll:leading-150 xll:mb-2.5 3xl:text-[22px] 3xl:mb-3.5">
                      {data.tittle}
                    </h3>
                    <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                      {data.pera}
                    </p>
                  </div>
                  <Link className=" black flex justify-center items-center gap-1 xll:w-fit">
                    <span className="text-sm leading-150 tracking-tight text-gray-60 3xl:text-lg 3xl:leading-150">
                      Listen Podcast
                    </span>
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
              );
            })}
        </div>
      </section>
      <Revolution />
    </>
  );
}

export default Podcuste;
