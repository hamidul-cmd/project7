import React from "react";
import CommonHero from "../Components/CommonHero";
import blog1 from "../assets/blog1.png";
import { Link } from "react-router";
import BlogGrid from "../Components/BlogGrid";
import CommonTittle from "../Components/CommonTittle";
import Explore from "../Components/Explore";
import Revolution from "../Components/Revolution";
import visual1 from "../assets/visual1.png";
import visual2 from "../assets/visual2.png";
import visual3 from "../assets/visual3.png";
import visual4 from "../assets/visual4.png";
function News() {
  const visual = [
    {
      tittle: "Mars Exploration: Unveiling Alien Landscapes",
      pera: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
      duration: "2.30",
      img: visual1,
    },
    {
      tittle: "Blockchain Explained: A Revolution in Finance",
      pera: "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
      duration: "2.30",
      img: visual2,
    },
    {
      tittle: "Breaking the Silence: Mental Health Awareness in the Workplace",
      pera: "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.",
      duration: "2.30",
      img: visual3,
    },
    {
      tittle: "Revolutionizing Investment Strategies",
      pera: "An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.",
      duration: "2.30",
      img: visual4,
    },
  ];
  return (
    <>
      <CommonHero
        tittle1="Today's Headlines: Stay"
        tittle2="Informed"
        pera="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage."
      />
      <section className="px-4 xll:px-20 3xl:px-36.6 overflow-x-hidden border-y border-dark-15">
        <div className="py-10 md:flex md:gap-10 md:items-cente 2xl:gap-20 2xl:items-center relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-[100vw] before:h-[1px] before:bg-dark-15 before:translate-x-[-16px] xll:before:translate-x-[-80px] 3xl:before:translate-x-[-162px] 3xl:py-20 xll:py-14.5">
          <div className="img mb-7.5 xll:w-[515px] xll:mb-0">
            <img
              src={blog1}
              alt=""
              className="block w-full h-[213px] xll:h-[325px] 3xl:h-[427px]"
            />
          </div>
          <div className="xll:w-[725px] 3xl:w-[1000px]">
            <h3 className="text-xl font-semibold leading-150 tracking-tight text-white mb-1.5 xll:text-2xl xll:leading-150 xll:mb-3.5 3xl:text-[32px] 3xl:mb-7.5">
              Global Climate Summit Addresses Urgent Climate Action
            </h3>
            <p className="text-base leading-150 tracking-tight text-gray-60 mb-5 xll:text-lg xll:leading-150 xll:mb-10 3xl:text-xl 3xl:leading-150 3xl:mb-12.5">
              World leaders gathered at the Global Climate Summit to discuss
              urgent climate action, emissions reductions, and renewable energy
              targets.
            </p>
            <div className="flex gap-5 mb-5 xll:gap-7.5 xll:mb-10 3xl:gap-12.5">
              <div>
                <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-0.5 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
                  Category
                </h5>
                <h4 className="text-sm leading-150 tracking-tight text-white xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                  Environment
                </h4>
              </div>
              <div>
                <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-0.5 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
                  Publication Date
                </h5>
                <h4 className="text-sm leading-150 tracking-tight text-white xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                  October 10, 2023
                </h4>
              </div>
              <div>
                <h5 className="text-sm leading-150 tracking-tight text-gray-60 mb-0.5 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:mb-1">
                  Author
                </h5>
                <h4 className="text-sm leading-150 tracking-tight text-white xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                  Jane Smith
                </h4>
              </div>
            </div>
            <div className="flex justify-between items-center xll:items-start">
              <div className="flex gap-2 3xl:gap-2.5">
                <div className="py-1.5 px-3.5 bg-dark-10 border border-dark-15 rounded-full flex gap-1 items-center 3xl:py-2 3xl:px-4 cursor-pointer">
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
                  <h5 className="text-sm leading-150 tracking-tight text-gray-60 3xl:text-lg 3xl:leading-150">
                    14k
                  </h5>
                </div>
                <div className="py-1.5 px-3.5 bg-dark-10 border border-dark-15 rounded-full flex gap-1 items-center 3xl:py-2 3xl:px-4 cursor-pointer">
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
                  <h5 className="text-sm leading-150 tracking-tight text-gray-60 3xl:text-lg 3xl:leading-150">
                    204
                  </h5>
                </div>
              </div>
              <Link className="black block text-center">Read More</Link>
            </div>
          </div>
        </div>
        <BlogGrid />
      </section>
      <CommonTittle
        capsul="Welcome to Our News Hub"
        tittle="Discover the World of Headlines"
        button="View All News"
      />
      <Explore />
      <CommonTittle
        capsul="Featured Videos"
        tittle="Visual Insights for the Modern Viewer"
        button="View All"
      />
      <section className="px-4 xll:px-20 3xl:px-36.6 py-10 xll:py-14.5 3xl:py-20">

      <div className="grid grid-cols-1 gap-20 xll:grid-cols-2 xll:gap-x-24.5 xll:gap-y-24.6 3xl:gap-[160px] overflow-hidden">
        {visual.map((data) => {
          return (
            <div className="relative before:content-[''] before:absolute before:h-[1px] before:w-full before: left-0 before:bottom-[-41px] xll:before:w-[100vw] xll:before:bottom-[-60px] 3xl:before:bottom-[-80px] before:bg-dark-15 xll:before:left-[-80px] after:content-[''] after:absolute after:h-[100vh] after:w-[1px] after:right-[-50px] after:bg-dark-15 after:top-0 3xl:after:right-[-80px]">
              <div className="relative w-full mb-5 3xl:mb-7.5 group cursor-pointer">
                <img src={data.img} alt="" className="block h-[210px] w-full xll:h-[331px] 3xl:h-[412px]" />
                <div className="absolute left-0 bottom-7.5 flex justify-between items-end w-full px-7.5 group-hover:opacity-0 transition-all ease-in-out duration-300">
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
                  <div className="flex gap-1 text-gray-50 text-sm leading-150 tracking-tight xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                    <span>{data.duration}</span>
                    <span>min</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold leading-150 tracking-tight text-white mb-1 xll:text-xl xll:leading-150 xll:mb-1.5 3xl:text-2xl 3xl:leading-150 3xl:mb-2.5">{data.tittle}</h3>
              <p className="text-sm leading-150 tracking-tight text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">{
                data.pera}</p>
            </div>
          );
        })}
      </div>
      </section>
        <Revolution />
    </>
  );
}

export default News;
