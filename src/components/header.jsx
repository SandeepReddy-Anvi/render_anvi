import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { mainPagesLinksObj, pagesLinksObj } from "../data/PagesLinkList";
import { Menu, Plus } from "lucide-react";
import { IconsObj } from "../utils/Iconify_icons";
import BreadCrumb from "./BreadCrumb";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    return location.pathname === link ? "currentPageLink" : "";
  };

  const handleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const isOpening = !prev;

      if (isOpening) {
        scrollYRef.current = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollYRef.current}px`;
        document.body.style.width = "100%";
      } else {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollYRef.current);
      }
      return isOpening;
    });
  };

  // ... (useEffects remain the same) ...
  useEffect(() => {
    currentPage.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.position = "";
    document.body.style.top = "";
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScroll <= 0 ? 0 : currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`w-full md:h-[80px] lg:h-[101px] bg-white text-black sticky top-0 overflow-hidden 
      flex items-center justify-between gap-5 px-4 sm:px-6 sm:pr-8 md:pl-2 md:pr-3 
      lg:px-[30px] xl:px-[40px] h-[101px] text-[16px] 
      max-md:text-xs transition-transform duration-300 z-[51] ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
      >
        <Link to={pagesLinksObj.Home}>
          <img
            loading="eager"
            src="/logos/anvi_black_logo.svg"
            alt="anvi-logo"
            className="w-auto max-h-[50px] object-contain sticky z-[51] mt-[10px]"
          />
        </Link>

        {/* Nav Bar & Buttons (right side) */}
        <nav className="flex flex-1 justify-end align-middle">
          <ul className="desktop-ul hidden md:flex justify-center font-medium text-[16px] align-middle gap-[2px] md:gap-3 lg:gap-[30px] xl:gap-[40px]">
            {Object.keys(mainPagesLinksObj)
              .slice(0, -1)
              .map((pageKey) => {
                const link = mainPagesLinksObj[pageKey];
                const isActive = currentPageStyle(link);
                return (
                  <li
                    key={link}
                    className={`flex place-items-center ${currentPageStyle(
                      link,
                    )}`}
                  >
                    <Link
                      to={link}
                      className={`
                        relative inline-block transition-all duration-300 font-medium text-[16px]
                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent"
                            : `text-[101010] after:content-[''] after:absolute after:left-0 after:-bottom-[6px]
                              after:h-[1px] after:w-0
                              after:bg-gradient-to-r after:from-[#FE7F2C] after:via-[#FF4A3A] after:via-[#FA293E] after:to-[#CD0054]
                              after:transition-all after:duration-300 hover:after:w-full`
                        }
                      `}
                      /* className="hover:text-[#FA293E] transition-colors" */
                    >
                      {pageKey.replace(/([A-Z])/g, " $1").trim()}
                    </Link>
                  </li>
                );
              })}
          </ul>

          <Link
            to={mainPagesLinksObj["ContactUs"]}
            className="max-md:hidden md:ml-2 lg:ml-[40px] link-bg-icon1 font-semibold text-[14px]"
          >
            <span>Contact Us</span>
            <i className="rotate-45">{IconsObj.arrow}</i>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-3 cursor-pointer text-[#fff]"
            onClick={() => handleMobileMenu()}
            aria-label="Toggle mobile menu"
          >
            <Menu size={35} color="BLACK" />
          </button>
        </nav>
      </header>

      {/* DYNAMIC BREADCRUMB - CORRECTED FOR COLLECTIVE */}
      <BreadCrumb location={location} showHeader={showHeader} />

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <nav className="fixed inset-0 h-[74vh] z-[60] flex flex-col bg-black shadow-md text-white overflow-y-auto">
          {/* Top Bar inside Menu: Logo + Close Button */}
          <div className="flex justify-between items-center w-full px-5 pt-6 pb-2">
            {/* ✅ Added SVG Logo Here */}
            <Link to={pagesLinksObj.Home}>
              <img
                src="/logos/anvi_logo.svg"
                alt="anvi-logo-mobile"
                className="h-[45px] w-auto object-contain"
              />
            </Link>

            {/* Close Button */}
            <button
              className="cursor-pointer p-2 text-white"
              onClick={() => handleMobileMenu()}
              aria-label="Close mobile menu"
            >
              <Plus
                color="#FFF"
                size={35}
                className="rotate-45 hover:rotate-[315deg] transition-transform duration-200"
              />
            </button>
          </div>

          {/* Mobile Links List */}
          <ul className="w-full  mt-[5vh] flex flex-col items-center justify-start gap-[20px] font-[600] text-[20px]">
            {Object.keys(mainPagesLinksObj)
              .slice(0, -1)
              .map((pageKey) => {
                const link = mainPagesLinksObj[pageKey];
                return (
                  <li key={link} className={currentPageStyle(link)}>
                    <Link
                      to={link}
                      onClick={() => handleLinkClick(link)}
                      className={`hover:text-[#FA293E] transition-colors ${currentPageStyle(
                        link,
                      )}`}
                    >
                      {pageKey}
                    </Link>
                  </li>
                );
              })}

            <li className="rounded-[16px] bg-[#FA293E] ">
              <Link
                to={mainPagesLinksObj["ContactUs"]}
                onClick={() => handleLinkClick(mainPagesLinksObj["ContactUs"])}
                className=" w-full max-w-[280px] h-[50px] px-[90px] inline-flex items-center justify-center whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold transition-colors hover:text-[#FFFFFF] hover:bg-[#CD0054]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
