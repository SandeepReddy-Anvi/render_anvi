 
import React, { useState } from "react";
 

const BenefitsPage = () => {
  const [activeTabs ,setactiveTabs] = useState(0);

  const benefits = [
    {
      id: 1,
      title: "Enhanced Safety",
      description: `Airports face unseen dangers every day — from a loose bolt on the runway to sudden bird 
      intrusions that can endanger lives and cause costly damage. AROP acts as a 24/7 intelligent guardian, constantly monitoring every inch of the runway and its perimeter. Its advanced sensors and AI models detect and remove hazards instantly, minimizing the possibility of accidents before they happen. This continuous vigilance ensures
       safer flights, protects multi-crore aircraft assets, and builds greater passenger trust in the airport’s operational integrity.`,
      image: "/images/solutions/arop/arop4.1.webp",
      reverse: false,
    },
    {
      id: 2,
      title: "Seamless Efficiency",
      description: `Manual runway checks often result in flight delays,
       partial closures, and limited visibility inspections, especially during peak operations. These time-bound processes slow airport efficiency and increase downtime. With Anvi Runway Ops (AROP), airports shift to continuous, automated monitoring powered by AI and sensors that scan runways in real time without interruptions. Inspections that once took hours are now completed in minutes, ensuring greater runway 
      availability, faster aircraft turnarounds, and smoother passenger experiences while maintaining consistent safety and reliability.`,
      image: "/images/solutions/arop/arop4.2.webp",
      reverse: true,
    },
    {
      id: 3,
      title: "Substantial Cost Savings",
      description: `Every FOD incident, wildlife strike, or emergency runway repair costs airports and 
      airlines crores of rupees. A single engine damage alone can exceed ₹10 crore. Anvi Runway Ops (AROP) minimizes these risks through continuous monitoring and early detection, preventing costly accidents and delays. Its predictive maintenance system extends runway life, reduces unplanned repairs, and lowers operational expenses. The result is immediate financial 
      savings from avoided incidents and long-term value through improved asset durability and optimized maintenance cycles.`,
      image: "/images/solutions/arop/arop4.3.webp",
    
    },
    {
      id: 4,
      title: "Streamlined Compliance",
      description: `Airports must adhere to strict global safety standards such as ICAO Annex 14, 
      FAA Part 139, and DGCA requirements. Anvi Runway Ops (AROP) simplifies this process through automated recording of all inspections, detections, and corrective actions. Each event is stored in a structured digital log that can be instantly accessed for audits, safety reviews, and regulatory submissions. This automation eliminates paperwork, minimizes human error, and significantly reduces the
       risk of non-compliance while ensuring complete transparency and accountability in airport operations.`,
      image: "/images/solutions/arop/arop4.4.webp",
 
    },
    {
      id: 5,
      title: "Eco-Friendly Efficiency",
      description: `Airports worldwide are increasingly focused on reducing their carbon footprint and operating more sustainably. 
      Anvi Runway Ops (AROP) contributes to this mission by using electric-powered platforms in place of conventional fuel-based vehicles. Its predictive maintenance approach prevents emergency repairs and limits heavy equipment usage, cutting unnecessary emissions. Over time, AROP helps create cleaner, greener, and more energy-efficient
       airport operations, aligning perfectly with global sustainability goals and next-generation environmental standards.`,
      image: "/images/solutions/arop/arop4.5.webp",
  
    },
    {
      id: 6,
      title: "Universal Adaptability",
      description: `Whether it’s a large international hub like Delhi or a smaller regional airport, Anvi Runway Ops (AROP) is designed to be fully modular and scalable. The system can be customized to match specific airport conditions — handling heavy traffic in metros, monsoon challenges in coastal regions, or wildlife activity in regional zones. This adaptability ensures that AROP delivers 
      consistent safety, efficiency, and reliability, making it an essential solution across the entire aviation ecosystem.`,
      image: "/images/solutions/arop/arop4.6.webp",
     
    },
    {
      id: 7,
      title: "Future-Ready Technology",
      description: `With AI, machine learning, and robotics at its foundation, Anvi Runway Ops
       (AROP) represents the next era of intelligent airport management. Its advanced predictive analytics enable airports to anticipate and plan maintenance well in advance, preventing costly disruptions. Designed with an integration-first architecture, AROP unifies all safety operations—FOD detection, inspection, and surveillance—into a single smart system. This makes AROP not only a
      cutting-edge solution for today’s challenges but also a strategic, future-ready investment for the evolving aviation industry.`,
      image: "/images/solutions/arop/arop4.7.webp",
  
    },
  ];

  return (

    <section className="">
            
    {/* MOBILE VERSION — ONLY shown below sm */}
<div className="block sm:hidden w-full">
  {benefits.map((Ben, i) => (
    <div
      key={i}
      onClick={() => setactiveTabs(i)}
      className="bg-[#F5F5F5] rounded-xl p-4 mb-3 cursor-pointer"
    >
      {/* Title */}
      <h3 className="text-lg font-semibold">{Ben.title}</h3>

      {/* Content when active */}
      {activeTabs === i && (
        <div className="mt-3">
          <p className="text-[15px] text-gray-700 leading-6">
            {Ben.description}
          </p>

          <img
            src={Ben.image}
            alt={Ben.title}
            className="rounded-xl w-full h-auto mt-4"
          />
        </div>
      )}
    </div>
  ))}
</div>

    <div className="hidden sm:flex flex-col md:grid-cols-1  md:flex-row bg-white p-8 rounded-2xl shadow gap-6 w-full ">
      
     
     
      {/* LEFT BUTTONS */}
      <div className="flex flex-col gap-3 w-full md:w-1/4 lg:w-auto  lg:items-center lg:justify-center  ">
        {benefits.map((Ben, index) => (
          <button
            key={index}
            onClick={() => setactiveTabs(index)}
            className={`w-full text-left px-6 py-4 rounded-2xl transition-all 
              ${
                activeTabs === index
                  ? "bg-black text-white font-semibold shadow-lg"
                  : "bg-[#F5F5F5] text-black"
              }
            `}
          >
            {Ben.title}
          </button>
        ))}
      </div>

         {/* RIGHT CONTENT */}
      <div className="flex-1 bg-[#F9F9F9] p-8 rounded-2xl flex flex-col-1 gap-4 w-full  items-center justify-center content-center  flex-col sm:flex-row md:flex-row lg:w-full">
<div className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/2 ">
   <h2 className="text-2xl font-semibold ">
          {benefits[activeTabs].title}
        </h2>

        <p className="text-[14px] text-gray-700 leading-7 font-dm-sans h-auto mt-2">
          {benefits[activeTabs].description}
        </p>


</div>
       <div className="w-full sm:w-1/2  md:w-1/2   lg:w-1/2 "  >
          <img
          src={benefits[activeTabs].image}
          className="rounded-2xl  h-auto   justify-center items-center  "
          alt={benefits[activeTabs].image}
        />

       </div>
      
      </div>
 
    </div>
          
    </section>
  );
};

export default BenefitsPage;
