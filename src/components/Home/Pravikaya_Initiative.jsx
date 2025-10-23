import { Link } from "react-router-dom";
import { pagesLinksList } from "../../data/PagesLinkList";
import React from "react";

export const PravikayaInitiative = () => {
  return (
    <section className="relative h-auto max-md:h-[800px] max-lg:h-[600px] w-[95vw] max-w-[1318px] grid place-content-center mx-auto p-2 mb-[83px] font-[manrope] text-center min-h-[544px] bg-[#1a1a1a] rounded-xl overflow-hidden">
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
          className="px-[23px] py-[10px] mt-[20px] rounded-[400px] border-[1px] border-[#E4E6E6] font-normal text-white text-[17px] leading-[26px] whitespace-nowrap hover:text-black hover:bg-white transition-colors duration-500"
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
          src="/images/home/Pravikaya Init1.png"
          alt="Office team collaboration"
          className="h-full w-full flex-1 object-cover object-center"
        />
      </div>

      <div className="w-[250px] h-[130px] md:w-[293px] md:h-[205px] absolute right-0 md:right-[-30px] lg:top-[30px] xl:top-[74px] object-cover overflow-hidden aspect-video">
        <img
          loading="lazy"
          src="/images/home/Pravikaya Init2.png"
          alt="Kitchen candid moments"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="w-[147px] h-[167px] bottom-[6%] top-[unset] sm:top-[60%] md:top-[60%] object-cover right-[8%] md:right-[8%] lg:right-[183px] absolute overflow-hidden md:translate-y-[-140px]">
        <img
          loading="lazy"
          src="/images/home/Pravikaya Init3.jpg"
          alt="Studio office environment"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};
