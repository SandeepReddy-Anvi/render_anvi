import { Link } from "react-router-dom";
import { IconsObj } from "../utils/Iconify_icons";
import React from "react";

export const FooterUpBox = React.memo(({ info }) => {
  const data = info || {};
  const { head, para, linkLabel, link } = data;
  // console.log("info : ", info);

  if (!head) return null;
  return (
    <section
      className="w-full min-h-[376px] font-[manrope] max-h-auto flex flex-col justify-center text-center align-middle gap-[16px] relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImag: "url(/images/footer.jpg)" }}
    >
      <div
        className="bg-cover bg-center h-[101%] bg-no-repeat absolute inset-0 -z-2"
        style={{ backgroundImage: "url(/images/footer.jpg)" }}
      ></div>
      <div className="dark-bg-blue w-full h-[101%] absolute inset-0 mix-blend-multiply bg-[#1E1E1EF0] -z-1"></div>
      <h2 className="text-[48px] text-[#FFFFFF] sticky z-3">{head}</h2>
      <p
        className="text-[16px] max-w-[612px] text-[#fff] font-[400] leading-[24px] text-center mx-auto sticky z-3"
        style={{ fontFamily: '"Wix Madefor Display", sans-serif' }}
      >
        {para}
      </p>
      <Link
        to={link}
        className="link-bg-icon footerUpBox-iconlink w-max text-[16px] min-w-[170px] mx-auto mt-[16px] sticky z-3"
        style={{ color: "#000", background: "white" }}
      >
        {linkLabel}
        <i className="rotate-45">{IconsObj.arrow}</i>
      </Link>
    </section>
  );
});
