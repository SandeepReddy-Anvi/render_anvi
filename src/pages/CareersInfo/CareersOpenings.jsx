import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import { MapPin, Clock, ChevronDown } from "lucide-react";
import { jobPositions } from "../../data/jobData";
import { pagesLinksList } from "../../data/PagesLinkList";
import Footer from "../../components/footer";

const footerUpBoxInfoObj = {
  head: "Didn't find the right role?",
  para: "Send us your resume and we'll keep in touch for future opportunities that match your skills and interests.",
  linkLabel: "Send Resume",
  link: '#',
};

const CareersOpenings = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    department: "All Departments",
    location: "All Locations",
    type: "All Types",
  });
  const [hoveredCard, setHoveredCard] = useState(null);

  const departments = [
    "All Departments",
    ...new Set(jobPositions.map((job) => job.department)),
  ];
  const locations = [
    "All Locations",
    ...new Set(jobPositions.map((job) => job.location)),
  ];
  const types = ["All Types", ...new Set(jobPositions.map((job) => job.type))];

  // Filter jobs based on selected filters
  const filteredJobs = jobPositions.filter((job) => {
    return (
      (filters.department === "All Departments" ||
        job.department === filters.department) &&
      (filters.location === "All Locations" ||
        job.location === filters.location) &&
      (filters.type === "All Types" || job.type === filters.type)
    );
  });

  const handleApplyNow = (jobId) => {
    navigate(pagesLinksList.JobInfo.replace(":jobId", jobId));
  };

  return (
    <div className="w-full">
      <HeroSection
        backgroundImage="/videos/Heroo4_compr.mp4"
        title="Looking for the Right Job "
        description="Join Anvi to explore ambitious ideas, work with breakthrough technologies, and build a career that creates real impact."
        buttonText="About Us"
        buttonLink="#about"
        descriptionWidth="656px"
      />

      <section className="px-4 sm:px-8 md:px-16 lg:px-[140px] py-12 md:py-20 lg:py-[100px]">
        <div className="items-center flex flex-col align-middle gap-[25px] justify-center text-center font-['Wix Madefor Display']">
          <p className="text-3xl sm:text-4xl md:text-[48px] font-medium">
            Open Positions
          </p>
          <p className="text-sm sm:text-[16px] font-normal px-4">
            Discover opportunities to shape the future with cutting-edge
            technology
          </p>
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-14 mb-6 sm:mb-8">
          <div className="relative">
            <select
              value={filters.department}
              onChange={(e) =>
                setFilters({ ...filters, department: e.target.value })
              }
              className="w-full appearance-none bg-white border border-[#E1E7EF] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-8 sm:pr-10 text-sm sm:text-base text-[#0F1729] focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:border-transparent font-['Wix Madefor Display']"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
              className="w-full appearance-none bg-white border border-[#E1E7EF] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-8 sm:pr-10 text-sm sm:text-base text-[#0F1729] focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:border-transparent font-['Wix Madefor Display']"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative sm:col-span-2 md:col-span-1">
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="w-full appearance-none bg-white border border-[#E1E7EF] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-8 sm:pr-10 text-sm sm:text-base text-[#0F1729] focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:border-transparent font-['Wix Madefor Display']"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onMouseEnter={() => setHoveredCard(job.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleApplyNow(job.id)}
              className="rounded-[7.936px] border border-[#E1E7EF] p-4 sm:p-5 md:p-6 font-['Wix_Madefor_Display'] transition-all duration-300 cursor-pointer"
              style={
                hoveredCard === job.id
                  ? {
                      background:
                        "linear-gradient(107deg, #FFF 0%, #F9FAFB 100%)",
                      boxShadow:
                        "0 0 0 0.992px rgba(30, 153, 174, 0.20), 0 0.992px 27.8px 0 rgba(30, 154, 176, 0.25)",
                    }
                  : {
                      background: "#FFF",
                    }
              }
            >
              <h3 className="text-base sm:text-lg md:text-[19.84px] font-normal text-[#0F1729] mb-2">
                {job.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-[14px] text-[#65758B] mb-4">
                {job.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-[14px] text-[#65758B]">
                  <div className="flex items-center">
                    <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                    {job.type}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApplyNow(job.id);
                  }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 border border-[#0097B2] text-[#0097B2] rounded-lg hover:bg-blue-50 transition-colors text-xs sm:text-sm font-medium w-full sm:w-auto"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-base sm:text-lg font-['Wix Madefor Display'] px-4">
              No positions found matching your filters.
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};

export default CareersOpenings;
