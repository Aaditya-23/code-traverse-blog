'use client'

import { useTheme } from '@/hooks'
import { Listbox } from '@headlessui/react'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import Link from 'next/link'

export default function Nav() {
  function handleClick() {
    const sub = document.querySelector<HTMLElement>('#subscribe')

    if (sub) sub.focus()
  }

  return (
    <nav className='mx-auto mt-3 flex w-full items-center justify-between p-2 sm:w-4/5'>
      <Link href='/'>
        <svg
          width='40'
          height='41'
          viewBox='0 0 40 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_i_7_5)'>
            <path
              d='M0 8.5C0 4.08172 3.58172 0.5 8 0.5H32C36.4183 0.5 40 4.08172 40 8.5V32.5C40 36.9183 36.4183 40.5 32 40.5H8C3.58172 40.5 0 36.9183 0 32.5V8.5Z'
              fill='url(#paint0_linear_7_5)'
            />
          </g>
          <g filter='url(#filter1_d_7_5)'>
            <path
              d='M14.6907 26.36C13.5027 26.36 12.4827 26.156 11.6307 25.748C10.7787 25.328 10.0767 24.782 9.5247 24.11C8.9727 23.426 8.5647 22.688 8.3007 21.896C8.0367 21.104 7.9047 20.336 7.9047 19.592V19.196C7.9047 18.368 8.0367 17.558 8.3007 16.766C8.5767 15.962 8.9907 15.236 9.5427 14.588C10.1067 13.94 10.8087 13.424 11.6487 13.04C12.4887 12.656 13.4727 12.464 14.6007 12.464C15.8007 12.464 16.8627 12.692 17.7867 13.148C18.7227 13.592 19.4727 14.222 20.0367 15.038C20.6007 15.842 20.9307 16.778 21.0267 17.846H17.6787C17.5947 17.39 17.4147 16.994 17.1387 16.658C16.8627 16.322 16.5087 16.064 16.0767 15.884C15.6447 15.692 15.1527 15.596 14.6007 15.596C14.0847 15.596 13.6167 15.686 13.1967 15.866C12.7887 16.046 12.4407 16.304 12.1527 16.64C11.8767 16.964 11.6607 17.36 11.5047 17.828C11.3607 18.296 11.2887 18.824 11.2887 19.412C11.2887 20 11.3607 20.528 11.5047 20.996C11.6607 21.464 11.8827 21.866 12.1707 22.202C12.4707 22.538 12.8307 22.796 13.2507 22.976C13.6707 23.144 14.1507 23.228 14.6907 23.228C15.5307 23.228 16.2387 23.024 16.8147 22.616C17.4027 22.208 17.7567 21.662 17.8767 20.978H21.2247C21.1167 21.962 20.7867 22.862 20.2347 23.678C19.6827 24.494 18.9387 25.148 18.0027 25.64C17.0667 26.12 15.9627 26.36 14.6907 26.36ZM25.4717 26V15.416H28.8197V26H25.4717ZM21.8717 15.776V12.86H32.4197V15.776H21.8717Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_i_7_5'
              x='0'
              y='0.5'
              width='40'
              height='44'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect1_innerShadow_7_5'
              />
            </filter>
            <filter
              id='filter1_d_7_5'
              x='3.90471'
              y='12.464'
              width='32.515'
              height='21.896'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_7_5'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_7_5'
                result='shape'
              />
            </filter>
            <linearGradient
              id='paint0_linear_7_5'
              x1='0'
              y1='0.5'
              x2='40'
              y2='40.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#00C7EE' />
              <stop offset='1' stopColor='#8900D8' />
            </linearGradient>
          </defs>
        </svg>
      </Link>

      <div className='flex gap-3'>
        <button
          onClick={handleClick}
          className='text-sm font-medium capitalize text-police-blue underline underline-offset-2'
        >
          subscribe
        </button>
        <ThemeMenu />
      </div>
    </nav>
  )
}

function ThemeMenu() {
  const { theme, changeTheme } = useTheme()

  function getThemeIcon(theme: string) {
    switch (theme) {
      case 'light':
        return <LightThemeIcon />
      case 'dark':
        return <DarkThemeIcon />
      default:
        return <SystemThemeIcon />
    }
  }

  return (
    <Listbox
      as='div'
      className='relative'
      value={theme}
      onChange={(e) => changeTheme(e)}
    >
      <Listbox.Button className='rounded-lg p-2 text-gray-600'>
        {getThemeIcon(theme)}
      </Listbox.Button>

      <Listbox.Options className='absolute left-1/2 z-10 mt-2 flex -translate-x-1/2 flex-col overflow-hidden rounded-md bg-white text-sm font-bold shadow-lg ring-1 ring-black ring-opacity-5'>
        <Listbox.Option
          value='light'
          className={({ selected, active }) =>
            `flex items-center gap-2 p-2 ${active && 'bg-slate-100'} ${
              selected ? 'text-indigo-600' : 'text-gray-600'
            }`
          }
        >
          <LightThemeIcon />
          <span>Light</span>
        </Listbox.Option>

        <Listbox.Option
          value='dark'
          className={({ selected, active }) =>
            `flex items-center gap-2 p-2 ${active && 'bg-slate-100'} ${
              selected ? 'text-indigo-600' : 'text-gray-600'
            }`
          }
        >
          <DarkThemeIcon />
          <span>Dark</span>
        </Listbox.Option>

        <Listbox.Option
          value='system'
          className={({ selected, active }) =>
            `flex items-center gap-2 p-2 ${active && 'bg-slate-100'} ${
              selected ? 'text-indigo-600' : 'text-gray-600'
            }`
          }
        >
          <SystemThemeIcon />
          <span>System</span>
        </Listbox.Option>
      </Listbox.Options>
    </Listbox>
  )
}

function SystemThemeIcon() {
  return <HiMiniComputerDesktop size='1.3em' />
}

function LightThemeIcon() {
  return <BsSun size='1.3em' />
}

function DarkThemeIcon() {
  return <BsMoonStars size='1.3em' />
}
