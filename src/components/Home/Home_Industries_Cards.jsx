import { Link } from "react-router-dom";
import { IndustriesCardsList } from "../../data/IndustriesCardsList";
import React, { useCallback, useState } from "react";

export const HomeIndustriesCard = React.memo(() => {
  const [cardsList, setCardsList] = useState(IndustriesCardsList || {});

  const handleMouseEnter = useCallback((title) => {
    // console.log("hovered", title);
    // console.log(cardsList);
    Object.keys(cardsList).map((eachIndustry) => {
      if (cardsList[eachIndustry].title === title) {
        cardsList[eachIndustry].activeCard = true;
        return eachIndustry;
      } else {
        cardsList[eachIndustry].activeCard = false;
        return eachIndustry;
      }
    });
    // console.log("filtered", filtered);
    // console.log("cardsList after", cardsList);
    setCardsList({ ...cardsList });
  }, []);

  const handleMouseLeave = useCallback(() => {
    // console.log("unhovered");
    setCardsList(IndustriesCardsList);
  }, []);

  return (
    <ul className="home-industry-cards-ul w-full h-auto flex md:flex-row justify-start gap-[10px] md:gap-[15px] m-0 lg:mx-auto">
      {Object.keys(cardsList).map((eachIndustry, index) => {
        const { imgUrl, title, desc, link, activeCard } =
          cardsList[eachIndustry];
        // console.log(eachIndustry, index)
        return (
          <li
            key={eachIndustry[title] + `${index + 1}`}
            className="active-home-industry-card-li w-max h-auto overflow-hidden relative rounded-[22px] flex-shrink-0 transition-all duration-300"
            style={{
              width: activeCard ? "max-content" : "81px",
              transform: activeCard ? "scale(1.05)" : "scale(1)",
              boxShadow: activeCard
                ? "0px 6px 25px rgba(0, 0, 0, 0.7)"
                : "none",
            }}
          >
            {activeCard ? (
              // Active Card
              <div
                style={{
                  backgroundImage: `url(${imgUrl})`,
                  boxShadow: "0px 6px 16px rgba(0, 0, 0)",
                  backgroundPosition: "center",
                  overflow: "hidden",
                  borderRadius: "22px",
                }}
                onMouseEnter={() => handleMouseEnter(title)}
                onMouseLeave={() => handleMouseLeave()}
                className="active-home-industry-card w-full flex-grow-1 cursor-pointer h-[400px] transition-width duration-100 scale-110 md:min-h-[416px] aspect-[3/4] flex justify-center rounded-[22px] overflow-hidden border-[0.98px] border-solid border-transparent bg-cover bg-no-repeat"
              >
                {/* dark linear bg */}
                <div className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>

                {/* Content box */}
                <div className="w-full flex-col p-[25px] pb-[35px] transition-rotate duration-[0ms] font-[manrope] items-center text-left justify-end gap-[7px] self-stretch flex relative">
                  <h3 className="relative self-stretch mt-[-0.94px] font-bold text-white text-[15px] tracking-[0.15px] leading-[normal]">
                    {title}
                  </h3>

                  <p className="relative self-stretch font-[Manrope] font-normal text-white text-[11.3px] tracking-[0.11px] leading-[normal]">
                    {desc}
                  </p>

                  <Link
                    to={link}
                    className="w-full text-[#FFFAFF] text-[13px] font-[600] mt-[7px] text-center px-[18px] py-[10px] flex-[0_0_auto] bg-[#1e9ab0] rounded-[9.56px]"
                  >
                    Explore {title}
                  </Link>
                </div>
              </div>
            ) : (
              // Inactive Card
              <div
                className="w-full h-[416px] rounded-[22px] relative cursor-pointer transition-all duration-200 flex justify-center overflow-hidden border-transparent bg-center bg-cover object-cover bg-no-repeat bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"
                style={{ backgroundImage: `url(${imgUrl})` }}
                onMouseEnter={() => handleMouseEnter(title)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>
                <div className="mt-[334.2px] w-[68.23px] h-[26px] ml-[0.2px] rotate-[-89.59deg] font-[Manrope] font-bold text-white text-[18.8px] tracking-[0.19px] leading-[normal]">
                  {title}
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
});
