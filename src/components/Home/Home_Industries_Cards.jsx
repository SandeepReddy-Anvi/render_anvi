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
    <ul className="w-full h-auto flex md:flex-row justify-between gap-[10px] md:gap-[15px] lg:mx-auto px-0 md:px-0 pt-10 lg:pt-20">
 
      {Object.keys(cardsList).map((eachIndustry, index) => {
        const { imgUrl, title, desc, link, activeCard } = cardsList[eachIndustry];

        return (
          <li
            key={eachIndustry + index}
            className={`active-home-industry-card-li w-max h-auto overflow-hidden relative rounded-[22px] flex-shrink-0 transition-all duration-500 ease-in-out`}
            style={{
              width: activeCard ? "350px" : "89px",
              transform: activeCard ? "scale(1)" : "scale(1)",
              
            }}
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
                className="active-home-industry-card relative w-full h-[400px] md:min-h-[416px] aspect-[3/4] flex justify-center rounded-[22px] overflow-hidden border-[0.98px] border-solid border-transparent bg-cover bg-no-repeat cursor-pointer transition-all duration-500 ease-in-out"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>

                <div className="absolute bottom-0 w-full flex flex-col items-start justify-end p-[25px] pb-[35px] text-left font-[manrope] gap-[7px] transform transition-all duration-200 ease-in-out">
                  <h3 className="font-bold text-white text-[15px] tracking-[0.15px] leading-[normal]">
                    {title}
                  </h3>

                  <p className="font-[Manrope] font-normal text-white text-[11.3px] tracking-[0.11px] leading-[normal]">
                    {desc}
                  </p>

                  {renderLink(
                    `Explore ${title}`,
                    link,
                    "w-full text-[#FFFAFF] text-[13px] font-[600] mt-[7px] text-center px-[18px] py-[10px] flex-[0_0_auto] bg-[#FA293E] rounded-[9.56px]"
                  )}
                </div>
              </div>
            ) : (
              // Inactive Card
              <div
                className="w-full h-[400px] md:min-h-[416px] rounded-[22px] relative cursor-pointer transition-all duration-300 flex justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${imgUrl})` }}
                onMouseEnter={() => handleMouseEnter(title)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>
                <div className="mt-[334.2px] w-[68.23px] h-[26px] ml-[0.2px] rotate-[-89.59deg] font-[Manrope] font-bold text-white text-[18.8px] tracking-[0.19px] leading-[normal] whitespace-nowrap">
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




 