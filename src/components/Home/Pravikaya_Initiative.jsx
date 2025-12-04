import { Link } from "react-router-dom";
import { pagesLinksList } from "../../data/PagesLinkList";
import React from "react";

export const PravikayaInitiative = () => {
  return (
    <section className="px-5 md:px-[60px] w-full">
    <div className="relative h-auto max-md:h-[800px] max-lg:h-[600px] grid place-content-center mx-auto p-2 mb-[83px] font-[manrope] text-center min-h-[544px] bg-[#1a1a1a] rounded-xl overflow-hidden">
      {/* Content */}
      <div
        className="w-full max-w-[541px] flex flex-col items-center justify-center align-middle self-stretch mx-2"
        style={{ zIndex: 2 }}
      >
        <h1 className="font-[Dm sans] font-[500] flex items-center justify-center text-white text-[40px] sm:text-[51px]">
          Pravikya Initiative
        </h1>
        <p className="w-full text-white text-[16px] sm:text-[18px] text-center font-[300]">
          An initiative by Anvi Foundation driving sustainability, education,
          and community empowerment. We believe technology should not only
          advance industries but also uplift societies.
        </p>
        <Link
          to={pagesLinksList.Foundations}
          className="rounded-[32px] border-[1px] border-gray-200 text-gray-100 px-[23px] py-[11px]
        bg-gradient-to-r from-[#1E9AB0] to-[#1E9AB0]
        hover:from-[#1E9AB0] hover:to-[#1E9AB0] 
        bg-[length:0%_106%] hover:bg-[length:101%_106%]
        bg-left bg-no-repeat
        transition-[background-size] duration-500 ease-out
        hover:text-white
        font-['Wix_Madefor_Display'] text-[15px] sm:text-[16px]
        inline-flex items-center"
        >
          Learn More
        </Link>
      </div>

      {/* Bg Images */}
      <div className="absolute w-full max-w-28 rounded-[5px] aspect-square left-0 top-20 lg:max-w-[200px] lg:top-[147px] lg:h-[227px] bg-[#FF8C60] bg-[100% 100%]">
        <img
          loading="lazy"
          src="/images/home/Pravikaya Init.jpg"
          alt="Student studying"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-sm:w-[30vw] sm:w-[224px] min-w-[160px] h-auto xl:w-[270px] aspect-square object-contain absolute bottom-[20px] xl:bottom-[20px] left-[20px] md:left-[60px] xl:left-[59px] flex overflow-hidden">
        <img
          loading="lazy"
          src="/images/home/Pravikaya Init1.webp"
          alt="Office team collaboration"
          className="h-full w-full flex-1 object-cover object-center"
        />
      </div>

      <div className="w-[250px] h-[130px] md:w-[293px] md:h-[205px] absolute right-0 md:right-[-50px] lg:top-[30px] xl:top-[74px] object-cover overflow-hidden aspect-video">
        <img
          loading="lazy"
          src="/images/home/Pravikaya Init2.webp"
          alt="Kitchen candid moments"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="w-[147px] h-[167px] bottom-[6%] top-[unset] sm:top-[60%] md:top-[60%] object-cover right-[8%] md:right-[5%] lg:right-[183px] absolute overflow-hidden md:translate-y-[-140px] md:translate-x-[40px]">
        <img
          loading="lazy"
          src="/images/home/Pravikaya Init3.webp"
          alt="Studio office environment"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
    </section>
  );
};
