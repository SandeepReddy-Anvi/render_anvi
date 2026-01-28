import React from 'react';

const TwoImageSection = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Title Header */}
      <h2 className="text-center text-4xl font-raleway font-medium mb-12 text-gray-800 tracking-tight">
        Our Social Impact Initiative
      </h2>

      {/* Grid Container: 35% / 65% Split */}
      <div className="grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-6 items-stretch">
        
        {/* Left Side (35%): Focus Image */}
        <div className="h-[450px] rounded-[10px] overflow-hidden   border border-gray-100">
          <img 
            src="/images/home/Pravikya3.png"
            alt="Community Support"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side (65%): Content with Background Image */}
        <div className="relative h-[450px]  rounded-[10px] overflow-hidden  flex items-center justify-center group">
          
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/home/Pravikya4.png" 
              alt="Team Background"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/80   transition-colors duration-500"></div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 px-8 md:px-16 text-center max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-wide">
              Anvi Social Impact - <span className="font-bold">Pravikya Initiative</span>
            </h3>
            
            <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
              Pravikya is ANVI's upcoming social impact initiative dedicated to creating 
              long-term change through sustainability, education, and community 
              empowerment. While the program is currently in development, its mission 
              remains clear: to build meaningful solutions that uplift communities and 
              drive responsible, future-ready progress.
            </p>

          
          </div>
        </div>

      </div>
    </div>
  );
};

export default TwoImageSection;