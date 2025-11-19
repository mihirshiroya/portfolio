import { FaReact, FaNodeJs, FaJava, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill, RiFirebaseLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandKotlin,
  TbBrandNextjs,
} from "react-icons/tb";
import { SkillCard } from "./skill-card";

const SkillSection = () => {
  return (
    <div className="@container">
      <div className="h-fit grid grid-cols-1 grid-rows-1  @min-[475px]:grid-cols-2 @min-[768px]:grid-cols-3">
        <div className="p-4">
          <SkillCard
            title="REACT JS"
            icon={<FaReact />}
            color="#61dafb"
            progress={80}
          />
        </div>

        <div className="p-4">
          <SkillCard
            title="NODE JS"
            icon={<FaNodeJs />}
            color="#3c873a"
            progress={70}
          />
        </div>

        <div className="p-4">
          <SkillCard
            title="TAILWIND CSS"
            icon={<RiTailwindCssFill />}
            color="#38bdf8"
            progress={90}
          />
        </div>
        <div className="p-4">
          <SkillCard
            title="EXPRESS JS"
            icon={<SiExpress />}
            color="#64748B"
            progress={75}
          />
        </div>

        <div className="p-4">
          <SkillCard
            title="MONGODB"
            icon={<SiMongodb />}
            color="#4ea94b"
            progress={65}
          />
        </div>
        <div className="p-4">
          <SkillCard
            title="POSTGRESQL"
            icon={<SiPostgresql className="size-10" />}
            color="#336791"
            progress={60}
          />
        </div>

        <div className="p-4">
          <SkillCard
            title="JAVASCRIPT"
            icon={<TbBrandJavascript />}
            color="#f7df1e"
            progress={85}
          />
        </div>
        <div className="p-4">
          <SkillCard
            title="TYPESCRIPT"
            icon={<TbBrandTypescript />}
            color="#3178c6"
            progress={80}
          />
        </div>

        <div className="p-4">
          <SkillCard
            title="JAVA"
            icon={<FaJava />}
            color="#f89820"
            progress={70}
          />
        </div>
        <div className="p-4">
          <SkillCard
            title="KOTLIN"
            icon={<TbBrandKotlin />}
            color="#7f52ff"
            progress={60}
          />
        </div>

        <div className="p-4">
          <SkillCard
            title="NEXT JS"
            icon={<TbBrandNextjs />}
            color="#64748B"
            progress={75}
          />
        </div>
        <div className="p-4">
          <SkillCard
            title="FIREBASE"
            icon={<RiFirebaseLine />}
            color="#ffca28"
            progress={70}
          />
        </div>

        <div className="p-4">
          <SkillCard
            title="FIGMA"
            icon={<FaFigma />}
            color="#1ABCFE"
            progress={80}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillSection;