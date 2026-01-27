import React from 'react';

const WhySection = ({ backgroundImage, title, description, cards }) => {
  return (
    <div className="relative w-full py-20 lg:py-28 font-raleway">
      
      {/* --- 1. BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 ">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay (bg-black/70) ensures text is readable */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* --- 2. CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-7.5xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Title & Description (Sticky on Desktop) */}
          <div className="w-full lg:w-1/3   lg:top-32 ">
            {/* Render Title (supports <br/> if passed as JSX) */}
            <h2 className="text-4xl md:text-5xl text-white font-raleway mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              {description}
            </p>
          </div>

          {/* RIGHT SIDE: Dynamic Grid of Cards */}
          <div className="w-full lg:w-1/1  grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {cards.map((card, index) => (
           <div 
      key={index} 
       className="bg-white p-8 md:p-10 rounded-lg  hover:bg-[#FA293E]   group cursor-pointer transition-all duration-300"
    >
      
 
      <span className="text-3xl md:text-4xl font-medium text-black mb-6 block group-hover:text-white  ">
        {card.number}
      </span>
      
 
      <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 group-hover:text-white ">
        {card.title}
      </h3>
      
 
      <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-white  ">
        {card.description}
      </p>

    </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhySection;