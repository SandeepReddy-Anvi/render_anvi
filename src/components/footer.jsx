import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import { mainPagesLinksList } from "../data/PagesLinkList";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="max-md:px-[25px] lg:px-[50px] py-[80px] lg:pt-[64px] lg:pb-[48px] h-full min-h-[300px]">
        {/* Parent grid — 4 cols for large, 1 for small */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[17px] mx-auto items-start">

          {/* Logo + Description */}
          <div className="col-span-full md:col-span-2 items-center gap-[45px] self-center">
            <div className="flex max-sm:flex-col max-sm:place-items-center justify-around lg:justify-center gap-[10px] md:gap-[30px] align-middle">
              <img
                loading="lazy"
                src="/logos/anvi_white.png"
                alt="Anvi Logo"
                className="w-full max-sm:max-w-full max-w-[366px] lg:max-w-[50%] xl:max-w-[366px] object-contain"
              />
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

          {/* For screens >= 640px (desktop/tablet) */}
          <div className="hidden sm:flex flex-col gap-[18px] w-[160px] md:mx-auto self-start">
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

          <div className="hidden sm:flex flex-col gap-[18px] w-[281px] self-start">
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
                  Anvi Robotics, 1st Floor, Profound Builders, Whitefields,
                  <br />
                  Kondapur, Telangana 500084
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

          
          {/* For screens < 640px (MOBILE) */}
          <div className="sm:hidden flex flex-row justify-between w-full mt-[40px]">
            {/* Quick Links */}
            <div className="flex flex-col gap-[12px] w-[35%]">
              <h4 className="text-[13px] text-[#BDBDBD] font-medium tracking-[-0.32px]">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-[8px]">
                {Object.keys(mainPagesLinksList)
                  .slice(1, -1)
                  .map((pageKey) => (
                    <li key={pageKey}>
                      <Link
                        to={mainPagesLinksList[pageKey]}
                        className="text-[#FFFAFF] font-medium text-[13px] leading-[20px] tracking-[-0.32px] hover:text-[#1E9AB0] transition-colors"
                      >
                        {pageKey}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-[12px] w-[60%]">
              <h4 className="text-[13px] text-[#BDBDBD] font-medium tracking-[-0.32px]">
                Contact
              </h4>
              <div className="flex flex-col gap-[10px] items-start">
                <a
                  href="https://maps.app.goo.gl/rqWRRaMvyspAxSQKA"
                  target="_blank"
                  className="flex items-start gap-[8px]"
                >
                  <MapPin className="w-[35px] h-[35px]" strokeWidth={1.5} />
                  <p className="text-[#FFFAFF] text-[13px] leading-[20px] font-medium">
                    Anvi Robotics, 1st Floor, Profound Builders, Whitefields,
                    <br />
                    Kondapur, Telangana 500084
                  </p>
                </a>
                <div className="flex items-center gap-[8px]">
                  <Mail className="w-[16px] h-[16px]" strokeWidth={1.5} />
                  <a
                    href="mailto:info@anvi.co"
                    className="text-[#FFFAFF] text-[13px] font-medium leading-[20px]"
                  >
                    info@anvi.co
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
