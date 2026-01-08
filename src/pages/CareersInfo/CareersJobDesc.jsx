import { Link, useParams } from "react-router-dom";
import { jobPositions } from "../../data/jobData";
import Footer from "../../components/footer";
import { IconsObj } from "../../utils/Iconify_icons";
import { pagesLinksList } from "../../data/PagesLinkList";

const CareersJobDesc = () => {
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
    <div className="w-full font-raleway">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen max-md:py-2 min-h-[250px] md:h-[453px] flex items-center justify-center bg-cover bg-center"
        // style={{ backgroundImage: `url(${job.image})` }}
        style={{ backgroundImage: `url("/images/careers/hero.jpeg")` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000B8]" />

        {/* Text Content */}
        <div className="relative items-center justify-center text-white px-4 max-w-[760px]">
          <h1 className="text-[40px] my-2 sm:text-[42px] md:text-[44px] lg:text-[46px] font-bold leading-tight">
            {job.title}
          </h1>
          <p className="text-[20px] sm:text-[22px] md:text-[22px] mt-3 font-regular">
            Experience: {job.experience}
          </p>
          <p className="text-[20px] sm:text-[22px] md:text-[22px] mt-3 font-regular">
            Role Type: {job.description}
          </p>
        </div>
      </div>

      {/* Job Details Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 md:px-[150px] py-12 md:py-12 space-y-10">
        {/* Full Description */}
        <div>
          <h2 className="text-[20px] sm:text-[22px] font-semibold mb-5 text-[#000000]">
            Job Description
          </h2>
          <p className="text-[16px] text-[#000000] font-medium leading-[26px]">
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
            Required Skills & Qualifications
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
            Preferred Skills
          </h2>
          <ul className="list-disc list-inside space-y-1 text-[16px] text-black font-normal leading-[26px]">
            {job.skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <Link
            to={`${pagesLinksList.JobInfo_Apply.replace(":jobId", jobId)}`}
            className="link-bg-icon mt-6 w-full md:max-w-[150px]"
          >
            Apply Now <i className="rotate-45">{IconsObj.arrow}</i>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};


export default CareersJobDesc;