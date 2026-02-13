import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { mainPagesLinksObj } from "../data/PagesLinkList";

// 1. DYNAMIC DATA OBJECT
const privacyContent = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Anvi (“we”, “our”, “us”) is committed to safeguarding your personal information and ensuring that your privacy is protected. We understand the importance of transparency and trust when it comes to handling your data. This Privacy Policy outlines in detail the types of information we collect, how we use and protect that information, and the choices and rights you have regarding your personal data.",
      "This policy applies to all users who visit, browse, or interact with our website (https://www.anvi.co/), as well as individuals who contact us, apply for jobs, or engage with our services in any form. By accessing or using our website, you acknowledge and agree to the practices described in this Privacy Policy. If you do not agree with any part of this policy, we kindly request that you discontinue the use of our website.",
      "Our goal is to provide a safe, transparent, and seamless experience for every visitor. We continuously work to maintain industry-standard security practices, comply with applicable privacy laws, and handle your information responsibly.  ",
    ],
  },
  {
    id: "Information We Collect",
    title: "Information We Collect",
    sections: [
      {
        head: "Contact Information",
        text: "When you fill out any “Get In Touch” or contact inquiry forms on our site, we collect personal details such as your name, email address, phone number, and any message content you provide. This helps us respond to your inquiries or requests.",
      },
      {
        head: "Job Applicant Data",
        text: "When applying for a position, we may collect information such as your resume, work experience, educational details, contact information, and any additional data you provide during the hiring process.",
      },
      {
        head: "Automatically Collected Data",
        text: "When you visit our website, we automatically collect certain technical information, such as your IP address, browser type, device type, and pages viewed. This data is collected through cookies and similar technologies to improve site functionality and analytics.",
      },
    ],
  },
  {
    id: "How We Use Your Information",
    title: "How We Use Your Information",
    sections: [
      {
        head: "Customer Service & Communication",
        text: "We use your contact information to respond to your inquiries, provide requested information, and maintain communication.",
      },
      {
        head: "Hiring & Recruitment",
        text: "Job application data is used exclusively for evaluating and processing applications. Only authorized HR personnel and hiring managers have access to this information.",
      },
      {
        head: "Marketing & Updates",
        text: "With your consent, we may send emails containing news, project updates, or event information related to Anvi. You may opt out at any time using the unsubscribe link in our emails.",
      },
      {
        head: "Analytics & Site Improvement",
        text: "We use analytics tools to understand website traffic, user behavior, and to improve user experience.",
      },
      {
        head: "Legal Compliance",
        text: "We may use or disclose information if required by law or to protect our legal rights.",
      },
    ],
  },
  {
    id: "Third-Party Services and Integrations",
    title: "Third-Party Services and Integrations",
    sections: [
      {
        head: "Web Analytics",
        text: "Our website may use Google Analytics or Wix Analytics to analyze visitor behavior. These services use cookies and IP addresses to collect anonymous data. You can learn how Google processes data by reviewing Google’s Privacy Policy.",
      },
      {
        head: "Social Media Links",
        text: "Our website includes links to official social media pages (such as LinkedIn, X  and Instagram). Your interactions on these platforms are governed by their respective privacy policies.",
      },
      {
        head: "Marketing & Updates",
        text: "With your consent, we may send emails containing news, project updates, or event information related to Anvi. You may opt out at any time using the unsubscribe link in our emails.",
      },
      {
        head: "Recruitment Platforms",
        text: "We may use third-party recruitment tools or email systems to manage applications. Any shared information will be handled securely and used solely for hiring purposes.",
      },
    ],
  },
  {
    id: "Data Security and Retention",
    title: "Data Security and Retention",
    sections: [
      {
        head: "Security Measures",
        text: "We implement reasonable safeguards, such as SSL encryption and secure servers, to protect your data from unauthorized access, disclosure, or alteration.",
      },
      {
        head: "Data Retention",
        text: "We retain personal data only for as long as necessary for communication, recruitment, or legal compliance. Job applicant data for unsuccessful candidates may be stored for up to 2 years for future opportunities.",
      },
      {
        head: "Children’s Data",
        text: "Our services are not directed toward children under the age of 13, and we do not knowingly collect personal information from them.",
      },
    ],
  },
  {
    id: "Your Rights and Choices",
    title: "Your Rights and Choices",
    head01: "Depending on your location, you may have rights to:",
    list01: [
      "Access or request a copy of your data",
      "Correct or update inaccurate information",
      "Request deletion of your data (“Right to be Forgotten”)",
      "Withdraw consent for marketing communications",
    ],
    paragraphs01: "We do not sell personal data",
    paragraphs02:
      "To exercise your rights, please contact us using the details below.",
  },
  {
    id: "Contact Us",
    title: "Contact Us",
    head01:
      "If you have questions about this Privacy Policy or our data practices, please contact us:",
    link: "Email: info@anvi.co",
    address:
      "Address: 1st Floor, Profound Builders, Whitefields, Kondapur, Hyderabad, Telangana 500084",
    paragraphs01:
      "We will review and respond to your request in accordance with applicable laws.",
  },
];

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Industry?",
  para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const PrivacyPolicy = () => {
  const [activeId, setActiveId] = useState("introduction");

  // 2. SCROLLSPY LOGIC (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-65% 0% -70% 0%" }, // Triggers when section is in view
    );

    privacyContent.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="max-w-[1440px] mx-auto px-2 md:px-10  py-10 ">
        <h1 className="text-[#100000] font-semibold text-[36px] md:text-[48px] leading-tight mb-4 font-raleway">
          Anvi Privacy Policy
        </h1>
        <p className="text-[#575757] font-medium">
          Last Updated: 05 February 2026
        </p>
      </header>
      <main
        className="
          max-w-[1440px] mx-auto 
          px-6 md:px-12 2xl:px-0 
          py-10 lg:py-20 
          flex flex-col lg:flex-row items-start 
          gap-10 lg:gap-20 2xl:gap-32 
          font-raleway
        "
      >
        {/* DIV 1: LEFT SIDEBAR (The one not working) */}
        <aside className="lg:w-1/6 shrink-0 sticky top-28 lg:sticky  h-max self-start hidden lg:block">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            On this page
          </p>

          {/* The vertical line container */}
          <div className="relative border-l-4 border-gray-100">
            <ul className="flex flex-col gap-4">
              {privacyContent.map((item) => (
                <li key={item.id} className="relative">
                  {/* The Active Red Indicator Line */}
                  {activeId === item.id && (
                    <div className="absolute left-[-3px] top-0 h-[70px] w-[3px] bg-red-500 rounded-full " />
                  )}

                  <a
                    href={`#${item.id}`}
                    className={`block pl-6 pt-5 pb-5 text-sm font-raleway  transition-all duration-500 ${
                      activeId === item.id
                        ? "text-red-500 font-bold"
                        : "text-[#575757] hover:text-gray-700"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* RIGHT CONTENT SECTION */}
        <article className="flex-1 max-w-auto">
          <div className="space-y-12">
            {privacyContent.map((item) => (
              <article key={item.id} id={item.id} className="scroll-mt-32">
                {/* Heading (Dynamic h2) */}
                <h2 className="text-[#CD0054] font-[500] font-raleway text-[20px] mb-6 underline underline-offset-[10px] decoration-1">
                  {item.title}
                </h2>

                {/* Paragraphs (Dynamic p) */}
                <div className="space-y-5 text-[#575757] text-[16px] font-raleway leading-[1.8]">
                  {item.paragraphs?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}

                  {/* Sub-sections (Dynamic h3 + p) */}
                  {item.sections?.map((sec, idx) => (
                    <div key={idx} className="pt-2">
                      <h3 className="text-[#100000] font-raleway font-medium mb-2">
                        {sec.head}
                      </h3>
                      <p>{sec.text}</p>
                    </div>
                  ))}

                  <h3 className="text-[#100000] font-raleway font-medium mb-2">
                    {item.head01}
                  </h3>
                  <div>
                    {item.list01 && (
                      <ul className="list-disc list-inside space-y-0">
                        {item.list01.map((li, idx) => (
                          <li key={idx}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <a href="mailto:info@anvi.co">{item.link}</a>
                  <br />
                  <a href="https://www.google.com/maps/place/Anvi+Space+Private+Limited/@17.4571026,78.370425,21z/data=!3m1!5s0x3bcb93cf84a648eb:0xf42ea2f9403a7a36!4m14!1m7!3m6!1s0x3bcb93cf9bc32c83:0x1e85e5cc49998439!2sProfound+Builders!8m2!3d17.4571626!4d78.370505!16s%2Fg%2F11bw2fmfdw!3m5!1s0x3bcb93301fcdcf79:0xece2e84e0d5308e3!8m2!3d17.4570773!4d78.3703841!16s%2Fg%2F11xf52f6kh?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D">
                    {item.address}
                  </a>

                  <p style={{ margin: 0 }}>{item.paragraphs01}</p>
                  <p style={{ margin: 0 }}>{item.paragraphs02}</p>
                </div>
              </article>
            ))}
          </div>
        </article>
      </main>

      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};

export default PrivacyPolicy;
