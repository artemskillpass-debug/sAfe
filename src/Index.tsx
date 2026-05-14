import Header from './components/Header';
import Hero from './components/Hero';
import PartnersLogoMarquee from './components/PartnersLogoMarquee';
import StatsStrip from './components/StatsStrip';
import LearningFormatSection from './components/LearningFormatSection';
import OurCoursesSection from './components/OurCoursesSection';
import PlatformSolutionSection from './components/PlatformSolutionSection';
import ControlDashboardSection from './components/ControlDashboardSection';
import ForWhomSection from './components/ForWhomSection';
import LandingFooter from './components/LandingFooter';
// import WhyChooseUsSection from './components/WhyChooseUsSection';
import FinalCTASection from './components/FinalCTASection';
import CompanyRequirementsMockupSection from './components/CompanyRequirementsMockupSection';

export default function Index() {
  return (
    <div className="bg-background text-on-surface flex min-h-screen flex-col font-body-md antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PartnersLogoMarquee />
        <StatsStrip />
        <PlatformSolutionSection />
        <CompanyRequirementsMockupSection />
        <ControlDashboardSection />
        <ForWhomSection />
        <OurCoursesSection />
        {/* <WhyChooseUsSection /> */}
        <LearningFormatSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </div>
  );
}
