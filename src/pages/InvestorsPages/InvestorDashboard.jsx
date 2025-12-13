import { useEffect, useState } from "react";
import { getContent } from "../../services/investorAuth";
import Footer from "../../components/footer";
import { mainPagesLinksList } from "../../data/PagesLinkList";

const footerUpBoxInfoObj = {
  head: `Have questions about your investment?`,
  para: "We’re here to help with clarity, updates, and next steps, providing transparent insights that support your investment journey.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

export default function InvestorDashboard() {
  const [content, setContent] = useState([]);
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const token = sessionStorage.getItem("investorSessionToken");

  // Extract years correctly from published_date
  const years = [...new Set(
    content
      .filter(c => c.investor_filetype === "pdf")
      .map(c => new Date(c.investor_published_date).getFullYear())
  )].sort().reverse();

  const [selectedYear, setSelectedYear] = useState(null);

  // All videos
  const videoList = content.filter((item) => item.investor_filetype === "video");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Auto-select first video
  useEffect(() => {
    if (videoList.length > 0 && !selectedVideo) {
      setSelectedVideo(videoList[0]);
    }
  }, [videoList, selectedVideo]);

  // Auto-select latest year
  useEffect(() => {
    if (years.length > 0 && !selectedYear) {
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear]);

  // Load dashboard data
  useEffect(() => {
    if (!token) return;

    const loadDashboard = async () => {
      try {
        const res = await getContent(token);
        console.log("API DATA:", res.data);

        setContent(res.data.investor_data || []);

        const p = res.data.investor_profile || {};
        setProfile({
          name: p.investor_name || "",
          email: p.investor_emailid || "",
        });

      } catch (err) {
        console.error("Dashboard Load Error:", err);
      }
    };

    loadDashboard();
  }, [token]);

  // Format month + year from date
  const formatMonthYear = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  // Extract initials → Always 2 letters
  const getInitials = (fullName) => {
    if (!fullName) return "";

    const parts = fullName.trim().split(" ").filter(Boolean);

    if (parts.length === 1) {
      // single word name → first 2 letters
      return parts[0].slice(0, 2).toUpperCase();
    }

    // multi word → take 1st letters of first 2 words
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <div className="bg-[#FFFFFF] overflow-hidden">

      {/* HEADER */}
      <div className="px-7 md:px-14 py-4 bg-[#F8F8F8] flex items-center justify-between">
        <h2 className="text-[18px] md:text-[22px] text-[#000000E5] font-semibold">
          Anvi Robotics Investor Relations
        </h2>

        {/* PROFILE */}
        <div className="relative">

          {/* MOBILE ICON */}
          <div
            className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center 
                       text-white font-bold text-lg md:hidden cursor-pointer"
            onClick={() => setShowProfilePopup(!showProfilePopup)}
          >
            {getInitials(profile.name)}
          </div>

          {/* DESKTOP PROFILE */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white font-bold text-lg">
              {getInitials(profile.name)}
            </div>

            <div className="text-left">
              <p className="text-[15px] font-medium text-[#000000]">{profile.name}</p>
              <p className="text-[13px] text-gray-600">{profile.email}</p>
            </div>
          </div>

          {/* MOBILE DROPDOWN */}
          {showProfilePopup && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setShowProfilePopup(false)} />

              <div className="absolute top-[50px] right-0 bg-white shadow-xl rounded-xl p-4 
                              z-50 border border-gray-200 animate-slideDown">
                <button
                  className="absolute top-2 right-2 text-gray-600 text-lg"
                  onClick={() => setShowProfilePopup(false)}
                >
                  ✕
                </button>

                <div className="items-center mt-2">
                  <p className="font-semibold text-[15px]">{profile.name}</p>
                  <p className="text-[13px] text-gray-600">{profile.email}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* BANNER */}
      <div className="relative h-[450px] w-full">
        <img src="/images/careers/career.png" alt="Our Vision" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="absolute bottom-10 left-7 md:left-14 text-white text-[42px] lg:text-[60px] font-semibold z-10 font-['Wix Madefor Display']">
          Welcome to the <br /> ANVI Investor Portal
        </div>
      </div>

      {/* WE BUILD */}
      <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[150px] font-['Wix_Madefor_Display']">
        <img src="/images/home/we-build.png" alt="We Build" className="w-full h-auto" />
        <p className="text-[20px] md:text-[23px] text-[#282828] mt-[25px] font-medium leading[24px] text-center">
          Every leap forward begins with a bold idea. At ANVI, we don't just imagine the future {" "}
          <span className="hidden md:block h-0">
            <br />
          </span>{" "}
          we engineer it. Across every frontier, we build what tomorrow is made of.
        </p>
      </section>

      {/* NEWSLETTERS */}
      <div className="px-7 py-10 md:px-14 md:py-20 bg-[#F9FAFB] font-['Wix_Madefor_Display']">
        <h2 className="text-[28px] md:text-[32px] lg:text-[46px] font-medium text-[#111111]">News Letters</h2>
        <p className="text-[18px] md:text-[24px] py-3 md:py-6 font-regular text-[#111111]">View yearly & monthly company updates</p>

        {/* Year Filter Buttons */}
        <div className="flex gap-3 mt-4 md:mt-8">
          {years.map((yr, idx) => (
            <button
              key={`${yr}-${idx}`}
              onClick={() => setSelectedYear(yr)}
              className={`px-6 py-2 rounded-full border text-[13px] md:text-[15px] ${
                selectedYear === yr ? "bg-[#0E1726] text-white" : "bg-white text-[#0E1726] border-gray-300"
              }`}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Newsletter Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-6">
          {content
            .filter((c) =>
              c.investor_filetype === "pdf" &&
              new Date(c.investor_published_date).getFullYear() === selectedYear
            )
            .map((item, idx) => (
              <div key={item._id || idx} className="rounded-[24px] border bg-white shadow hover:shadow-lg cursor-pointer transition">
                <img
                  src="/images/default-news.jpg"
                  className="w-full h-[180px] object-cover rounded-t-xl"
                />

                <div className="p-5">
                  <p className="text-[14px] font-semibold text-[#8C331F]">
                    {formatMonthYear(item.investor_published_date)}
                  </p>

                  <h3 className="text-[18px] font-semibold text-[#0E1726] mt-1">{item.investor_title}</h3>
                  <p className="text-[15px] text-[#17253D] mt-2 line-clamp-3">
                    {item.investor_description}
                  </p>

                  <a
                    href={item.investor_file_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] mt-3 inline-block font-semibold text-[#0E1726]"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* VIDEO LIBRARY  */}
      <div className="px-7 py-10 md:px-14 md:py-20 bg-[#F9FAFB] font-['Wix_Madefor_Display']">
        <h2 className="text-[28px] md:text-[32px] lg:text-[46px] font-medium text-[#111111]">Video Library</h2>
        <p className="text-[18px] md:text-[24px] py-3 md:py-6 font-regular text-[#111111]">Watch our Anvi product demos and field tests</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">

          {/* MAIN PLAYER */}
          <div className="lg:col-span-2">
            {selectedVideo && (
              <>
                <video
                  src={selectedVideo.investor_file_url}
                  controls
                  className="w-full h-[420px] object-cover rounded-[24px] shadow"
                />

                <h3 className="text-[30px] font-semibold text-[#111111] mt-6">
                  {selectedVideo.investor_title} — {selectedVideo.investor_year}
                </h3>

                <p className="text-[16px] text-[#111111] mt-3 leading-relaxed">
                  {selectedVideo.investor_description}
                </p>
              </>
            )}
          </div>

          {/* VIDEO LIST */}
          <div className="flex flex-col gap-4 max-h-[450px] overflow-y-auto pr-2">
            <h4 className="text-[22px] font-semibold mb-1">All Videos</h4>

            {videoList.map((vid, idx) => (
              <div
                key={vid._id || idx}
                onClick={() => setSelectedVideo(vid)}
                className={`flex items-center gap-4 p-3 rounded-xl border cursor-pointer transition 
                  ${selectedVideo?._id === vid._id ? "border-[#0E1726] shadow-md" : "border-gray-200"}`}
              >
                <video
                  src={vid.investor_file_url}
                  className="w-[110px] h-[70px] rounded-lg object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-[15px] text-[#0E1726]">{vid.investor_title}</p>
                  <p className="text-[13px] text-gray-600">
                    {new Date(vid.investor_published_date).getFullYear() || "Year not available"}
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
          <h2 className="text-[#101014] text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-medium leading-tight">
            PART OF OUR JOURNEY
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

      {/*  FOOTER  */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />

    </div>
  );
}
