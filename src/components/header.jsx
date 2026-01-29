import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { mainPagesLinksList, pagesLinksList } from "../data/PagesLinkList";
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
        className={`w-full md:h-[80px] lg:h-[101px] bg-white text-black sticky top-0 overflow-hidden 
      flex items-center justify-between gap-5 px-4 sm:px-6 sm:pr-8 md:pl-2 md:pr-3 
      lg:px-[30px] xl:px-[40px] h-[101px] text-[16px] 
      max-md:text-xs transition-transform duration-300 z-[51] ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
      >
        <Link to="/">
          <img
            loading="eager"
            src="/logos/anvi_black_logo.svg"
            alt="anvi-logo"
            className="w-auto max-h-[50px] object-contain sticky z-[51] mt-[10px]"
            onClick={pagesLinksList.Home}
          />
        </Link>

        {/* Nav Bar & Buttons (right side) */}
        <nav className="flex flex-1 justify-end align-middle">
          <ul className="desktop-ul hidden md:flex justify-center font-medium text-[16px] align-middle gap-[2px] md:gap-3 lg:gap-[30px] xl:gap-[40px]">
            {Object.keys(mainPagesLinksList)
              .slice(0, -1)
              .map((pageKey) => {
                const link = mainPagesLinksList[pageKey];
                const isActive = currentPageStyle(link);
                return (
                  <li
                    key={link}
                    className={`flex place-items-center transition-all duration-120 ${currentPageStyle(
                      link
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
  to={mainPagesLinksList["ContactUs"]}
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
{(() => {
  const currentPath = location.pathname;
  const pathSegments = currentPath.split('/').filter(Boolean);

  const categoryMap = {
    "/energy": "Industries",
    "/textiles": "Industries",
    "/foundations": "Industries",
    "/lifesciences": "Industries",
    "/semiconductors": "Industries",
    "/entertainment": "Industries",
    "/solutions/arop": "Solutions",
    "/solutions/sewage": "Solutions",
    "/careers/job-openings": "Careers",
    // Match the exact key from your pagesLinksList
    "/collective": "News", 
  };

  let parentName = null;
  
  // 1. Check the direct map first
  if (categoryMap[currentPath]) {
    parentName = categoryMap[currentPath];
  } 
  // 2. Fallback to prefix checks
  else if (currentPath.startsWith("/careers")) {
    parentName = "Careers";
  } else if (currentPath.startsWith("/solutions")) {
    parentName = "Solutions";
  } else if (currentPath.startsWith("/news")) {
    parentName = "News";
  }

  // Hide on main roots - add /collective to this list if you want it hidden there too, 
  // but keep it out if you want "News > Collective" to show on that page.
  const mainRoots = ["/", "/aboutus", "/investors", "/news", "/contactus", "/industries", "/solutions", "/careers"];
  
  if (mainRoots.includes(currentPath) || !parentName) return null;

  return (
    <div 
      className={`w-full bg-[#F8F8F8] border-b border-[#eeeeee] font-raleway px-4 lg:px-[40px] py-[8px] sticky z-[50] transition-all duration-300 ease-in-out ${
        showHeader 
          ? "top-[80px] lg:top-[101px] translate-y-0 opacity-100" 
          : "top-0 -translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <nav className="flex items-center">
        <ul className="flex items-center list-none m-0 p-0 overflow-x-auto no-scrollbar">
          
          {/* Parent Category */}
          <li className="text-[#666] whitespace-nowrap text-[14px] font-medium capitalize">
            <Link to={mainPagesLinksList[parentName === "News" ? "NewsRoom" : parentName] || "/"} className="hover:text-black transition-colors">
              {parentName}
            </Link>
          </li>

          {/* Child Levels */}
          {pathSegments.map((segment, index) => {
            // Logic to prevent "News > News" or "News > Newsroom"
            const isRedundant = segment.toLowerCase() === parentName.toLowerCase() || 
                                (parentName === "News" && segment.toLowerCase() === "news");
            
            if (isRedundant && index === 0) return null;

            const routeTo = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const cleanName = segment.replace(/-/g, ' ');

            return (
              <div key={routeTo} className="flex items-center whitespace-nowrap">
                <span className="px-[12px] text-[#999] font-light text-[14px]">{">"}</span>
                <li className={`${isLast ? "text-[#333] font-semibold" : "text-[#666]"} text-[14px] capitalize`}>
                  {isLast ? cleanName : <Link to={routeTo} className="hover:text-black">{cleanName}</Link>}
                </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
})()}
      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 h-[74vh] z-[60] flex flex-col bg-black shadow-md   text-white overflow-y-auto">
          
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
                color="#FFF"
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
                      className={`hover:text-[#FA293E] transition-colors ${currentPageStyle(
                        link
                      )}`}
                    >
                      {pageKey}
                    </Link>
                  </li>
                );
              })}

            <li className="rounded-[16px] bg-[#FA293E] ">
              <Link
                to={mainPagesLinksList["ContactUs"]}
                onClick={() => handleLinkClick(mainPagesLinksList["ContactUs"])}
                className=" w-full max-w-[280px] h-[50px] px-[90px] inline-flex items-center justify-center whitespace-nowrap text-[16px] text-[#FFFFFF] font-semibold transition-colors hover:text-[#FFFFFF] hover:bg-[#CD0054]"
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