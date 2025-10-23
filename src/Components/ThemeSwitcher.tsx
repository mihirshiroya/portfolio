import { MoonStarIcon, SunIcon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { Button } from "./Ui/Button"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return (
     <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      // onClick={() => {
      //   if (!document.startViewTransition) switchTheme();
      //   document.startViewTransition(switchTheme);
      // }}
    >
      <MoonStarIcon className="hidden [html.dark_&]:block" />
      <SunIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  )
}

export default ThemeSwitcher