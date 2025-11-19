import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill, RiFirebaseLine } from "react-icons/ri";
import { FaReact, FaNodeJs, FaJava, FaFigma } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandKotlin,
  TbBrandNextjs,
} from "react-icons/tb";

const iconMap: Record<string, React.ReactNode> = {
  React: <FaReact className="size-5" />,
  Node: <FaNodeJs className="size-5" />,
  Express: <SiExpress className="size-5" />,
  MongoDB: <SiMongodb className="size-5" />,
  PostgreSQL: <SiPostgresql className="size-5" />,
  Tailwind: <RiTailwindCssFill className="size-5" />,
  Firebase: <RiFirebaseLine className="size-5" />,
  Java: <FaJava className="size-5" />,
  Kotlin: <TbBrandKotlin className="size-5" />,
  TypeScript: <TbBrandTypescript className="size-5" />,
  JavaScript: <TbBrandJavascript className="size-5" />,
  NextJS: <TbBrandNextjs className="size-5" />,
  Figma: <FaFigma className="size-5" />,
};

export default iconMap;