import React from "react";
import Section from "./section";
import { ProfileHeader, PersonalInfo, MoreInfo } from "./profile-header";
import Title from "./title";
import Experience from "./experience";
import { ExperienceSection } from "./experience-section";
import Socials from "./socials";
import Footer from "./Footer";
import Education from "./education";
import Clock from "./clock";
import ProjectsSection from "./project-section";
import SkillSection from "./skill-section";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className="no-scrollbar">

      {/* Middle content container */}
      <Section>
        <ProfileHeader />
      </Section>
      <Section>
        <PersonalInfo />
      </Section>
      <Title title="<About/>" children={undefined} />
      <Section>
        <MoreInfo />
      </Section>
      <Title title="<Experience/>" children={undefined} />
      <Section>
        <Experience />
      </Section>
      <Section>
        <ExperienceSection />
      </Section>
      <Title title="<Education/>" children={undefined} />
      <Section>
        <Education />
      </Section>
      <Section>
        <Socials />
      </Section>
       <Title title="<Skills/>" children={undefined} />
          <Section>
        <SkillSection/>
      </Section>
         <Section>
          <Clock/>
        
      </Section>
         <Title title="<Projects/>" children={undefined} />
        <Section>
        <ProjectsSection/>
      </Section>
      <Section>
        <Footer />
      </Section>
      

      {/* Vertical borders */}
      {/* <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg)
        bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
        bg-[size:10px_10px] bg-fixed" />
        
      <div className="relative -left-px col-start-4 row-span-full row-start-1 
        border-x border-x-[var(--color-primary)]
        bg-[image:repeating-linear-gradient(315deg,var(--color-primary)_0,var(--color-primary)_1px,transparent_0,transparent_50%)] 
        bg-[size:10px_10px] bg-fixed" /> */}

      {/* Horizontal borders */}
      {/* <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)" />
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)" /> */}
    </div>
  );
};

export default MainLayout;
