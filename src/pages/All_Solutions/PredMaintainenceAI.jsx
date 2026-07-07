import Footer from "../../components/footer";
import HeroSection from "../../components/HeroSection";
import { mainPagesLinksObj } from "../../data/PagesLinkList";
// import { ArrowRight } from 'lucide-react';
import { SunDim, Database, Cpu, AlertTriangle, PenLine, ArrowRight, ArrowDown } from 'lucide-react';
import React from 'react';


const PredMaintainenceAI = () => {
 const footerUpBoxInfoObj = {
  head: `Ready to Transform Your Operations with anvi `,
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs
};

const costStats = [
    {
      value: "$50B+",
      unit: "lost annually",
      description: "Unplanned downtime cost across global manufacturing every year — most of it preventable with condition-based intervention."
    },
    {
      value: "23 hrs",
      unit: "per incident",
      description: "Average unplanned stoppage on a critical rotating asset in process industries — including diagnosis, spares and restart."
    },
    {
      value: "82%",
      unit: "of failures",
      description: "...are random and not age-related, so time-based PM schedules over-service healthy assets and miss the failing ones."
    },
    {
      value: "30%",
      unit: "PM waste",
      description: "Roughly a third of scheduled preventive maintenance work adds no value — or actively introduces new failure modes."
    }
  ];

  const models = [
    {
      eyebrow: "REACTIVE",
      title: "Run-to-failure",
      features: [
        "Fix on breakdown",
        "Highest downtime cost",
        "Unpredictable spares demand",
        "Safety & compliance risk"
      ],
      statValue: "Baseline",
      statLabel: "cost of downtime",
      isRecommended: false
    },
    {
      eyebrow: "PREVENTIVE",
      title: "Time-based schedule",
      features: [
        "Fixed OEM intervals",
        "Over-services healthy assets",
        "Can induce new failures",
        "Poor fit for random faults"
      ],
      statValue: "-15%",
      statLabel: "vs reactive baseline",
      isRecommended: false
    },
    {
      eyebrow: "PREDICTIVE",
      title: "AI condition-based",
      features: [
        "Intervene on true asset condition",
        "Early warning weeks in advance",
        "Right-sized spares & labour",
        "Higher availability & OEE"
      ],
      statValue: "-45%",
      statLabel: "downtime vs reactive",
      isRecommended: true
    }
  ];
  const steps = [
    {
      number: "01",
      title: "Identify critical assets",
      description: "Criticality matrix by production impact, safety, cost of failure and MTBF."
    },
    {
      number: "02",
      title: "Instrument with sensors",
      description: "Right-fit sensor selection, mounting standards and edge connectivity."
    },
    {
      number: "03",
      title: "Data & CMMS audit",
      description: "Assess data quality, historian integration, work-order taxonomy and failure codes."
    },
    {
      number: "04",
      title: "Train & tune AI models",
      description: "Domain-specific ML for each asset class, refined with plant-labelled events."
    },
    {
      number: "05",
      title: "CMMS integration",
      description: "Close the loop — auto-created work orders, feedback captured to improve models."
    }
  ];


  const workflowSteps = [
    {
      number: "01",
      title: "Sensors",
      description: "Wired & wireless IoT sensors on critical rotating and static assets.",
      icon: <SunDim className="w-6 h-6 text-[#100000]" strokeWidth={1.5} />
    },
    {
      number: "02",
      title: "Data Collection",
      description: "Edge gateways stream time-series data securely to the platform.",
      icon: <Database className="w-6 h-6 text-[#100000]" strokeWidth={1.5} />
    },
    {
      number: "03",
      title: "AI Analytics",
      description: "ML models detect anomalies, classify faults, estimate RUL.",
      icon: <Cpu className="w-6 h-6 text-[#100000]" strokeWidth={1.5} />
    },
    {
      number: "04",
      title: "Alerts",
      description: "Prioritised, plant-contextualised alerts to reliability engineers.",
      icon: <AlertTriangle className="w-6 h-6 text-[#100000]" strokeWidth={1.5} />
    },
    {
      number: "05",
      title: "Maintenance Action",
      description: "Work orders auto-created in CMMS with recommended actions.",
      icon: <PenLine className="w-6 h-6 text-[#100000]" strokeWidth={1.5} />
    }
  ];

  const results = [
    {
      eyebrow: "REDUCED DOWNTIME",
      value: "35–50%",
      description: "Fewer unplanned stoppages on instrumented critical assets."
    },
    {
      eyebrow: "LOWER MAINTENANCE COST",
      value: "20–30%",
      description: "Right-sized interventions, fewer emergency spares and overtime."
    },
    {
      eyebrow: "HIGHER ASSET RELIABILITY",
      value: "+15 pts",
      description: "Sustained lift in OEE availability on programme-covered lines."
    },
    {
      eyebrow: "LONGER EQUIPMENT LIFE",
      value: "2–3×",
      description: "Extended service life through condition-based intervention."
    }
  ];

 
  const stats = [
    { value: "120+", label: "Assets under monitoring" },
    { value: "14", label: "Industry verticals" },
    { value: "9,200+", label: "Alerts triaged in-year" },
    { value: "4.9/5", label: "Client CSAT" }
  ];
    return (
        <> 
        <HeroSection
        backgroundImage="/images/solutions/PredMaintainenceAI/predictive.png"
        title="Predictive Maintenance with AI"
        description="Replace reactive maintenance with AI-powered asset health monitoring that predicts failures before downtime. "
        buttonText="Download White Paper"
        descriptionWidth="450px"
    />

<section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Heading and Description */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-[1.15] mb-6">
              The cost of getting<br />maintenance<br />wrong.
            </h2>
            <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px]">
              Reactive teams pay in unplanned downtime. Preventive teams pay in
              over-maintenance and induced failures. The gap between them is
              where a modern predictive programme lives and where the largest
              EBITDA lift in your plant is hiding.
            </p>
          </div>

          {/* Right Column: 2x2 Stats Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {costStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Stat Value & Unit */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[32px] md:text-[36px] lg:text-[40px] font-wix font-bold text-[#100000] leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[12px] md:text-[13px] text-gray-500 font-medium">
                      {stat.unit}
                    </span>
                  </div>
                  
                  {/* Subtle Red Divider Line */}
                  <div className="w-10 h-[2px] bg-[#CD0054] mb-5"></div>
                  
                  {/* Stat Description */}
                  <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#545454] font-medium leading-[22px] md:leading-[24px]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>


    <section className="w-full bg-[#F8F9FB] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-12 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-tight mb-6">
            Reactive vs Preventive vs<br className="hidden sm:block" /> Predictive.
          </h2>
          <p className="text-sm md:text-base lg:text-[18px] text-[#545454] font-medium leading-relaxed md:leading-[27px]">
            Three fundamentally different economic models. Most plants still operate as a mix of the first two — and pay for it every quarter.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col bg-white rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                model.isRecommended 
                  ? 'border-2 border-[#CD0054] shadow-lg md:scale-[1.02] z-10' 
                  : 'border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              
              {/* Recommended Badge */}
              {model.isRecommended && (
                <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-[#CD0054] text-white text-[10px] md:text-[11px] font-bold tracking-wider px-4 py-1.5 rounded-full uppercase">
                  RECOMMENDED
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6">
                <span className="text-[11px] md:text-[12px] font-semibold text-gray-400 tracking-widest uppercase mb-2 block">
                  {model.eyebrow}
                </span>
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#100000]">
                  {model.title}
                </h3>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Features List */}
              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {model.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CD0054] mt-2 flex-shrink-0"></div>
                    <span className="text-[14px] md:text-[15px] text-[#545454] font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="border-gray-100 mb-6" />

              {/* Card Footer / Stats */}
              <div className="flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-[28px] md:text-[32px] font-bold font-wix text-[#100000] leading-none mb-1">
                    {model.statValue}
                  </span>
                  <span className="text-[12px] text-gray-500 font-medium">
                    {model.statLabel}
                  </span>
                </div>
                
                {/* Optional Arrow for Recommended Card */}
                {model.isRecommended && (
                  <ArrowRight className="w-5 h-5 text-[#100000] mb-1" />
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

  <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Text and Image */}
        {/* REMOVED 'sticky top-24' from the className below */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-[1.15] mb-6 max-w-[500px]">
            A five-step<br />framework from<br />pilot to plant-wide.
          </h2>
          
          <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-10 max-w-[550px]">
            Predictive maintenance fails when it is treated as a sensor procurement
            project. It succeeds when it is run as a reliability transformation, with the
            CMMS and the maintenance planner at the centre.
          </p>

          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img 
              src="/images/solutions/PredMaintainenceAI/predictive1.png" // Update with your actual image path
              alt="Close-up of a modern industrial sensor mounted on a pipe" 
              className="w-full aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10] object-cover"
            />
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="w-full lg:w-1/2 relative">
          
          {/* Vertical Connecting Line */}
          {/* Positioned exactly behind the center of the circular nodes */}
          <div className="absolute left-[23px] md:left-[27px] top-6 bottom-6 w-[2px] bg-gray-100 z-0"></div>

          <div className="flex flex-col gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 md:gap-8">
                
                {/* Timeline Node (Circle) */}
                <div className="w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0 mt-2">
                  <span className="text-[13px] md:text-[15px] font-bold text-[#CD0054]">
                    {step.number}
                  </span>
                </div>
                
                {/* Step Card */}
                <div className="flex-grow bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#100000] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#545454] font-medium leading-[22px] md:leading-[24px]">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>

    <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-12 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-tight mb-12 lg:mb-16 max-w-[600px]">
          How predictive maintenance actually works.
        </h2>

        {/* Workflow Container */}
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between w-full">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={index}>
              
              {/* Step Card */}
              <div className="flex-1 w-full xl:w-auto flex flex-col bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[220px]">
                
                {/* Top Row: Number & Icon */}
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[#CD0054] text-[12px] md:text-[13px] font-bold tracking-widest">
                    {step.number}
                  </span>
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="flex flex-col mt-auto">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#100000] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#545454] font-medium leading-[22px] md:leading-[24px]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Arrows */}
              {index < workflowSteps.length - 1 && (
                <div className="flex items-center justify-center py-6 xl:py-0 px-2 xl:px-4 flex-shrink-0">
                  {/* Desktop Right Arrow */}
                  <ArrowRight className="hidden xl:block w-5 h-5 text-[#CD0054]" strokeWidth={2} />
                  {/* Mobile/Tablet Down Arrow */}
                  <ArrowDown className="block xl:hidden w-5 h-5 text-[#CD0054]" strokeWidth={2} />
                </div>
              )}

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>



    <section className="w-full bg-[#F8F9FB] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-12 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Heading */}
        <div className="flex justify-center text-center mb-12 md:mb-16">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-tight max-w-[800px]">
            Measurable results, not dashboards for their own sake.
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {results.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Eyebrow Label */}
              <span className="text-[11px] md:text-[12px] font-semibold text-gray-500 tracking-wider uppercase mb-5">
                {item.eyebrow}
              </span>
              
              {/* Large Statistic */}
              <span className="text-[40px] md:text-[48px] lg:text-[56px] font-bold font-wix text-[#CD0054] leading-none mb-5">
                {item.value}
              </span>
              
              {/* Subtle Red Divider Line */}
              <div className="w-12 h-[2px] bg-[#CD0054]/60 mb-5"></div>
              
              {/* Description */}
              <p className="text-[14px] md:text-[15px] text-[#545454] font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>


    <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-12 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
        
        {/* Left Column: Text and Stats */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          {/* Eyebrow */}
          <span className="text-[#CD0054] text-[11px] md:text-[12px] font-semibold tracking-[0.15em] uppercase mb-5">
            WHY ANVI
          </span>
          
          {/* Heading */}
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-[1.15] mb-6">
            Reliability engineering,<br />
            powered by AI — delivered by people<br />
            who've run plants.
          </h2>
          
          {/* Paragraph */}
          <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-10 max-w-[550px]">
            Anvi Engineering & Advisory combines industrial reliability consulting 
            with modern AI delivery. We work as an extension of your 
            maintenance and operations teams.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-[32px] sm:text-[36px] md:text-[40px] font-bold font-wix text-[#100000] leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-[12px] md:text-[13px] text-gray-500 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="/images/solutions/PredMaintainenceAI/predictive2.png" // Update with your actual image path
              alt="Silhouette of an engineer looking at glowing data dashboards" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>


<Footer footerUpBoxInfo={footerUpBoxInfoObj}/>
        </>
      
    )
};

export default PredMaintainenceAI;