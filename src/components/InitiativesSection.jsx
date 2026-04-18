const InitiativeSection = () => {
  const initiatives = [
    {
      title: "Project SHUDH",
      description:
        "Revolutionizing urban sanitation through AI-powered, autonomous, and sustainable robotic cleaning systems - ensuring safety, precision, and dignity for all.",
      image:
        "images/home/botFactory.jpg",
      layout: "image-top",
    },
    {
      title: "Anvi's Galactica",
      description:
        "Building sustainable space systems through debris removal, recycling, and future-ready infrastructure - powering a cleaner, smarter orbital future.",
      image:
        "images/home/galactica.webp",
      layout: "text-top",
    },
    {
      title: "Anvi’s Humanoid",
      description:
        "The ANVI Humanoid Robot is built to operate in human environments, navigating spaces and interacting with objects naturally and efficiently in real-world conditions.",
      image:
        "images/home/humanoid.jpg",
      layout: "image-top",
    },
  ];

  return (
    <section className="w-full h-auto flex items-center">

      <div className="grid md:flex md:overflow-x-auto lg:grid lg:grid-cols-3 gap-5">
        {initiatives.map((item, index) => (
          <div
          key={index}
          className="bg-[#F5F5F7] rounded-2xl p-5 md:max-w-[400px] md:flex-shrink-0"
        >
            {item.layout === "text-top" ? (
              <div className="flex flex-col">
                {/* TEXT FIRST */}
                <div className="order-2 md:order-1 border border-[#1000009E] rounded-2xl p-[16px]">
                  <h3 className="text-[22px] text-[#100000] font-medium mb-2">
                    {item.title}
                  </h3>
                  <div className="h-[1px] bg-[#1000009E] mb-3" />
                  <p className="text-[14px] text-[#100000]">
                    {item.description}
                  </p>
                </div>

                {/* IMAGE BELOW */}
                <div className="order-1 md:order-2 w-full h-52 rounded-xl overflow-hidden mt-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <>
                {/* IMAGE FIRST */}
                <div className="w-full h-52 rounded-xl overflow-hidden mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TEXT BELOW */}
                <div className="border border-[#1000009E] rounded-2xl p-[16px]">
                <h3 className="text-[22px] font-medium text-[#100000] mb-2">
                  {item.title}
                </h3>
                <div className="h-[1px] bg-[#1000009E] mb-3" />
                <p className="text-[14px] text-[#100000]">
                  {item.description}
                </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InitiativeSection;