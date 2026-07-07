import Footer from "../../components/footer";
import HeroSection from "../../components/HeroSection";
import { mainPagesLinksObj } from "../../data/PagesLinkList";
import { EyeOff, Eye, CheckCircle2, Radio, Cpu, Database, Compass, Settings, Target, Handshake, AlertTriangle, Wrench, Share2, ShieldCheck } from 'lucide-react';


const footerUpBoxInfoObj = {
  head: `Ready to Transform Your Operations with anvi `,
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs
};
const ConnectedFactory = () => {
const comparisonData = [
    {
      manual: "Operators log readings on clipboards",
      connected: "Sensors stream telemetry every second"
    },
    {
      manual: "Downtime root cause discovered days later",
      connected: "Anomalies surfaced in real time"
    },
    {
      manual: "Quality issues detected at final inspection",
      connected: "In-line traceability per unit"
    },
    {
      manual: "Spreadsheets reconciled weekly",
      connected: "Live dashboards shared across the org"
    }
  ];

const layers = [
    {
      label: "LAYER 1",
      title: "Machines & Sensors",
      description: "Instrumentation on every critical asset — purpose-fit, ruggedised and selected for the data the business actually needs.",
      icon: <Radio className="w-6 h-6 text-[#CD0054]" />,
      tags: ["PLC / SCADA tap-ins", "Retrofit sensors", "Vision & inspection"]
    },
    {
      label: "LAYER 2",
      title: "Edge Computing",
      description: "Local intelligence that filters, normalises and acts on telemetry in real time — keeping the line safe when the cloud isn't there.",
      icon: <Cpu className="w-6 h-6 text-[#CD0054]" />,
      tags: ["Protocol translation", "On-device ML inference", "Store & forward"]
    },
    {
      label: "LAYER 3",
      title: "Business Systems",
      description: "Connected data flowing into ERP, MES, MMS and BI — closing the loop between operations and the rest of the enterprise.",
      icon: <Database className="w-6 h-6 text-[#CD0054]" />,
      tags: ["ERP / MES integration", "Operational data warehouse", "Executive dashboards"]
    }
  ];

 
  const stats = [
    { value: "120+", label: "PLANTS CONNECTED" },
    { value: "14", label: "INDUSTRIES SERVED" },
    { value: "9", label: "COUNTRIES DEPLOYED" },
    { value: "$240M", label: "TRACKED ANNUAL SAVINGS" }
  ];

  const features = [
    {
      title: "Vendor-neutral architecture",
      description: "We pick the stack that fits your operation — never the one with the highest margin for us.",
      icon: <Compass className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
    },
    {
      title: "Embedded delivery squads",
      description: "Mixed teams of controls, network, data and change specialists, on-site where it matters.",
      icon: <Settings className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
    },
    {
      title: "Outcome-linked commercials",
      description: "Our fees flex with the KPIs we agreed to move. Skin in the game, by contract.",
      icon: <Target className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
    },
    {
      title: "Knowledge handover, always",
      description: "Every engagement ends with your team running the system — not a dependency on ours.",
      icon: <Handshake className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
    }
  ];
const failurePatterns = [
    {
      number: "01",
      title: "Vendor-led architecture",
      description: "The platform is chosen before the business question. Integration debt compounds for years."
    },
    {
      number: "02",
      title: "Pilot purgatory",
      description: "Endless proofs of concept that never scale because nobody owns industrialisation."
    },
    {
      number: "03",
      title: "OT/IT trench warfare",
      description: "Two organisations, two budgets, two risk appetites — and no shared operating model."
    },
    {
      number: "04",
      title: "Data without context",
      description: "Terabytes ingested, nothing modelled. Dashboards proliferate, decisions don't change."
    },
    {
      number: "05",
      title: "Security as afterthought",
      description: "Flat networks and default credentials turn connectivity into the attack surface."
    },
    {
      number: "06",
      title: "No operator in the loop",
      description: "Tools built for analysts, not the people on the floor who actually run the plant."
    }
  ];

const engineeringFeatures = [
    {
      title: "Non-invasive retrofit",
      description: "Clamp-on sensors, optical taps, PLC mirror ports — no rewiring of OEM logic.",
      icon: <Wrench className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
    },
    {
      title: "Protocol translation",
      description: "Modbus, OPC-UA, EtherNet/IP, Profinet and serial — normalised at the edge.",
      icon: <Share2 className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
    },
    {
      title: "Zero downtime cut-over",
      description: "Phased commissioning that runs in parallel to production, never against it.",
      icon: <ShieldCheck className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
    }
  ];
 
  const phases = [
    {
      title: "Discovery",
      description: "Site walks, value mapping, architecture audit. We leave with a costed roadmap, not a slide deck.",
      icon: <Compass className="w-5 h-5 text-white" strokeWidth={2} />
    },
    {
      title: "Pilot",
      description: "One line, one use case, instrumented end-to-end. Real telemetry, real users, real savings.",
      icon: <Target className="w-5 h-5 text-white" strokeWidth={2} />
    },
    {
      title: "Integration",
      description: "Scale across lines and plants. Network hardening, MES/ERP integration, operator enablement.",
      icon: <Settings className="w-5 h-5 text-white" strokeWidth={2} />
    },
    {
      title: "Handover",
      description: "Runbooks, training, SLAs. Your team owns the platform; we stay on call for what's next.",
      icon: <Handshake className="w-5 h-5 text-white" strokeWidth={2} />
    }
  ];

    return (
        <>
               <HeroSection
        backgroundImage="/images/solutions/Connected/factory.png"
        title="Connected Factory"
        description="A practical guide to building real-time, data-driven factories with IIoT and edge intel  ligence."
        buttonText="Download White Paper"
        descriptionWidth="450px"
      />
<section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Top Section: Text and Images */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-[1.1] mb-6">
              The factory that cannot<br />see itself.
            </h2>
            <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px] max-w-[500px]">
              Most plants generate enormous volumes of data and
              capture almost none of it. Decisions are made on memory,
              intuition and lagging reports while machines run silently in
              parallel.
            </p>
          </div>

     
           {/* Right Column: Split Image */}
          <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-sm">
            <img 
              src="/images/solutions/Connected/factory1.png" // Update with your actual single image path
              alt="Comparison of a manual factory and a futuristic connected factory" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section: Comparison Grid */}
        {/* Changed from max-w-6xl mx-auto to w-full to match the 1600px parent width */}
        <div className="w-full flex flex-col border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          
          {/* Grid Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-[13px] md:text-[14px] font-bold tracking-wider uppercase">
            {/* Manual Header */}
            <div className="bg-[#FAFAFA] text-[#333333] p-6 md:px-8 font-semibold md:py-6 flex items-center gap-3">
              <EyeOff className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
              <span>Manual Factory</span>
            </div>
            {/* Connected Header */}
            <div className="bg-[#0B0D17] text-white p-6 font-semibold md:px-8 md:py-6 flex items-center gap-3">
              <Eye className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
              <span>Connected Factory</span>
            </div>
          </div>

          {/* Grid Rows */}
          <div className="flex flex-col">
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-100 bg-white"
              >
                {/* Manual Data */}
                <div className="p-6 md:px-8 md:py-6 text-sm md:text-[15px] lg:text-[16px] text-[#545454] font-medium border-b md:border-b-0 md:border-r border-gray-100 flex items-center">
                  {row.manual}
                </div>
                {/* Connected Data */}
                <div className="p-6 md:px-8 md:py-6 text-sm md:text-[15px] lg:text-[16px] text-[#282828] font-medium flex items-center gap-3 bg-white">
                  <CheckCircle2 className="w-5 h-5 text-[#CD0054] flex-shrink-0" strokeWidth={2} />
                  <span>{row.connected}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>

<section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Text and Image */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-[1.15] mb-6">
              Three layers of a<br />connected factory.
            </h2>
            <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-10 max-w-[500px]">
              Treat connectivity as a stack, not a project. Each layer is independently valuable and independently failable design for both.
            </p>

            <div className="w-full mt-auto">
              <img 
                src="/images/solutions/Connected/factory2.png" // Update with your actual image path
                alt="Futuristic connected factory illuminated with neon blue and red lights" 
                className="w-full aspect-square md:aspect-[4/3] lg:aspect-square object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Right Column: Layer Cards */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            {layers.map((layer, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon Container */}
                <div className="w-[52px] h-[52px] rounded-lg bg-[#FDF0F4] flex items-center justify-center flex-shrink-0">
                  {layer.icon}
                </div>
                
                {/* Card Content */}
                <div className="flex flex-col flex-grow">
                  <span className="text-[#CD0054] text-[12px] md:text-[13px] font-bold font-inter tracking-[0.1em] mb-1.5 uppercase">
                    {layer.label}
                  </span>
                  
                  <h3 className="text-[18px] md:text-[22px] font-semibold font-raleway text-[#100000] mb-3">
                    {layer.title}
                  </h3>
                  
                  <p className="text-sm md:text-[15px] lg:text-[16px] text-[#545454] font-raleway font-medium leading-[24px] md:leading-[26px] mb-5">
                    {layer.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {layer.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1.5 text-[11px] md:text-[12px] text-[#545454] font-medium border border-gray-200 rounded text-center bg-[#FAFAFA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

    <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column: Text & Stats */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-[1.15] mb-6">
              Engineering-led.<br />Outcome-accountable.
            </h2>
            <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px]">
              We're not a software vendor with a services arm. Anvi is an engineering and advisory practice built specifically for connected operations. Our teams sit on your shop floor, in your control room and in your boardroom — owning the result, not just the deliverable.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 mt-12 lg:mt-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col border-l-2 border-[#CD0054] pl-4 md:pl-5"
              >
                <span className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#100000] leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-[11px] lg:text-[12px] text-gray-500 font-medium tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Feature Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="w-[44px] h-[44px] rounded-lg bg-[#FDF0F4] flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-[16px] md:text-[18px] font-semibold text-[#100000] mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#545454] font-normal leading-[22px] md:leading-[24px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="w-full bg-[#F8F9FB] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Top Section: Heading and Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[60px] mb-12 lg:mb-16">
          
          {/* Left Column: Text */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-[1.15] mb-6">
              Why digital manufacturing programmes fail.
            </h2>
            <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px]">
              Six patterns we see repeatedly across Tier-1 manufacturers. Recognising them early is the cheapest course-correction available.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-[55%] h-[250px] sm:h-[350px] md:h-[400px]">
            <img 
              src="/images/solutions/Connected/factory3.png" // Replace with your actual image path
              alt="Digital network overlay on a modern manufacturing plant" 
              className="w-full h-full object-cover rounded-2xl shadow-sm"
            />
          </div>
        </div>

        {/* Bottom Section: Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {failurePatterns.map((pattern, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Top Row: Icon and Number */}
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#FDF0F4] flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-[#CD0054]" strokeWidth={2} />
                </div>
                <span className="text-[12px] md:text-[13px] font-bold font-wix text-gray-400">
                  {pattern.number}
                </span>
              </div>
              
              {/* Card Content */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#100000] mb-3">
                  {pattern.title}
                </h3>
                <p className="text-sm md:text-[15px] lg:text-[16px] text-[#545454] font-medium leading-[24px] md:leading-[26px]">
                  {pattern.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="w-full bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-[#F8F9FA]">
              <img 
                src="/images/solutions/Connected/factory4.png" // Update with your actual image path
                alt="Industrial edge computing hardware with blue LED indicators" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-[1.15] mb-6">
              You don't need a new<br />factory. You need the<br />one you have to talk<br />back.
            </h2>
            
            <p className="text-sm md:text-base lg:text-[18px] text-[#282828] font-medium leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-10">
              Brownfield connectivity is where most of the value — and most of the
              risk lives. We use non-invasive sensing, protocol gateways and edge
              nodes to unlock data from equipment that was never designed to
              share it, without touching certified control logic.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-6 md:gap-8">
              {engineeringFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  {/* Icon Box */}
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm mt-0.5">
                    {feature.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col">
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-[#100000] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#545454] font-medium leading-[22px] md:leading-[24px]">
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


    <section className="w-full bg-[#F8F9FA] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-12 md:py-20 lg:py-[100px] font-raleway">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#100000] leading-tight mb-16 lg:mb-24 max-w-[800px]">
          A four-phase engagement,<br />built for momentum in anvi.
        </h2>

        {/* Timeline Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
          
          {/* Mobile Vertical Line (Hidden on Desktop) */}
          <div className="absolute left-[24px] top-4 bottom-4 w-[1px] bg-gray-200 md:hidden z-0"></div>

          {phases.map((phase, index) => (
            <div key={index} className="relative flex flex-col items-start z-10">
              
              {/* Desktop Horizontal Line (Hidden on Mobile) */}
              {/* Draws a line from the right edge of the current icon to the next column */}
              {index !== phases.length - 1 && (
                <div className="hidden md:block absolute top-6 left-12 w-[calc(100%-1rem)] h-[1px] bg-gray-200 z-[-1]"></div>
              )}

              {/* Phase Item Content */}
              <div className="flex flex-row md:flex-col items-start gap-6 md:gap-8 w-full">
                
                {/* Timeline Node / Icon */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md z-10"
                  style={{
                    background: "linear-gradient(135deg, #FF6B4A 0%, #FA293E 100%)", // Vibrant red-orange gradient
                  }}
                >
                  {phase.icon}
                </div>

                {/* Text Block */}
                <div className="flex flex-col pt-1 md:pt-0">
                  <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#100000] mb-3 md:mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-sm md:text-[15px] lg:text-[16px] text-[#545454] font-medium leading-[24px] md:leading-[26px]">
                    {phase.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>

<Footer footerUpBoxInfo={footerUpBoxInfoObj}/>
        </>
    )
};

export default ConnectedFactory;