 
import { Activity, RefreshCw, AlertTriangle, Percent } from "lucide-react";
import { Scan, Zap, FileText, ShieldCheck, Cpu } from 'lucide-react';
import { Settings, Brain, Shield, Globe, TrendingUp, Star } from 'lucide-react';
import { TrendingDown, DollarSign, Scale, Gauge } from 'lucide-react';
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/footer";
import { mainPagesLinksObj } from "../../data/PagesLinkList";

const footerUpBoxInfoObj = {
  head: `Ready to Transform Your Operations with anvi `,
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs
};

const AiDefect = () => {

  const inspectionFeaturesList = [
    {
      head: "From sampling to 100%",
      para: "Traditional QC inspects a fraction of output. AI inspects every single unit, eliminating the statistical blind spots of sampling.",
    },
    {
      head: "Automated defect detection",
      para: "Computer vision models flag scratches, cracks, contamination and assembly errors in milliseconds consistently, around the clock.",
    },
    {
      head: "Compliance by design",
      para: "Every decision is logged with imagery and timestamps, creating a defensible audit trail for regulated production.",
    },
  ];

  const challengesList = [
    {
      icon: <Activity size={24} className="text-white" />,
      title: "Human fatigue",
      text: "Manual inspectors lose focus over long shifts, causing accuracy to drift and defects to slip through late in the day.",
    },
    {
      icon: <RefreshCw size={24} className="text-white" />,
      title: "Inconsistent inspection",
      text: "Different inspectors apply different thresholds, making quality decisions subjective and impossible to standardize.",
    },
    {
      icon: <Percent size={24} className="text-white" />,
      title: "Sampling risk",
      text: "Inspecting only a sample leaves the majority of production unchecked a statistical gamble on quality.",
    },
    {
      icon: <AlertTriangle size={24} className="text-white" />,
      title: "Defect escapes",
      text: "Missed defects reach customers, triggering returns, recalls, warranty costs and lasting brand damage.",
    },
  ];


  const features = [
    {
      icon: <Scan className="w-5 h-5 text-[#CD0054]" />,
      title: "100% Inspection Coverage",
      description: "Inspect every unit produced no sampling, no blind spots, no statistical gambles."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#CD0054]" />,
      title: "Real-Time Detection",
      description: "Sub-50ms inference flags defects instantly, enabling in-line rejection before defects move downstream."
    },
    {
      icon: <FileText className="w-5 h-5 text-[#CD0054]" />,
      title: "Automated Audit Records",
      description: "Image, decision and timestamp captured for every part, generating tamper-evident audit logs."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#CD0054]" />,
      title: "Compliance Ready",
      description: "Traceability and reporting aligned with ISO, FDA and customer quality requirements."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#CD0054]" />,
      title: "Custom AI Models",
      description: "Models trained on your parts and defect classes, retrained continuously as production evolves."
    }
  ];


  const cards = [
    {
      title: "Industrial-First Engineering",
      description: "Built by engineers who've worked on factory floors. We understand uptime, vibration, lighting variation, and what real defects look like.",
      icon: <Settings className="w-6 h-6 text-[#CD0054]" />,
      imageUrl: "/images/solutions/AI_Defect/ai4.1.png"
    },
    {
      title: "Proprietary Defect Dataset",
      description: "10M+ labeled industrial defect images across 40+ categories the foundation of a model that works out of the box.",
      icon: <Brain className="w-6 h-6 text-[#CD0054]" />,
      imageUrl: "/images/solutions/AI_Defect/ai4.2.png"
    },
    {
      title: "Advisory Depth",
      description: "Not just software. Our quality engineering team co-designs your inspection strategy from Gage R&R to FMEA alignment.",
      icon: <Shield className="w-6 h-6 text-[#CD0054]" />,
      imageUrl: "/images/solutions/AI_Defect/ai4.3.png"
    },
    {
      title: "Flexible Deployment",
      description: "On-premise, edge, private cloud, or hybrid. We match the architecture to your data sovereignty and latency requirements.",
      icon: <Globe className="w-6 h-6 text-[#CD0054]" />,
      imageUrl: "/images/solutions/AI_Defect/ai4.4.png"
    },
    {
      title: "Continuous Improvement",
      description: "Active learning loops mean your models improve every shift without stopping the line or requiring data science resources.",
      icon: <TrendingUp className="w-6 h-6 text-[#CD0054]" />,
      imageUrl: "/images/solutions/AI_Defect/ai4.5.png"
    },
    {
      title: "Proven ROI in 90 Days",
      description: "Average customers see measurable ROI within 90 days. We back every deployment with an escape rate SLA.",
      icon: <Star className="w-6 h-6 text-[#CD0054]" />,
      imageUrl: "/images/solutions/AI_Defect/ai4.6.png"
    }
  ];

  const benefits = [
    {
      title: "Lower Defect Escapes",
      description: "100% inspection drives escape rates toward zero, protecting customers and brand reputation.",
      icon: <TrendingDown className="w-5 h-5 text-[#CD0054]" />
    },
    {
      title: "Reduced Costs",
      description: "Fewer recalls, returns and warranty claims, with inspection labor redeployed to higher-value work.",
      icon: <DollarSign className="w-5 h-5 text-[#CD0054]" />
    },
    {
      title: "Compliance Support",
      description: "Complete, exportable audit trails simplify certification and regulatory reporting.",
      icon: <Scale className="w-5 h-5 text-[#CD0054]" />
    },
    {
      title: "Production Efficiency",
      description: "In-line, real-time decisions keep lines moving at full speed with fewer stoppages.",
      icon: <Gauge className="w-5 h-5 text-[#CD0054]" />
    }
  ];
  return (
    <>
      <HeroSection
        backgroundImage="/images/solutions/AI_Defect/ai.png"
        title="AI Defect Inspection"
        description="AI-powered visual inspection for 100% quality control, defect
detection and compliance."
        buttonText="Download White Paper"
        descriptionWidth="450px"
      />


      <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-dm-sans">
        <div className="max-w-[1600px] mx-auto">
          {/* Main Heading */}
          <h2 className=" font-bold font-raleway text-[34px] md:text-[38px] lg:text-[46px] text-[#100000]  leading-[57px] max-w-[850px] md:leading-[1.2] mb-12 md:mb-16 lg:mb-[80px]">
            AI replaces sampling-based inspection with
automated, real-time defect detection.
          </h2>

          {/* Features Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-[40px] items-start">
            {inspectionFeaturesList.map((feature, index) => (
              <li
                key={"ai_feature_" + index}
                className="flex flex-col border-l-[2px] border-[#CD0054] pl-5 md:pl-6 lg:pl-8"
              >
                <h3 className="font-semibold text-xl md:text-[22px] lg:text-[26px]   text-[#CD0054] mb-3 md:mb-4">
                  {feature.head}
                </h3>
                <p className="font-medium font-raleway text-sm md:text-base lg:text-[18px] text-[#282828] leading-relaxed md:leading-[27px] lg:leading-[29.25px]">
                  {feature.para}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-dm-sans">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Heading */}
          <h2 className="font-bold font-raleway  text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]   text-[#100000] mb-8 md:mb-12 lg:mb-[60px]">
            What is AI Inspection?
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[60px] items-center">
            {/* Left Column - Image */}
            <div className="w-full relative rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/solutions/AI_Defect/ai2.png"   
                alt="AI Visual Inspection System on assembly"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Column - Text & Stats */}
            <div className="flex flex-col h-full justify-center">
              <p className="font-raleway text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-6">
                AI-powered visual inspection combines high-resolution industrial
                cameras with deep-learning vision models to examine products on the
                line in real time. The system learns the visual signature of good
                and defective parts, then autonomously classifies every unit.
              </p>
              <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium font-raleway leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-8 lg:mb-10">
                Unlike rule-based machine vision, AI models adapt to subtle and
                previously unseen defects, handling variation in lighting, texture
                and product geometry. The result is inspection that scales with
                production volume without scaling headcount — delivering objective,
                repeatable quality decisions on 100% of output.
              </p>

              {/* Stats Row */}
              <div className="flex flex-row gap-12 sm:gap-16 md:gap-24 mt-2">
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold text-[#CD0054] font-wix leading-tight mb-1">
                    100%
                  </span>
                  <span className="text-sm md:text-base text-[#545454] font-medium font-raleway">
                    Inspection coverage
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold text-[#CD0054] font-wix leading-tight mb-1">
                    &lt;50ms
                  </span>
                  <span className="text-sm md:text-base text-[#545454] font-medium font-raleway">
                    Per-unit decision time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="w-full bg-[#F5F4F8] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="mb-10 md:mb-14 lg:mb-[60px] max-w-[800px]">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold font-raleway text-[#100000] mb-4">
              Challenges We Address
            </h2>
            <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium font-raleway leading-relaxed md:leading-[27px]">
              Conventional quality control struggles to keep pace with modern
              production speed, complexity and compliance expectations.
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {challengesList.map((challenge, index) => (
              <div
                key={"challenge_" + index}
                className="bg-white border border-[#EBEBEB] rounded-xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Container with Brand Gradient */}
                <div
                  className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center mb-6"
                  style={{
                    background:
                      "linear-gradient(94.05deg, #FE7F2C -20.85%, #FF4A3A 25.68%, #FA293E 85.26%, #CD0054 133.77%)",
                  }}
                >
                  {challenge.icon}
                </div>

                {/* Text Content */}
                <h3 className="font-semibold font-raleway text-[18px] md:text-[20px]  text-[#333333] mb-3">
                  {challenge.title}
                </h3>
                <p className=" font-medium font-raleway text-sm md:text-[15px] lg:text-[16px] text-[#2F2F34] leading-[24px] md:leading-[26px]">
                  {challenge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section>
        <div className="max-w-6xl mx-auto p-8 font-raleway ">
          <div className="flex flex-col md:flex-row gap-16 items-center">

            {/* Left Image Column */}
            <div className="w-full md:w-1/2">
              <img
                src="/images/solutions/AI_Defect/ai3.png"  
                alt="Automated robotic arm on a production line"
                className="w-full h-auto rounded-xl object-cover shadow-sm"
              />
            </div>

            {/* Right Content Column */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[34px] font-bold font-raleway  text-[#333333] mb-3">
                Key Features
              </h2>
              <p className="text-[#000000] mb-10 max-w-md text-sm leading-relaxed font-medium font-raleway">
                Everything required to run autonomous, defensible quality inspection at production scale.
              </p>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1  p-1.5 rounded-md">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold font-raleway text-[#000000] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#000000] font-raleway font-medium leading-relaxed max-w-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Section 1: The Inspection Partner */}
      <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
        {/* Heading container aligns with upper sections (max-w-[1600px]) */}
        <div className="max-w-[1600px] mx-auto mb-12 lg:mb-[60px]">
          <h2 className="font-bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-[#100000] leading-tight">
            The Inspection Partner<br />Built for Production Reality
          </h2>
        </div>

        {/* Content container stays exactly as it was (max-w-7xl) */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Card Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Value & Benefits */}
      <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
        {/* Heading container aligns with upper sections (max-w-[1600px]) */}
        <div className="max-w-[1600px] mx-auto mb-10">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] mb-2 leading-tight">
            Value & Benefits
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-[18px] font-medium font-raleway leading-relaxed">
            Measurable outcomes across quality, cost, compliance and throughput.
          </p>
        </div>

        {/* Content container stays exactly as it was (max-w-7xl) */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-raleway text-[#333333] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#000000] font-raleway font-medium leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />

    </>
  )
};

export default AiDefect;
