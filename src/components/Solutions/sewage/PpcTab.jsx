import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const tabs = [
  {
    id: "predictive",
    title: "Predictive",
    label: "Predicts",
    howItWorks: [
      "AI-powered analytics and IoT sensors continuously monitor sanitation infrastructure.",
      "They collect data on water flow, gas levels, pressure, and usage patterns.",
      "Historical data is compared with real-time information to forecast risks.",
    ],
    whatItPrevents: [
      "Sewer blockages, cracks in pipelines, sudden leaks, and dangerous gas accumulation.",
      "Helps authorities act before a small issue turns into a costly disaster.",
    ],
    example: [
      "A sewer line shows unusual water pressure. The system immediately predicts a blockage risk and alerts maintenance teams to fix it before the line bursts.",
    ],
  },
  {
    id: "preventive",
    title: "Preventive",
    label: "Prevents",
    howItWorks: [
      "Robotic systems and smart cleaning machines conduct scheduled inspections and maintenance.",
      "IoT-enabled devices detect cracks, sediment build-up, or chemical imbalances.",
      "Regular servicing prevents minor faults from growing into big failures.",
    ],
    whatItPrevents: [
      "Overflows, toxic exposure, infrastructure collapse.",
      "Workers entering unsafe conditions unnecessarily.",
    ],
    example: [
      "A robot inspects pipelines weekly and finds tiny cracks. It either repairs them directly or reports the issue. This avoids a major leakage that could have caused flooding.",
    ],
  },
  {
    id: "cure",
    title: "Cure",
    label: "Cures",
    howItWorks: [
      "When a failure occurs, trained emergency teams step in with proper safety gear and mechanized tools.",
      "Rapid protocols ensure that damage is controlled and services are restored quickly.",
      "Workers are protected through safety suits, breathing masks, and robots that can enter confined spaces.",
    ],
    whatItPrevents: [
      "Septic tank bursts, sewer collapses, chemical or gas leaks, and sudden equipment breakdowns.",
    ],
    example: [
      "A septic tank bursts in a residential area. The Cure team arrives immediately, seals the leak, neutralizes toxic gases, and restores sanitation services without risking lives.",
    ],
  },
];

const PpcTab = () => {
  const [activeTab, setActiveTab] = useState("predictive");
  const rightRef = useRef(null);
  const [rightHeight, setRightHeight] = useState(0);

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    if (rightRef.current) {
      setRightHeight(rightRef.current.clientHeight);
    }
  }, [activeTab]);

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 px-4 md:px-6 lg:px-0 font-['Wix Madefor Display']">
      {/* Tabs */}
      <div
        className={`flex flex-row md:flex-col w-full md:w-52 lg:w-56 rounded-[12px] md:rounded-l-[17px] overflow-hidden shadow-md`}
        style={{
          height:
            rightHeight && window.innerWidth >= 768
              ? ` ${rightHeight} 100px`
              : "auto",
          boxShadow: "0px 2.84px 22.22px 0px #0000001F",
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center md:justify-start px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-5
              text-sm sm:text-base md:text-lg lg:text-[21px] font-medium text-left transition-all duration-200
              ${
                activeTab === tab.id
                  ? "bg-[#FA293E] text-white"
                  : "bg-white text-[#000000] hover:bg-gray-100"
              }
              ${index !== tabs.length - 1 ? "border-b-[1px] border-[#00000033] " : "md:border-b-0"}
            `}
          >
            <span
              className={`mr-2 md:mr-3 text-lg sm:text-xl md:text-2xl font-bold ${activeTab === tab.id ? "#fff" : "#000"}`}
            >
              <ArrowRight size={24} />
            </span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div ref={rightRef} className="flex-1 p-4 md:p-6 text-[#000000]">
        <h3 className="text-base md:text-[19px] font-medium mb-3">
          How it works:
        </h3>
        <ul className="list-disc ml-5 mb-6 text-sm md:text-[15px] space-y-1.5 marker:text-[8px] transition-all duration-300">
          {currentTab.howItWorks.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        <h3 className="text-base md:text-[19px] font-medium mb-3">
          What it {currentTab.label}:
        </h3>
        <ul className="list-disc ml-5 mb-6 text-sm md:text-[15px] space-y-1.5 marker:text-[8px]">
          {currentTab.whatItPrevents.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        <h3 className="text-base md:text-[19px] font-medium mb-3">Example:</h3>
        <ul className="list-disc ml-5 text-sm md:text-[15px] space-y-1.5 marker:text-[8px]">
          {currentTab.example.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PpcTab;
