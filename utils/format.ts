import { BILLION, MILLION } from './constants'

type ViewsMetric = { views: number }
type LikesMetric = { likes: number }
type DateMetric = {
  publishedAt: Date
  updatedAt: Date
}

const numberFormatter = new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
})

const dateFormatter = new Intl.DateTimeFormat('en-IN', {
  dateStyle: 'medium',
})

export function formatThousand(number: number) {
  const result = number / 1000
  return numberFormatter.format(result)
}

export function formatMillion(number: number) {
  const result = number / MILLION
  return numberFormatter.format(result)
}

export function formatBillion(number: number) {
  const result = number / BILLION
  return numberFormatter.format(result)
}

export function formatPostMetric(metric: ViewsMetric): string
export function formatPostMetric(metric: LikesMetric): string
export function formatPostMetric(metric: DateMetric): string

export function formatPostMetric(metric: any) {
  if ('likes' in metric) return formatPostLikes(metric.likes)
  else if ('views' in metric) return formatPostViews(metric.views)
  else if ('publishedAt' in metric && 'updatedAt' in metric)
    return formatPostDate(metric.publishedAt, metric.updatedAt)

  return ''
}

function formatPostLikes(likes: number) {
  if (likes < 0) throw Error('invalid value for post likes')
  else if (likes === 0) return `${likes} likes`
  else if (likes === 1) return `${likes} like`
  else if (likes >= 2 && likes < 1000) return `${likes} likes`
  else if (likes >= 1000 && likes < MILLION)
    return `${formatThousand(likes)}K likes`
  else if (likes >= MILLION && likes < BILLION)
    return `${formatMillion(likes)}M likes`

  return `${formatBillion(likes)}B likes`
}

function formatPostViews(views: number) {
  if (views < 0) throw Error('invalid value for post views')
  else if (views === 0) return `${views} views`
  else if (views === 1) return `${views} view`
  else if (views >= 2 && views < 1000) return `${views} views`
  else if (views >= 1000 && views < MILLION)
    return `${formatThousand(views)}K views`
  else if (views >= MILLION && views < BILLION)
    return `${formatMillion(views)}M views`

  return `${formatBillion(views)}B views`
}

function formatPostDate(publishedAt: Date, updatedAt: Date) {
  const [publishedDate, publishedMonth, publishedYear] = dateFormatter
    .format(publishedAt)
    .split('-')

  const [updatedDate, updatedMonth, updatedYear] = dateFormatter
    .format(updatedAt)
    .split('-')

  const [_, __, currentYear] = dateFormatter.format(new Date()).split('-')

  if (publishedAt.valueOf() === updatedAt.valueOf()) {
    if (publishedYear === currentYear)
      return `${publishedDate}' ${publishedMonth}`

    return `${publishedMonth}' ${publishedYear}`
  } else {
    if (updatedYear === currentYear)
      return `updated on ${updatedDate}' ${updatedMonth}`

    return `updated on ${updatedMonth}' ${updatedYear}`
  }
}
