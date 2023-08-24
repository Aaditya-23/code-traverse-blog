'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function Index() {
  return (
    <form className='relative flex rounded-lg border bg-white'>
      <input
        type='text'
        placeholder='you@example.com'
        className='bg-transparent p-2 text-sm outline-none placeholder:text-sm'
      />

      <div className='absolute left-1/2 top-1/2 -z-10 aspect-video w-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#00c7ee] to-[#8900d8] blur-2xl' />

      <SubscribeButton />
    </form>
  )
}

function SubscribeButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className='rounded-r-[inherit] bg-indigo-500 px-4 py-1 font-medium capitalize text-white'
    >
      subscribe
    </button>
  )
}
