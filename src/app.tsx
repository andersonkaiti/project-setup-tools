import { useState } from 'react'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="border-border mx-auto box-border flex min-h-svh w-[1126px] max-w-full flex-col border-x text-center">
      <section className="flex grow flex-col items-center justify-center gap-[25px] px-5 py-8 lg:gap-[25px] lg:p-0">
        <div className="relative">
          <img
            src={heroImg}
            className="relative inset-x-0 z-0 mx-auto w-[170px]"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="absolute inset-x-0 top-[34px] z-1 mx-auto h-[28px] transform-[perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto transform-[perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="text-accent bg-accent-bg hover:border-accent-border focus-visible:outline-accent mb-6 cursor-pointer rounded-[5px] border-2 border-transparent px-[10px] py-[5px] font-mono text-base transition-[border-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="before:border-l-border after:border-r-border relative w-full before:absolute before:top-[-4.5px] before:left-0 before:border-[5px] before:border-transparent before:content-[''] after:absolute after:top-[-4.5px] after:right-0 after:border-[5px] after:border-transparent after:content-['']"></div>

      <section className="border-border flex border-t text-left max-lg:flex-col max-lg:text-center">
        <div className="border-border flex-1 border-r p-8 max-lg:border-r-0 max-lg:border-b max-lg:p-6">
          <svg
            className="mb-4 h-[22px] w-[22px]"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="mt-8 mb-0 flex list-none gap-2 p-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-custom flex items-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 max-lg:w-full max-lg:justify-center"
                rel="noreferrer"
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-custom flex items-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 max-lg:w-full max-lg:justify-center"
                rel="noreferrer"
              >
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8 max-lg:p-6">
          <svg
            className="mb-4 h-[22px] w-[22px]"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul className="mt-8 mb-0 flex list-none gap-2 p-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-custom flex items-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 max-lg:w-full max-lg:justify-center"
                rel="noreferrer"
              >
                <svg
                  className="h-[18px] w-[18px] dark:brightness-200 dark:invert"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-custom flex items-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 max-lg:w-full max-lg:justify-center"
                rel="noreferrer"
              >
                <svg
                  className="h-[18px] w-[18px] dark:brightness-200 dark:invert"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-custom flex items-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 max-lg:w-full max-lg:justify-center"
                rel="noreferrer"
              >
                <svg
                  className="h-[18px] w-[18px] dark:brightness-200 dark:invert"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-custom flex items-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 max-lg:w-full max-lg:justify-center"
                rel="noreferrer"
              >
                <svg
                  className="h-[18px] w-[18px] dark:brightness-200 dark:invert"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="before:border-l-border after:border-r-border relative w-full before:absolute before:top-[-4.5px] before:left-0 before:border-[5px] before:border-transparent before:content-[''] after:absolute after:top-[-4.5px] after:right-0 after:border-[5px] after:border-transparent after:content-['']"></div>
      <section className="border-border h-[88px] border-t max-lg:h-12"></section>
    </div>
  )
}
