import React from "react";
import Navbar from "./Navbar";
import Section from "./section";
import { SkillCard } from "./skill-card";
import { ProfileHeader, PersonalInfo, MoreInfo } from "./profile-header";
import Title from "./title";
import Experience from "./experience";
import { ExperienceSection } from "./experience-section";
import Socials from "./socials";
import Footer from "./Footer";
import Education from "./education";
import Clock from "./clock";
import HoverRevealItem from "./reveal-item";
import { FaReact,FaNodeJs,FaJava,FaFigma } from "react-icons/fa";
import { RiTailwindCssFill,RiFirebaseLine  } from "react-icons/ri";
import { SiExpress,SiMongodb,SiPostgresql } from "react-icons/si";
import { TbBrandJavascript,TbBrandTypescript,TbBrandKotlin,TbBrandNextjs   } from "react-icons/tb";
import ProjectsSection from "./project-section";

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
      <Title title="About" />
      <Section>
        <MoreInfo />
      </Section>
      <Title title="Experience" />
      <Section>
        <Experience />
      </Section>
      <Section>
        <ExperienceSection />
      </Section>
      <Title title="Education" />
      <Section>
        <Education />
      </Section>
      <Section>
        <Socials />
      </Section>
       <Title title="Skills" />
          <Section>
              <SkillCard
        title="REACT JS"
        icon={<FaReact />}
        color="#61dafb"
        progress={80}
      />

      <SkillCard
        title="NODE JS"
        icon={<FaNodeJs />} // replace icon
        color="#3c873a"
        progress={70}
      />

        <SkillCard
          title="TAILWIND"
          icon={<RiTailwindCssFill />} // replace icon
          color="#38bdf8"
          progress={90}
        />
        <SkillCard
          title="EXPRESS JS"
          icon={<SiExpress />} // replace icon
          color="#64748B"
          progress={75}
        />
        <SkillCard
          title="MONGODB"
          icon={<SiMongodb />} // replace icon
          color="#4ea94b"
          progress={65}
        />
        <SkillCard
          title="POSTGRESQL"
          icon={<SiPostgresql className="size-10" />} // replace icon
          color="#336791"
          progress={60}
        />
        <SkillCard
          title="JAVASCRIPT"
          icon={<TbBrandJavascript />} // replace icon
          color="#f7df1e"
          progress={85}
        />
        <SkillCard
          title="TYPESCRIPT"
          icon={<TbBrandTypescript />} // replace icon
          color="#3178c6"
          progress={80}
        />
        <SkillCard
          title="JAVA"
          icon={<FaJava />} // replace icon
          color="#f89820"
          progress={70}
        />
        <SkillCard
          title="KOTLIN"
          icon={<TbBrandKotlin />} // replace icon
          color="#7f52ff"
          progress={60}
        />
        <SkillCard
          title="NEXT JS"
          icon={<TbBrandNextjs />} // replace icon
          color="#64748B"
          progress={75}
        />
        <SkillCard
          title="FIREBASE"
          icon={<RiFirebaseLine />} // replace icon
          color="#ffca28"
          progress={70}
        />
        <SkillCard
          title="FIGMA"
          icon={<FaFigma />} // replace icon
          color="#1ABCFE"
          progress={80}
        />
      </Section>
         <Section>
          <Clock/>
        <HoverRevealItem icon={undefined} label={""}/>
        
      </Section>
         <Title title="Projects" />
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
