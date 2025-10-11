import { useParams } from "react-router-dom";
import { jobPositions } from "../../data/jobData";
import Footer from "../../components/footer";

export const CareersJobDesc = () => {
  const { jobId } = useParams();
  const job = jobPositions.find((job) => job.id === parseInt(jobId));

  if (!job) {
    return (
      <div className="w-full py-20 text-center font-['Wix Madefor Display']">
        <p className="text-2xl sm:text-3xl text-[#65758B]">Job not found</p>
      </div>
    );
  }

  return (
    <div className="w-full font-dm-sans">
      {/* Hero Section */}
      <div
        className="relative w-full h-[200px] md:h-[453px] flex items-center justify-center bg-cover bg-center"
        // style={{ backgroundImage: `url(${job.image})` }}
        style={{ backgroundImage: `url("/images/careers/uiux.jpg")` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000B8]" />

        {/* Text Content */}
        <div className="relative flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-bold leading-tight">
            {job.title}
          </h1>
          <p className="text-[20px] sm:text-[22px] md:text-[24px] mt-3 font-normal">
            {job.type}
          </p>
        </div>
      </div>

      {/* Job Details Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 md:px-[150px] py-12 md:py-12 space-y-10">
        {/* Full Description */}
        <div>
          <h2 className="text-[24px] sm:text-[20px] font-semibold mb-5 text-black">
            Job Description
          </h2>
          <p className="text-[16px] text-black font-normal leading-[26px]">
            {job.fullDescription}
          </p>
        </div>

        {/* Responsibilities */}
        <div>
          <h2 className="text-[24px] sm:text-[20px] font-semibold mb-5 text-black">
            Key Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-1 text-[16px] text-black font-normal leading-[26px]">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Qualifications */}
        <div>
          <h2 className="text-[24px] sm:text-[20px] font-semibold mb-5 text-black">
            Qualifications / Requirements
          </h2>
          <ul className="list-disc list-inside space-y-1 text-[16px] text-black font-normal leading-[26px]">
            {job.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-[24px] sm:text-[20px] font-semibold mb-5 text-black">
            Why Join Us?
          </h2>
          <ul className="text-[16px] text-black font-normal leading-[26px]">
            {job.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};