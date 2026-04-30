import { Route, Routes } from "react-router-dom";
import { getAllowedPortfolioVariants } from "@/portfolios";
import { useSessionVariant } from "@/portfolios/useSessionVariant";
import DevVariantSwitcher from "@/portfolios/DevVariantSwitcher";

const SessionRoutes = () => {
  const allowedVariants = getAllowedPortfolioVariants();
  const currentIndex = useSessionVariant(allowedVariants.length);
  const variant = allowedVariants[currentIndex] ?? allowedVariants[0];

  if (!variant) {
    return null;
  }

  const Home = variant.Home;
  const Projects = variant.Projects;
  const Skills = variant.Skills;
  const Certificates = variant.Certificates;
  const Privacy = variant.Privacy;
  const PrivacyList = variant.PrivacyList;
  const NotFound = variant.NotFound;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {Projects && <Route path="/projects" element={<Projects />} />}
        {Skills && <Route path="/skills" element={<Skills />} />}
        {Certificates && <Route path="/certificates" element={<Certificates />} />}
        {PrivacyList && <Route path="/privacy" element={<PrivacyList />} />}
        {Privacy && <Route path="/privacy/:projectId" element={<Privacy />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {import.meta.env.DEV && (
        <DevVariantSwitcher
          count={allowedVariants.length}
          currentIndex={currentIndex}
        />
      )}
    </>
  );
};

export default SessionRoutes;
