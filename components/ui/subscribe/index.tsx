'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { subscribeToMailList } from './actions'
import { useRef, useState } from 'react'

export default function Index() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [content, setContent] = useState<string | null>(null)

  function closeModal() {
    if (dialogRef.current) dialogRef.current.close()
  }

  async function action(formData: FormData) {
    const { success, message, error } = await subscribeToMailList(formData)

    if (success) {
      setContent(message)
      formRef.current?.reset()
    } else if (error) setContent(error)

    if (dialogRef.current) dialogRef.current.showModal()
  }

  return (
    <>
      <div className='relative'>
        <form
          action={action}
          ref={formRef}
          className='flex overflow-hidden rounded-lg border bg-white dark:border-indigo-700 dark:bg-transparent'
        >
          <input
            id='subscribe'
            type='email'
            name='email'
            placeholder='you@example.com'
            className='bg-transparent p-2 text-sm outline-none placeholder:text-sm'
            required
          />

          <SubscribeButton />
        </form>

        <div className='absolute left-1/2 top-1/2 -z-10 aspect-video w-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#00c7ee] to-[#8900d8] blur-2xl dark:blur-3xl' />
      </div>

      <dialog
        ref={dialogRef}
        className='rounded-xl bg-white/40 p-5 backdrop-blur-2xl backdrop:bg-black/50 dark:bg-black/40'
      >
        <div className='flex flex-col gap-6'>
          <p className='font-medium text-police-blue first-letter:capitalize dark:text-zinc-300'>
            {content}.
          </p>
          <button
            type='button'
            onClick={closeModal}
            className='self-end rounded px-2 py-1 font-semibold uppercase tracking-wide text-white outline-none hover:underline focus:underline dark:text-zinc-300'
          >
            close
          </button>
        </div>
      </dialog>
    </>
  )
}

function SubscribeButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className='bg-indigo-500 px-4 py-1 font-medium capitalize text-white disabled:opacity-50 dark:bg-indigo-700'
    >
      subscribe
    </button>
  )
}
