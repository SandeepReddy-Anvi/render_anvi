import { Link } from "react-router-dom";
import { Instagram, Linkedin, MapPin, Mail } from "lucide-react";
import { exploreLinksObj, mainPagesLinksObj } from "../data/PagesLinkList";
import { FooterUpBox } from "./FooterUpBox";
import { FooterUpBox2 } from "./FooterUpBox2";
import { motion } from "framer-motion";

const Footer = ({ footerUpBoxInfo = {}, footerUpBoxInfo2 = {} }) => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, margin: " 0px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-[#000000] text-white overflow-hidden"
      >
        {/* Gradient background */}
        <div className="footer-gradient-wrapper">
          <div className="footer-gradient-bg"></div>
        </div>

        <div className="relative z-10">
          {/* Optional Top Boxes */}
          {footerUpBoxInfo && Object.keys(footerUpBoxInfo).length > 0 && (
            <FooterUpBox info={footerUpBoxInfo} />
          )}
          {footerUpBoxInfo2 && Object.keys(footerUpBoxInfo2).length > 0 && (
            <FooterUpBox2 info={footerUpBoxInfo2} />
          )}

          <div className="w-[95%] mx-auto h-[1px] bg-[#333333]" />

          {/* Main Footer */}
          <div className="max-md:px-[25px] lg:px-[50px] py-[80px] lg:pt-[64px] lg:pb-[48px] h-full min-h-[300px]">
            {/* Parent Grid */}
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[17px] mx-auto items-start">
              {/* Logo + Description */}
              <div className="col-span-1 flex justify-center items-center sm:pl-5">
                {/* Changed to flex-col to stack vertically; items-center keeps them aligned */}
                <div className="flex flex-col items-start gap-[20px] md:gap-[30px]">
                  <img
                    loading="eager"
                    src="/logos/anvi_logo.svg"
                    alt="Anvilogo"
                    className="w-full max-w-[300px] md:max-w-[366px] object-contain"
                  />
                  <p
                    className="text-white text-start text-[14px] font-[500] leading-[22.4px] tracking-[-0.32px] max-w-[450px]"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    <span className="block mb-2 text-[16px] font-medium">
                      Engineering Your Edge™
                    </span>
                    We build breakthrough products, deep-tech systems, and
                    future-proof robotics solutions across industries.
                  </p>
                </div>
              </div>

              {/* Desktop / Tablet View */}
              <div className="hidden sm:flex flex-col gap-[18px] w-[90px] md:mx-auto self-start">
                <h4 className="text-[14px] text-[#BDBDBD] font-medium tracking-[-0.32px]">
                  Quick Links
                </h4>
                <ul className="flex flex-col gap-[12px]">
                  {Object.keys(mainPagesLinksObj || {})
                    .slice(0, 6)
                    .map((pageKey) => (
                      <li key={pageKey}>
                        <Link
                          to={mainPagesLinksObj[pageKey]}
                          className="text-[#FFFAFF] font-medium text-[16px] leading-[22.4px] tracking-[-0.32px] hover:text-[#FA293E] transition-colors"
                        >
                          {pageKey}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="hidden sm:flex flex-col gap-[18px] w-[160px] md:mx-auto self-start">
                <h4 className="text-[14px] text-[#BDBDBD] font-medium tracking-[-0.32px]">
                  Explore
                </h4>
                <ul className="flex flex-col gap-[12px]">
                  {Object.keys(exploreLinksObj || {}).map((pageKey) => (
                    <li key={pageKey}>
                      <Link
                        to={exploreLinksObj[pageKey]}
                        target="_blank"
                        className="text-[#FFFAFF] font-medium text-[16px] leading-[22.4px] tracking-[-0.32px] hover:text-[#FA293E] transition-colors"
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
                    rel="noopener noreferrer"
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

              {/* Mobile View (<640px) */}
              <div className="sm:hidden flex flex-row justify-between w-full mt-[40px]">
                {/* Quick Links */}
                <div className="flex flex-col gap-[12px] w-[40%]">
                  <h4 className="text-[13px] text-[#BDBDBD] font-medium tracking-[-0.32px]">
                    Quick Links
                  </h4>
                  <ul className="flex flex-col gap-[8px]">
                    {Object.keys(mainPagesLinksObj || {})
                      .slice(1, -1)
                      .map((pageKey) => (
                        <li key={pageKey}>
                          <Link
                            to={mainPagesLinksObj[pageKey]}
                            className="text-[#FFFAFF] font-medium text-[13px] leading-[20px] tracking-[-0.32px] hover:text-[#1E9AB0] transition-colors"
                          >
                            {pageKey}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-[12px] w-[58%] items-start">
                  <h4 className="text-[13px] text-[#BDBDBD] font-medium tracking-[-0.32px]">
                    Contact
                  </h4>
                  <div className="flex flex-col gap-[10px] items-start">
                    <a
                      href="https://maps.app.goo.gl/rqWRRaMvyspAxSQKA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-[8px]"
                    >
                      <MapPin className="w-[16px] h-[16px]" strokeWidth={1.5} />
                      <p className="text-[#FFFAFF] text-[13px] leading-[20px] font-medium">
                        Anvi Robotics, 1st Floor, Profound Builders,
                        Whitefields,
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

          {/* Divider */}
          <div className="w-[95%] mx-auto h-[1px] bg-[#333333]" />

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
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
