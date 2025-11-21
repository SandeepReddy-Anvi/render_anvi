import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./hooks/ScrollToTop";
import { pagesLinksList } from "./data/PagesLinkList";

import Header from "./components/header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Industries } from "./pages/Industries";
import { Investors } from "./pages/Investors";
import { ContactUs } from "./pages/ContactUs";
import { Solutions } from "./pages/Solutions";
import { SolutionsArop } from "./pages/All_Solutions/SolutionsArop";
import { SolutionsSewage } from "./pages/All_Solutions/SolutionsSewage";
import { News } from "./pages/News";
import { Energy } from "./pages/All_Industries/Energy";
import { Textiles } from "./pages/All_Industries/Textiles";
import { Foundations } from "./pages/All_Industries/Foundations";
import { LifeSciences } from "./pages/All_Industries/LifeSciences";
import { SemiConductors } from "./pages/All_Industries/SemiConductors";
import { Entertainment } from "./pages/All_Industries/Entertainment";
import Careers from "./pages/careers";
import CareersOpenings from "./pages/CareersInfo/CareersOpenings";
import { CareersJobDesc } from "./pages/CareersInfo/CareersJobDesc";
import { CareersJobApply } from "./pages/CareersInfo/CareersJobApply";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* Main Pages */}
        <Route path={pagesLinksList.Home} element={<Home />} />
        <Route path={pagesLinksList.AboutUs} element={<AboutUs />} />
        <Route path={pagesLinksList.Investors} element={<Investors />} />
        <Route path={pagesLinksList.News} element={<News />} />
        <Route path={pagesLinksList.ContactUs} element={<ContactUs />} />
        <Route
          path={pagesLinksList.PrivacyPolicy}
          element={<PrivacyPolicy />}
        />

        {/* Solutions */}
        <Route path={pagesLinksList.Solutions} element={<Solutions />} />
        <Route
          path={pagesLinksList.Solutions_AROP}
          element={<SolutionsArop />}
        />
        <Route
          path={pagesLinksList.Solutions_Sewage}
          element={<SolutionsSewage />}
        />

        {/* Industries */}
        <Route path={pagesLinksList.Industries} element={<Industries />} />
        <Route path={pagesLinksList.Energy} element={<Energy />} />
        <Route path={pagesLinksList.Textiles} element={<Textiles />} />
        <Route path={pagesLinksList.Foundations} element={<Foundations />} />
        <Route path={pagesLinksList.LifeSciences} element={<LifeSciences />} />
        <Route
          path={pagesLinksList.SemiConductors}
          element={<SemiConductors />}
        />
        <Route
          path={pagesLinksList.Entertainment}
          element={<Entertainment />}
        />

        {/* Careers */}
        <Route path={pagesLinksList.Careers} element={<Careers />} />
        <Route
          path={pagesLinksList.Career_Openings}
          element={<CareersOpenings />}
        />
        <Route path={pagesLinksList.JobInfo} element={<CareersJobDesc />} />
        <Route
          path={pagesLinksList.JobInfo_Apply}
          element={<CareersJobApply />}
        />
      </Routes>
    </Router>
  );
};

export default App;
