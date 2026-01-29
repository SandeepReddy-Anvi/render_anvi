import { div } from "framer-motion/client";
import React from "react";

const ImpactSolutions = () => {
  return (
    // Main container with max width and padding
    <div className="impact-sols-container w-full py-[100px] px-10 md:px-[80px] bg-[#FFFFFF]">
      {/* Box 1 */}
      <div className="w-full flex max-md:flex-col justify-center align-middle gap-[20px] md:gap-[90px]">
        <div className="md:w-1/2 mx-auto flex flex-col justify-start align-middle">
          <h2 className="text-[36px] lg:text-[46px] leading-tight tracking-[-1.2px] text-[#100000] font-medium">
            How Our Solutions <br/> Create Real Impact
          </h2>
          <p className="text-[16px] w-full mt-[20px] mx-auto text-[#101010] leading-[27.6px]">
            Our intelligent systems deliver measurable improvements across
            safety, efficiency, and sustainability, helping organizations
            operate smarter and more reliably. Here’s the impact our technology
            creates in real-world environments and high-demand operational
            scenarios.
          </p>
        </div>

        <div className="aspect-[5/3] w-full md:w-1/2 max-w-[616px] mx-auto rounded-[16px] h-auto overflow-hidden bg-[#F3F7F4]">
          <img
            src="/images/solutions/aocc.webp" // **Replace with the actual image path**
            alt="Autonomous system on a city street"
            className="w-full object-cover object-[50% 70%]"
          />
        </div>
      </div>

      {/* Box 2 */}
      <div className="w-full flex max-md:flex-col justify-center align-middle gap-[20px] lg:gap-[0px] mt-[60px]">
        <div className="w-full md:w-1/2 md:max-w-[516px] aspect-[4/5] mx-auto rounded-[16px] overflow-hidden">
          <img
            src="/images/solutions/sewage/sewage3.2.webp" // **Replace with the actual image path**
            alt="Autonomous system on a city street"
            className="w-full h-auto object-cover aspect-[4/5] object-center"
          />
        </div>

        <div className="md:w-1/2 mx-auto flex flex-col justify-start align-middle gap-[20px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap md:grid md:grid-cols-2">

            {/* Stat Card 1: Reduced Effort */}

            <div className="rounded-xl flex flex-col justify-around align-middle gap-[10px] bg-[#F3F7F4] text-[#465455] py-5 px-4 lg:px-[40px] lg:py-[50px] sm:flex">
              {/* py-[50px] pr-[5px] pl-[40px]"> */}
              <p className="text-6xl font-bold text-[#477379] font-inter">
                60%
              </p>
              <h3 className="text-[22px] font-bold">Reduced Effort</h3>
              <p className="text-[16px]">
                Our systems reduce manual effort and strain using automation and optimization.
              </p>
            </div>
            {/* Stat Card 2: Faster Workflow */}
            <div className="rounded-xl flex flex-col justify-around align-middle gap-[10px] bg-[#F3F7F3]  text-[#465455] py-5 px-6 lg:px-[40px] lg:py-[50px]">
              <p className="text-6xl font-bold text-[#477379] font-inter">
                40%
              </p>
              <h3 className="text-[22px] font-bold">Faster Workflow</h3>
              <p className="text-[16px]">
                AI-driven automation reduces delays and accelerates workflows.
              </p>
            </div>
            {/* Stat Card 3: Operational Stability (Full Width) */}
            <div className="rounded-xl flex flex-col col-span-2 justify-around align-middle gap-[10px] bg-[#F4F3F7]  text-[#465455] py-5 px-6 lg:px-[40px] lg:py-[50px]">
              <p className="text-6xl font-bold text-[#477379] font-inter">
                92%
              </p>
              <h3 className="text-[22px] font-bold">
                Operational Stability
              </h3>
              <p className="text-[16px]">
                Our autonomous systems deliver consistent performance through predictive monitoring and resilient engineering, ensuring high uptime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSolutions;
