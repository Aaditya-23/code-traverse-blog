import { NextResponse } from 'next/server'

export async function Get() {
  //   await prisma.subscriber.findMany()

  //TODO: fetch users from code traverse

  return NextResponse.json({ message: 'unauthorized' }, { status: 400 })
}
