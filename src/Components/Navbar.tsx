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
    <div className="relative grid grid-cols-[auto_1px_minmax(0,theme(maxWidth.4xl))_1px_auto] grid-rows-[1fr_1px_auto_1px_1fr] bg-background">
      <div className='col-start-3 col-end-4 row-start-3 flex flex-col justify-center relative'>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 bottom-0 -translate-x-[48%] translate-y-[23.5px] z-50 size-12 stroke-ring"
                >
                    <line
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                        strokeWidth="0.5"
                    />
                    <line
                        x1="5"
                        y1="12"
                        x2="19"
                        y2="12"
                        strokeWidth="0.5"
                    />
                </svg>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 bottom-0 translate-x-[48%] translate-y-[23.5px] z-50 size-12 stroke-ring"
                >
                    <line
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                        strokeWidth="0.5"
                    />
                    <line
                        x1="5"
                        y1="12"
                        x2="19"
                        y2="12"
                        strokeWidth="0.5"
                    />
                </svg>
        <div className=" flex w-full max-w-4xl flex-col bg-background mx-auto">
         <div className="mx-auto flex w-full max-w-4xl h-12 px-2 items-center justify-between">
        
        {/* Left side (Logo + Desktop Nav) */}
        <div className="flex items-center gap-6">
          <DottedText />
        </div>

        {/* Right side (Actions) */}
        <div className="flex items-center gap-3">
             <div className="hidden sm:block">
            <DesktopNav items={MAIN_NAV} />
          </div>
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
        
      </div>
      </div>
                 <div
  className="relative -right-px col-start-2 row-span-full 
  border-x border-dashed border-x-[var(--color-ring)]"
/>

<div
  className="relative -left-px col-start-4 row-span-full 
  border-x border-dashed border-x-[var(--color-ring)]"
/>

      {/* <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-[var(--pattern-fg)]" /> */}
       <div
  className="relative -top-px col-span-full col-start-1 row-start-4 h-px 
  border-t border-dashed border-t-[var(--color-ring)]"
/>
    </div>

  )
}

export default Navbar