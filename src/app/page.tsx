import Like from '@/components/Like.tsx'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>hello div app</div>
      <Like />
    </main>
  )
}
