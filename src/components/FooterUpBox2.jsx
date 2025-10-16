import React from "react";

export const FooterUpBox2 = ({ info }) => {
  const data = info || {};
  const { head, para } = data;
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

      <div className="dark-bg-blue w-full h-[101.3%] absolute inset-0 mix-blend-multiply bg-[#1E1E1EF0] -z-1"></div>
      <h2 className="text-[48px] text-[#FFFFFF] sticky z-3">{head}</h2>
      <p
        className="text-[16px] max-w-[412px] text-[#fff] font-[400] leading-[24px] text-center mx-auto sticky z-3"
        style={{ fontFamily: '"Wix Madefor Display", sans-serif' }}
      >
        {para}
      </p>

      <div className="sticky z-3 flex justify-center align-middle gap-[12px] mt-[40px]">
        <input type="text" id="subscribe-email" name="subscribe-email" placeholder="Enter your email address"
            className="border-[1px] border-[#E8EBEE] bg-[#fff] w-full max-w-[337px] rounded-[10px] font-[inter] font-[400] text-[14px] text-[#73808C] px-[13px] py-[11px]"
        />
        <button type="button" className="link-bg-icon footerUpBox-iconlink w-[100px] text-[14px]"
          onClick={() => console.log('Subscribed..... from News footerUpBox2')}
          style={{ color: "#fff", background: "#2EACB8", borderRadius: '10px' }}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
};
