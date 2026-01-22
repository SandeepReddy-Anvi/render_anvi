import { useState, useMemo } from "react";
import { newsDataList, newsTabsList } from "../../data/NewsData";
import NewsCard from "./NewsCard";

const NewsFeeds = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Filter the news based on the active tab
  const filteredData = useMemo(() => {
    if (activeTab === "All Categories") {
      return newsDataList;
    }
    // Simple filter logic - could be expanded for "Next at Anvi", "Announcements", etc.
    return newsDataList.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen pb-[100px]">
      {/* Tab Navigation */}
      <div className="grid grid-cols-5 justify-start align-middle bg-[#F4F4F4] gap-[6px] mb-16">
        {newsTabsList.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`
              py-[20px] px-[16px] mr-2 mb-2 sm:mb-0 text-[18px] font-semibold transition-all duration-300
              ${
                activeTab === tab.name
                  ? "text-[#FA293E]" : "text-black/50"
              }
            `}
          >
            {tab.name}
            {/* <span
              className={`ml-2 px-2 py-0.5 text-xs font-semibold rounded-full ${
                activeTab === tab.name
                  ? "bg-[#FA293E]"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab.count}
            </span> */}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 px-5 md:px-[60px] gap-5 md:gap-8 lg:gap-14">
        {filteredData.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      {/* Message if no data */}
      {filteredData.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No News on this Category.
        </div>
      )}
    </div>
  );
};

export default NewsFeeds;
