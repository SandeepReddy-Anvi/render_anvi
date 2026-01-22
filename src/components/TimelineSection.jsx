const TimelineSection = () => {
  const timelineData = [
    {
      year: "2020",
      title: "Foundation of Anvi Robotics",
      desc: "Started with a vision to revolutionize industries through deep-tech innovation.",
    },
    {
      year: "2022",
      title: "First Surveillance Robot Launch",
      desc: "Started with a vision to revolutionize industries through deep-tech innovation.",
      img: "/images/about/about5.webp",
    },
    {
      year: "2023",
      title: "Autonomous Runway Operations (AROP )",
      desc: "Published groundbreaking research on autonomous runway operations..",
    },
    {
      year: "2024",
      title: "Multi-Industry Expansion",
      desc: "Extended our solutions across 8+ industries globally, driving innovation and delivering measurable impact through intelligent systems that enhance safety, efficiency, and sustainability.",
    },
  ];

  return (
    <div className="space-y-12">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-start ml-5"
        >
          {/* Year */}
          <div className="flex-shrink-0 w-10 relative inline-flex justify-between place-items-center align-middle text-right pr-4">
            <i className="w-2.5 h-max absolute left-[-21.5px] rounded-full aspect-square inline-flex bg-[#FA293E]" />
            <span className="text-[18px] text-[#D10000] font-medium pl-8">{item.year}</span>
          </div>

          {/* Content */}
          <div className="flex-1 pl-8 mt-2">
            <h3 className="text-[20px] md:text-[22px] font-medium md:font-semibold text-[#100000]">{item.title}</h3>
            <p className="text-[#323232] text-[14px] font-medium mt-1">
              {item.desc}
            </p>
            {item.img && (
              <img
                loading="lazy"
                src={item.img}
                alt={item.title}
                className="mt-4 rounded-lg shadow-lg w-full max-w-sm"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineSection;
