import React from 'react';

const ArrowDown = () => (
  <svg className="w-4 h-4 my-1 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const InfoCard = ({ title, description, marketItems, serviceItems, lifecycleItems, theme, id }) => {
  
  // 4 Distinct Gradients based on theme prop
const getBackground = () => {
  switch (theme) {
    case 'red': 
      return '/images/industries/RedCard.png';     
    case 'blue': 
      return '/images/industries/BlueCard.png';    
    case 'purple': 
      return '/images/industries/PurpleCard.webp';  
    case 'green': 
    default: 
      return '/images/industries/GreenCard.png';  
  }
};
  return (
    // ID is attached here for Scroll Spy to work
    <div id={id} className={`w-full p-8 md:p-12  text-white   transition-all duration-500 scroll-mt-32 bg-cover bg-center bg-no-repeat relative overflow-hidden content-end min-h-[750px]`}
    style={{ 
      backgroundImage: `url(${getBackground()})` 
    }}>
      
      {/* Header */}
      <div className="mb-12 font-raleway">
        <h2 className="text-4xl md:text-4xl font-semibold font-raleway mb-6">{title}</h2>
        <p className="text-gray-100 leading-relaxed max-w-2xl text-sm md:text-base font-light">
          {description}
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Market Column */}
        <div>
          <h4 className="text-gray-400 mb-4 font-medium uppercase tracking-wide text-xs">Market & Industry</h4>
          <ul className="space-y-3">
            {marketItems?.map((item, index) => (
              <li key={index} className="flex items-center text-gray-100 font-medium">
                <span className="w-1 h-1 bg-gray-100 rounded-full mr-2"></span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-gray-500 mb-4 font-medium uppercase tracking-wide text-xs">Services</h4>
          <ul className="space-y-3">
            {serviceItems?.map((item, index) => (
              <li key={index} className="flex items-center text-gray-100 font-medium">
                <span className="w-1 h-1 bg-gray-100 rounded-full mr-2"></span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Lifecycle Column */}
        <div>
          <h4 className="text-gray-500 mb-4 font-medium uppercase tracking-wide text-xs">Solution Lifecycle</h4>
          <div className="flex flex-col items-start text-gray-100 font-medium">
            {lifecycleItems?.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item}</span>
                {index < lifecycleItems.length - 1 && <ArrowDown />}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoCard;