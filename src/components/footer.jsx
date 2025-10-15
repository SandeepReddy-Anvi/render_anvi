import { Link } from "react-router-dom";
import { Instagram, Linkedin, MapPin, Mail } from "lucide-react";
import { mainPagesLinksList } from "../data/PagesLinkList";
import { FooterUpBox } from "./FooterUpBox";
import { FooterUpBox2 } from "./FooterUpBox2";
import React from "react";

const Footer = React.memo(({ footerUpBoxInfo = {}, footerUpBoxInfo2 = {} }) => {
  // console.log('footerUpBoxInfo --------- :', footerUpBoxInfo)

  return (
    <>
      {footerUpBoxInfo && <FooterUpBox info={footerUpBoxInfo} />}

      {footerUpBoxInfo2 && <FooterUpBox2 info={footerUpBoxInfo2} />}

      <footer className="w-full h-full bg-[#191919] text-white font-manrope">
        {/* Footer Content */}
        <div className="max-md:px-[25px] lg:px-[50px] py-[80px] lg:pt-[64px] lg:pb-[48px] h-full min-h-[300px]">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 space-y-5 max-sm:space-y-10 items-start gap-[17px] mx-auto">
            {/* Logo + Description */}
            <div className="col-span-full md:col-span-2 items-center gap-[45px] self-center">
              <div className="flex max-sm:flex-col max-sm:place-items-center justify-around lg:justify-center gap-[10px] md:gap-[30px] align-middle">
                {/* Logo */}
                <img
                  loading="lazy"
                  src="/logos/anvi_white.png"
                  alt="Anvi Logo"
                  className="w-full max-sm:max-w-full max-w-[366px] lg:max-w-[50%] xl:max-w-[366px]  object-contain"
                />
                {/* Description */}
                <p
                  className="text-white self-center text-[14px] max-sm:max-w-[450px] font-[500] leading-[22.4px] tracking-[-0.32px] max-w-[297px]"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  Engineering Your Edge™ - We build breakthrough products,
                  deep-tech systems, and future-proof robotics solutions across
                  industries.
                </p>
              </div>
            </div>

            {/* Quick Links - Starts from top */}
            <div className="flex sm:col-span-1 max-sm:w-auto max-sm:m-auto flex-col gap-[18px] md:mx-auto w-[160px] self-start place-items-center">
              <h4 className="text-[14px] text-[#BDBDBD] font-medium tracking-[-0.32px]">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-[12px]">
                {Object.keys(mainPagesLinksList)
                  .slice(1, -1)
                  .map((pageKey) => (
                    <li key={pageKey}>
                      <Link
                        to={mainPagesLinksList[pageKey]}
                        className="text-[#FFFAFF] font-medium text-[16px] leading-[22.4px] tracking-[-0.32px] hover:text-[#1E9AB0] transition-colors"
                      >
                        {pageKey}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Contact - Starts from top */}
            <div className="footer-contact flex sm:col-span-1 m-auto max-md:mx-auto flex-col gap-[18px] w-[281px] self-start">
              <h4 className="text-[14px] text-[#BDBDBD] font-medium tracking-[-0.32px]">
                Contact
              </h4>
              <div className="flex flex-col gap-[16px]">
                <a
                  href="https://maps.app.goo.gl/rqWRRaMvyspAxSQKA"
                  target="_blank"
                  className="flex items-start gap-[12px]"
                >
                  <MapPin
                    className="w-[18px] h-[18px] mt-1 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <p className="text-[#FFFAFF] text-[16px] font-medium leading-[22.4px] tracking-[-0.32px]">
                    Anvi Robotics, 1st Floor,Profound Buliders, whitefields,
                    <br />
                    Kondapur, Telangana 500081
                  </p>
                </a>
                <div className="flex items-center gap-[12px]">
                  <Mail
                    className="w-[18px] h-[18px] flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <a
                    href="mailto:info@anvi.co"
                    className="text-[#FFFAFF] text-[16px] font-medium leading-[22.4px] tracking-[-0.32px]"
                  >
                    info@anvi.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[95%] mx-auto h-[1px] bg-[#333333]"></div>

        {/* Bottom Row */}
        <div className="px-[60px] py-[24px] max-md:px-6">
          <div className="flex flex-row justify-between items-center max-w-[1400px] mx-auto text-[#B0B0B0] text-[14px] max-md:gap-4">
            <p>©2025 anvi.co</p>

            <div className="flex gap-[20px] justify-start m-auto md:mr-auto md:ml-[40px]">
              <a
                href="https://www.instagram.com/anvi_robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/company/anvirobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>

            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
});

export default Footer;
