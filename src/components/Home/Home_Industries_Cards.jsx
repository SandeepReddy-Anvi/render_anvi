import { IndustriesCardsList } from "../../data/IndustriesCardsList";
import { renderLink } from "../../utils/renderLink";
import { useState } from "react";

export const HomeIndustriesCard = () => {
  const [cardsList, setCardsList] = useState(IndustriesCardsList || {});

  const isMobile = () => window.innerWidth <= 768;

  const centerActiveCardOnMobile = (activeCardTitle) => {
    const container = document.querySelector(".home-indus-cards-container");
    if (!container) return;

    const cards = Array.from(container.children);

    const activeIndex = cards.findIndex(
      (card) => card.dataset.title === activeCardTitle,
    );

    if (activeIndex === -1) return;

    const activeCard = cards[activeIndex];

    const containerCenter = container.offsetWidth / 2;
    const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;

    const scrollPosition = cardCenter - containerCenter;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  // const handleMouseEnter = (activeCardTitle) => {
  //   if (isMobile()) {
  //     centerActiveCardOnMobile(activeCardTitle);
  //   }
  //   else {
  //     document
  //       .querySelector(".home-indus-cards-container")
  //       .scrollTo({ left: 0, behavior: "smooth" });
  //   }
  //   setCardsList((prevCardsList) => {
  //     const updatedCardsList = { ...prevCardsList };
  //     Object.keys(updatedCardsList).forEach((eachIndustry) => {
  //       updatedCardsList[eachIndustry].activeCard =
  //         updatedCardsList[eachIndustry].title === activeCardTitle;
  //     });
  //     return updatedCardsList;
  //   });
  // };
  const handleMouseEnter = (activeCardTitle) => {
    if (isMobile()) {
      centerActiveCardOnMobile(activeCardTitle);
    } else {
      document
        .querySelector(".home-indus-cards-container")
        ?.scrollTo({ left: 0, behavior: "smooth" });
    }

    setCardsList((prevCardsList) => {
      const updatedCardsList = { ...prevCardsList };
      Object.keys(updatedCardsList).forEach((eachIndustry) => {
        updatedCardsList[eachIndustry].activeCard =
          updatedCardsList[eachIndustry].title === activeCardTitle;
      });
      return updatedCardsList;
    });
  };

  return (
    <ul
      className="home-industry-cards-ul 
        w-full h-auto flex flex-row justify-between p-0 py-5 max-md:px-[10px]"
    >
      {Object.keys(cardsList).map((eachIndustry, index) => {
        const { imgUrl, title, desc, link, activeCard } =
          cardsList[eachIndustry];

        return (
          <li
            key={eachIndustry + index}
            data-title={eachIndustry.title}
            className={`active-home-industry-card-li industry-card h-[494px] overflow-hidden relative rounded-[22px] flex-shrink-0 transition-width duration-500 linear
              ${activeCard ? "w-[370px]" : "w-[98px]"}
            `}
            onClick={() => handleMouseEnter(title)}
            onMouseEnter={() => handleMouseEnter(title)}
          >
            {activeCard ? (
              <div
                style={{
                  backgroundImage: `url(${imgUrl})`,
                  backgroundPosition: "center",
                  overflow: "hidden",
                  borderRadius: "22px",
                }}
                className="active-home-industry-card relative w-full h-full flex justify-center rounded-[22px] overflow-hidden border-[0.98px] border-solid border-transparent bg-cover bg-no-repeat cursor-pointer transition-width duration-380 ease-in-out"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>

                <div className="absolute bottom-0 w-full flex flex-col items-start justify-end p-[25px] pb-[35px] text-left gap-[7px]">
                  <h3 className="font-bold text-white text-[18px] tracking-[0.15px] leading-[normal]">
                    {title}
                  </h3>

                  <p className="font-regular text-[#FFFFFF] text-[13px] leading-[18px]">
                    {desc}
                  </p>

                  {renderLink(
                    `Explore ${title}`,
                    link,
                    "w-full text-[#FFFAFF] text-[14px] font-bold mt-[7px] text-center px-[18px] py-[12px] bg-[#FD3B3C] rounded-[16px]",
                  )}
                </div>
              </div>
            ) : (
              <div
                className="w-[98px] h-full rounded-[22px] relative cursor-pointer flex justify-center overflow-hidden bg-center bg-cover bg-no-repeat transition-width duration-500 ease-in-out"
                style={{ backgroundImage: `url(${imgUrl})` }}
              >
                <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>
                <div className="text-left w-full self-end mb-[80px] bg-red500 h-[26px] rotate-[-89.59deg] font-bold text-[#FFFFFF] text-[22px] tracking-[0.19px] leading-[normal] whitespace-nowrap">
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
