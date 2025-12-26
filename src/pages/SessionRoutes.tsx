import { Route, Routes } from "react-router-dom";
import { portfolioVariants } from "@/portfolios";
import { useSessionVariant } from "@/portfolios/useSessionVariant";
import DevVariantSwitcher from "@/portfolios/DevVariantSwitcher";

const SessionRoutes = () => {
  const currentIndex = useSessionVariant(portfolioVariants.length);
  const variant = portfolioVariants[currentIndex] ?? portfolioVariants[0];

  if (!variant) {
    return null;
  }

  const Home = variant.Home;
  const Projects = variant.Projects;
  const Skills = variant.Skills;
  const Privacy = variant.Privacy;
  const NotFound = variant.NotFound;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {Projects && <Route path="/projects" element={<Projects />} />}
        {Skills && <Route path="/skills" element={<Skills />} />}
        {Privacy && <Route path="/privacy/:projectId" element={<Privacy />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {import.meta.env.DEV && (
        <DevVariantSwitcher
          count={portfolioVariants.length}
          currentIndex={currentIndex}
        />
      )}
    </>
  );
};

export default SessionRoutes;
