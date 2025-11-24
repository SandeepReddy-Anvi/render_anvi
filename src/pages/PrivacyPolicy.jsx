import { PhoneCall } from "lucide-react";
import Footer from "../components/footer";
import { mainPagesLinksList } from "../data/PagesLinkList";

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Industry?",
  para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const PrivacyPolicy = () => {
  return (
    <>
      <main id="news" className="w-full h-full mb-40 bg-white    font-dm-sans ">
        <h1 className=" text-black  font-semibold    text-[35px] gap-1 " >Privacy Policy</h1>
<section className="ml-4 md:w-[600px] lg:w-[1000px]  self-center ">

        <h3 className="" >
          Last Updated : [24/11/2025]
        </h3>  
        <div className=" mt-58 w-full ">
                  <p className=" mt-6 ">Anvi is committed to protecting the privacy of visitors to our website
                   . <a href="https://www.anvi.co/" className=" hover:underline hover:text-blue-900">(https://www.anvi.co/)</a>This Privacy Policy explains what personal information we collect, how we use it, and your rights 
                     regarding that information. By using our site and services, you consent to the practices described herein.</p>

                     {/* first paragraph */}
<h1 className=" mt-5  font-semibold text-black text-[18px]"> 
  1. Information We Collect 
</h1>
 <p className=" mt-3">
  Contact Information:
 </p>
           <p>When you fill out any “Get In Touch” or contact inquiry forms on our site, 
            we collect personal contact details such as your name, email address, 
            and phone number. We also collect any message content you submit to help us respond to your inquiries or requests. </p>
   <p className=" mt-3">
 Job Applicant Data:
 </p>    
 <p>For our careers or hiring process, we collect information submitted by applicants. This may include resume 
  details, work history, educational background, contact details, and other information you provide when applying for a position. </p>    
      <p className=" mt-3">
Automatically Collected Data:
 </p>  
 <p>
  We automatically collect certain technical information when you visit our site, such as your IP address, browser type, device type,   and pages viewed.
 This is done through cookies and similar tracking technologies to improve site functionality and analytics. 
 </p>

{/* second paragraph */}

<h1 className=" mt-5  font-semibold text-black text-[18px]">
2. How We Use Your Information 
</h1>
 
           <p className=" mt-3">Customer Service and Communication: We use your contact details to respond to inquiries, provide information, and maintain communication. </p>
   
 <p className=" mt-3">Hiring and Recruitment: Your job application data is used exclusively for evaluating and conducting the hiring process. Only our HR team and authorized hiring managers have access to this information.  </p>    
  
 <p className=" mt-3">
 Marketing and Updates: With your consent, we may use your email to share news, project updates, or event information related to Anvi. You can opt out at any time by following unsubscribe instructions in our emails. 
 </p>
 <p className=" mt-3">
  Analytics and Site Improvement: We use tools (see Third-Party Services below) to understand site traffic and improve user experience. 
 </p>
 <p className=" mt-3">
  Legal Compliance: We may use or disclose your information as required by law or to protect our legal rights.  </p>

{/* third paragraph */}
<h1 className=" mt-5  font-semibold text-black text-[18px]">
3. Third-Party Services and Integrations 
</h1>
 
 <p className=" mt-3">Web Analytics: Our site may use Google Analytics and/or Wix Analytics to
   understand visitor behavior. These services use cookies and IP addresses to collect anonymous visitor information.
   You can learn how Google Analytics collects and processes data at Google’s Privacy Policy. </p>
   
 <p className=" mt-3">Social Media Links: We provide links to our official social media pages (e.g., LinkedIn and Instagram).
   Visiting those platforms is subject to their own privacy practices, which we do not control.   </p>    
  
 <p className=" mt-3">
Recruitment Platforms: We may use third-party recruiting tools or email systems 
to manage job applications. Any shared data (such as resumes) will be handled securely and only for recruitment purposes.  </p>

{/* fourth paragraph */}
<h1 className=" mt-5  font-semibold text-black text-[18px]">
4. Data Security and Retention 
</h1>
 
 <p className=" mt-3">Security Measures: We implement reasonable safeguards (such as SSL encryption and secure servers) 
  to protect your data from unauthorized access, disclosure, or alteration. </p>
   
 <p className=" mt-3">Data Retention: We retain personal information only as long as necessary for communication, recruitment, or compliance with legal obligations. Job applicant data for 
  unsuccessful candidates may be stored for a limited period (e.g., up to 2 years) in case future opportunities arise. </p>    
  
 <p className=" mt-3">
Children’s Data: Our services are not directed to children under 13, 
  and we do not knowingly collect information from them.   </p>

  {/* fifth paragraph */}
  <h1 className=" mt-5  font-semibold text-black text-[18px]">
5. Your Rights and Choices 
</h1>
<p className="mt-3">Depending on your location, you may have rights to: </p>
<span>

</span>
 
<ul className="list-disc list-inside space-y-2 mt-3">
  <li>Access or request a copy of your data.</li>
  <li>Correct or update inaccurate information.</li>
  <li>Request deletion of your data (“Right to be Forgotten”).</li>
  <li>Withdraw consent for marketing communications at any time.</li>
</ul>

<p className="mt-3">We do not sell personal data. To exercise any of these rights, please contact us (see below).  </p>

{/* sixth paragraph */}
  <h1 className=" mt-5  font-semibold text-black text-[18px]">
 6. Contact Us 
</h1>
<p className="mt-3">For questions about this Privacy Policy or our data practices, please contact us: </p>
 <p className=" mt-3">   <span className="font-semibold mr-1">Email:</span>
 infoAnvi.Co</p>
 <p> <span className=" font-semibold mr-1">
Address: 
  </span>
1st Floor, Profound Builders, Whitefields, Kondapur, Hyderabad, Telangana 500084.</p>
<p className="mt-3">We will review and respond to your request in accordance with applicable laws. </p>
{/* seventh paragrap*/}

  <h1 className=" mt-5  font-semibold text-black text-[18px]">
7. Changes to This Policy 
</h1>
<p className=" mt-3">
  We may update this Privacy Policy to reflect changes in our practices or legal requirements. 
  The “Last Updated” date will indicate when changes were made. Please review this page periodically for updates. 
</p>
        </div>

      </section>
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};

export default PrivacyPolicy;