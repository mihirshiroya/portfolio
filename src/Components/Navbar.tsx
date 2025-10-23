import React from 'react'
import { DottedText } from './Ui/dotted-text'
import ThemeSwitcher from './ThemeSwitcher'
import { Button } from './Ui/Button'
import { Github } from 'lucide-react'
import { MobileNav } from './mobile-nav'
import { DesktopNav } from './desktop-nav'


export type NavItem = {
  title: string;
  href: string;
};

const MAIN_NAV: NavItem[] = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Components",
    href: "/components",
  },
];

const Navbar = () => {
  return (
    // <nav className="text-white border border-white w-full bg-background [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-black)]/10 overflow-hidden">
    //   <div className="mx-auto flex w-full max-w-6xl h-12 px-2 items-center justify-between">
        
    //     {/* Left side (Logo + Desktop Nav) */}
    //     <div className="flex items-center gap-6">
    //       <DottedText />
    //       <div className="hidden sm:block">
    //         <DesktopNav items={MAIN_NAV} />
    //       </div>
    //     </div>

    //     {/* Right side (Actions) */}
    //     <div className="flex items-center gap-3">
    //       <Button variant="outline" size="icon" asChild>
    //         <a href="https://test.com" target="_blank" rel="noopener noreferrer">
    //           <Github className="w-5 h-5" />
    //           <span className="sr-only">GitHub</span>
    //         </a>
    //       </Button>
    //       <ThemeSwitcher />
    //       <MobileNav className="sm:hidden" items={MAIN_NAV} />
    //     </div>
    //   </div>
    // </nav>
    <div className="relative bg-background [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-black)]/10 overflow-hidden">
      
      {/* Middle content container */}
      <div className=" flex w-full max-w-4xl flex-col bg-gray-100 dark:bg-white/10 mx-auto">
         <div className="mx-auto flex w-full max-w-4xl h-12 px-2 items-center justify-between">
        
        {/* Left side (Logo + Desktop Nav) */}
        <div className="flex items-center gap-6">
          <DottedText />
          <div className="hidden sm:block">
            <DesktopNav items={MAIN_NAV} />
          </div>
        </div>

        {/* Right side (Actions) */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" asChild>
            <a href="https://test.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <ThemeSwitcher />
          <MobileNav className="sm:hidden" items={MAIN_NAV} />
        </div>
      </div>
        {/* <Navbar/> */}
        
      </div>

      {/* Vertical borders */}
      {/* <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg)
        bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
        bg-[size:10px_10px] bg-fixed" />
        
      <div className="relative -left-px col-start-4 row-span-full row-start-1 
        border-x border-x-[var(--color-primary)]
        bg-[image:repeating-linear-gradient(315deg,var(--color-primary)_0,var(--color-primary)_1px,transparent_0,transparent_50%)] 
        bg-[size:10px_10px] bg-fixed" /> */}

      {/* Horizontal borders */}
      <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)" />
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)" />
    </div>

  )
}

export default Navbar