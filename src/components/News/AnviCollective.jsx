import Footer from "../footer";
import { mainPagesLinksObj } from "../../data/PagesLinkList";

const footerUpBoxInfoObj = {
  head: "Ready to explore the future with Anvi?",
  para:
    "Step into tomorrow with Anvi - where deep-tech innovation meets safety, efficiency, and sustainability.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const imgurl = {
    url: [
        "/images/news/AnviCollective7.jpeg",
        "/images/news/AnviCollective10.jpeg",
        "/images/news/AnviCollective6.jpeg",
        "/images/news/AnviCollective2.jpeg",
        "/images/news/AnviCollective9.jpeg",
        "/images/news/AnviCollective4.jpeg",
        "/images/news/AnviCollective8.jpeg",
        "/images/news/AnviCollective3.jpeg",
        "/images/news/AnviCollective5.jpeg",
    ],
};

const AnviCollective = () => {
  return (
    <>
      <section
        className="w-full px-[15px] md:px-[60px] lg:pl-[60px] lg:pr-0 flex flex-col lg:flex-row py-[40px] lg:py-[60px] bg-[#FFFFFF]"
        style={{ fontFamily: "Sahitya", fontWeight: "400" }}
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[85%] lg:border-r-[1.5px] lg:border-r-[#CD0054]">
          <div className="w-full lg:w-[70%]">
            <h2 className="text-[32px] lg:text-[44px] pb-[16px] lg:pb-[24px]">
              Anvi Collective 2025 | The Next
            </h2>
            <p className="text-[16px] lg:text-[20px]">
              Anvi’s annual update event highlighting key achievements from 2025
              and outlining the company’s strategic direction for 2026 and
              beyond.
            </p>
          </div>

          {/* HERO IMAGE */}
          <img
            src="/images/news/AnviCollective1.png"
            alt="Anvi Collective 2025"
            className="mt-[32px] lg:mt-[48px] rounded-[8px] w-full lg:pr-[80px]"
          />

          {/* INTRO */}
          <div className="mt-[40px] w-full lg:pr-[80px] flex flex-col gap-[20px]">
            <h2 className="text-[28px] lg:text-[44px]">Introduction</h2>
            <p className="text-[16px] lg:text-[20px]">
              Anvi Collective 2025 | The Next is Anvi’s annual corporate update
              initiative conducted to publicly communicate the company’s
              progress in 2025 and present its roadmap for 2026.
            </p>
            <p className="text-[16px] lg:text-[20px]">
              It serves as a transparent platform to share milestones, learnings,
              and strategic priorities shaping Anvi’s next phase of growth.
            </p>
          </div>

          {/* THEME */}
          <div className="mt-[40px] w-full lg:pr-[80px] flex flex-col gap-[20px]">
            <h2 className="text-[28px] lg:text-[44px]">
              Event Theme – “The Next”
            </h2>
            <p className="text-[16px] lg:text-[20px]">
              The Next represents Anvi’s transition from delivery to expansion,
              connecting achievements from 2025 with forward-looking plans for
              2026.
            </p>
            <p className="text-[16px] lg:text-[20px]">
              It reflects how existing systems and technologies will evolve into
              future-ready solutions.
            </p>
          </div>

          {/* WHY IT MATTERS */}
          <div className="mt-[40px] w-full lg:pr-[80px] flex flex-col gap-[20px]">
            <h2 className="text-[28px] lg:text-[44px]">Why This Event Matters</h2>
            <ul className="list-disc pl-[24px] text-[16px] lg:text-[20px] flex flex-col gap-[16px]">
              <li>What Anvi has achieved so far</li>
              <li>How current projects are progressing</li>
              <li>What direction the company is taking next</li>
            </ul>
            <p className="text-[16px] lg:text-[20px]">
              By sharing this information openly, Anvi ensures alignment between
              its vision, execution, and long-term goals.
            </p>
          </div>

          {/* LOOKING AHEAD */}
          <div className="mt-[40px] w-full lg:pr-[80px] flex flex-col gap-[20px]">
            <h2 className="text-[28px] lg:text-[44px]">Looking Ahead</h2>
            <p className="text-[16px] lg:text-[20px]">
              Anvi Collective 2025 outlines Anvi’s strategic focus for 2026 and
              beyond, advancing toward scalable and future-ready solutions.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div
          className="
            w-full lg:w-[20%]
            py-[32px] lg:py-[20px]
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-1
            gap-[16px]
            place-items-center
          "
        >
          {imgurl.url.map((item, index) => (
  <img
    key={index}
    src={item}
    alt={`Anvi Collective ${index + 2}`}
    className="
      w-[80%]
      h-auto
     
      object-cover
    "
  />
))}

         
        </div>
      </section>

      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};

export default AnviCollective;
