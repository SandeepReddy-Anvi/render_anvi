import Footer from "../../components/footer";
import HeroSection from "../../components/HeroSection";
import { mainPagesLinksObj } from "../../data/PagesLinkList";
import { TrendingDown, ClipboardCheck, LineChart, Calculator, Scale, BarChart2, Clock, XCircle, CheckCircle2    } from 'lucide-react';

const footerUpBoxInfoObj = {
  head: `Ready to Transform Your Operations with anvi `,
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs
};
const AutoInvestment = () => {
    const failureReasons = [
    {
      title: "Optimistic Vendor Projections",
      description: "Vendors are incentivised to present best-case scenarios. Cycle time improvements, throughput gains, and defect reductions are routinely overstated by 40–60% in pre-sale modelling."
    },
    {
      title: "Incomplete Cost Modelling",
      description: "Integration, change management, downtime during transition, retraining, and ongoing maintenance are systematically excluded from vendor ROI worksheets."
    },
    {
      title: "Baseline Data Deficiencies",
      description: "Decisions made without accurate current-state data produce fundamentally flawed comparisons. Garbage in, garbage out — even sophisticated models cannot compensate for poor baselines."
    },
    {
      title: "Single-Scenario Planning",
      description: "Most analyses present a single point estimate rather than a range. Sensitivity to volume assumptions, product mix changes, or labour cost shifts is rarely examined."
    },
    {
      title: "Technology Lock-in Risk",
      description: "Proprietary automation platforms create long-term dependencies that erode negotiating leverage and inflate total cost of ownership over the asset lifecycle."
    }
  ];

  const frameworkStages = [
    {
      number: "01",
      icon: <ClipboardCheck className="w-5 h-5 text-[#CD0054]" />,
      title: "Baseline Assessment",
      description: "Quantify current state throughput, cost and downtime."
    },
    {
      number: "02",
      icon: <LineChart className="w-5 h-5 text-[#CD0054]" />,
      title: "Benefit Projection",
      description: "Model realistic, risk-weighted improvement deltas."
    },
    {
      number: "03",
      icon: <Calculator className="w-5 h-5 text-[#CD0054]" />,
      title: "Full Cost Modelling",
      description: "Capex, opex, change cost and capability investment."
    },
    {
      number: "04",
      icon: <Scale className="w-5 h-5 text-[#CD0054]" />,
      title: "Investment Decision",
      description: "Risk-adjusted recommendation with decision boundary."
    }
  ];

  const frameworkItems = [
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: "Net Present Value",
      description: "Discount all cash flows over the asset lifecycle at your weighted average cost of capital not the vendor-suggested hurdle rate. Sensitivity test the discount rate."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Payback Period",
      description: "Model payback under conservative volume and throughput assumptions. Include ramp-up losses in early periods and carry the full cost stack from day one."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-white" />,
      title: "Internal Rate of Return",
      description: "Calculate IRR across all three scenarios conservative, base, and optimistic. A project that only works in the optimistic scenario should not proceed without staged commitment."
    }
  ];

  const comparisonData = [
    {
      dimension: "Motivation",
      vendor: "Close the sale",
      independent: "Protect your capital"
    },
    {
      dimension: "Cost Modelling",
      vendor: "Best-case scenarios",
      independent: "Full-spectrum costing"
    },
    {
      dimension: "Technology",
      vendor: "Own platform only",
      independent: "Agnostic, market-wide"
    },
    {
      dimension: "Baseline Data",
      vendor: "Estimated / assumed",
      independent: "Validated from source"
    },
    {
      dimension: "Risk Analysis",
      vendor: "Minimised or omitted",
      independent: "Explicit scenario ranges"
    },
    {
      dimension: "Accountability",
      vendor: "None post-sale",
      independent: "Tied to decision outcomes"
    }
  ];


  const helpSteps = [
    {
      number: "01",
      title: "Independent Baseline Audit",
      description: "We validate your current-state data before any projection is made establishing defensible numbers that will survive board scrutiny."
    },
    {
      number: "02",
      title: "Vendor Proposal Review",
      description: "We deconstruct vendor ROI models, identify optimistic assumptions, and restate projections using conservative industry benchmarks."
    },
    {
      number: "03",
      title: "Full-Spectrum Cost Build",
      description: "We construct cost models that capture every category of expenditure across the full asset lifecycle nothing excluded."
    },
    {
      number: "04",
      title: "Board-Ready Decision Package",
      description: "We deliver an executive presentation with clear recommendation, risk-adjusted scenarios, and staged investment options."
    }
  ];

    return (
        <>
            <HeroSection
        backgroundImage="/images/solutions/Automation/auto.png"
        title="Automation Investment Advisory"
        description="Independent analysis for manufacturers evaluating automation
investments before committing capital."
        buttonText="Download White Paper"
        descriptionWidth="450px"
      />

      <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Text and Image */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <h2 className=" font-raleway font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px]  text-[#100000] leading-[1.1] mb-6">
              Why Automation<br />Decisions Fail
            </h2>
            <p className=" font-raleway  text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-10">
              Seventy percent of automation investments underperform against projected returns. The causes are consistent and preventable but only with independent analysis.
            </p>

            {/* Image with Quote Overlay */}
            <div className="relative w-full rounded-xl overflow-hidden mt-auto">
              <img 
                src="/images/solutions/Automation/auto1.png" // Update this path to your actual image
                alt="Business professionals in a meeting" 
                className="w-full h-[300px] sm:h-[400px] object-cover"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Quote Box */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
                <div className="border-l-[4px] border-[#CD0054] pl-5 py-1 bg-black/40 backdrop-blur-sm rounded-r-md">
                  <p className="text-white font-medium text-sm md:text-base leading-relaxed italic">
                    "The single most common cause of automation disappointment is a decision made on vendor-prepared analysis."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Failure Reasons List */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            {failureReasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-[#F8F9FA] rounded-xl p-6 md:p-8 flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 bg-[#FDF0F4] w-10 h-10 rounded-lg flex items-center justify-center mt-1">
                  <TrendingDown className="w-5 h-5 text-[#CD0054]" />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-raleway font-semibold text-[#100000] mb-2">
                    {reason.title}
                  </h3>
                  <p className="font-raleway text-sm md:text-[15px] lg:text-[16px] text-[#545454]  font-normal leading-[24px] md:leading-[26px]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>


    <section className="w-full bg-[#F8F9FA] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-14 max-w-[800px]">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-tight mb-4">
            Investment Framework
          </h2>
          <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px]">
            A five-stage process that pressure-tests vendor business cases against operational reality.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-sm">
          <img 
            src="/images/solutions/Automation/auto2.png" // Replace with your actual image path
            alt="Automated robotic arms on an assembly line" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Framework Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {frameworkStages.map((stage, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Top Row: Number and Icon */}
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl md:text-5xl font-bold text-gray-200/80 italic tracking-tighter">
                  {stage.number}
                </span>
                <div className="p-1.5 bg-pink-50/50 rounded-md">
                  {stage.icon}
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#100000] mb-3">
                  {stage.title}
                </h3>
                <p className="text-sm md:text-[15px] text-[#545454] font-medium leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


    <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-[32px] font-railway sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-tight mb-10 md:mb-14">
          ROI & Payback Framework
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          
          {/* Left Column: List Items */}
          <div className="w-full lg:w-1/2 flex flex-col border border-gray-200 rounded-l shadow-sm bg-white overflow-hidden">
            {frameworkItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-6 p-8 ${
                  index !== frameworkItems.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                {/* Icon Container with Gradient */}
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, #FF4A3A 0%, #FA293E 100%)",
                  }}
                >
                  {item.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold font-raleway text-[#333333] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[15px] lg:text-[16px] font-inter     text-[#545454] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image with Overlay */}
          <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-sm min-h-[400px] lg:min-h-full flex">
            <img 
              src="/images/solutions/Automation/auto3.png" // Replace with your actual image path
              alt="Business professional presenting data on a smart board" 
              className="w-full h-full object-cover absolute inset-0"
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#100000]/90 via-[#100000]/40 to-transparent"></div>

            {/* Bottom Text */}
            <div className="relative mt-auto p-8 md:p-10 z-10">
              <p className="text-white text-sm md:text-base lg:text-[17px] font-semibold font-inter leading-relaxed md:leading-[27px]">
                Board-ready decision packages with risk-adjusted NPV, IRR, and payback ranges — not a single optimistic point estimate.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>



    <section className="w-full bg-[#F4F5F8] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-stretch">
          
          {/* Left Column: Image Banner */}
          <div className="w-full lg:w-[40%] flex">
            <div className="relative w-full  overflow-hidden shadow-md min-h-[400px] lg:min-h-full flex flex-col">
              <img 
                src="/images/solutions/Automation/auto4.png" // Update to your actual chart image path
                alt="Financial data chart on dark background" 
                className="w-full h-full object-cover absolute inset-0"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D17] via-[#0B0D17]/40 to-transparent"></div>

              {/* Overlay Content */}
              <div className="relative mt-auto p-8 md:p-10 z-10">
                <div className="w-8 h-[2px] bg-[#CD0054] mb-6"></div>
                <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-white leading-tight mb-3">
                  Data Drives<br />Decisions
                </h3>
                <p className="text-[#A0AEC0] text-sm md:text-base font-medium">
                  Independent analysis, no sales agenda.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Comparison Table */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            
            <h2 className="text-[32px] sm:text-[36px] font-raleway md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-tight mb-8 md:mb-10">
              Vendor vs.<br />Independent Analysis
            </h2>

            <div className="w-full bg-white  border border-gray-200 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#11131A] text-[11px] md:text-[13px] tracking-wider uppercase font-medium font-mono">
                    <th className="p-5 md:px-8 md:py-6 text-white w-1/3">
                      Dimension
                    </th>
                    <th className="p-5 md:px-8 md:py-6 text-gray-400 w-1/3 border-l border-[#2D3748]/50">
                      Vendor
                    </th>
                    <th className="p-5 md:px-8 md:py-6 text-[#CD0054] w-1/3 border-l border-[#2D3748]/50">
                      ANVI INDEPENDENT
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`border-t border-gray-200 transition-colors hover:bg-gray-50/50 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                      }`}
                    >
                      {/* Dimension Column */}
                      <td className="p-5 md:px-8 md:py-5 font-semibold text-[#100000]">
                        {row.dimension}
                      </td>
                      
                      {/* Vendor Column */}
                      <td className="p-5 md:px-8 md:py-5 text-gray-500 font-medium border-l border-gray-100">
                        <div className="flex items-center gap-3">
                          <XCircle className="w-[18px] h-[18px] text-red-400 flex-shrink-0" strokeWidth={2} />
                          <span>{row.vendor}</span>
                        </div>
                      </td>
                      
                      {/* Independent Column */}
                      <td className="p-5 md:px-8 md:py-5 text-[#282828] font-semibold border-l border-gray-100">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-[18px] h-[18px] text-emerald-500 flex-shrink-0" strokeWidth={2} />
                          <span>{row.independent}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  

  <section className="w-full bg-white font-raleway">
      
      {/* Hero Image Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
        {/* Background Image */}
        <img 
          src="/images/solutions/Automation/auto5.png" // Replace with actual image path
          alt="Anvi team members collaborating in a warehouse" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay for better text readability (optional, adjust opacity as needed) */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero Text aligned with the main container */}
        <div className="absolute inset-0 flex items-end pb-10 md:pb-16 px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1600px] mx-auto w-full">
            <h1 className="text-[36px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-bold text-white leading-tight">
              How Anvi Helps
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-12 md:py-20 lg:py-[100px]">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Intro Paragraph */}
          <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#282828] font-raleway font-medium leading-relaxed max-w-[900px] mb-16 md:mb-24">
            We bring independent rigour to your automation investment decision with no technology allegiance and no commission incentive. Our only interest is the quality of your decision.
          </p>

          {/* 2x2 Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-20 p-20 md:p-24 lg:p-32 ">
            
            {/* Subtle Vertical Divider Line (Hidden on mobile, visible on md and up) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 transform -translate-x-1/2"></div>

            {helpSteps.map((step, index) => (
              <div key={index} className="flex flex-col pr-0 md:pr-4">
                <span className="text-[12px] md:text-[14px] text-[#CD0054] font-bold tracking-widest mb-4">
                  {step.number}
                </span>
                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#100000] font-raleway mb-3 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#545454] font-railway font-medium leading-[26px]">
                  {step.description}
                </p>
              </div>
            ))}
            
          </div>
        </div>
      </div>

    </section>
        <Footer  footerUpBoxInfo={footerUpBoxInfoObj} />
        </>
    )
};

export default AutoInvestment;