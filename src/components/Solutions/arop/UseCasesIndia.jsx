import { TreePine, CloudRain, Plane } from "lucide-react";

const useCases = [
  {
    id: 1,
 
    subtitle: "Indira Gandhi International Airport, Delhi",
    description:
      "At Delhi’s busy international hub, manual runway inspections once took nearly two hours and required partial closures. With Anvi Runway Ops (AROP), the process now takes under 15 minutes without disrupting operations. Its AI-driven visual analytics and LiDAR scanning detect surface cracks early, preventing costly repairs and ensuring seamless airport efficiency.",
    Buttondes:"Speed and Efficiency Redefined",
      icon: Plane,
  },
  {
    id: 2,
  
    subtitle: "Chatrapati Shivaji Maharaj International Airport, Mumbai",
    description:
      "Mumbai’s coastal location faces severe monsoon challenges with heavy rain and low visibility. AROP’s IP67-rated EV platforms and thermal sensors operate reliably in harsh weather, detecting FOD, standing water, and lighting faults. This prevents hydroplaning, minimizes flight disruptions, and saves millions annually in weather-related delays and maintenance costs.",
        Buttondes:"All-Weather Performance",
      icon: CloudRain,
  },
  {
    id: 3,
 
    subtitle: "Dr. Babasaheb Ambedkar International Airport, Nagpur",
    description:
      "Surrounded by open fields, Nagpur Airport often faced bird and animal intrusions causing safety hazards and delays. AROP’s AI-powered surveillance units continuously track movement patterns, identify high-risk species, and trigger deterrent alerts. This intelligent monitoring has significantly reduced wildlife strikes, improving both operational reliability and overall airport safety.",
        Buttondes:"Wildlife Intrusion Prevention",
      icon: TreePine,
  },
];

const UseCasesIndia = () => {
   

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 md:min-w-[300px]  ">
      {useCases.map(({ id,  subtitle, description,Buttondes, icon: Icon }) => (
        <div
          key={id}
          className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full max-w-full "
        >
          <div className="flex  flex-col justify-start text-left gap-3 mb-3 min-w-[300px] ">
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-md  `}
            >
              <Icon size={36}  strokeWidth={2.5} />
            </div>
            <div className="sm:text-[12px] md:text-sm lg:text-[18px]">
            
              <p className="text-black  font-wix  ">
                {subtitle}
              </p>
            </div>
          </div>
          <p className="text-[#6B7280] text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed  font-dm-sans    text-justify ">
            {description}
          </p>
 <div className="bg-black 
w-[180px] h-[34px] 
sm:w-[200px] sm:h-[38px] 
md:w-[220px] md:h-[42px] 
 
mt-4 flex items-center justify-center">

  <p className="text-white font-dm-sans 
  text-[12px] 
  sm:text-[13px] 
  md:text-[14px]">
    {Buttondes}
  </p>

</div>


       
        </div>
      ))}
    </div>
  );
};

export default UseCasesIndia;
