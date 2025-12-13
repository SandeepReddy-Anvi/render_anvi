import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { mainPagesLinksList } from "../data/PagesLinkList";
import { Menu, Plus } from "lucide-react";
import { IconsObj } from "../utils/Iconify_icons";

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
        className={`w-full md:h-[101px] bg-black text-white sticky top-0 overflow-hidden 
      flex items-center justify-between gap-5 px-4 sm:px-6 sm:pr-8 md:pl-2 md:pr-3 
      lg:px-[40px] xl:px-[60px] h-[101px] font-[manrope] text-[16px] 
      max-md:text-xs transition-transform duration-300 z-[51] ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
      >
        <Link to="/">
          <img
            loading="lazy"
            src="/logos/anvi_logo.svg"
            alt="anvi-logo"
            className="w-auto h-[45px] sm:h-[50px] md:h-[55px] lg:h-[60px] xl:h-[70px] object-contain sticky z-[51] mt-[10px]"
          />
        </Link>

        {/* Nav Bar & Buttons (right side) */}
        <nav className="flex flex-1 justify-end align-middle">
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
                    <Link
                      to={link}
                      className="hover:text-[#d10000] transition-colors"
                    >
                      {pageKey.replace(/([A-Z])/g, " $1").trim()}
                    </Link>
                  </li>
                );
              })}
          </ul>

          <Link
            to={mainPagesLinksList["ContactUs"]}
            className="max-md:hidden md:ml-2 lg:ml-5 link-bg-icon"
          >
            Contact Us <i className="rotate-45">{IconsObj.arrow}</i>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-3 cursor-pointer text-[#fff]"
            onClick={() => handleMobileMenu()}
            aria-label="Toggle mobile menu"
          >
            <Menu size={35} color="white" />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 h-[74vh] z-[60] flex flex-col bg-black shadow-md   text-white overflow-y-auto rounded-3xl">
          
          {/* Top Bar inside Menu: Logo + Close Button */}
          <div className="flex justify-between items-center w-full px-5 pt-6 pb-2">
            
            {/* ✅ Added SVG Logo Here */}
            <img
              src="/logos/anvi_logo.svg"
              alt="anvi-logo-mobile"
              className="h-[45px] w-auto object-contain"
            />

            {/* Close Button */}
            <button
              className="cursor-pointer p-2 text-white"
              onClick={handleMobileMenu}
              aria-label="Close mobile menu"
            >
              <Plus
                color="#fff"
                size={35}
                className="rotate-45 hover:rotate-[315deg] transition-transform duration-200"
              />
            </button>
          </div>

          {/* Mobile Links List */}
          <ul className="w-full  mt-[5vh] flex flex-col items-center justify-start gap-[20px] font-[600] text-[20px]">
            {Object.keys(mainPagesLinksList)
              .slice(0, -1)
              .map((pageKey) => {
                const link = mainPagesLinksList[pageKey];
                return (
                  <li key={link} className={currentPageStyle(link)}>
                    <Link
                      to={link}
                      onClick={() => handleLinkClick(link)}
                      className={`hover:text-[#d10000] transition-colors ${currentPageStyle(
                        link
                      )}`}
                    >
                      {pageKey}
                    </Link>
                  </li>
                );
              })}

            <li className="rounded-[16px] bg-[#d10000] ">
              <Link
                to={mainPagesLinksList["ContactUs"]}
                onClick={() => handleLinkClick(mainPagesLinksList["ContactUs"])}
                className="w-full max-w-[280px] h-[50px] px-[90px] inline-flex items-center justify-center whitespace-nowrap text-[16px] text-black font-semibold transition-colors hover:text-[#d10000]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;