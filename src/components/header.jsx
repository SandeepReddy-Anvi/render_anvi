import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { mainPagesLinksList } from "../data/PagesLinkList";
import { Menu, Plus } from "lucide-react";
import { IconsObj } from "../utils/Iconify_icons";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = useRef("/");
  const scrollYRef = useRef(0);

  const handleLinkClick = (link) => {
    currentPage.current = link;
    setMobileMenuOpen(false);
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollYRef.current);
  };

  const currentPageStyle = (link) => {
    // console.log("link", link, currentPage.current);
    return location.pathname === link ? "currentPageLink" : "";
  };

  const handleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const isOpening = !prev;

      if (isOpening) {
        scrollYRef.current = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollYRef.current}px`;
      } else {
        document.body.style.position = "relative";
        document.body.style.top = "";
        window.scrollTo(0, scrollYRef.current);
      }
      return isOpening;
    });
  };

  useEffect(() => {
    currentPage.current = location.pathname;
  }, [location.pathname]);

   useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.position = "";
    document.body.style.top = "";
  }, [location]);

  return (
    <header
      className="w-full md:h-[106px] bg-[#fff] sticky top-0 overflow-hidden flex items-center justify-between gap-5 px-4 sm:px-6 sm:pr-8 md:pl-2 md:pr-3 lg:px-[40px] xl:px-[60px] h-[106px] font-[manrope] text-[16px] max-md:text-xs"
      style={{ zIndex: 11 }}
    >
      {/* Logo */}
      <Link to="/">
        {/* Wrap logo in Link for easy navigation to home */}
        <img
          loading="lazy"
          src="/logos/anvi logo.png"
          alt="anvi-logo"
          className="w-full h-auto max-w-[100px] lg:max-w-[130px] xl:max-w-[150px] max-md:max-h-[60px] object-cover sticky z-[51]"
        />

      </Link>
      <link rel="preload" as="image" href="/logos/anvi logo 4k.png" />

      {/* Nav Bar & Buttons (right side) */}
      <nav className="flex flex-1 justify-end align-middle">
        {/* Desktop Navigation Links */}
        <ul className="desktop-ul hidden md:flex justify-center align-middle gap-[2px] md:gap-3 lg:gap-[30px] xl:gap-[40px]">
          {Object.keys(mainPagesLinksList)
            .slice(0, -1)
            .map((pageKey) => {
              const link = mainPagesLinksList[pageKey];
              return (
                <li
                  key={link}
                  className={`flex place-items-center transition-all duration-120 ${currentPageStyle(
                    link
                  )}`}
                >
                  <Link to={link} className="hover:text-cyan-500">
                    {pageKey.replace(/([A-Z])/g, " $1").trim()}
                  </Link>
                </li>
              );
            })}
        </ul>

        {/* Contact Us Button (Desktop) */}
        <Link
          to={mainPagesLinksList["ContactUs"]}
          className="max-md:hidden md:ml-2 lg:ml-5 link-bg-icon hover:shadow-[0px_4px_12px_rgba(0,0,0,0.3)]"
        >
          Contact Us <i className="rotate-45">{IconsObj.arrow}</i>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto p-3 cursor-pointer"
          onClick={() => handleMobileMenu()}
          aria-label="Toggle mobile menu"
        >
          <Menu size={35} color="black" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="w-full h-max pb-10 pt-8 fixed inset-0 z-40 flex flex-col bg-[#FCFCFC] shadow-md shadow-gray-400 rounded-b-3xl text-[#000] overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-7 right-5 cursor-pointer p-2 z-50"
            onClick={() => handleMobileMenu()}
            aria-label="Close mobile menu"
          >
            <Plus
              color="#555"
              size={35}
              className="rotate-45 hover:rotate-[315deg] transition-transform duration-200"
            />
          </button>

          {/* Mobile Links List */}
          <ul className="w-full h-85 mt-[12vh] flex flex-col text-black font-[600] text-[20px] justify-start items-center gap-[30px]">
            {/* Include all links for mobile view */}
            {Object.keys(mainPagesLinksList)
              .slice(0, -1)
              .map((pageKey) => {
                const link = mainPagesLinksList[pageKey];
                return (
                  <li key={link} className={`${currentPageStyle(link)}`}>
                    <Link
                      to={link}
                      onClick={() => handleLinkClick(link)}
                      className={`hover:text-cyan-500 transition-colors ${currentPageStyle(
                        link
                      )}`}
                    >
                      {pageKey}
                    </Link>
                  </li>
                );
              })}
            {/* #1E9AB0 */}
            <li className="rounded-[16px] bg-[#1E9AB0]">
              <Link
                to={mainPagesLinksList["ContactUs"]}
                onClick={() => handleLinkClick(mainPagesLinksList["ContactUs"])}
                className={`text-white w-full text-[16px] inline-flex whitespace-nowrap place-items-center  max-w-[280px] px-[90px] h-[50px] transition-colors`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
