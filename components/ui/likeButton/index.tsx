'use client'

import { useParams, useRouter } from 'next/navigation'
import { FiHeart } from 'react-icons/fi'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { togglePostLike } from './actions'

type Props = {
  isPostLiked: boolean
}

export default function Index({ isPostLiked }: Props) {
  const params = useParams()
  const router = useRouter()

  async function action() {
    const { success, error } = await togglePostLike(params.slug)

    if (success) router.refresh()
    else alert(error)
  }

  return (
    <form action={action}>
      <Button isPostLiked={isPostLiked} />
    </form>
  )
}

function Button({ isPostLiked }: Props) {
  const { pending } = useFormStatus()

  const buttonVariants: Variants = {
    unliked: {
      scale: [1, 0.85, 1],
    },
    liked: {
      backgroundColor: '#e5376b',
      scale: [1, 0.85, 1],
    },
  }

  const heartVariants: Variants = {
    unliked: { rotate: 0, transition: { duration: 0.5 } },
    liked: { rotate: 360, transition: { duration: 0.5 } },
  }

  return (
    <motion.button
      variants={buttonVariants}
      initial={false}
      animate={isPostLiked ? 'liked' : 'unliked'}
      type='submit'
      disabled={pending}
      className={`flex w-max items-center gap-3 rounded-lg border-violet-200 bg-white px-3 py-2 dark:border-indigo-700 dark:bg-transparent ${
        isPostLiked ? '' : 'border'
      } `}
    >
      <motion.span variants={heartVariants} initial={false}>
        <FiHeart
          size='1.2em'
          className={`${
            isPostLiked
              ? 'fill-white stroke-transparent'
              : 'fill-violet-200 stroke-transparent dark:fill-indigo-600'
          }`}
        />
      </motion.span>

      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={isPostLiked ? 1 : 2}
          initial={{ opacity: 0, translateX: 8 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: 8 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className='w-11 text-sm font-medium capitalize'
        >
          {isPostLiked ? (
            <span className='text-white'>liked</span>
          ) : (
            <span className='text-police-blue dark:text-indigo-500'>like</span>
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}
