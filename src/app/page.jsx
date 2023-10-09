import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Home</h1>
    <div>
      <h2>Pagina Inicial</h2>

      <div>
        <h2>Meus posts</h2>
        <ul>
          <li><Link href={"/posts"}>Post-1</Link></li>
          <li><Link href={"/posts/post2"}>Post-2</Link></li>
          <li><Link href={"/posts/post3"}>Post-3</Link></li>
          <li><Link href={"/posts/post4"}>Post-4</Link></li>
        </ul>
      </div>


    </div>
    </>
  )
}
