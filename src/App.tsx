import { useState } from 'react'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

interface IUser {
  id: string
  name: string
  email: string
}

interface IUserService {
  listAll(): Promise<IUser[]>
}

class UserService implements IUserService {
  listAll(): Promise<IUser[]> {
    throw new Error('Method not implemented.')
  }
}

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[1126px] max-w-full mx-auto text-center border-x border-border min-h-svh flex flex-col box-border">
      <section className="flex flex-col gap-[25px] justify-center items-center grow py-8 px-5 lg:gap-[25px] lg:p-0">
        <div className="relative">
          <img
            src={heroImg}
            className="w-[170px] relative z-0 inset-x-0 mx-auto"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="absolute z-1 top-[34px] h-[28px] inset-x-0 mx-auto transform-[perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute z-0 top-[107px] h-[26px] w-auto inset-x-0 mx-auto transform-[perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
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
          className="text-base px-[10px] py-[5px] rounded-[5px] text-accent bg-accent-bg border-2 border-transparent transition-[border-color] duration-300 mb-6 hover:border-accent-border focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 font-mono cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="relative w-full before:content-[''] before:absolute before:top-[-4.5px] before:border-[5px] before:border-transparent before:left-0 before:border-l-border after:content-[''] after:absolute after:top-[-4.5px] after:border-[5px] after:border-transparent after:right-0 after:border-r-border"></div>

      <section className="flex border-t border-border text-left max-lg:flex-col max-lg:text-center">
        <div className="flex-1 p-8 max-lg:p-6 border-r border-border max-lg:border-r-0 max-lg:border-b">
          <svg
            className="mb-4 w-[22px] h-[22px]"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="list-none p-0 flex gap-2 mt-8 mb-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="text-text-h text-base rounded-md bg-social-bg flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-custom max-lg:w-full max-lg:justify-center" rel="noreferrer"
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-text-h text-base rounded-md bg-social-bg flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-custom max-lg:w-full max-lg:justify-center" rel="noreferrer"
              >
                <img className="w-[18px] h-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8 max-lg:p-6">
          <svg
            className="mb-4 w-[22px] h-[22px]"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul className="list-none p-0 flex gap-2 mt-8 mb-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="text-text-h text-base rounded-md bg-social-bg flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-custom max-lg:w-full max-lg:justify-center" rel="noreferrer"
              >
                <svg
                  className="w-[18px] h-[18px] dark:invert dark:brightness-200"
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
                className="text-text-h text-base rounded-md bg-social-bg flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-custom max-lg:w-full max-lg:justify-center" rel="noreferrer"
              >
                <svg
                  className="w-[18px] h-[18px] dark:invert dark:brightness-200"
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
                className="text-text-h text-base rounded-md bg-social-bg flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-custom max-lg:w-full max-lg:justify-center" rel="noreferrer"
              >
                <svg
                  className="w-[18px] h-[18px] dark:invert dark:brightness-200"
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
                className="text-text-h text-base rounded-md bg-social-bg flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-custom max-lg:w-full max-lg:justify-center" rel="noreferrer"
              >
                <svg
                  className="w-[18px] h-[18px] dark:invert dark:brightness-200"
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

      <div className="relative w-full before:content-[''] before:absolute before:top-[-4.5px] before:border-[5px] before:border-transparent before:left-0 before:border-l-border after:content-[''] after:absolute after:top-[-4.5px] after:border-[5px] after:border-transparent after:right-0 after:border-r-border"></div>
      <section className="h-[88px] border-t border-border max-lg:h-12"></section>
    </div>
  )
}

