import { Link } from "react-router-dom";
import { IndustriesCardsList } from "../../data/IndustriesCardsList";
import { renderLink } from "../../utils/renderLink";
import React, { useCallback, useState } from "react";

export const HomeIndustriesCard = () => {
  const [cardsList, setCardsList] = useState(IndustriesCardsList || {});

  const handleMouseEnter = useCallback((title) => {
    const updatedList = { ...cardsList };
    Object.keys(updatedList).forEach((key) => {
      updatedList[key].activeCard = updatedList[key].title === title;
    });
    setCardsList(updatedList);
  }, [cardsList]);

  const handleMouseLeave = useCallback(() => {
    setCardsList(IndustriesCardsList);
  }, []);

  return (
 
    // <ul className="home-industry-cards-ul w-full  h-auto flex md:flex-row justify-start gap-[10px] md:gap-[15px] m-0 lg:mx-auto   ">
 
    //<ul className="home-industry-cards-ul w-full h-auto flex md:flex-row justify-start gap-[10px] md:gap-[15px] lg:mx-auto px-0 md:px-0 ml-[-10px]">
<ul className="
  w-full h-auto flex flex-row justify-start gap-8 md:gap-10 lg:gap-[68px] 2xl:justify-between 2xl:gap-0 
  lg:mx-auto px-0 pt-10 md:pt-16 lg:pt-20 
overflow-x-auto overflow-y-hidden scrollbar-hide
">
   
      {Object.keys(cardsList).map((eachIndustry, index) => {
        const { imgUrl, title, desc, link, activeCard } = cardsList[eachIndustry];

        return (
          <li
            key={eachIndustry + index}
            className={`active-home-industry-card-li w-max h-auto overflow-hidden relative rounded-[22px] flex-shrink-0 transition-all duration-500 ease-in-out
              ${activeCard
                ? "w-[370px] 2xl:w-[420px]"
                : "w-[90px] 2xl:w-[110px]"
              }
            `}
          >
            {activeCard ? (
              // Active Card
              <div
                style={{
                  backgroundImage: `url(${imgUrl})`,
                  backgroundPosition: "center",
                  overflow: "hidden",
                  borderRadius: "22px",
                }}
                onMouseEnter={() => handleMouseEnter(title)}
                onMouseLeave={() => handleMouseLeave()}
                className="active-home-industry-card relative w-full h-[400px] md:min-h-[446px] aspect-[3/4] flex justify-center rounded-[22px] overflow-hidden border-[0.98px] border-solid border-transparent bg-cover bg-no-repeat cursor-pointer transition-all duration-500 ease-in-out"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>

                <div className="absolute bottom-0 w-full flex flex-col items-start justify-end p-[25px] pb-[35px] text-left gap-[7px] transform transition-all duration-200 ease-in-out">
                  <h3 className="font-bold text-white text-[18px] tracking-[0.15px] leading-[normal]">
                    {title}
                  </h3>

                  <p className="font-regular text-[#FFFFFF] text-[13px] leading-[18px]">
                    {desc}
                  </p>

                  {renderLink(
                    `Explore ${title}`,
                    link,
                    "w-full text-[#FFFAFF] text-[14px] font-bold mt-[7px] text-center px-[18px] py-[12px] bg-[#FD3B3C] rounded-[16px]"
                  )}
                </div>
              </div>
            ) : (
              // Inactive Card
              <div
                className="w-full h-[400px] md:min-h-[446px] rounded-[22px] relative cursor-pointer transition-all duration-300 flex justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${imgUrl})` }}
                onMouseEnter={() => handleMouseEnter(title)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>
                <div className="mt-[334.2px] w-[68.23px] h-[26px] ml-[0.2px] rotate-[-89.59deg] font-bold text-[#FFFFFF] text-[22px] tracking-[0.19px] leading-[normal] whitespace-nowrap">
                  {title}
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};




 