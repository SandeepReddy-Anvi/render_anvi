import { motion } from "framer-motion";

const StepBox = ({ title, subtitle }) => {
    return (
        <div className="relative bg-[#E8221A] text-white px-[4px] pt-[13px] pb-[4px] border-2 border-[#CD0054] rounded-[3px]">
            <div className="bg-black px-[38px] py-[14px]">
                <p className="text-sm tracking-widest">{title}</p>
                <p className="text-[10px] text-gray-400 mt-1">{subtitle}</p>
            </div>
        </div>
    );
};

const WeWork = () => {
    return (
        <section className="w-full max-w-[1800px] mx-auto px-5 lg:px-[60px] py-14 md:py-[100px] lg:py-[120px] relative">

            {/* HEADER */}
            <div className="text-center">
                <div className="flex items-center gap-2 pb-4 justify-center">
                    <span className="w-6 h-[2px] bg-[#CD0054]" />
                    <p className="text-[14px] text-[#CD0054] font-bold uppercase">
                        How We Work
                    </p>
                </div>

                <div className="max-w-[800px] mx-auto">
                    <p className="leading-[50px] text-[32px] md:text-[46px] font-medium">
                        How We Turn Vision Into Reality
                    </p>
                    <p className="mt-6 text-[16px] md:text-[18px]">
                        From the first conversation to the final delivery - every step is intentional,
                        collaborative, and focused on real-world impact.
                    </p>
                </div>
            </div>

            {/* FLOW CONTAINER */}
            <div className="relative mt-20">

                {/* DESKTOP FLOW */}
                <div className="hidden md:block relative h-[400px]">

                    {/* Boxes */}
                    <div className="absolute left-[5%] top-[50%] -translate-y-1/2 z-10">
                        <StepBox title="DISCOVER" subtitle="INPUT .01" />
                    </div>

                    <div className="absolute left-[35%] top-0 z-10">
                        <StepBox title="DEFINE" subtitle="PROCESS .02" />
                    </div>

                    <div className="absolute left-[60%] top-[50%] -translate-y-1/2 z-10">
                        <StepBox title="BUILD" subtitle="EXECUTE .03" />
                    </div>

                    <div className="absolute right-[5%] bottom-0 z-10">
                        <StepBox title="DEPLOY" subtitle="OUTPUT .04" />
                    </div>

                    {/* LABELS */}
                    <p className="absolute left-[26%] top-[7%] text-[#CD0054] text-[10px] font-semibold">ANALYSIS</p>
                    <p className="absolute left-[55%] top-[25%] text-[#CD0054] text-[10px] font-semibold">STRATEGY .OUT</p>
                    <p className="absolute left-[75%] top-[45%] text-[#CD0054] text-[10px] font-semibold">ITERATE</p>
                    <p className="absolute left-[82%] top-[70%] text-[#CD0054] text-[10px] font-semibold">DEPLOY</p>

                    {/* CONNECTORS */}
                    <svg
                        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >

                        {/* DISCOVER → DEFINE */}
                        {/* Horizontal */}
                        <path
                            d="M 18 50 H 30"
                            stroke="#E8221A"
                            strokeWidth="0.4"
                            strokeDasharray="1 1"
                        />

                        {/* Vertical (thinner) */}
                        <path
                            d="M 30 50 V 12"
                            stroke="#E8221A"
                            strokeWidth="0.2"
                            strokeDasharray="2 2"
                        />

                        {/* Horizontal */}
                        <path
                            d="M 30 12 H 35"
                            stroke="#E8221A"
                            strokeWidth="0.4"
                            strokeDasharray="1 1"
                        />
                        <path
                            d="M 34.2 10.8 L 35 12 L 34.2 13.2 Z"
                            stroke="#E8221A"
                            strokeWidth="0.2"
                            fill="#E8221A"
                        />

                        {/* DEFINE → BUILD */}
                        {/* Horizontal */}
                        <path
                            d="M 46 12 H 54"
                            stroke="#E8221A"
                            strokeWidth="0.4"
                            strokeDasharray="1 1"
                        />

                        {/* Vertical (thinner) */}
                        <path d="M 54 12 V 50" stroke="#E8221A" strokeWidth="0.2" strokeDasharray="2 2" />

                        {/* Horizontal */}
                        <path d="M 54 50 H 60" stroke="#E8221A" strokeWidth="0.4" strokeDasharray="1 1" />
                        {/* Arrow */}
                        <path d="M 59.2 48.8 L 60 50 L 59.2 51.2 Z" stroke="#E8221A" strokeWidth="0.2" fill="#E8221A" />

                        {/* DISCOVER → BUILD */}
                        <path d="M 30 50 H 54" stroke="#850A04" strokeWidth="0.4" strokeDasharray="1 1" />

                        <circle cx="30" cy="50" r="0.8" fill="#E8221A" vectorEffect="non-scaling-stroke" />
                        <circle cx="54" cy="50" r="0.8" fill="#E8221A" vectorEffect="non-scaling-stroke" />
                        <circle cx="90" cy="50" r="0.8" fill="#E8221A" />

                        {/* BUILD → DEPLOY */}
                        {/* Horizontal */}
                        <path d="M 71 50 H 90" stroke="#E8221A" strokeWidth="0.4" strokeDasharray="1 1" />

                        {/* Vertical (solid) */}
                        <path d="M 90 50 V 78" stroke="#E8221A" strokeWidth="0.2" strokeDasharray="0.5 0" />

                        {/* Arrow */}
                        <path d="M 89.5 75.5 L 90 78 L 90.5 75.5 Z" stroke="#E8221A" strokeWidth="0.2" fill="#E8221A" />
                    </svg>

                </div>

                {/* MOBILE FLOW */}
                <div className="md:hidden relative mt-16">

                    <div className="flex flex-col gap-16">

                        {/* STEP 1 - LEFT */}
                        <div className="relative flex justify-start z-10">
                            <StepBox title="DISCOVER" subtitle="INPUT .01" />
                        </div>

                        {/* STEP 2 - RIGHT */}
                        <div className="relative flex justify-end z-10">
                            <StepBox title="DEFINE" subtitle="PROCESS .02" />
                        </div>

                        {/* STEP 3 - LEFT */}
                        <div className="relative flex justify-start mt-14 z-10">
                            <StepBox title="BUILD" subtitle="EXECUTE .03" />
                        </div>

                        {/* STEP 4 - RIGHT */}
                        <div className="relative flex justify-end z-10">
                            <StepBox title="DEPLOY" subtitle="OUTPUT .04" />
                        </div>

                    </div>

                    {/* LABELS */}
                    <p className="absolute left-[65%] top-[4%] text-[#CD0054] text-[10px] font-semibold">ANALYSIS</p>
                    <p className="absolute left-[15%] top-[53%] text-[#CD0054] text-[10px] font-semibold">STRATEGY .OUT</p>
                    <p className="absolute left-[68%] top-[60%] text-[#CD0054] text-[10px] font-semibold">ITERATE</p>
                    <p className="absolute left-[75%] top-[75%] text-[#CD0054] text-[10px] font-semibold">DEPLOY</p>

                    {/* CONNECTORS */}
                    <svg
                        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                        viewBox="0 0 100 100" preserveAspectRatio="none"
                    >

                        {/* DISCOVER → DEFINE */}
                        {/* Horizontal */}
                        <path d="M 24 8 H 90" stroke="#E8221A" strokeWidth="0.2" strokeDasharray="2 1" />

                        {/* Vertical (thinner) */}
                        <path d="M 90 8 V 27" stroke="#E8221A" strokeWidth="0.2" strokeDasharray="2 1"/>
                        {/* Arrow */} 
                        <path
                            d="M 89 23.5 L 90 25 L 91 23.5 Z"
                            stroke="#E8221A"
                            strokeWidth="0.2"
                            fill="#E8221A"
                        />
    
                        {/* DEFINE → BUILD */}
                        {/* Vertical */}
                        <path d="M 87 39 V 50" stroke="#E8221A" strokeWidth="0.2" strokeDasharray="2 1" />

                        {/* Horizontal (thinner) */}
                        <path d="M 87 50 H 10" stroke="#E8221A" strokeWidth="0.2" strokeDasharray="2 1"/>
                        <path d="M 10 59 V 50" stroke="#E8221A" strokeWidth="0.2" strokeDasharray="2 1" />

                        {/* DISCOVER → BUILD -> Vertical */}
                        <path d="M 10 50 V 15" stroke="#850A04" strokeWidth="0.2" strokeDasharray="2 1" />
                        {/* Arrow */} 
                        <path
                            d="M 9 57.5 L 10 59 L 11 57.5 Z"
                            stroke="#E8221A"
                            strokeWidth="0.2"
                            fill="#E8221A"
                        />

                        <circle cx="90" cy="8" r="0.8" fill="#E8221A" vectorEffect="non-scaling-stroke" />
                        <circle cx="10" cy="50" r="0.8" fill="#E8221A" vectorEffect="non-scaling-stroke" />
                        <circle cx="90" cy="65" r="0.8" fill="#E8221A" />

                        {/* BUILD → DEPLOY */}
                        {/* Horizontal */}
                        <path d="M 21 65 H 90"  stroke="#E8221A" strokeWidth="0.2" strokeDasharray="2 1" />

                        {/* Vertical (solid) */}
                        <path d="M 90 65 V 84" stroke="#E8221A" strokeWidth="0.2" strokeDasharray="0.5 0" />
                        
                        {/* Arrow head */}
                        <path
                            d="M 88.8 82.5 L 90 84 L 91.2 82.5 Z"
                            stroke="#E8221A"
                            strokeWidth="0.2"
                            fill="#E8221A"
                        />
                    </svg>
                </div>

            </div>
        </section>
    );
};

export default WeWork;