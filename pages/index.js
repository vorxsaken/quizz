import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <div className='container container--title container__block text-white text-medium'>
        <Link href="/quiz">to quiz</Link>
      </div>
    </div>
  )
}
