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
      desc: "Deployed intelligent surveillance systems across multiple installations, enabling real-time monitoring, threat detection, and faster response.",
      img: "/images/about/about5.jpg",
    },
    {
      year: "2023",
      title: "AROP White Paper Release",
      desc: "Published groundbreaking research on autonomous runway operations.",
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
            <i className="w-2.5 h-max absolute left-[-21.5px] rounded-full aspect-square inline-flex bg-[#1E9AB0]" />
            <span className="text-sm text-[#1E9AB0]">{item.year}</span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-[#7B828E] text-[16px] font-normal mt-1">
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
