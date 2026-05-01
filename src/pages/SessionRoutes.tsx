import { Route, Routes } from "react-router-dom";
import { portfolioVariant } from "@/portfolios";

const SessionRoutes = () => {
  const Home = portfolioVariant.Home;
  const Projects = portfolioVariant.Projects;
  const Skills = portfolioVariant.Skills;
  const Certificates = portfolioVariant.Certificates;
  const Privacy = portfolioVariant.Privacy;
  const PrivacyList = portfolioVariant.PrivacyList;
  const NotFound = portfolioVariant.NotFound;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {Projects && <Route path="/projects" element={<Projects />} />}
      {Skills && <Route path="/skills" element={<Skills />} />}
      {Certificates && <Route path="/certificates" element={<Certificates />} />}
      {PrivacyList && <Route path="/privacy" element={<PrivacyList />} />}
      {Privacy && <Route path="/privacy/:projectId" element={<Privacy />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default SessionRoutes;
