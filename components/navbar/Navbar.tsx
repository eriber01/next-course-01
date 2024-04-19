import Link from "next/link"

export const Navbar = () => {
  console.log('navbar');

  return (
    <div className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'}>
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      <Link className="mr-2" href="/about">About</Link>
      <Link className="mr-2" href="/pricing">Pricing</Link>
      <Link className="mr-2" href="/about">About</Link>
    </div>
  )
}