import { useLocation } from "react-router-dom";
import { Nav } from "./nav";

export type NavItem = {
  title: string;
  href: string;
};

export function DesktopNav({ items }: { items: NavItem[] }) {
  const location = useLocation();
  const pathname = location.pathname; // same as usePathname()

  return <Nav className="max-sm:hidden" items={items} activeId={pathname} />;
}
