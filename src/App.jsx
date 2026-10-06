import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyChooseUs from "./pages/WhyChooseUs";
import Process from "./pages/Process";
import { ServiceDetail, ServicesHub } from "./pages/Services";
import Occupations from "./pages/Occupations";
import Employers from "./pages/Employers";
import Candidates from "./pages/Candidates";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import {
  Compliance,
  NotFound,
  PrivacyPolicy,
  Terms,
  ThankYou,
} from "./pages/Legal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        <Route path="recruitment-process" element={<Process />} />
        <Route path="services" element={<ServicesHub />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="industries" element={<Occupations />} />
        <Route path="employers" element={<Employers />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="blog" element={<Blog />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="thank-you" element={<ThankYou />} />
        {/* Old URL from the previous site */}
        <Route path="applicants" element={<Navigate to="/candidates" replace />} />
        <Route path="occupations" element={<Navigate to="/industries" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
