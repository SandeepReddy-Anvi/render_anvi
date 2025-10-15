import React from "react";

const BenefitsPage = () => {
  const benefits = [
    {
      id: 1,
      title: "Enhanced Safety",
      description: `Airports face hidden dangers every single day - from a loose bolt on the runway to sudden bird 
      intrusions. AROP works like a 24/7 guardian, constantly scanning runways and perimeters. By detecting 
      and removing threats instantly, it prevents accidents before they happen. This means safer flights, 
      protected aircraft, and greater passenger confidence`,
      image: "/images/solutions/arop/arop4.1.png",
      reverse: false,
    },
    {
      id: 2,
      title: "Seamless Efficiency",
      description: `Manual runway checks often mean flight delays, partial closures, or limited visibility inspections. With AROP, 
      airports move from time-bound checks to continuous monitoring. Inspections that used to take hours can now be done in minutes, 
      without halting runway activity. This ensures higher runway availability, faster turnarounds, and smoother passenger experiences.`,
      image: "/images/solutions/arop/arop4.2.png",
      reverse: true,
    },
    {
      id: 3,
      title: "Substantial Cost Savings",
      description: `Every FOD incident, wildlife strike, or emergency repair costs airports and airlines crores of rupees. For example, a single engine 
      damage can exceed ₹10 crore. AROP reduces such risks drastically, while predictive maintenance ensures that runways last longer. The result? 
      Immediate savings from avoided incidents and long-term savings from extended infrastructure lif`,
      image: "/images/solutions/arop/arop4.3.png",
      reverse: false,
    },
    {
      id: 4,
      title: "Streamlined Compliance",
      description: `Airports must follow global safety standards (ICAO Annex 14, FAA Part 139, DGCA requirements). 
      AROP makes this simple by automatically recording all inspections, hazards, and responses. This creates a digital 
      log that can be used for audits, safety reviews, and regulatory approvals, removing paperwork stress and reducing chances of non-compliance`,
      image: "/images/solutions/arop/arop4.4.png",
      reverse: true,
    },
    {
      id: 5,
      title: "Eco-Friendly Efficiency",
      description: `Airports are under pressure to reduce their carbon footprint. AROP supports this goal by operating on 
      electric platforms instead of fuel-based vehicles. By avoiding emergency repairs and heavy machinery use, it also cuts 
      down on unnecessary emissions. Over time, this leads to greener, cleaner, and more sustainable airport operations.`,
      image: "/images/solutions/arop/arop4.5.png",
      reverse: false,
    },
    {
      id: 6,
      title: "Universal Adaptability",
      description: `Whether it is a large international hub like Delhi or a smaller regional airport, AROP is modular and scalable. 
      It can be customized based on the airport’s environment handling high traffic in metros, monsoon conditions in coastal 
      cities, or wildlife intrusions in regional airports. This flexibility makes it valuable for the entire aviation ecosystem`,
      image: "/images/solutions/arop/arop4.6.png",
      reverse: true,
    },
    {
      id: 7,
      title: "Future-Ready Technology",
      description: `With AI, machine learning, and robotics at its core, AROP is designed for the future of aviation. Its predictive 
      analytics help airports plan maintenance in advance, while its integration-first design ensures that one system manages all safety 
      functions together. This makes AROP not just a solution for today, but a strategic investment for tomorrow.`,
      image: "/images/solutions/arop/arop4.7.png",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto space-y-24 py-[64px] font-dm-sans">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col items-center gap-12 lg:gap-0"
          >
            <div
              className={`flex flex-col ${
                benefit.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center justify-between w-full gap-8 md:gap-12`}
            >
              {/* Text Content */}
              <div className="flex-1 max-w-full md:max-w-[500px] px-4 md:px-0">
                <p className="text-[16px] md:text-[18px] font-medium text-[#333333] mb-2">
                  0.{benefit.id}
                </p>
                <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-normal text-[#333333] mb-4">
                  {benefit.title}
                </h2>
                <p className="text-[16px] sm:text-[18px] text-[#282828] font-normal leading-[24px] sm:leading-[28px] md:leading-[29px]">
                  {benefit.description}
                </p>
              </div>

              {/* Image */}
              <div
                className={`flex-1 flex w-full ${
                  benefit.reverse ? "justify-start" : "justify-end"
                }`}
              >
                <div className="rounded-[16px] overflow-hidden w-full sm:w-[350px] md:w-[450px] h-[350px] sm:h-[400px] md:h-[450px]">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsPage;
