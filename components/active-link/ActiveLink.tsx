'use client'

import Link from "next/link"
import { Nav } from "../interface"
import { usePathname } from "next/navigation"
import style from './ActiveLink.module.css'


export const ActiveLink = ({ item: { path, text } }: { item: Nav }) => {
  const pathName = usePathname()

  return (
    <div>
      {
        <Link
          className={`${style.link} ${pathName === path && style['active-link']}`}
          href={path}
        >
          {text}
        </Link>
      }
    </div>
  )
}
