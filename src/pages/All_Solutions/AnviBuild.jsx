import React from "react";
import HeroSection from "../../components/HeroSection";
import GradientText from "../../components/GradientText";
import TickerItems from "../../components/Solutions/Tickeritems";

const tickerItems = [
    "Faster Product Development",
    "Reduced Engineering Risk",
    "Integrated Multidisciplinary Expertise",
    "Manufacturing-Ready Systems",
    "Scalable Deployment Pathways"
]

const AnviBuild = () => {
    return (
        <div className="w-full">
            <HeroSection
                backgroundImage="/images/solutions/Anvi_Build.jpg"
                title="Anvi Build"
                description="Building robotics and autonomous systems from concept validation to manufacturing readiness."
                descriptionWidth="650px"
            />

            <GradientText className="bg-[#ffffff]"
                header="Overview"
                ourDescription={[
                    "Anvi Build is a structured robotics product development programme designed to bridge the engineering gap between an idea and a deployable product.",
                    "Many robotics concepts fail not because the idea lacks potential, but because organizations do not have access to the multidisciplinary engineering expertise required to transform prototypes into reliable, manufacturable, and commercially viable products."
                ]}
            />

            <TickerItems tickerItems={tickerItems} />

            <div className="w-full h-full px-5 md:px-[60px] py-[50px] xl:px-[100px] md:py-[80px]">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <div className="w-full lg:w-50% self-stretch">
                        <img
                            src="/images/solutions/build/build.jpg"
                            className="w-full h-full object-cover rounded-[16px]"
                        />
                    </div>
                    <div className="flex flex-col gap-6 pl-0 lg:pl-[60px]">
                        <h2 className="text-[34px] md:text-[38px] lg:text-[46px] text-[#100000] font-medium leading-[57px]">
                            What is Anvi Build?
                        </h2>
                        <p className="font-medium text-[16px] md:text-[18px] text-[#282828]">
                            Anvi Build is a structured robotics product development programme designed to help 
                            startups, innovation teams, and enterprises transform robotics concepts into deployable, 
                            manufacturing-ready products.
                        </p>
                        <p className="font-medium text-[16px] md:text-[18px] text-[#282828]">
                            By bringing together expertise across hardware, software, AI, simulation, and manufacturing 
                            engineering, Anvi Build provides a clear and scalable pathway from concept validation to real-world deployment.
                        </p>
                    </div>
                </div>
                <p>Concept → Validation → Engineering → Manufacturing → Deployment</p>
            </div>
        </div>
    )
};

export default AnviBuild;