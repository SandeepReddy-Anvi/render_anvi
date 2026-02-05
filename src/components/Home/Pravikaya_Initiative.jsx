import { Link } from "react-router-dom";
import { pagesLinksObj } from "../../data/PagesLinkList";
import { IconsObj } from "../../utils/Iconify_icons";
import React from "react";
 
export const PravikayaInitiative = () => {
  return (
    <section className="w-full px-5 md:px-[60px] xl:px-[100px] py-[60px] md:py-[100px] bg-[#FFFFFF]">
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 lg:gap-8 xl:gap-12 2xl:gap-16 items-center max-w-[1600px] mx-auto">
        {/* LEFT – Image collage */}
        <div className="flex gap-1 w-full lg:w-auto justify-center lg:justify-start flex-shrink-0">
 
        {/* Desktop-only collage */}
        <div className="hidden lg:flex gap-1">
          {/* Image 1 */}
          <img
            src="/images/home/Pravikya1.webp"
            alt="Education Impact"
            className="w-[300px] xl:w-[340px] 2xl:w-[380px] h-[400px] xl:h-[460px] 2xl:h-[520px] rounded-[12px] object-cover"
          />
 
          <div className="flex flex-col gap-1">
            {/* Image 2 */}
            <img
              src="/images/home/Pravikya2.png"
              alt="Pravikya Initiative"
              className="w-[180px] xl:w-[200px] 2xl:w-[230px] h-[260px] xl:h-[300px] 2xl:h-[330px] rounded-[12px] object-cover -mt-10"
            />
 
            {/* Image 3 */}
            <img
              src="/images/home/Pravikya3.png"
              alt="Community Impact"
              className="w-[300px] xl:w-[340px] 2xl:w-[380px] h-[230px] xl:h-[260px] 2xl:h-[290px] rounded-[12px] object-cover -ml-16"
            />
          </div>
        </div>
 
        {/* Mobile + Md screens (Image 3) */}
        <img
          src="/images/home/Pravikya3.png"
          alt="Community Impact"
          className="block lg:hidden w-full md:w-[360px] h-[350px] md:h-[480px] rounded-[12px] object-cover"
        />
        </div>  
 
 
        {/* RIGHT – Content */}
        <div className="w-full lg:flex-1 flex flex-col gap-4 md:items-start">
 
          {/* Label */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CD0054]" />
            <p className="text-[14px] text-[#CD0054] font-medium tracking-wide">
              SOCIETAL IMPACT
            </p>
          </div>
 
          {/* Heading */}
          <h3 className="text-[32px] md:text-[38px] lg:text-[44px] 2xl:text-[48px] text-[#100000] font-medium leading-tight">
            <span className="text-[26px] md:text-[28px] lg:text-[30px] 2xl:text-[32px]">We help you make</span> <br />
            Social Responsibility Meaningful
          </h3>
 
          {/* Subheading */}
          <p className="text-[16px] md:text-[18px] 2xl:text-[19px] font-semibold">
            <span className="text-[#100000]">Anvi Social Responsibility</span>{" "}
            <span className="text-[#CD0054]">- Pravikya Initiative</span>
          </p>
 
          {/* Description */}
          <p className="text-[16px] md:text-[16px] 2xl:text-[17px] font-medium text-[#100000] leading-relaxed max-w-[600px]">
            An initiative by Anvi Foundation driving sustainability, education, and
            community empowerment. We believe technology should not only advance
            industries but also uplift societies, creating a positive and lasting
            impact.
          </p>
 
          {/* Bullet points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] 2xl:text-[15px] font-medium text-[#100000] mt-6 max-w-[600px]">
            <div className="flex gap-2 items-start">
              <span className="w-2 h-2 mt-[7px] rounded-full  border-[2px] border-[#CD0054] flex-shrink-0" />
              Driving sustainable practices for a better future
            </div>
            <div className="flex gap-2">
              <span className="w-2 h-2 mt-[7px] rounded-full  border-[2px] border-[#CD0054] flex-shrink-0" />
              Empowering communities through education
            </div>
            <div className="flex gap-2">
              <span className="w-2 h-2 mt-[7px] rounded-full  border-[2px] border-[#CD0054] flex-shrink-0" />
              Using technology to uplift and transform lives
            </div>
            <div className="flex gap-2">
              <span className="w-2 h-2 mt-[7px] rounded-full  border-[2px] border-[#CD0054] flex-shrink-0" />
              Building solutions that benefit people and society
            </div>
          </div>
 
          {/* CTA */}
          <Link
            to={pagesLinksObj.AboutUs}
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