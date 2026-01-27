import { Link } from "react-router-dom";
import { pagesLinksList } from "../../data/PagesLinkList";
import { IconsObj } from "../../utils/Iconify_icons";
import React from "react";

export const PravikayaInitiative = () => {
  return (
    <section className="w-full px-5 md:px-[60px] xl:px-[100px] py-[60px] md:py-[100px] bg-[#FFFFFF]">
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 lg:gap-2 items-center">
        {/* LEFT – Image collage */}
        <div className="flex gap-1 w-full justify-center lg:justify-start">

        {/* Desktop-only collage */}
        <div className="hidden lg:flex gap-1">
          {/* Image 1 */}
          <img
            src="/images/home/Pravikya1.png"
            alt="Education Impact"
            className="w-[370px] h-[500px] rounded-[12px] object-cover"
          />

          <div className="flex flex-col gap-1">
            {/* Image 2 */}
            <img
              src="/images/home/Pravikya2.png"
              alt="Pravikya Initiative"
              className="w-[220px] h-[320px] rounded-[12px] object-cover -mt-10"
            />

            {/* Image 3 */}
            <img
              src="/images/home/Pravikya3.png"
              alt="Community Impact"
              className="w-[360px] h-[280px] rounded-[12px] object-cover -ml-16"
            />
          </div>
        </div>

        {/* Mobile + Md screens (Image 3) */}
        <img
          src="/images/home/Pravikya3.png"
          alt="Community Impact"
          className="block lg:hidden w-full md:w-[360px] h-[260px] md:h-[480px] rounded-[12px] object-cover"
        />
        </div>  


        {/* RIGHT – Content */}
        <div className="w-full max-w-[500px] flex flex-col gap-4 md:items-start">

          {/* Label */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CD0054]" />
            <p className="text-[14px] text-[#CD0054] font-medium tracking-wide">
              SOCIETAL IMPACT
            </p>
          </div>

          {/* Heading */}
          <h3 className="text-[32px] md:text-[38px] lg:text-[44px] text-[#100000] font-medium leading-tight">
            <span className="text-[26px] md:-text-[28px] lg:text-[30px]">We help you make</span> <br />
            Social Responsibility Meaningful
          </h3>

          {/* Subheading */}
          <p className="text-[16px] md:text-[18px] font-semibold">
            <span className="text-[#100000]">Anvi Social Responsibility</span>{" "}
            <span className="text-[#CD0054]">- Pravikya Initiative</span>
          </p>

          {/* Description */}
          <p className="text-[16px] md:text-[16px] font-medium text-[#100000] leading-tight">
            An initiative by Anvi Foundation driving sustainability, education, and
            community empowerment. We believe technology should not only advance
            industries but also uplift societies, creating a positive and lasting
            impact.
          </p>

          {/* Bullet points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] font-medium text-[#100000] mt-6">
            <div className="flex gap-2 items-start w-full lg:w-[200px]">
              <span className="w-2 h-2 mt-[7px] rounded-full border border-[2px] border-[#CD0054] flex-shrink-0" />
              Driving sustainable practices for a better future
            </div>
            <div className="flex gap-2 w-full lg:w-[200px]">
              <span className="w-2 h-2 mt-[7px] rounded-full border border-[2px] border-[#CD0054] flex-shrink-0" />
              Empowering communities through education
            </div>
            <div className="flex gap-2 w-full lg:w-[200px]">
              <span className="w-2 h-2 mt-[7px] rounded-full border border-[2px] border-[#CD0054] flex-shrink-0" />
              Using technology to uplift and transform lives
            </div>
            <div className="flex gap-2 w-full lg:w-[200px]">
              <span className="w-2 h-2 mt-[7px] rounded-full border border-[2px] border-[#CD0054] flex-shrink-0" />
              Building solutions that benefit people and society
            </div>
          </div>

          {/* CTA */}
          <Link
            to={pagesLinksList.AboutUs}
            className="link-bg-icon1 mt-4 w-[150px] text-[14px] font-semibold flex items-center gap-2"
          >
            <span>Learn More</span>
            <i className="rotate-45">{IconsObj.arrow}</i>
          </Link>
        </div>
      </div>
    </section>

  );
};
