import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './Components/Navbar'
import MainLayout from './Components/Main'
import ThemeSwitcher from './Components/ThemeSwitcher'
import { useTheme,ThemeProvider } from "./context/ThemeContext"
function App() {
    const { theme } = useTheme()
  return (
    <>
       <ThemeProvider>
        <Navbar />
         <MainLayout>
           <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300 w-full">
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-px bg-white" />
          <img src="/img/logo.svg" className="mb-11.5 h-6 dark:hidden" alt="Tailwind Play" />
          <img src="/img/logo-dark.svg" className="mb-11.5 h-6 not-dark:hidden" alt="Tailwind Play" />
          <div className="space-y-6">
            <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
            <ul className="space-y-3">
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">
                  Customizing your theme with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">@theme</code>
                </p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">
                  Adding custom utilities with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">@utility</code>
                </p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">
                  Adding custom variants with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">@variant</code>
                </p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">Code completion with instant preview</p>
              </li>
            </ul>
            <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
          </div>
          <hr className="my-6 w-full border-(--pattern-fg)" />
          <p className="mb-3">Want to dig deeper into Tailwind?</p>
          <p className="font-semibold">
            <a href="https://tailwindcss.com/docs" className="text-gray-950 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-white">Read the docs &rarr;</a>
          </p>
        </div>
         <div className="rounded-xl bg-background p-10 text-sm/7 text-primary">
          <img src="/img/logo.svg" className="mb-11.5 h-6 dark:hidden" alt="Tailwind Play" />
          <img src="/img/logo-dark.svg" className="mb-11.5 h-6 not-dark:hidden" alt="Tailwind Play" />
          <div className="space-y-6">
            <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
            <ul className="space-y-3">
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">
                  Customizing your theme with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">@theme</code>
                </p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">
                  Adding custom utilities with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">@utility</code>
                </p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">
                  Adding custom variants with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">@variant</code>
                </p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">Code completion with instant preview</p>
              </li>
            </ul>
            <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
          </div>
          <hr className="my-6 w-full border-(--pattern-fg)" />
          <p className="mb-3">Want to dig deeper into Tailwind?</p>
          <p className="font-semibold">
            <a href="https://tailwindcss.com/docs" className="text-gray-950 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-white">Read the docs &rarr;</a>
          </p>
        </div>
         <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
         
          <img src="/img/logo.svg" className="mb-11.5 h-6 dark:hidden" alt="Tailwind Play" />
          <img src="/img/logo-dark.svg" className="mb-11.5 h-6 not-dark:hidden" alt="Tailwind Play" />
          <div className="space-y-6">
            <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
            <ul className="space-y-3">
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">
                  Customizing your theme with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">@theme</code>
                </p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">
                  Adding custom utilities with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">@utility</code>
                </p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">
                  Adding custom variants with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">@variant</code>
                </p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
                </svg>
                <p className="ml-3">Code completion with instant preview</p>
              </li>
            </ul>
            <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
          </div>
          <hr className="my-6 w-full border-(--pattern-fg)" />
          <p className="mb-3">Want to dig deeper into Tailwind?</p>
          <p className="font-semibold">
            <a href="https://tailwindcss.com/docs" className="text-gray-950 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-white">Read the docs &rarr;</a>
          </p>
        </div>
         </MainLayout>
      <ThemeSwitcher />
       </ThemeProvider>
     
    </>

  )
}

export default App
