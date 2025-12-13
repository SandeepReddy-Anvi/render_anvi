import { useState, useMemo } from "react";
import { newsDataList, newsTabsList } from "../../data/NewsData";
import NewsCard from "./NewsCard";

const NewsFeeds = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Filter the news based on the active tab
  const filteredData = useMemo(() => {
    if (activeTab === "All") {
      return newsDataList;
    }
    // Simple filter logic - could be expanded for "Next at Anvi", "Announcements", etc.
    return newsDataList.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <div className="p-4 sm:p-5 md:p-12 lg:p-16 bg-[#fff] min-h-screen pb-[100px]">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-start align-middle gap-[6px] mb-8">
        {newsTabsList.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`
              py-[14px] px-[16px] mr-2 mb-2 sm:mb-0 text-sm font-[400] rounded-[10px] border-[1px] transition-all duration-300
              ${
                activeTab === tab.name
                  ? "bg-[#d10000] text-white scale-[1.02] shadow-md shadow-[#00000040] border-transparent"
                  : "bg-white text-[#000] hover:bg-gray-100 border-[#E8EBEE]"
              }
            `}
          >
            {tab.name}
            <span
              className={`ml-2 px-2 py-0.5 text-xs font-semibold rounded-full ${
                activeTab === tab.name
                  ? "bg-[#d10000]"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-5 md:gap-8">
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
