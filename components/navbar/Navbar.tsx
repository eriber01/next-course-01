import Link from "next/link"
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../index";
import { Nav } from "../interface";

const navItems: Nav[] = [
  { path: '/about', text: 'About', },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
  console.log('navbar');

  return (
    <div className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link
        className="flex items-center"
        href={'/'}>
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
        navItems.map((item, index) => (
          <ActiveLink key={index} item={item} />
        ))
      }

    </div>
  )
}
