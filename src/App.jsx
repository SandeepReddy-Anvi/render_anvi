import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import { ScrollToTop } from "./hooks/ScrollToTop";
import { pagesLinksObj } from "./data/PagesLinkList";
import SEO from "./components/SEO/Seo";
import { seoRoutes } from "./components/SEO/SEO_Routes";

import Header from "./components/header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Industries } from "./pages/Industries";
import { Investors } from "./pages/Investors";
import { ContactUs } from "./pages/ContactUs";
import Solutions from "./pages/Solutions";
import SolutionsArop from "./pages/All_Solutions/SolutionsArop";
import SolutionsSewage from "./pages/All_Solutions/SolutionsSewage";
import { News } from "./pages/News";

import Energy from "./pages/All_Industries/Energy";
import Textiles from "./pages/All_Industries/Textiles";
import SocialImpact from "./pages/All_Industries/SocialImpact";
import LifeSciences from "./pages/All_Industries/LifeSciences";
import SemiConductors from "./pages/All_Industries/SemiConductors";
import Entertainment from "./pages/All_Industries/Entertainment";

import Careers from "./pages/careers";
import CareersOpenings from "./pages/CareersInfo/CareersOpenings";
import CareersJobDesc from "./pages/CareersInfo/CareersJobDesc";
import CareersJobApply from "./pages/CareersInfo/CareersJobApply";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import AnviCollective from "./components/News/AnviCollective";
import ScrollProgressButton from "./components/ScrollProgressButton";


/* =======================
   Layout Component
======================= */

const Layout = () => {
  const location = useLocation();

  // Clear investor session when user leaves investors section
  useEffect(() => {
    if (!location.pathname.toLowerCase().startsWith("/investors")) {
      sessionStorage.removeItem("investorSessionToken");
      localStorage.removeItem("investorToken");
      localStorage.removeItem("investorEmail");
    }
  }, [location.pathname]);

  const seoData =
    seoRoutes[location.pathname] || {
      title: "Anvi",
      description: "Anvi engineers robotics and intelligent systems that redefine industries through deep-tech innovation.",
    };

  return (
    <>
    {/* SEO Handler */}
      <SEO
        title={seoData.title}
        description={seoData.description}  
        breadcrumb={seoData.breadcrumb}
      />

      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
};

/* =======================
   Routes
======================= */

const AppRoutes = () => {
  return (
      <Routes>
        <Route element={<Layout />}>
          {/* Main Pages */}
          <Route path={pagesLinksObj.Home} element={<Home />} />
          <Route path={pagesLinksObj.AboutUs} element={<AboutUs />} />
          <Route path={`${pagesLinksObj.Investors}/*`} element={<Investors />} />
          <Route path={pagesLinksObj.News} element={<News />} />
          <Route path={pagesLinksObj.anvicollective} element={<AnviCollective/>}/>
          <Route path={pagesLinksObj.ContactUs} element={<ContactUs />} />
          <Route path={pagesLinksObj.PrivacyPolicy} element={<PrivacyPolicy />} />

          {/* Solutions */}
          <Route path={pagesLinksObj.Solutions} element={<Solutions />} />
          <Route path={pagesLinksObj.Solutions_AROP} element={<SolutionsArop />} />
          <Route path={pagesLinksObj.Solutions_Sewage} element={<SolutionsSewage />} />

          {/* Industries */}
          <Route path={pagesLinksObj.Industries} element={<Industries />} />
          <Route path={pagesLinksObj.Energy} element={<Energy />} />
          <Route path={pagesLinksObj.Textiles} element={<Textiles />} />
          <Route path={pagesLinksObj.SocialImpact} element={<SocialImpact />} />
          <Route path={pagesLinksObj.LifeSciences} element={<LifeSciences />} />
          <Route path={pagesLinksObj.SemiConductors} element={<SemiConductors />} />
          <Route path={pagesLinksObj.Entertainment} element={<Entertainment />} />

          {/* Careers */}
          <Route path={pagesLinksObj.Careers} element={<Careers />} />
          <Route path={pagesLinksObj.Career_Openings} element={<CareersOpenings />} />
          <Route path={pagesLinksObj.JobInfo} element={<CareersJobDesc />} />
          <Route path={pagesLinksObj.JobInfo_Apply} element={<CareersJobApply />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to={pagesLinksObj.Home} replace />} />
      </Routes>
  );
};

/* =======================
   App Entry
======================= */

const App = () => {
  // Clear investor data only once on app load
  useEffect(() => {
    localStorage.removeItem("investorToken");
    localStorage.removeItem("investorEmail");
    sessionStorage.removeItem("investorSessionToken");
  }, []);

  return (
    <Router>
      <AppRoutes />
      <ScrollProgressButton />
    </Router>
  );
};

export default App;
