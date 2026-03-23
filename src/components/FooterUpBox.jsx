import { Link } from "react-router-dom";
import { IconsObj } from "../utils/Iconify_icons";
import React from "react";

export const FooterUpBox = ({ info }) => {
  const data = info || {};
  const { head, para, linkLabel, link } = data;
  // console.log("info : ", info);

  if (!head) return null;
  return (
    <section
      className="w-full min-h-[376px] px-[20px] md:px-[60px] 2xl:px-[100px] max-h-auto flex flex-col justify-center align-middle gap-[16px]"
      /* style={{ backgroundImage: "url(/images/footer.jpg)" }} */
    >
      {/* <div
        className="bg-cover bg-center h-[101%] bg-no-repeat absolute inset-0 -z-2"
         style={{ backgroundImage: "url(/images/footer.jpg)" }} 
      ></div>
      <div className="dark-bg-blue w-full h-[101.3%] absolute inset-0 mix-blend-multiply bg-[#1E1E1EF0] -z-1"></div> */}

      <h2
        className="text-[38px] md:text-[58px] max-w-[740px] text-[#FFFFFF] font-medium z-10"
        dangerouslySetInnerHTML={{ __html: head }}
      ></h2>

      {/* <p
        className="text-[14px] md:text-[16px] max-w-[612px] text-[#FFFFFF] font-medium leading-[24px] sticky z-3"
      >
        {para}
      </p> */}

      <Link
        to={link}
        className="link-bg-icon1 w-max font-semibold text-[14px] min-w-[170px] mt-[16px] sticky z-3"
      >
        <span>{linkLabel}</span>
        <i className="rotate-45">{IconsObj.arrow}</i>
      </Link>
    </section>
  );
};
