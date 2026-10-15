import React from 'react';
import DockNav from '@/components/DockNav';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactFooter from '@/components/ContactFooter';

const Index: React.FC = () => {
  return (
    <>
      <DockNav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactFooter />
    </>
  );
};

export default Index;
