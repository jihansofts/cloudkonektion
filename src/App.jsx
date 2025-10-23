import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/about/About";
import HomePage from "./pages/home/HomePage";
import EmployerPage from "./pages/Employers/EmployerPage";
import ApplicantPage from "./pages/Applicant/ApplicantPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="employers" element={<EmployerPage />} />
          <Route path="applicants" element={<ApplicantPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
