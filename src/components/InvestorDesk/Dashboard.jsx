import { useEffect, useState } from "react";
import { getContent, getProfile, getPrivateFileURL } from "../../services/investorService";
import Footer from "../footer";
import { mainPagesLinksList, pagesLinksList } from "../../data/PagesLinkList";
import { Link } from "react-router-dom";

const footerUpBoxInfoObj = {
  head: `Have questions about your investment?`,
  para: "We’re here to help with clarity, updates, and next steps, providing transparent insights that support your investment journey.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

export default function Dashboard() {
  const [content, setContent] = useState([]);
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [showProfilePopup, setShowProfilePopup] = useState(false);


  const token = localStorage.getItem("investorToken");
  const sector = localStorage.getItem("investorSector");

  const years = [...new Set(content.filter(c => c.type === "pdf").map(c => c.year))].sort().reverse();
  const [selectedYear, setSelectedYear] = useState(null);

  // Video state
const videoList = content.filter((item) => item.type === "video");

const [selectedVideo, setSelectedVideo] = useState(null);

  // Select first video by default when data loads
  useEffect(() => {
    if (videoList.length > 0 && !selectedVideo) {
      setSelectedVideo(videoList[0]);
    }
  }, [videoList, selectedVideo]);

  //yera filter
  useEffect(() => {
    if (years.length > 0 && !selectedYear) {
      setSelectedYear(years[0]); // latest year
    }
  }, [years, selectedYear]);


  // Fetch Content
  useEffect(() => {
  const fetchContent = async () => {
    try {
      const res = await getContent(token);

      // Map content to include SAS URLs
      const updatedContent = await Promise.all(
        res.data.map(async (item) => {
          if (item.type === "video" || item.type === "pdf") {
            const url = await getPrivateFileURL(token, item.fileName);
            return { ...item, url };
          }
          return item;
        })
      );

      setContent(updatedContent);
    } catch (err) {
      console.error(err);
    }
  };

  if (token) fetchContent();
}, [token]);


  // Fetch Profile
  useEffect(() => {
  if (!token) {
    console.log("No token found, redirect to login");
    return;
  }

  const fetchProfile = async () => {
    try {
      const res = await getProfile(token);
      console.log("Profile fetched:", res.data); // <--- check console
      setProfile(res.data);
    } catch (err) {
      console.error("Profile fetch error:", err);
    }
  };

  fetchProfile();
}, [token]);

  

  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      <div className="px-7 md:px-14 py-4 bg-[#F8F8F8] flex items-center justify-between">

        {/* LEFT SIDE: Heading */}
        <h2 className="text-[18px] md:text-[22px] text-[#000000E5] font-semibold">
          Anvi Robotics Investor Relations
        </h2>

        <div className="relative">

          {/* MOBILE: Only Profile Circle */}
          <div 
            className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center 
                      text-white font-bold text-lg md:hidden"
            onClick={() => setShowProfilePopup(!showProfilePopup)}
          >
            {profile.name?.charAt(0)?.toUpperCase() || "P"}
          </div>

          {/* DESKTOP: Full Profile Display */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white font-bold text-lg">
              {profile.name?.charAt(0)?.toUpperCase() || "P"}
            </div>

            <div className="text-left">
              <p className="text-[15px] font-medium text-[#000000]">
                {profile.name}
              </p>
              <p className="text-[13px] text-gray-600">{profile.email}</p>
            </div>
          </div>

          {/* ----- MOBILE POPDOWN PANEL ----- */}
          {showProfilePopup && (
            <>
              {/* Click outside to close */}
              <div
                className="fixed inset-0 z-30"
                onClick={() => setShowProfilePopup(false)}
              />

              {/* Dropdown box */}
              <div
                className="absolute top-[50px] right-0 w-auto bg-white shadow-xl rounded-xl p-4 
                          z-50 border border-gray-200 animate-slideDown"
              >
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 text-gray-600 text-lg"
                  onClick={() => setShowProfilePopup(false)}
                >
                  ✕
                </button>

                <div className="items-center mt-2">
                  <div>
                    <p className="font-semibold text-[15px]">{profile.name}</p>
                    <p className="text-[13px] text-gray-600">{profile.email}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="relative h-[450px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/careers/career.png"
            alt="Robot Vision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Bottom Text */}
        <div className="absolute bottom-10 left-7 md:left-14 z-10 font-['Wix Madefor Display']">
          <h2 className="text-[42px] lg:text-[60px] font-semibold text-white leading-tight">
            Welcome to the <br/>ANVI Investor Portal
          </h2>
        </div>
      </div>

      {/* We Build */}
      <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[150px] font-['Wix_Madefor_Display']">
        <img
          loading="lazy"
          src="/images/home/we-build.png"
          className="w-full h-auto"
          alt="we_build_img"
        />
        <p className="text-[20px] md:text-[23px] text-[#282828] mt-[25px] font-medium leading[24px] text-center">
          Every leap forward begins with a bold idea. At ANVI, we don't just imagine the future {" "}
          <span className="hidden md:block h-0">
            <br />
          </span>{" "}
          we engineer it. Across every frontier, we build what tomorrow is made of.
        </p>
      </section>

      {/* News Letter */}
      <div className="px-7 py-10 md:px-14 md:py-20 bg-[#F9FAFB] font-['Wix_Madefor_Display']">

        <h2 className="text-[28px] md:text-[32px] lg:text-[46px] font-medium text-[#111111]">News Letters</h2>
        <p className="text-[18px] md:text-[24px] py-3 md:py-6 font-regular text-[#111111]">View yearly & monthly company updates</p>

        {/* CONTENT SECTION */}
      
        {/* Filters */}
        <div className="flex gap-3 mt-4 md:mt-8">
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-6 py-2 rounded-full border text-[13px] md:text-[15px] ${
                selectedYear === yr
                  ? "bg-[#0E1726] text-white"
                  : "bg-white text-[#0E1726] border-gray-300"
              }`}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-6">
          {content
            .filter((item) => item.type === "pdf" && item.year === selectedYear)
            .map((item) => (
              <div
                key={item._id}
                className="rounded-[24px] border bg-white shadow hover:shadow-lg cursor-pointer transition"
              >
                {/* Image */}
                <img
                  src={item.thumbnail || "/images/default-news.jpg"}
                  alt={item.title}
                  className="w-full h-[180px] object-cover rounded-t-xl"
                />

                {/* Card Body */}
                <div className="p-5">
                  <p className="text-[14px] font-semibold text-[#8C331F]">
                    {item.month}
                  </p>

                  <h3 className="text-[18px] font-semibold text-[#0E1726] mt-1">
                    {item.title}
                  </h3>

                  <p className="text-[15px] text-[#17253D] mt-2 line-clamp-3">
                    {item.description}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] mt-3 inline-block font-semibold text-[#0E1726]"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
      
      {/* video Library*/}
      <div className="px-7 py-10 md:px-14 md:py-20 bg-[#F9FAFB] font-['Wix_Madefor_Display']">
        <h2 className="text-[28px] md:text-[32px] lg:text-[46px] font-medium text-[#111111]">Video Library</h2>
        <p className="text-[18px] md:text-[24px] py-3 md:py-6 font-regular text-[#111111]">Watch our Anvi product demos and field tests</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">

          {/* LEFT — Main Video Player */}
          <div className="lg:col-span-2">
            {selectedVideo && (
              <>
                <video
                  src={selectedVideo.url}
                  controls
                  className="w-full h-[420px] object-cover rounded-[24px] shadow"
                />

                <h3 className="text-[28px] lg:text-[30px] font-semibold text-[#111111] mt-6">
                  {selectedVideo.title} — {selectedVideo.year}
                </h3>

                <p className="text-[16px] text-[#111111] mt-3 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </>
            )}
          </div>

          {/* RIGHT — All Videos List */}
          <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2">

            <h4 className="text-[22px] font-semibold mb-1">All Videos</h4>

            {videoList.map((vid) => (
              <div
                key={vid._id}
                onClick={() => setSelectedVideo(vid)}
                className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer border transition hover:shadow
                  ${selectedVideo?._id === vid._id ? "border-[#0E1726] shadow-md" : "border-gray-200"}
                `}
              >
                {/* Thumbnail */}
                <img
                  src={vid.thumbnail || "/images/default-video.jpg"}
                  className="w-[110px] h-[70px] rounded-lg object-cover"
                />

                <div className="flex flex-col">
                  <p className="font-semibold text-[15px] text-[#0E1726]">
                    {vid.title}
                  </p>
                  <p className="text-[13px] text-gray-600">
                    {vid.duration || "00:00"} • {vid.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Gratitude */}
<div className="relative bg-[#F9FAFB] px-6 md:px-20 lg:px-32 xl:px-48 2xl:px-64 py-10 md:py-20 w-full font-['Wix_Madefor_Display']">

  {/* Wrapper */}
  <div className="relative w-full min-h-[550px] md:min-h-[600px] lg:min-h-[650px] xl:min-h-[700px] 2xl:min-h-[750px]">

    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src="/images/investors/ty.png"
        alt="background"
        className="w-full h-full object-cover rounded-[24px]"
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-[#E9ECF2]/20 rounded-[24px]" />

    {/* Content */}
    <div className="relative z-10 p-6 md:p-10 lg:pl-14 lg:pt-20 xl:pl-20">

      <div className="flex flex-cols-1 lg:flex-cols-2 gap-10 items-center">

        {/* Left Text Section */}
        <div>
          <h2 className="text-[#101014] text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-semibold leading-tight">
            INVESTOR STOCK CERTIFICATE
          </h2>

          <div className="font-manrope text-[#000000] text-[15px] md:text-[16px] xl:text-[18px] leading-relaxed">
            <p className="pt-4 lg:pt-6">Dear Investor,</p>
            <p className="py-4 lg:py-6">
              At Anvi, every contribution matters. Your belief in our vision continues to drive
              innovation, growth, and impact across all our ventures. This journey is as much
              yours as it is ours.
            </p>
            <p className="pb-4 lg:pb-6">
              Thank you for being a valued part of the Anvi family. Together, we're shaping
              the future.
            </p>
            <p>
              Warm regards,<br />
              Investors Desk, Anvi.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/investors/products.png"
            className="w-[300px] md:w-[420px] lg:w-[500px] xl:w-[560px] 2xl:w-[620px] h-auto object-cover rounded-lg"
            alt="Products"
          />
        </div>

      </div>

      {/* Bottom Text */}
      <p className="mt-6 md:mt-10 text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-normal max-w-4xl">
        Every leap forward begins with a bold idea. At ANVI, we don't just imagine the future —
        we engineer it. Across every frontier, we build what tomorrow is made of.
      </p>

    </div>
  </div>
</div>


      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />

    </div>
  );
}
