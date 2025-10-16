import { Calendar, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  if (!item) return null;
  return (
    <Link
      to={item.newsLink}
      target={item.newsLink ? "_blank" : ""}
      // style={{
      //   boxShadow: "0px 1px 2px -1px #73808C1A, 0px 1px 3px 0px #73808C1A",
      // }}
      className="w-full bg-white rounded-lg border-[1px] border-[#E2E6E980] overflow-hidden transition duration-300 ease-in-out shadow-md shadow-[#73808C1A] hover:shadow-md hover:shadow-gray-300 hover:scale-[1.006] max-w-md mx-auto"
    >
      {/* Image Container */}
      <div className="h-48">
        {/* Placeholder: In a real app, use the item.imageUrl */}
        <div className="bg-gray-200 h-full w-full flex items-center justify-center relative">
          {/* The image should be replaced with an actual image tag like <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" /> */}
          <span className="text-gray-500 text-sm">Image Not Available</span>
          <img
            src={item.imageUrl}
            alt={item.title.length}
            className="absolute w-full h-full aspect-video object-cover object-center"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full p-6 flex flex-col gap-[14px] font-[Wix Madefor Display] justify-center items-start">
        {/* Date */}
        <div className="flex items-center text-[14px] text-[#73808C]">
          <Calendar size={15} className="mr-2" />
          {item.date}
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-semibold text-[#171A1C] leading-[20px]">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#73808C] font-[dm sans] text-sm leading-[22.75px]">
          {item.info}
        </p>

        {/* Read More Link */}
        <span className="flex justify-center align-middle group gap-[5px] items-center text-sm font-medium text-[#2EACB8] hover:text-[#268d96] transition duration-150 ease-in-out">
          Read More
          <ChevronDown
            size={20}
            className="rotate-[-90deg] mt-[3px] group-hover:animate-pulse"
          />
        </span>
      </div>
    </Link>
  );
};

export default NewsCard;
