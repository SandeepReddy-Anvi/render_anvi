import { Calendar, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  if (!item) return null;
  return (
    <Link
      to={item.newsLink}
     target={item.openInNewTab ? "_blank" : "_self"}
  rel={item.openInNewTab ? "noopener noreferrer" : undefined}
      // style={{
      //   boxShadow: "0px 1px 2px -1px #73808C1A, 0px 1px 3px 0px #73808C1A",
      // }}
      className="w-full overflow-hidden transition duration-300 ease-in-out mx-auto"
    >
      {/* Image Container */}
      <div className="h-[220px] lg:h-[300px]">
        {/* Placeholder: In a real app, use the item.imageUrl */}
        <div className="h-full w-full flex items-center justify-center relative">
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
      <div className="w-full py-6 flex flex-col gap-[14px] font-[Wix Madefor Display] justify-center items-start">
        {/* Date */}
        <div className="flex items-center text-[14px] text-[#73808C]">
          <Calendar size={15} className="mr-2" />
          {item.date}
        </div>

        {/* Title */}
        <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-[#292929] leading-[36px]">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#73808C] text-[16px] leading-[27px]">
          {item.info}
        </p>

        {/* Read More Link */}
        <span className="flex justify-center align-middle group gap-[5px] items-center text-[18px] font-medium text-[#FD3B3C] hover:text-[#FD3B3C]/30 transition duration-150 ease-in-out">
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
