import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { ScrollToTop } from "./hooks/ScrollToTop";
import { pagesLinksList } from "./data/PagesLinkList";

import Header from "./components/header";

// Lazy-loaded pages (improves initial bundle size)
const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Industries = React.lazy(() =>
  import("./pages/Industries").then((module) => ({
    default: module.Industries
  }))
);
const Investors = React.lazy(() =>
  import("./pages/Investors").then((module) => ({
    default: module.Investors
  }))
);
const ContactUs = React.lazy(() =>
  import("./pages/ContactUs").then((module) => ({
    default: module.ContactUs
  }))
);
const Solutions = React.lazy(() => import("./pages/Solutions"));
const SolutionsArop = React.lazy(() => import("./pages/All_Solutions/SolutionsArop"));
const SolutionsSewage = React.lazy(() => import("./pages/All_Solutions/SolutionsSewage"));
const News = React.lazy(() =>
  import("./pages/News").then((module) => ({
    default: module.News
  }))
);

const Energy = React.lazy(() => import("./pages/All_Industries/Energy"));
const Textiles = React.lazy(() => import("./pages/All_Industries/Textiles"));
const Foundations = React.lazy(() => import("./pages/All_Industries/Foundations"));
const LifeSciences = React.lazy(() => import("./pages/All_Industries/LifeSciences"));
const SemiConductors = React.lazy(() => import("./pages/All_Industries/SemiConductors"));
const Entertainment = React.lazy(() => import("./pages/All_Industries/Entertainment"));

const Careers = React.lazy(() => import("./pages/careers"));
const CareersOpenings = React.lazy(() => import("./pages/CareersInfo/CareersOpenings"));
const CareersJobDesc = React.lazy(() => import("./pages/CareersInfo/CareersJobDesc"));
const CareersJobApply = React.lazy(() => import("./pages/CareersInfo/CareersJobApply"));

const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));

const Loader = (
  <div className="w-full h-[65vh] flex items-center justify-center text-[#000] text-xl font-[400] bg-[#fff]">
    Loading...
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      {/* Suspense at route level so any lazy route shows the Loader while loading */}
      <Suspense fallback={Loader}>
        <Routes>
          {/* Main Pages */}
          <Route path={pagesLinksList.Home} element={<Home />} />
          <Route path={pagesLinksList.AboutUs} element={<AboutUs />} />
          <Route path={pagesLinksList.Investors} element={<Investors />} />
          <Route path={pagesLinksList.News} element={<News />} />
          <Route path={pagesLinksList.ContactUs} element={<ContactUs />} />
          <Route path={pagesLinksList.PrivacyPolicy} element={<PrivacyPolicy />} />

          {/* Solutions */}
          <Route path={pagesLinksList.Solutions} element={<Solutions />} />
          <Route path={pagesLinksList.Solutions_AROP} element={<SolutionsArop />} />
          <Route path={pagesLinksList.Solutions_Sewage} element={<SolutionsSewage />} />

          {/* Industries */}
          <Route path={pagesLinksList.Industries} element={<Industries />} />
          <Route path={pagesLinksList.Energy} element={<Energy />} />
          <Route path={pagesLinksList.Textiles} element={<Textiles />} />
          <Route path={pagesLinksList.Foundations} element={<Foundations />} />
          <Route path={pagesLinksList.LifeSciences} element={<LifeSciences />} />
          <Route path={pagesLinksList.SemiConductors} element={<SemiConductors />} />
          <Route path={pagesLinksList.Entertainment} element={<Entertainment />} />

          {/* Careers */}
          <Route path={pagesLinksList.Careers} element={<Careers />} />
          <Route path={pagesLinksList.Career_Openings} element={<CareersOpenings />} />
          <Route path={pagesLinksList.JobInfo} element={<CareersJobDesc />} />
          <Route path={pagesLinksList.JobInfo_Apply} element={<CareersJobApply />} />

          {/* Fallbacks */}
          {/* Redirect root (/) to your Home route if pagesLinksList.Home isn't "/" */}
          <Route path="/*" element={<Navigate to={pagesLinksList.Home} replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
